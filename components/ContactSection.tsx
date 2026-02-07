'use client';

import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { FormEvent, useState } from 'react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function ContactSection() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send');

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  /* PLACEHOLDER: Replace with Ruth's actual WhatsApp number (international format, no +) */
  const WHATSAPP_NUMBER = '972XXXXXXXXX';

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-cream to-sage-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">{t('sectionTitle')}</h2>
        <p className="text-center text-brown-light mb-12">{t('subtitle')}</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="card space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-brown mb-1.5"
              >
                {t('form.name')}
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl border border-beige-200 bg-white
                  text-brown placeholder-brown-light/50
                  focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-sage-300
                  transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-brown mb-1.5"
              >
                {t('form.email')}
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl border border-beige-200 bg-white
                  text-brown placeholder-brown-light/50
                  focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-sage-300
                  transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-brown mb-1.5"
              >
                {t('form.phone')}
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, phone: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl border border-beige-200 bg-white
                  text-brown placeholder-brown-light/50
                  focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-sage-300
                  transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-brown mb-1.5"
              >
                {t('form.message')}
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl border border-beige-200 bg-white
                  text-brown placeholder-brown-light/50
                  focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-sage-300
                  transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary w-full justify-center disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {status === 'sending' ? t('form.sending') : t('form.submit')}
            </button>

            {status === 'success' && (
              <p className="text-sage-600 text-sm text-center font-medium">
                {t('form.success')}
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-sm text-center font-medium">
                {t('form.error')}
              </p>
            )}
          </form>

          {/* Contact info + WhatsApp */}
          <div className="space-y-6">
            <div className="card space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-sage-600" />
                </div>
                <div>
                  <p className="text-sm text-brown-light">{t('form.phone')}</p>
                  <p className="font-medium text-brown">{t('phone')}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-lavender-100 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-lavender-500" />
                </div>
                <div>
                  <p className="text-sm text-brown-light">{t('form.email')}</p>
                  <p className="font-medium text-brown">{t('email')}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-beige-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-beige-600" />
                </div>
                <div>
                  <p className="text-sm text-brown-light">Location</p>
                  <p className="font-medium text-brown">{t('location')}</p>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              {t('whatsapp')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
