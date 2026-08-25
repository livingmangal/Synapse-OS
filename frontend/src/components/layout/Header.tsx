'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import NavigationMenu from './NavigationMenu';
import ContactModal from '../ui/ContactModal';
import LanguageSelector from '../ui/LanguageSelector';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled ? 'bg-[#ECE4DA]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl tracking-widest font-serif font-bold uppercase transition-opacity hover:opacity-75 text-black"
          >
            {t('brand_title', 'Normal is Boring')}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-xs font-semibold tracking-widest uppercase">
            <Link
              href="/orchestrator-agent"
              className="text-emerald-700 font-bold hover:text-emerald-900 transition-colors flex items-center gap-1"
            >
              <span>⚡</span> {t('nav_orchestrator', 'Orchestrator OS')}
            </Link>
            <Link
              href="/orchestrator-agent?tab=hospital"
              className="text-pink-600 font-bold hover:text-pink-800 transition-colors flex items-center gap-1"
            >
              <span>🗺️</span> Outbreak Map
            </Link>
            <Link
              href="/projects"
              className="text-black/80 hover:text-black transition-colors"
            >
              {t('nav_projects', 'Projects')}
            </Link>
            <Link
              href="/about-us"
              className="text-black/80 hover:text-black transition-colors"
            >
              {t('nav_about', 'About Us')}
            </Link>
            <button
              onClick={() => setIsContactOpen(true)}
              className="text-black/80 hover:text-black transition-colors cursor-pointer"
            >
              {t('nav_contact', 'Contact')}
            </button>
            <Link
              href="/orchestrator-agent"
              className="px-4 py-2 border border-black/30 rounded-full text-[11px] hover:bg-black hover:text-white transition-all"
            >
              {t('nav_available_homes', 'Launch Workspace')}
            </Link>
          </nav>

          {/* Controls: Language Selector + Menu Trigger */}
          <div className="flex items-center space-x-3">
            <LanguageSelector variant="header" />
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase px-4 py-2 bg-black text-white rounded-full hover:bg-black/80 transition-all cursor-pointer"
              aria-label="Open Navigation Menu"
            >
              <span>Menu</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="8" x2="20" y2="8"></line>
                <line x1="4" y1="16" x2="20" y2="16"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <NavigationMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenContact={() => {
          setIsMenuOpen(false);
          setIsContactOpen(true);
        }}
      />

      {/* Slide-out Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
