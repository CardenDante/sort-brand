// src/app/page.tsx

import Hero from '@/components/Hero';
import IntroSection from '@/components/IntroSection';
import ServicesSection from '@/components/ServicesSection';
import TrustedBySection from '@/components/TrustedBySection';
import PortfolioSection from '@/components/PortfolioSection';
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection';
import TeamSection from '@/components/TeamSection';

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
       <ServicesSection />
       <TrustedBySection />
       <PortfolioSection />
       <CTASection />
       <FAQSection />
      <TeamSection />
      {/* Other home page sections will be added here */}
    </>
  );
}