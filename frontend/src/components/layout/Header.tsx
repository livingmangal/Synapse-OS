'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import NavigationMenu from './NavigationMenu';
import ContactModal from '../ui/ContactModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
            Normal is Boring
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-widest uppercase">
            <Link
              href="/projects"
              className="text-black/80 hover:text-black transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/about-us"
              className="text-black/80 hover:text-black transition-colors"
            >
              About Us
            </Link>
            <button
              onClick={() => setIsContactOpen(true)}
              className="text-black/80 hover:text-black transition-colors cursor-pointer"
            >
              Contact
            </button>
            <Link
              href="/projects"
              className="px-4 py-2 border border-black/30 rounded-full text-[11px] hover:bg-black hover:text-white transition-all"
            >
              Available Homes
            </Link>
          </nav>

          {/* Menu Trigger Button */}
          <div className="flex items-center space-x-4">
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
