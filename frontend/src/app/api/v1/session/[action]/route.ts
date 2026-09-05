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

    // 1. GET ALL SESSIONS
    if (action === 'all') {
      const sessions = AuthStore.getUserSessions(session.userId, session.id);
      return NextResponse.json({
        message: 'Active sessions retrieved successfully',
        sessions,
      });
    }

    // 2. GET CURRENT SESSION
    if (action === 'current') {
      const user = AuthStore.findUserById(session.userId);
      return NextResponse.json({
        message: 'Current session retrieved successfully',
        session,
        user: user ? AuthStore.sanitizeUser(user) : null,
      });
    }

    return NextResponse.json({ error: `Unknown GET action: ${action}` }, { status: 404 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ action: string }> }
) {
  const { action } = await context.params;

  try {
    const session = getSessionFromRequest(req);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized: Session required' }, { status: 401 });
    }

    // 1. REVOKE ALL OTHER SESSIONS
    if (action === 'all-others' || action === 'other') {
      const revokedCount = AuthStore.deleteAllOtherSessions(session.userId, session.id);
      return NextResponse.json({
        message: `Successfully terminated ${revokedCount} other session(s)`,
        revokedCount,
      });
    }

    // 2. REVOKE SPECIFIC SESSION BY ID
    // `action` is the target session ID
    const targetSessionId = action;
    const deleted = AuthStore.deleteSession(targetSessionId, session.userId);

    if (!deleted) {
      return NextResponse.json({ error: 'Session not found or already expired' }, { status: 404 });
    }

    // If user terminated their OWN current session
    if (targetSessionId === session.id) {
      const res = NextResponse.json({ message: 'Current session terminated', loggedOut: true });
      res.cookies.set('sanjeevni_session_id', '', { httpOnly: true, path: '/', maxAge: 0 });
      return res;
    }

    return NextResponse.json({
      message: 'Device session revoked successfully',
      sessionId: targetSessionId,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 });
  }
}
