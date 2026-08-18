'use client';

import Link from 'next/link';
import { projects } from '@/data/projects';

export default function ProjectSlider() {
  const activeProjects = projects.filter((p) => p.status === 'Available' || p.status === 'Upcoming');

  return (
    <section className="py-24 px-6 md:px-12 bg-[#ECE4DA] text-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-black/15">
          <div>
            <span className="text-xs uppercase tracking-widest text-black/60 block mb-2">
              Current Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-serif">
              Homes That Invite You To Disconnect
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-xs uppercase tracking-widest font-semibold border-b border-black pb-1 hover:opacity-60 transition-opacity mt-4 md:mt-0 inline-block"
          >
            View All Developments ({projects.length}) →
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white/50 border border-black/10 rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
            >
              {/* Media Container / Placeholder with luxury gradient */}
              <div className="relative h-64 sm:h-72 bg-[#D3C7B9] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                <div className="absolute top-4 left-4 z-20">
                  <span className="text-[10px] uppercase tracking-widest px-3 py-1 bg-black text-white rounded-full font-semibold">
                    {project.status}
                  </span>
                </div>
                <div className="text-center p-6 z-0 transform group-hover:scale-105 transition-transform duration-500">
                  <span className="text-3xl font-serif tracking-widest text-black/40 uppercase block">
                    {project.title}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <p className="text-xs tracking-wider opacity-80 uppercase">
                    {project.location}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-black mb-2 group-hover:underline">
                    {project.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-black/60 mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-black/75 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-black/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-black/60">
                    {project.specs[1]?.value || project.units || 'Exclusive Residences'}
                  </span>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-xs uppercase tracking-widest font-semibold text-black hover:opacity-60 transition-opacity flex items-center space-x-1"
                  >
                    <span>Discover</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
