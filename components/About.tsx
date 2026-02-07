import { Heart, Stethoscope } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">{t('sectionTitle')}</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-sage-100 to-lavender-100 flex items-center justify-center border border-beige-200">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-sage-200 flex items-center justify-center">
                  <Stethoscope className="w-12 h-12 text-sage-600" />
                </div>
                <p className="text-brown-light text-sm">
                  {/* PLACEHOLDER: Replace with Ruth's professional photo */}
                  PLACEHOLDER: Professional photo
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-sage-800 mb-1">
                {t('name')}
              </h3>
              <p className="text-lavender-500 font-medium">
                {t('credentials')}
              </p>
            </div>

            <p className="text-brown-light leading-relaxed">
              {t('specialization')}
            </p>

            <p className="text-brown-light leading-relaxed">
              {t('approach')}
            </p>

            <p className="text-brown-light leading-relaxed">
              {t('targetAudience')}
            </p>

            <div className="flex items-start gap-3 bg-sage-50 rounded-xl p-4">
              <Heart className="w-5 h-5 text-rose mt-0.5 shrink-0" />
              <p className="text-sage-800 font-medium italic">
                {t('mission')}
              </p>
            </div>

            <p className="text-brown-light leading-relaxed">
              {t('integration')}
            </p>

            <p className="text-xl font-bold text-sage-600">
              {t('smallStep')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
