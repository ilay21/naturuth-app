import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-sage-900 text-sage-200 py-10 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <p className="text-lg font-bold text-white">NatuRuth</p>

        <p className="text-sm text-sage-300 max-w-2xl mx-auto">
          {t('disclaimer')}
        </p>

        <div className="border-t border-sage-800 pt-4">
          <p className="text-sm text-sage-400">
            &copy; {year} NatuRuth. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
