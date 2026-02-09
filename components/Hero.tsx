import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/videos/hero-bg-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg.webm" type="video/webm" />
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
          {t('title')}
        </h1>
        <p className="text-xl md:text-2xl text-beige-200 font-medium mb-6 drop-shadow-md">
          {t('subtitle')}
        </p>
        <p className="text-lg md:text-xl text-white/90 mb-10 drop-shadow-md">
          {t('tagline')}
        </p>
        <a href="#contact" className="btn-primary text-lg">
          {t('cta')}
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/60 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
