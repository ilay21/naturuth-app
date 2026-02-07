import { createIntlMiddleware } from 'next-intl';

const i18nMiddleware = createIntlMiddleware({
  locales: ['en', 'fr', 'es'], // add your supported locales
  defaultLocale: 'en',
  // additional configuration options
});

export default i18nMiddleware;