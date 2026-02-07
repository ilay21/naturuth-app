import { NextResponse } from 'next/server';
import { Locale, NextIntlMiddleware } from 'next-intl';

const supportedLocales: Locale[] = ['en', 'es', 'fr']; // Add supported locales here

// Middleware function to handle language routing
export function middleware(request: Request) {
    return NextIntlMiddleware(request, { supportedLocales });
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};