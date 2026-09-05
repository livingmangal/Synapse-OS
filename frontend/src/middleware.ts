import { NextRequest, NextResponse } from 'next/server';

const protectedPrefixes = [
  '/orchestrator-agent',
  '/vibrant',
  '/security',
  '/sessions',
  '/projects',
];

// Routes that should never be blocked regardless of session state
const publicRoutes = [
  '/login',
  '/signup',
  '/confirm-account',
  '/forgot-password',
  '/reset-password',
  '/verify-mfa',
];

export default async function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // Check if target is a protected clinical route
  const isProtected = protectedPrefixes.some((prefix) =>
    pathname === prefix || pathname.startsWith(prefix + '/')
  );

  const isPublicRoute = publicRoutes.some((route) =>
    pathname === route || pathname.startsWith(route + '/')
  );

  const sessionId = req.cookies.get('sanjeevni_session_id')?.value;

  // Unauthenticated user trying to access protected healthcare workspace
  if (isProtected && !sessionId) {
    const targetUrl = pathname + search;
    const loginUrl = new URL('/login', req.nextUrl.origin);
    loginUrl.searchParams.set('redirect', targetUrl);
    return NextResponse.redirect(loginUrl);
  }

  // Allow all public/auth routes through regardless of session state
  // (Users need to be able to verify email even if they have a session cookie)
  if (isPublicRoute) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files (.svg, .png, .jpg, .css, .js, .woff, .woff2)
     * - api routes (/api/*)
     */
    '/((?!_next/static|_next/image|favicon.ico|api|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js|woff|woff2)$).*)',
  ],
};
