'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const SCRIPT_URLS = [
  'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.js',
  'https://www.youtube.com/player_api',
  'https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/gsap.min.js',
  'https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/ScrollTrigger.min.js',
  '/wp-content/themes/normalisboring25/js/gsap/ScrollSmoother.min.js',
  '/wp-content/themes/normalisboring25/js/gsap/SplitText.min.js',
  '/wp-content/themes/normalisboring25/js/gsap/MorphSVGPlugin.min.js',
  'https://unpkg.com/lenis@1.3.1/dist/lenis.min.js',
  '/wp-content/themes/normalisboring25/js/root.js',
  '/wp-content/themes/normalisboring25/js/preloader.js',
  '/wp-content/themes/normalisboring25/js/rollovers.js',
  '/wp-content/themes/normalisboring25/js/animations.js',
  '/wp-content/themes/normalisboring25/js/clicks.js',
  '/wp-content/themes/normalisboring25/js/scroll.js',
  '/wp-content/themes/normalisboring25/js/main.js',
  '/wp-content/themes/normalisboring25/js/ocr-carousel.js',
  '/wp-content/themes/normalisboring25/js/agentic-diagram.js'
];

export default function ScriptsLoader() {
  const pathname = usePathname();

  useEffect(() => {
    // Only load legacy heavy theme scripts on the homepage/projects
    if (
      pathname?.includes('/orchestrator-agent') ||
      pathname?.includes('/symptom-triage-agent') ||
      pathname?.includes('/medical-scan-agent') ||
      pathname?.includes('/records') ||
      pathname?.includes('/vibrant') ||
      pathname?.includes('/interactive-body') ||
      pathname?.includes('/legal-notice') ||
      pathname?.includes('/privacy-policy') ||
      pathname?.includes('/cookie-policy')
    ) {
      return;
    }

    // Sequentially load scripts in DOM on client side only
    const loadScript = (index: number) => {
      if (index >= SCRIPT_URLS.length) return;
      const src = SCRIPT_URLS[index];

      // Avoid duplicate script insertion
      if (document.querySelector(`script[src="${src}"]`)) {
        loadScript(index + 1);
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      script.onload = () => loadScript(index + 1);
      script.onerror = () => loadScript(index + 1); // Continue on fail
      document.body.appendChild(script);
    };

    loadScript(0);
  }, [pathname]);

  return null;
}
