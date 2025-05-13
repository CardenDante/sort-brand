// src/app/layout.tsx

import './globals.css';
import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';

export const metadata = {
  title: 'Sort Brands - Digital Creative Agency',
  description: 'We help top brands thrive with creative marketing solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-[Poppins]">
        <TopBanner />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}