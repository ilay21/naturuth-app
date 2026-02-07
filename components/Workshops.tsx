import { Calendar, Clock, Sparkles, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';

const TOPIC_KEYS = [
  'winter',
  'sleep',
  'meditation',
  'aromatherapy',
  'fatigue',
] as const;

export default function Workshops() {
  const t = useTranslations('workshops');

  return (
    <section id="workshops" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">{t('sectionTitle')}</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Topics */}
          <div>
            <p className="text-brown-light leading-relaxed mb-6">
              {t('intro')}
            </p>

            <div className="space-y-3">
              {TOPIC_KEYS.map((key) => (
                <div
                  key={key}
                  className="flex items-center gap-3 bg-sage-50 rounded-xl p-4"
                >
                  <Sparkles className="w-5 h-5 text-sage-500 shrink-0" />
                  <span className="text-brown-light">{t(`topics.${key}`)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Booking info */}
          <div className="card bg-gradient-to-br from-lavender-50 to-sage-50 border-0">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-lavender-500 shrink-0 mt-0.5" />
                <p className="text-brown-light leading-relaxed">
                  {t('booking')}
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-sage-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-brown font-medium mb-1">{t('formats')}</p>
                  <p className="text-brown-light text-sm leading-relaxed">
                    {t('formatDetails')}
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className="btn-primary w-full justify-center"
              >
                <Calendar className="w-4 h-4" />
                {t('booking')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
