import { AlertCircle, Flower2, Info, ShieldAlert, ShoppingBag } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Aromatherapy() {
  const t = useTranslations('aromatherapy');

  const warnings = [
    { key: 'warning1', icon: AlertCircle },
    { key: 'warning2', icon: ShieldAlert },
    { key: 'warning3', icon: Info },
  ] as const;

  return (
    <section id="aromatherapy" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">{t('sectionTitle')}</h2>

        {/* Intro content */}
        <div className="max-w-3xl mx-auto space-y-6 mb-16">
          <p className="text-lg text-brown-light leading-relaxed text-center">
            {t('intro')}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <Flower2 className="w-8 h-8 text-lavender-500 mb-3" />
              <p className="text-brown-light leading-relaxed">
                {t('benefits')}
              </p>
            </div>
            <div className="card">
              <Flower2 className="w-8 h-8 text-sage-500 mb-3" />
              <p className="text-brown-light leading-relaxed">
                {t('synergy')}
              </p>
            </div>
          </div>

          <p className="text-brown-light leading-relaxed">{t('results')}</p>
          <p className="text-brown-light leading-relaxed text-sm">
            {t('babies')}
          </p>

          <div className="bg-sage-50 rounded-2xl p-6 text-center">
            <p className="text-sage-800 font-bold text-lg">
              {t('consultationRequired')}
            </p>
          </div>
        </div>

        {/* Warnings */}
        <h3 className="text-2xl font-bold text-sage-800 mb-6 text-center">
          {t('warningsTitle')}
        </h3>

        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          {warnings.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="flex items-start gap-4 bg-beige-50 rounded-xl p-5"
            >
              <Icon className="w-5 h-5 text-beige-600 shrink-0 mt-0.5" />
              <p className="text-brown-light text-sm leading-relaxed">
                {t(key)}
              </p>
            </div>
          ))}

          <div className="flex items-start gap-4 bg-lavender-50 rounded-xl p-5">
            <ShoppingBag className="w-5 h-5 text-lavender-500 shrink-0 mt-0.5" />
            <p className="text-brown-light text-sm leading-relaxed">
              {t('purchaseWarning')}
            </p>
          </div>
        </div>

        {/* Summary & Disclaimers */}
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-brown-light leading-relaxed font-medium">
            {t('summary')}
          </p>

          <p className="text-brown-light leading-relaxed text-sm italic">
            {t('aiDisclaimer')}
          </p>

          <div className="bg-rose-light/30 rounded-2xl p-5 text-center">
            <p className="text-brown font-medium">{t('medicalDisclaimer')}</p>
          </div>

          <p className="text-center text-sage-600 font-medium">
            {t('closing')}
          </p>
        </div>
      </div>
    </section>
  );
}
