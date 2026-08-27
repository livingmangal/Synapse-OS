import type { Metadata } from 'next';
import Script from 'next/script';
import '@/styles/main.css';
import SanjeevaniAssistantModal from '@/components/SanjeevaniAssistantModal';
import ScriptsLoader from '@/components/ScriptsLoader';
import LegacyThemeShell from '@/components/LegacyThemeShell';

export const metadata: Metadata = {
  title: 'Sanjeevani OS | Multi-Agent Health Platform',
  description: 'The Sanjeevani OS is an open-source, multi-agent health architecture powered by specialized AI sub-agents.',
  icons: {
    icon: '/fav.png',
    apple: '/fav.png',
  },
};

import MobileNoticeBarrier from '@/components/ui/MobileNoticeBarrier';
import { LanguageProvider } from '@/context/LanguageContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <link rel="preload" href="/wp-content/themes/normalisboring25/css/fonts/editorialnew-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" suppressHydrationWarning />
        <link rel="preload" href="/wp-content/themes/normalisboring25/css/fonts/editorialnew-regular.woff" as="font" type="font/woff" crossOrigin="anonymous" suppressHydrationWarning />
        <link rel="stylesheet" href="/wp-content/plugins/contact-form-7/includes/css/styles.css" suppressHydrationWarning />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.css" suppressHydrationWarning />
        <link rel="stylesheet" href="/wp-content/themes/normalisboring25/css/main.css" suppressHydrationWarning />
      </head>
      <body suppressHydrationWarning>
        <LanguageProvider>
          {/* Mobile Screen Barrier Notice (Smart VIT Hackathon Edition) */}
          <MobileNoticeBarrier />

          <LegacyThemeShell>
            {children}
          </LegacyThemeShell>

          {/* LiveKit Isometric Agentic Architecture Controller */}
          <Script src="/wp-content/themes/normalisboring25/js/agentic-diagram.js" strategy="afterInteractive" />
          <SanjeevaniAssistantModal />
          <ScriptsLoader />
        </LanguageProvider>
      </body>
    </html>
  );
}
