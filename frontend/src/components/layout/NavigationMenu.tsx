'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projectNavItems, legalNavItems } from '@/data/navigation';
import { siteConfig } from '@/data/siteConfig';

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export default function NavigationMenu({
  isOpen,
  onClose,
  onOpenContact,
}: NavigationMenuProps) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#121212] text-[#ECE4DA] flex flex-col justify-between p-6 md:p-12 overflow-y-auto animate-fadeIn">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-[#ECE4DA]/15 pb-6">
        <Link
          href="/"
          onClick={onClose}
          className="text-lg md:text-xl font-serif uppercase tracking-widest text-[#ECE4DA]"
        >
          Normal is Boring
        </Link>
        <button
          onClick={onClose}
          className="flex items-center space-x-2 text-xs uppercase tracking-widest px-4 py-2 border border-[#ECE4DA]/30 rounded-full hover:bg-[#ECE4DA] hover:text-black transition-all cursor-pointer"
          aria-label="Close Menu"
        >
          <span>Close</span>
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
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Main Navigation Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto py-12">
        {/* Left Column: Primary Navigation */}
        <div className="lg:col-span-7 flex flex-col space-y-4 md:space-y-6">
          <Link
            href="/"
            onClick={onClose}
            className="text-3xl md:text-5xl lg:text-6xl font-serif hover:text-white/70 transition-colors uppercase"
          >
            01. Home
          </Link>
          <Link
            href="/orchestrator-agent?tab=hospital"
            onClick={onClose}
            className="text-3xl md:text-5xl lg:text-6xl font-serif text-pink-400 hover:text-pink-300 transition-colors uppercase flex items-center gap-3"
          >
            <span>02. Outbreak Map</span>
            <span className="text-xs bg-pink-500 text-white font-sans px-3 py-1 rounded-full font-bold">
              Live GIS
            </span>
          </Link>
          <div className="flex flex-col space-y-2">
            <Link
              href="/orchestrator-agent"
              onClick={onClose}
              className="text-3xl md:text-5xl lg:text-6xl font-serif hover:text-white/70 transition-colors uppercase"
            >
              03. Orchestrator OS
            </Link>
            {/* Sub-projects list */}
            <div className="pl-6 md:pl-12 flex flex-col space-y-2 pt-2 border-l border-[#ECE4DA]/20">
              {projectNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  onMouseEnter={() => setHoveredProject(item.label)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="flex items-center justify-between text-base md:text-xl font-light text-[#ECE4DA]/80 hover:text-white transition-colors"
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-[#ECE4DA]/30">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/about-us"
            onClick={onClose}
            className="text-3xl md:text-5xl lg:text-6xl font-serif hover:text-white/70 transition-colors uppercase"
          >
            03. About Us
          </Link>
          <button
            onClick={onOpenContact}
            className="text-left text-3xl md:text-5xl lg:text-6xl font-serif hover:text-white/70 transition-colors uppercase cursor-pointer"
          >
            04. Contact
          </button>
        </div>

        {/* Right Column: Contact info & Branding */}
        <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#ECE4DA]/15 pt-8 lg:pt-0 lg:pl-12">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-widest text-[#ECE4DA]/60">
              Inquiries & Viewings
            </p>
            <div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-lg md:text-xl font-mono hover:underline block text-[#ECE4DA]"
              >
                {siteConfig.email}
              </a>
              <p className="text-sm text-[#ECE4DA]/70 mt-2">
                {siteConfig.address.street}, {siteConfig.address.city}
                <br />
                {siteConfig.address.province}, {siteConfig.address.country}
              </p>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-xs uppercase tracking-widest text-[#ECE4DA]/60 mb-3">
              Follow Us
            </p>
            <div className="flex space-x-4">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-white uppercase tracking-wider border border-[#ECE4DA]/30 px-3 py-1 rounded-full"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Legal */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#ECE4DA]/15 pt-6 text-xs text-[#ECE4DA]/60">
        <p>© {new Date().getFullYear()} Normal is Boring. All rights reserved.</p>
        <div className="flex space-x-6">
          {legalNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="hover:text-[#ECE4DA] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
