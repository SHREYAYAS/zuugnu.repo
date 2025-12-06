import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Zuugnu - Community-Driven Gig Platform',
  description:
    'Join India\'s fastest-growing community-driven platform for pre-paid gigs, bidding opportunities, and skill-building. Earn by creating, amplifying, and delivering value—secured by escrow, powered by trust.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins bg-gray-50 text-gray-900`}>{children}</body>
    </html>
  );
}
