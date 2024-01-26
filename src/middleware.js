import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ua', 'fr', 'bg', 'ru'],
 
  // Used when no locale matches
  defaultLocale: 'en',
  fontDisplay: 'auto'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ua|en|fr|bg|ru)/:path*']
};