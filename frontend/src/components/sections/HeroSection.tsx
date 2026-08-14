'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 bg-[#ECE4DA] text-black">
      {/* Top Tagline */}
      <div className="max-w-7xl mx-auto w-full flex justify-between items-start">
        <span className="text-xs uppercase tracking-[0.25em] font-medium text-black/60">
          Galicia · Spain
        </span>
        <span className="text-xs uppercase tracking-[0.25em] font-medium text-black/60 hidden md:block">
          Living Spaces That Defy The Ordinary
        </span>
      </div>

      {/* Center Main Headline */}
      <div className="max-w-7xl mx-auto w-full my-auto py-12">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif font-light leading-[0.95] tracking-tight uppercase">
          Living Spaces
          <br />
          <span className="italic font-light font-serif">That Defy</span>
          <br />
          The Ordinary.
        </h1>
      </div>

      {/* Bottom Information Row */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-t border-black/15 pt-8">
        <div className="md:col-span-6">
          <p className="text-sm md:text-base text-black/80 font-light max-w-lg leading-relaxed">
            At Normal is Boring we build homes that stand out for their quality and design, with contemporary, pristine volumes open to the outdoors. Spaces that improve the quality of life of their residents, offering more comfort, more sustainability, more beauty, and more emotion.
          </p>
        </div>
        <div className="md:col-span-6 flex justify-start md:justify-end items-center space-x-6">
          <Link
            href="/projects"
            className="px-8 py-4 bg-black text-white text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-black/80 transition-all flex items-center space-x-3 group"
          >
            <span>Explore Projects</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform group-hover:translate-x-1 transition-transform"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
