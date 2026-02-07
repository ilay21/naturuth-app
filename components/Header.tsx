'use client';

import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import LanguageSwitcher from './LanguageSwitcher';

const NAV_ITEMS = [
  { key: 'about', href: '#about' },
  { key: 'sleep', href: '#sleep' },
  { key: 'aromatherapy', href: '#aromatherapy' },
  { key: 'services', href: '#services' },
  { key: 'workshops', href: '#workshops' },
  { key: 'contact', href: '#contact' },
] as const;

export default function Header() {
  const t = useTranslations('nav');
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold text-sage-800 hover:text-sage-600 transition-colors"
        >
          NatuRuth
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="text-sm font-medium text-brown-light hover:text-sage-600 transition-colors"
            >
              {t(key)}
            </a>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-brown hover:text-sage-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-beige-100">
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV_ITEMS.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                onClick={handleNavClick}
                className="text-sm font-medium text-brown-light hover:text-sage-600 transition-colors py-2"
              >
                {t(key)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
