import type { Metadata } from 'next';
import Script from 'next/script';
import '@/styles/main.css';
import '@/app/globals.css';
import SynapseOSAssistantModal from '@/components/SynapseOSAssistantModal';
import ScriptsLoader from '@/components/ScriptsLoader';
import LegacyThemeShell from '@/components/LegacyThemeShell';

export const metadata: Metadata = {
  title: 'SynapseOS | Multi-Agent Health Platform',
  description: 'The SynapseOS is an open-source, multi-agent health architecture powered by specialized AI sub-agents.',
  icons: {
    icon: [
      { url: '/synapseos-icon.svg', type: 'image/svg+xml' },
      { url: '/synapseos-icon.png', type: 'image/png' },
      { url: '/fav.png', type: 'image/png' },
    ],
    shortcut: '/synapseos-icon.svg',
    apple: '/synapseos-icon.png',
  },
};

import ContactModal from '@/components/ui/ContactModal';
import MobileNoticeBarrier from '@/components/ui/MobileNoticeBarrier';
import { LanguageProvider } from '@/context/LanguageContext';
import { AuthProvider } from '@/context/AuthContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <link rel="icon" href="/synapseos-icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/synapseos-icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/synapseos-icon.png" />
        <link rel="preload" href="/wp-content/themes/normalisboring25/css/fonts/editorialnew-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" suppressHydrationWarning />
        <link rel="preload" href="/wp-content/themes/normalisboring25/css/fonts/editorialnew-regular.woff" as="font" type="font/woff" crossOrigin="anonymous" suppressHydrationWarning />
        <link rel="stylesheet" href="/wp-content/plugins/contact-form-7/includes/css/styles.css" suppressHydrationWarning />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.css" suppressHydrationWarning />
        <link rel="stylesheet" href="/wp-content/themes/normalisboring25/css/main.css" suppressHydrationWarning />
      </head>
      <body suppressHydrationWarning>
        <AuthProvider>
          <LanguageProvider>
            {/* Mobile Screen Barrier Notice (Smart VIT Hackathon Edition) */}
            <MobileNoticeBarrier />

            {/* Global Luxury Editorial Contact & Partnership Modal */}
            <ContactModal />

            <LegacyThemeShell>
              {children}
            </LegacyThemeShell>

            {/* LiveKit Isometric Agentic Architecture Controller */}
            <Script src="/wp-content/themes/normalisboring25/js/agentic-diagram.js" strategy="afterInteractive" />
            <SynapseOSAssistantModal />
            <ScriptsLoader />
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
