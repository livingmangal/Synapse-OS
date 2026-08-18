'use client';

import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';
import { projectNavItems, legalNavItems } from '@/data/navigation';

export default function Footer({ onOpenContact }: { onOpenContact?: () => void }) {
  return (
    <footer className="bg-[#121212] text-[#ECE4DA] pt-20 pb-12 px-6 md:px-12 border-t border-black">
      <div className="max-w-7xl mx-auto">
        {/* Top Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#ECE4DA]/15">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-widest text-[#ECE4DA]/60 block mb-4">
              Connect With Us
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight">
              Ready to find your sanctuary that defies the ordinary?
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end items-start lg:items-end">
            {onOpenContact ? (
              <button
                onClick={onOpenContact}
                className="px-8 py-4 bg-[#ECE4DA] text-black text-sm uppercase tracking-widest font-semibold rounded-full hover:bg-white transition-all cursor-pointer"
              >
                Contact Our Team
              </button>
            ) : (
              <Link
                href="/projects"
                className="px-8 py-4 bg-[#ECE4DA] text-black text-sm uppercase tracking-widest font-semibold rounded-full hover:bg-white transition-all"
              >
                Explore Projects
              </Link>
            )}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-[#ECE4DA]/15">
          {/* Col 1: Brand info */}
          <div>
            <h3 className="text-xl font-serif uppercase tracking-wider mb-4">
              Normal is Boring
            </h3>
            <p className="text-sm text-[#ECE4DA]/70 leading-relaxed">
              Crafting architectural living spaces that elevate well-being, celebrate noble materials, and connect with the natural environment.
            </p>
          </div>

          {/* Col 2: Developments */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#ECE4DA]/60 mb-4">
              Developments
            </h4>
            <ul className="space-y-2 text-sm">
              {projectNavItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#ECE4DA]/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#ECE4DA]/60 mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about-us" className="text-[#ECE4DA]/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-[#ECE4DA]/80 hover:text-white transition-colors">
                  Projects Catalog
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[#ECE4DA]/80 hover:text-white transition-colors"
                >
                  Direct Inquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#ECE4DA]/60 mb-4">
              Headquarters
            </h4>
            <p className="text-sm text-[#ECE4DA]/80 leading-relaxed mb-4">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.city}, {siteConfig.address.province}
              <br />
              {siteConfig.address.country}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm font-mono text-[#ECE4DA] hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        {/* Large Typography Brand Display */}
        <div className="py-12 text-center overflow-hidden">
          <span className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-serif uppercase tracking-tight text-[#ECE4DA]/10 select-none whitespace-nowrap block">
            Normal is Boring
          </span>
        </div>

        {/* Bottom copyright & legal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#ECE4DA]/60">
          <p>© {new Date().getFullYear()} Normal is Boring. All rights reserved.</p>
          <div className="flex space-x-6">
            {legalNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-[#ECE4DA] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
