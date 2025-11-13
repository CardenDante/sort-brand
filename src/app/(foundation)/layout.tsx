// src/app/(foundation)/layout.tsx
import SortBloomHeader from '@/components/foundation/SortBloomHeader';
import SortBloomFooter from '@/components/foundation/SortBloomFooter';
import BackToTop from '@/components/BackToTop';
import type { Metadata } from 'next';
import '../globals.css'; // Keep this to maintain styles

export const metadata: Metadata = {
  title: 'SortBloom Child Foundation - Sorting Needs. Blooming Futures.',
  description:
    'A community-driven nonprofit dedicated to identifying, supporting, and empowering vulnerable and underserved children across Kenya and beyond.',
  openGraph: {
    title: 'SortBloom Child Foundation - Sorting Needs. Blooming Futures.',
    description:
      'A community-driven nonprofit dedicated to identifying, supporting, and empowering vulnerable and underserved children across Kenya and beyond.',
    url: 'https://sortbloom.org',
    siteName: 'SortBloom Child Foundation',
    images: [
      {
        url: '/images/logo/Sortbloom-Icon.png',
        width: 512,
        height: 512,
        alt: 'SortBloom Foundation Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'SortBloom Child Foundation - Sorting Needs. Blooming Futures.',
    description:
      'A community-driven nonprofit dedicated to identifying, supporting, and empowering vulnerable and underserved children across Kenya and beyond.',
    images: ['/images/logo/Sortbloom-Icon.png'],
  },
  icons: {
    icon: '/images/logo/Sortbloom-Icon.png',
    apple: '/images/logo/Sortbloom-Icon.png',
  },
};

export default function SortBloomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SortBloomHeader />
      <main className="flex-grow font-[Poppins] text-gray-700 bg-white min-h-screen">
        {children}
      </main>
      <BackToTop />
      <SortBloomFooter />
    </>
  );
}