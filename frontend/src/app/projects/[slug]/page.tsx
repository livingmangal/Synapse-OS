import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects, getProjectBySlug } from '@/data/projects';
import ContactSection from '@/components/sections/ContactSection';
import Link from 'next/link';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Agent Not Found | Sanjeevani OS',
    };
  }

  return {
    title: `${project.title} - ${project.subtitle} | Sanjeevani OS`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-16 bg-[#ECE4DA] text-black">
      {/* Project Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Link
            href="/projects"
            className="text-xs uppercase tracking-widest text-black/60 hover:text-black transition-colors"
          >
            ← Back to Agents
          </Link>
          <span className="text-black/30">/</span>
          <span className="text-xs uppercase tracking-widest px-3 py-1 bg-black text-white rounded-full font-semibold">
            {project.status}
          </span>
        </div>

        <h1 className="text-4xl sm:text-7xl md:text-8xl font-serif font-light leading-[0.95] uppercase mb-6">
          {project.title}
        </h1>
        <p className="text-xl md:text-3xl font-serif font-light text-black/80 max-w-4xl leading-snug mb-8">
          {project.subtitle}
        </p>
        <p className="text-base md:text-lg text-black/70 font-light max-w-3xl leading-relaxed">
          {project.description}
        </p>
      </section>

      {/* Specifications Grid */}
      <section className="py-16 px-6 md:px-12 bg-[#121212] text-[#ECE4DA] my-16">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#DB5C59] block mb-8">
            Technical Overview & Specifications
          </span>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {project.specs.map((spec) => (
              <div key={spec.label} className="border-t border-[#ECE4DA]/20 pt-4">
                <span className="text-xs uppercase tracking-widest text-[#ECE4DA]/60 block mb-1">
                  {spec.label}
                </span>
                <p className="text-sm md:text-base font-medium text-[#ECE4DA]">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Chapters */}
      {project.chapters.length > 0 && (
        <section className="px-6 md:px-12 max-w-7xl mx-auto my-24 space-y-24">
          {project.chapters.map((chapter) => (
            <div
              key={chapter.number}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-black/15 pt-16"
            >
              <div className="lg:col-span-4">
                <span className="text-5xl md:text-7xl font-serif font-light text-black/20 block mb-2">
                  {chapter.number}
                </span>
                <span className="text-xs uppercase tracking-widest text-black/60 block">
                  {chapter.subtitle}
                </span>
              </div>
              <div className="lg:col-span-8 space-y-6">
                <h2 className="text-3xl md:text-5xl font-serif">
                  {chapter.title}
                </h2>
                <p className="text-base md:text-lg text-black/80 font-light leading-relaxed">
                  {chapter.description}
                </p>
                {chapter.features && chapter.features.length > 0 && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                    {chapter.features.map((feat) => (
                      <li key={feat} className="flex items-center space-x-3 text-sm text-black/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
