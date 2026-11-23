import type { Metadata, Viewport } from 'next';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/600.css';
import '@fontsource/cormorant-garamond/700.css';
import '@fontsource-variable/inter';
import './globals.css';
import { APP_FULL_NAME, DEVELOPER, PLAY_STORE_URL, SITE_URL } from '@/site.config';

const description =
  'Astrocaptain is a Vedic astrology app by Afterday. Enter your birth date, time and place and read your kundli, dashas, marriage, career and daily guidance in plain words.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Astrocaptain – Kundli & Jyotish, explained in plain words',
  description,
  keywords: ['Astrocaptain', 'kundli', 'kundli app', 'Jyotish', 'Vedic astrology', 'dasha', 'Sookshma dasha', 'panchang', 'kundli matching', 'Afterday'],
  alternates: { canonical: '/' },
  icons: { icon: '/icon.svg', apple: '/apple-touch-icon.png' },
  openGraph: {
    title: APP_FULL_NAME,
    description: 'Your kundli, explained in plain words. Free on Google Play.',
    url: '/',
    siteName: 'Astrocaptain',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Astrocaptain – Kundli & Jyotish' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: APP_FULL_NAME,
    description: 'Your kundli, explained in plain words.',
    images: ['/og-image.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#0d0f14',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: APP_FULL_NAME,
    operatingSystem: 'ANDROID',
    applicationCategory: 'LifestyleApplication',
    description,
    inLanguage: ['en', 'hi'],
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
    installUrl: PLAY_STORE_URL,
    url: SITE_URL,
    publisher: { '@type': 'Organization', name: DEVELOPER },
  };

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="theme-dark">{children}</body>
    </html>
  );
}
