'use client';

import { useState } from 'react';

const values = [
  {
    number: '01',
    keyword: 'ELEGANCE',
    title: 'Timeless Beauty',
    summary:
      'We craft spaces that transcend temporary trends, utilizing balanced proportions, noble materials, and delicate light interplay to deliver enduring sophistication.',
  },
  {
    number: '02',
    keyword: 'AUTHENTICITY',
    title: 'Rooted In The Land',
    summary:
      'Every project is intrinsically connected with its natural setting. We respect local heritage, Galician stone masonry, and organic textures.',
  },
  {
    number: '03',
    keyword: 'FUNCTIONALITY',
    title: 'Effortless Living',
    summary:
      'True luxury is intuitive. We architect fluid spaces where comfort, energy efficiency, and everyday practicality meet refined aesthetics.',
  },
];

export default function ValuesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 px-6 md:px-12 bg-[#121212] text-[#ECE4DA]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#ECE4DA]/15">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#ECE4DA]/60 block mb-2">
              Our Core Principles
            </span>
            <h2 className="text-3xl md:text-5xl font-serif">
              Built On True Distinction
            </h2>
          </div>
          <p className="text-sm text-[#ECE4DA]/70 max-w-md mt-4 md:mt-0 font-light">
            Three fundamental pillars guide every line drawn, every stone laid, and every home delivered.
          </p>
        </div>

        {/* Values Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <div
              key={val.keyword}
              onMouseEnter={() => setActiveIndex(idx)}
              className={`p-8 md:p-10 rounded-2xl border transition-all duration-300 flex flex-col justify-between min-h-[380px] ${
                activeIndex === idx
                  ? 'bg-[#ECE4DA] text-black border-[#ECE4DA] shadow-2xl scale-[1.02]'
                  : 'bg-white/5 text-[#ECE4DA] border-[#ECE4DA]/15 hover:border-[#ECE4DA]/40'
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-12">
                  <span className="text-xs uppercase tracking-widest font-mono opacity-60">
                    {val.number}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      activeIndex === idx ? 'bg-[#DB5C59]' : 'bg-[#ECE4DA]/30'
                    }`}
                  ></span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-semibold tracking-wider uppercase mb-2">
                  {val.keyword}
                </h3>
                <h4 className="text-sm uppercase tracking-widest opacity-80 mb-6">
                  {val.title}
                </h4>
              </div>

              <p className="text-sm leading-relaxed font-light opacity-90">
                {val.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
