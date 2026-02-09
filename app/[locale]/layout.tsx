import { Heebo } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Script from 'next/script';

import { routing } from '@/i18n/routing';

import './globals.css';

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-heebo',
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'he' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'he' ? 'rtl' : 'ltr'}>
      <body className={`${heebo.variable} font-heebo antialiased`}>
        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="lazyOnload"
        />
        <Script id="netlify-identity-redirect" strategy="lazyOnload">
          {`
            if (window.netlifyIdentity) {
              window.netlifyIdentity.on("init", function(user) {
                if (!user) {
                  window.netlifyIdentity.on("login", function() {
                    document.location.href = "/admin/";
                  });
                }
              });
            }
          `}
        </Script>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
