// src/app/page.tsx

import Hero from '@/components/Hero';
import IntroSection from '@/components/IntroSection';

export default function HomePage() {
  return (
    <>
      <Hero 
        title="Sort Brands helps top businesses thrive in Africa."
        subtitle="We are the leading digital creative agency dedicated to helping brands grow through innovative marketing solutions."
        buttonText="Our Solutions"
        buttonLink="/solutions"
        backgroundImage="/images/hero-bg.jpeg"
      />
       <IntroSection />
      {/* Other home page sections will be added here */}
    </>
  );
}