// src/app/about/page.tsx
import AboutBanner from '@/components/about/AboutBanner';
import TeamSectionCircular from '@/components/TeamSection';
import WhoWeWorkWith from '@/components/about/WhoWeWorkWith';
import MissionVisionSection from '@/components/about/MissionVisionSection';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <main>
      {/* About Banner */}
      <AboutBanner
        title="About Us"
        subtitle="We are the world's best digital creative agency, dedicated to sorting your brand through innovative solutions."
        backgroundImage="/images/about-banner.jpg"
      />
      
      {/* Company Overview Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
                {/* Replace with actual image path */}
                <Image
                  src="/images/about-company.jpg"
                  alt="SortBrands Office"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 hover:scale-105"
                />
              </div>
              {/* Decorative gold corner */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-8 border-r-8 border-[#D4AF34] z-10"></div>
            </div>
            
            {/* Content Column */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                We Are <span className="text-[#D4AF34]">SortBrands</span>
              </h2>
              
              <p className="text-gray-700 mb-6">
                We are the world's best digital creative agency, dedicated to sorting your brand through innovative advertising, marketing, and branding solutions. Our team of experts combines creativity with strategic thinking to deliver exceptional results for businesses of all sizes.
              </p>
              
              <p className="text-gray-700 mb-8">
                With a focus on creating meaningful connections between brands and their audiences, we provide tailored solutions that drive growth and build lasting brand value. Our approach is client-centered, results-driven, and innovative.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-[#D4AF34] rounded-full p-1 mt-1 mr-3">
                    <FaCheck className="text-black text-sm" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Strategic Approach</h4>
                    <p className="text-gray-700 text-sm">Data-driven strategies that deliver results</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#D4AF34] rounded-full p-1 mt-1 mr-3">
                    <FaCheck className="text-black text-sm" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Creative Excellence</h4>
                    <p className="text-gray-700 text-sm">Innovative ideas that capture attention</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#D4AF34] rounded-full p-1 mt-1 mr-3">
                    <FaCheck className="text-black text-sm" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Client Focus</h4>
                    <p className="text-gray-700 text-sm">Personalized service for every client</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#D4AF34] rounded-full p-1 mt-1 mr-3">
                    <FaCheck className="text-black text-sm" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Measurable Results</h4>
                    <p className="text-gray-700 text-sm">Proven ROI for your marketing investment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section with dark background */}
      <MissionVisionSection />
      
      {/* Team Section */}
      <TeamSectionCircular />
      
      {/* Who We Work With Section */}
      <WhoWeWorkWith />
    </main>
  );
}