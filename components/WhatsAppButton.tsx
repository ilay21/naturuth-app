'use client';

import { MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function WhatsAppButton() {
  const t = useTranslations('contact');

  /* PLACEHOLDER: Replace with Ruth's actual WhatsApp number (international format, no +) */
  const WHATSAPP_NUMBER = '972XXXXXXXXX';

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('whatsapp')}
      className="fixed bottom-6 end-6 z-40 w-14 h-14 bg-green-500 rounded-full
        flex items-center justify-center shadow-lg
        hover:bg-green-600 hover:shadow-xl hover:scale-110
        transition-all duration-300"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}
