import { AlertTriangle, Brain, Moon, Sparkles, Sun, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function SleepScience() {
  const t = useTranslations('sleep');

  const stages = [
    { key: 'lightSleep', icon: Moon, color: 'lavender' },
    { key: 'deepSleep', icon: Sparkles, color: 'sage' },
    { key: 'remSleep', icon: Brain, color: 'rose' },
  ] as const;

  const processes = [
    { key: 'detox', icon: Zap },
    { key: 'hormones', icon: Sun },
  ] as const;

  return (
    <section id="sleep" className="section-padding bg-gradient-to-b from-cream to-lavender-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">{t('sectionTitle')}</h2>

        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <p className="text-lg text-brown-light leading-relaxed">
            {t('intro')}
          </p>
          <p className="text-brown-light leading-relaxed">
            {t('lackOfSleep')}
          </p>
          <p className="text-brown-light leading-relaxed">{t('renewal')}</p>
        </div>

        {/* Sleep Stages */}
        <h3 className="text-2xl font-bold text-sage-800 mb-3 text-center">
          {t('cyclesTitle')}
        </h3>
        <p className="text-brown-light text-center mb-8">{t('cyclesIntro')}</p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stages.map(({ key, icon: Icon, color }) => (
            <div key={key} className="card text-center">
              <div
                className={`w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                  color === 'lavender'
                    ? 'bg-lavender-100'
                    : color === 'sage'
                      ? 'bg-sage-100'
                      : 'bg-rose-light'
                }`}
              >
                <Icon
                  className={`w-7 h-7 ${
                    color === 'lavender'
                      ? 'text-lavender-600'
                      : color === 'sage'
                        ? 'text-sage-600'
                        : 'text-rose-dark'
                  }`}
                />
              </div>
              <h4 className="text-lg font-bold text-sage-800 mb-3">
                {t(`${key}.title`)}
              </h4>
              <p className="text-brown-light text-sm leading-relaxed">
                {t(`${key}.description`)}
              </p>
            </div>
          ))}
        </div>

        {/* Physiological Processes */}
        <h3 className="text-2xl font-bold text-sage-800 mb-8 text-center">
          {t('processesTitle')}
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {processes.map(({ key, icon: Icon }) => (
            <div key={key} className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-sage-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-sage-800 mb-2">
                    {t(`${key}.title`)}
                  </h4>
                  <p className="text-brown-light text-sm leading-relaxed">
                    {t(`${key}.description`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Melatonin & Warning */}
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-brown-light leading-relaxed text-center">
            {t('melatonin')}
          </p>

          <div className="bg-beige-100 rounded-2xl p-6 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-beige-600 shrink-0 mt-0.5" />
            <p className="text-brown font-medium leading-relaxed">
              {t('screenWarning')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
