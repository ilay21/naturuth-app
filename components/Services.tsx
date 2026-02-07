import {
  Beaker,
  ClipboardCheck,
  Ear,
  Flower2,
  Footprints,
  HeartHandshake,
  Leaf,
  Salad,
  Stethoscope,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

const SERVICE_ICONS = {
  diagnosis: Stethoscope,
  nutrition: Salad,
  supplements: Beaker,
  herbs: Leaf,
  aromatherapy: Flower2,
  bach: Flower2,
  hopi: Ear,
  reflexology: Footprints,
  followup: HeartHandshake,
} as const;

const SERVICE_COLORS = [
  'bg-sage-100 text-sage-600',
  'bg-lavender-100 text-lavender-600',
  'bg-beige-100 text-beige-600',
  'bg-rose-light text-rose-dark',
  'bg-sage-100 text-sage-600',
  'bg-lavender-100 text-lavender-600',
  'bg-beige-100 text-beige-600',
  'bg-rose-light text-rose-dark',
  'bg-sage-100 text-sage-600',
] as const;

const SERVICE_KEYS = Object.keys(SERVICE_ICONS) as (keyof typeof SERVICE_ICONS)[];

export default function Services() {
  const t = useTranslations('services');

  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-b from-lavender-50 to-cream"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-2">
          <ClipboardCheck className="w-6 h-6 text-sage-500" />
          <h2 className="section-title mb-0">{t('sectionTitle')}</h2>
        </div>
        <div className="mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_KEYS.map((key, index) => {
            const Icon = SERVICE_ICONS[key];
            return (
              <div key={key} className="card group">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${SERVICE_COLORS[index]}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sage-800 mb-1">
                      {t(`items.${key}.title`)}
                    </h3>
                    <p className="text-sm text-brown-light leading-relaxed">
                      {t(`items.${key}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
