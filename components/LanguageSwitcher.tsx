'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher({ isScrolled = true }: { isScrolled?: boolean }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = () => {
    const nextLocale = locale === 'he' ? 'en' : 'he';
    const segments = pathname.split('/');
    segments[1] = nextLocale;
    router.push(segments.join('/'));
  };

  return (
    <button
      onClick={switchLocale}
      className={`px-3 py-1.5 text-sm font-medium rounded-lg border transition-colors duration-200 ${
        isScrolled
          ? 'border-sage-300 text-sage-700 hover:bg-sage-50'
          : 'border-white/50 text-white hover:bg-white/10'
      }`}
      aria-label={locale === 'he' ? 'Switch to English' : 'עברית'}
    >
      {locale === 'he' ? 'EN' : 'עב'}
    </button>
  );
}
