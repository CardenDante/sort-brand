"use client";
// src/components/MissionVisionSection.tsx
import { useRef, useState, useEffect } from 'react';

const MissionVisionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-12 md:py-16 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #222222 60%, #333333 100%)',
      }}
    >
      {/* Background overlay pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23D4AF34\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")',
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF34] mb-3">Our purpose</h2>
          <div className="w-16 h-1 bg-[#D4AF34] mx-auto mb-4"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            We are dedicated to helping businesses achieve their goals through strategic marketing and branding solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* Mission Card */}
          <div 
            className={`
              bg-black/30 backdrop-blur-sm border border-[#D4AF34]/20 rounded-lg overflow-hidden shadow-lg
              transform transition-all duration-700
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="h-2 bg-[#D4AF34]"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Our mission</h3>
              <p className="text-white/70 mb-4 text-sm md:text-base">
                To sort business needs by delivering high-quality advertising, marketing, and branding services to both local and international markets. We're committed to helping businesses stand out and achieve their goals through innovative and effective solutions.
              </p>
              <div className="border-l-4 border-[#D4AF34] pl-4 py-2 bg-black/20">
                <p className="text-white/80 italic text-sm">
                  "We believe in the power of strategic creativity to transform businesses and drive real results."
                </p>
              </div>
            </div>
          </div>
          
          {/* Vision Card */}
          <div 
            className={`
              bg-black/30 backdrop-blur-sm border border-[#D4AF34]/20 rounded-lg overflow-hidden shadow-lg
              transform transition-all duration-700
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="h-2 bg-[#D4AF34]"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Our vision</h3>
              <p className="text-white/70 mb-4 text-sm md:text-base">
                To mentor business owners and entrepreneurs, helping them develop the mindset to succeed not only in business but also in the spiritual realm, creating a holistic approach to growth and success that extends beyond simply profits.
              </p>
              <div className="border-l-4 border-[#D4AF34] pl-4 py-2 bg-black/20">
                <p className="text-white/80 italic text-sm">
                  "We envision a world where businesses thrive through purposeful branding and authentic connections with their audiences."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;