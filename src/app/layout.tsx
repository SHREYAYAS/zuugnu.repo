import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import StarryBackground from '@/components/StarryBackground';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    default: 'Zuugnu - Empower Your Gig Journey with India\'s Leading Platform',
    template: '%s | Zuugnu',
  },
  description:
    'Join India\'s fastest-growing community-driven platform for pre-paid gigs, bidding opportunities, and skill-building. Earn by creating, amplifying, and delivering value—secured by escrow, powered by trust.',
  keywords: [
    'gig platform India',
    'freelance opportunities',
    'pre-paid gigs',
    'bidding platform',
    'skill development',
    'UGC training',
    'social media analytics',
    'digital branding',
    'escrow payments',
    'freelancer community',
    'online earning India',
    'gig economy',
  ],
  authors: [{ name: 'Zuugnu' }],
  creator: 'Zuugnu',
  publisher: 'Zuugnu',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zuugnu.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Zuugnu - Empower Your Gig Journey',
    description:
      'Join India\'s fastest-growing community-driven platform for pre-paid gigs, bidding opportunities, and skill-building.',
    url: 'https://zuugnu.com',
    siteName: 'Zuugnu',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zuugnu - Gig Platform',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zuugnu - Empower Your Gig Journey',
    description:
      'Join India\'s fastest-growing community-driven platform for pre-paid gigs, bidding opportunities, and skill-building.',
    images: ['/twitter-image.png'],
    creator: '@zuugnu',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Zuugnu" />
      </head>
      <body className={`${poppins.variable} font-poppins bg-gray-50 text-gray-900`}>
        {/* Starry background covering entire application */}
        <div className="fixed inset-0 w-full h-full z-0">
          <StarryBackground />
        </div>
        
        {/* All page content on top */}
        <div className="relative z-10">
          {children}
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('ServiceWorker registration successful');
                    },
                    function(err) {
                      console.log('ServiceWorker registration failed: ', err);
                    }
                  );
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
