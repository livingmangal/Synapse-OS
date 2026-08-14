const fs = require('fs');
const path = require('path');

// Clean URL helper
function cleanUrls(html) {
  let cleaned = html;
  
  // Replace absolute domains
  cleaned = cleaned.replace(/https:\/\/normalisboring\.es\/conocenos\/?/g, '/about-us');
  cleaned = cleaned.replace(/https:\/\/normalisboring\.es\/proyectos\/?/g, '/projects');
  cleaned = cleaned.replace(/https:\/\/normalisboring\.es\/lasolana\/?/g, '/projects/la-solana');
  cleaned = cleaned.replace(/https:\/\/normalisboring\.es\/plaza-espana\/?/g, '/projects/plaza-espana');
  cleaned = cleaned.replace(/https:\/\/normalisboring\.es\/rua-pexegueiro\/?/g, '/projects/rua-pexegueiro');
  cleaned = cleaned.replace(/https:\/\/normalisboring\.es\/aviso-legal\/?/g, '/legal-notice');
  cleaned = cleaned.replace(/https:\/\/normalisboring\.es\/politica-de-cookies\/?/g, '/cookie-policy');
  cleaned = cleaned.replace(/https:\/\/normalisboring\.es\/politica-de-privacidad\/?/g, '/privacy-policy');
  cleaned = cleaned.replace(/https:\/\/normalisboring\.es\//g, '/');
  cleaned = cleaned.replace(/https:\/\/normalisboring\.es/g, '/');

  // Replace relative paths in links
  cleaned = cleaned.replace(/href="\/conocenos\/?"/g, 'href="/about-us"');
  cleaned = cleaned.replace(/href="\/proyectos\/?"/g, 'href="/projects"');
  cleaned = cleaned.replace(/href="\/lasolana\/?"/g, 'href="/projects/la-solana"');
  cleaned = cleaned.replace(/href="\/plaza-espana\/?"/g, 'href="/projects/plaza-espana"');
  cleaned = cleaned.replace(/href="\/rua-pexegueiro\/?"/g, 'href="/projects/rua-pexegueiro"');
  cleaned = cleaned.replace(/href="\/aviso-legal\/?"/g, 'href="/legal-notice"');
  cleaned = cleaned.replace(/href="\/politica-de-cookies\/?"/g, 'href="/cookie-policy"');
  cleaned = cleaned.replace(/href="\/politica-de-privacidad\/?"/g, 'href="/privacy-policy"');

  // Replace data-url attributes
  cleaned = cleaned.replace(/data-url="\/conocenos\/?"/g, 'data-url="/about-us"');
  cleaned = cleaned.replace(/data-url="\/proyectos\/?"/g, 'data-url="/projects"');
  cleaned = cleaned.replace(/data-url="\/lasolana\/?"/g, 'data-url="/projects/la-solana"');
  cleaned = cleaned.replace(/data-url="\/plaza-espana\/?"/g, 'data-url="/projects/plaza-espana"');
  cleaned = cleaned.replace(/data-url="\/rua-pexegueiro\/?"/g, 'data-url="/projects/rua-pexegueiro"');
  cleaned = cleaned.replace(/data-url=""/g, 'data-url="/"');

  cleaned = cleaned.replace(/http:\/\/contacto/g, '#contacto');
  cleaned = cleaned.replace(/http:\/\/disponibilidad/g, '#disponibilidad');

  return cleaned;
}

// Read index.htm to extract global header, grid, mouse, and modal
const indexHtml = fs.readFileSync('e:/normalisboring.es/index.htm', 'utf8');

// Extract Header
const headerMatch = indexHtml.match(/<header>([\s\S]*?)<\/header>/i);
const headerHtml = headerMatch ? cleanUrls(headerMatch[0]) : '';

// Build layout.tsx
const layoutCode = `import type { Metadata } from 'next';
import '@/styles/main.css';

export const metadata: Metadata = {
  title: 'Normal is Boring | Living Spaces That Defy The Ordinary',
  description: 'Living Spaces That Defy The Ordinary. Architecture and bespoke residential developments.',
  icons: {
    icon: '/wp-content/uploads/2025/05/favicon-150x150.png',
    apple: '/wp-content/uploads/2025/05/favicon-300x300.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/wp-content/themes/normalisboring25/css/fonts/editorialnew-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/wp-content/themes/normalisboring25/css/fonts/editorialnew-regular.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/wp-includes/css/dist/block-library/common.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/contact-form-7/includes/css/styles.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/wp-content/themes/normalisboring25/css/main.css" />
      </head>
      <body>
        <div className="grid wrapper">
          <div></div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div>
        </div>

        <div id="mouse" className="d-md-nonexx"><div><span className="f-izmir t-parrafo"></span></div></div>

        {/* Global Luxury Header */}
        <div dangerouslySetInnerHTML={{ __html: \`${headerHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />

        {/* Page Container */}
        <div id="swup" className="transition-fade">
          {children}
        </div>

        {/* Contact Modal Placeholder */}
        <div className="modal modal--contact d-none">
          <div className="modal__content"></div>
        </div>

        {/* Sequential Execution Scripts */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.js" defer></script>
        <script src="https://www.youtube.com/player_api" defer></script>
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/gsap.min.js" defer></script>
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/ScrollTrigger.min.js" defer></script>
        <script src="https://unpkg.com/swup@4" defer></script>
        <script src="/wp-content/themes/normalisboring25/js/gsap/ScrollSmoother.min.js" defer></script>
        <script src="/wp-content/themes/normalisboring25/js/gsap/SplitText.min.js" defer></script>
        <script src="/wp-content/themes/normalisboring25/js/gsap/MorphSVGPlugin.min.js" defer></script>
        <script src="https://unpkg.com/lenis@1.3.1/dist/lenis.min.js" defer></script>
        <script src="/wp-content/themes/normalisboring25/js/root.js" defer></script>
        <script src="/wp-content/themes/normalisboring25/js/preloader.js" defer></script>
        <script src="/wp-content/themes/normalisboring25/js/rollovers.js" defer></script>
        <script src="/wp-content/themes/normalisboring25/js/animations.js" defer></script>
        <script src="/wp-content/themes/normalisboring25/js/clicks.js" defer></script>
        <script src="/wp-content/themes/normalisboring25/js/scroll.js" defer></script>
        <script src="/wp-content/themes/normalisboring25/js/main.js" defer></script>
      </body>
    </html>
  );
}
`;

fs.writeFileSync('e:/normalisboring.es/frontend/src/app/layout.tsx', layoutCode, 'utf8');
console.log('Updated layout.tsx');

// Process all pages
const pages = [
  {
    name: 'Home',
    source: 'e:/normalisboring.es/index.htm',
    dest: 'e:/normalisboring.es/frontend/src/app/page.tsx',
    title: 'Home - Normal is Boring',
    description: 'Living Spaces That Defy The Ordinary',
  },
  {
    name: 'About Us',
    source: 'e:/normalisboring.es/conocenos/index.htm',
    dest: 'e:/normalisboring.es/frontend/src/app/about-us/page.tsx',
    aliasDest: 'e:/normalisboring.es/frontend/src/app/conocenos/page.tsx',
    title: 'About Us - Normal is Boring',
    description: 'Learn about our philosophy and 40+ years of architectural excellence.',
  },
  {
    name: 'Projects',
    source: 'e:/normalisboring.es/proyectos/index.htm',
    dest: 'e:/normalisboring.es/frontend/src/app/projects/page.tsx',
    aliasDest: 'e:/normalisboring.es/frontend/src/app/proyectos/page.tsx',
    title: 'Projects - Normal is Boring',
    description: 'Portfolio of luxury villas and bespoke residential developments in Galicia.',
  },
  {
    name: 'La Solana',
    source: 'e:/normalisboring.es/lasolana/index.htm',
    dest: 'e:/normalisboring.es/frontend/src/app/projects/la-solana/page.tsx',
    aliasDest: 'e:/normalisboring.es/frontend/src/app/lasolana/page.tsx',
    title: 'La Solana - Normal is Boring',
    description: 'Exclusive single-family villas in Oleiros, A Coruña.',
  },
  {
    name: 'Plaza España 9',
    source: 'e:/normalisboring.es/plaza-espana/index.htm',
    dest: 'e:/normalisboring.es/frontend/src/app/projects/plaza-espana/page.tsx',
    aliasDest: 'e:/normalisboring.es/frontend/src/app/plaza-espana/page.tsx',
    title: 'Plaza España 9 - Normal is Boring',
    description: 'Restoration of a historic architectural gem in Santiago de Compostela.',
  },
  {
    name: 'Rúa Pexegueiro',
    source: 'e:/normalisboring.es/rua-pexegueiro/index.htm',
    dest: 'e:/normalisboring.es/frontend/src/app/projects/rua-pexegueiro/page.tsx',
    aliasDest: 'e:/normalisboring.es/frontend/src/app/rua-pexegueiro/page.tsx',
    title: 'Rúa Pexegueiro - Normal is Boring',
    description: 'Urban sanctuary near the historical center of Santiago.',
  },
  {
    name: 'Legal Notice',
    source: 'e:/normalisboring.es/aviso-legal/index.htm',
    dest: 'e:/normalisboring.es/frontend/src/app/legal-notice/page.tsx',
    aliasDest: 'e:/normalisboring.es/frontend/src/app/aviso-legal/page.tsx',
    title: 'Legal Notice - Normal is Boring',
    description: 'Legal terms and identification data for Normal is Boring.',
  },
  {
    name: 'Cookie Policy',
    source: 'e:/normalisboring.es/politica-de-cookies/index.htm',
    dest: 'e:/normalisboring.es/frontend/src/app/cookie-policy/page.tsx',
    aliasDest: 'e:/normalisboring.es/frontend/src/app/politica-de-cookies/page.tsx',
    title: 'Cookie Policy - Normal is Boring',
    description: 'Cookie policy and consent settings for Normal is Boring.',
  },
  {
    name: 'Privacy Policy',
    source: 'e:/normalisboring.es/politica-de-privacidad/index.htm',
    dest: 'e:/normalisboring.es/frontend/src/app/privacy-policy/page.tsx',
    aliasDest: 'e:/normalisboring.es/frontend/src/app/politica-de-privacidad/page.tsx',
    title: 'Privacy Policy - Normal is Boring',
    description: 'Data protection and GDPR privacy policy for Normal is Boring.',
  },
];

for (const p of pages) {
  const rawHtml = fs.readFileSync(p.source, 'utf8');
  
  // Extract content between swup or main+footer
  let pageContent = '';
  const mainMatch = rawHtml.match(/<main[\s\S]*?<\/main>/i);
  const footerMatch = rawHtml.match(/<footer>[\s\S]*?<\/footer>/i);
  
  if (mainMatch) {
    pageContent = cleanUrls(mainMatch[0] + '\n' + (footerMatch ? footerMatch[0] : ''));
  }

  const pageComponent = `import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${p.title}',
  description: '${p.description}',
};

export default function ${p.name.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  return (
    <div dangerouslySetInnerHTML={{ __html: \`${pageContent.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
  );
}
`;

  // Ensure directories exist
  const dir = path.dirname(p.dest);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(p.dest, pageComponent, 'utf8');
  console.log(`Generated: ${p.dest}`);

  if (p.aliasDest) {
    const aliasDir = path.dirname(p.aliasDest);
    if (!fs.existsSync(aliasDir)) fs.mkdirSync(aliasDir, { recursive: true });
    fs.writeFileSync(p.aliasDest, pageComponent, 'utf8');
    console.log(`Generated Alias: ${p.aliasDest}`);
  }
}
