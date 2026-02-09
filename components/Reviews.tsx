'use client';

import { Star } from 'lucide-react';
import { useTranslations } from 'next-intl';

const GOOGLE_REVIEWS_URL = 'https://share.google/RzBWDU3iWErKKk74J';

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

export default function Reviews() {
  const t = useTranslations('reviews');
  const items = t.raw('items') as Array<{
    name: string;
    text: string;
    rating: number;
    timeAgo: string;
  }>;

  return (
    <section id="reviews" className="section-padding bg-gradient-to-b from-white to-beige-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">{t('sectionTitle')}</h2>

        {/* Google badge */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <GoogleLogo className="w-5 h-5" />
          <span className="text-sm text-brown-light">{t('rating')}</span>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline"
          >
            {t('viewAll')}
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((review, index) => (
            <a
              key={index}
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex flex-col gap-3 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-sage-200 flex items-center justify-center text-sage-700 font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-brown text-sm">{review.name}</p>
                    <p className="text-xs text-brown-light/70">{review.timeAgo}</p>
                  </div>
                </div>
                <GoogleLogo className="w-5 h-5 shrink-0" />
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: review.rating }, (_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-brown-light text-sm leading-relaxed">
                {review.text}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
