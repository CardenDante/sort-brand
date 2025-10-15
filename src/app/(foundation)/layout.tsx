// src/app/(foundation)/layout.tsx
import SortBloomHeader from '@/components/foundation/SortBloomHeader';
import SortBloomFooter from '@/components/foundation/SortBloomFooter';
import BackToTop from '@/components/BackToTop';
import '../globals.css'; // Keep this to maintain styles

export const metadata = {
  title: 'SortBloom Child Foundation - Sorting Needs. Blooming Futures.',
  description:
    'A community-driven nonprofit dedicated to identifying, supporting, and empowering vulnerable and underserved children across Kenya and beyond.',
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
