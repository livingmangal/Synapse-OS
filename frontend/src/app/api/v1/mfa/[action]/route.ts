import { NextRequest, NextResponse } from 'next/server';
import { AuthStore } from '@/lib/auth-store';

function getSessionFromRequest(req: NextRequest) {
  const sessionId = req.cookies.get('sanjeevni_session_id')?.value ||
    req.headers.get('authorization')?.replace('Bearer ', '');
  if (!sessionId) return null;
  return AuthStore.findSessionById(sessionId);
}

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ action: string }> }
) {
  const { action } = await context.params;

  try {
    const session = getSessionFromRequest(req);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized: Session required' }, { status: 401 });
    }

    const user = AuthStore.findUserById(session.userId);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // 1. GENERATE MFA SETUP (QR code & secret)
    if (action === 'setup') {
      const { secret, qrImageUrl } = await AuthStore.generateMFASetup(user);
      return NextResponse.json({
        message: 'Scan the QR code or enter the setup key into your authenticator app.',
        secret,
        qrImageUrl,
      });
    }

    return NextResponse.json({ error: `Unknown GET action: ${action}` }, { status: 404 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 });
  }
}

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ action: string }> }
) {
  const { action } = await context.params;

  try {
    const userAgent = req.headers.get('user-agent') || '';
    const forwardedFor = req.headers.get('x-forwarded-for');
    const ipAddress = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';

    // 1. VERIFY MFA SETUP AND ACTIVATE 2FA
    if (action === 'verify') {
      const session = getSessionFromRequest(req);
      if (!session) {
        return NextResponse.json({ error: 'Unauthorized: Session required' }, { status: 401 });
      }

      const user = AuthStore.findUserById(session.userId);
      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      const body = await req.json();
      const { code, secretKey } = body;

      const secretToTest = secretKey || user.userPreferences.twoFactorSecret;
      if (!secretToTest) {
        return NextResponse.json({ error: 'No 2FA secret key available' }, { status: 400 });
      }

      const isValid = AuthStore.verifyTOTP(secretToTest, code);
      if (!isValid) {
        return NextResponse.json({ error: 'Invalid 6-digit verification code. Please check your authenticator app.' }, { status: 400 });
      }

      const updatedUser = AuthStore.updateUserPreferences(user.id, {
        enable2FA: true,
        twoFactorSecret: secretToTest,
      });

      return NextResponse.json({
        message: 'Two-factor authentication successfully enabled and secured!',
        userPreferences: updatedUser.userPreferences,
      });
    }

    // 2. VERIFY MFA DURING LOGIN (/verify-login)
    if (action === 'verify-login') {
      const body = await req.json();
      const { email, code } = body;

      if (!email || !code) {
        return NextResponse.json({ error: 'Email and 6-digit code are required' }, { status: 400 });
      }

      const user = AuthStore.findUserByEmail(email);
      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      const secretKey = user.userPreferences.twoFactorSecret;
      if (!secretKey) {
        return NextResponse.json({ error: '2FA is not properly configured for this account' }, { status: 400 });
      }

      const isValid = AuthStore.verifyTOTP(secretKey, code);
      if (!isValid) {
        return NextResponse.json({ error: 'Invalid 6-digit authentication code' }, { status: 400 });
      }

      // Establish new authenticated session
      const session = AuthStore.createSession(user.id, userAgent, ipAddress);

      const res = NextResponse.json({
        message: 'MFA verified and logged in successfully',
        user: AuthStore.sanitizeUser(user),
        sessionId: session.id,
      });

      res.cookies.set('sanjeevni_session_id', session.id, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 30 * 24 * 60 * 60,
      });

      return res;
    }

    return NextResponse.json({ error: `Unknown POST action: ${action}` }, { status: 404 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ action: string }> }
) {
  const { action } = await context.params;

  try {
    const session = getSessionFromRequest(req);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized: Session required' }, { status: 401 });
    }

    const user = AuthStore.findUserById(session.userId);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // REVOKE MFA
    if (action === 'revoke') {
      const updatedUser = AuthStore.updateUserPreferences(user.id, {
        enable2FA: false,
        twoFactorSecret: undefined,
      });

      return NextResponse.json({
        message: 'Two-factor authentication disabled',
        userPreferences: updatedUser.userPreferences,
      });
    }

    return NextResponse.json({ error: `Unknown PUT action: ${action}` }, { status: 404 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 });
  }
}
