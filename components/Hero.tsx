import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-100 via-beige-50 to-lavender-50" />

      {/* Decorative circles */}
      <div className="absolute top-20 start-10 w-64 h-64 bg-sage-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 end-10 w-80 h-80 bg-lavender-200/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 start-1/2 w-96 h-96 bg-beige-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-sage-800 mb-4 leading-tight">
          {t('title')}
        </h1>
        <p className="text-xl md:text-2xl text-lavender-600 font-medium mb-6">
          {t('subtitle')}
        </p>
        <p className="text-lg md:text-xl text-brown-light mb-10">
          {t('tagline')}
        </p>
        <a href="#contact" className="btn-primary text-lg">
          {t('cta')}
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-sage-400 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-sage-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
