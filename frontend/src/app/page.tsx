import type { Metadata } from 'next';
import {
  HeroIntroSection,
  HeroFlipGallerySection,
  PlatformArchitectureSection,
  AgentSwarmIntroSection,
  ValuesCarouselSection,
  SecondaryFlipGallerySection,
  AgenticStackDiagramSection,
  ProjectsSection,
  ClosingFlipSection,
  TryPlatformSection,
  UniversalFooter,
} from '@/components/home';

export const metadata: Metadata = {
  title: 'Home - Sanjeevani OS',
  description: 'Living Spaces That Defy The Ordinary',
};

export default function HomePage() {
  return (
    <main data-id="1050" data-name="Home" data-recipient="">
      <section className="mod-scroll">
        <HeroIntroSection />
        <HeroFlipGallerySection />
        <PlatformArchitectureSection />
        <AgentSwarmIntroSection />
        <ValuesCarouselSection />
        <SecondaryFlipGallerySection />
        <AgenticStackDiagramSection />
        <ProjectsSection />
        <div className="mod-scroll__pin" />
        <ClosingFlipSection />
      </section>

      <TryPlatformSection />
      <UniversalFooter />
    </main>
  );
}
