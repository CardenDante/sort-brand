// src/components/FeaturedCaseStudy.tsx
"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';

const FeaturedCaseStudy = () => {
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
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF34] mb-3">Featured Success Story</h2>
          <div className="w-16 h-1 bg-[#D4AF34] mx-auto"></div>
        </div>

        <div 
          className={`
            grid grid-cols-1 lg:grid-cols-2 gap-8 items-center 
            transform transition-all duration-1000
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          {/* Image Column */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl h-[300px] md:h-[400px]">
            <Image
              src="/images/case-studies/featured-case-study.jpg" // Replace with actual image path
              alt="Boomplay Music Marketing Campaign"
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-700 hover:scale-105"
            />
            
            {/* Client Logo Overlay */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-md">
              <div className="relative h-12 w-32">
                <Image
                  src="/images/clients/boomplay-logo.png" // Replace with actual logo path
                  alt="Boomplay Music"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="text-white">
            <div className="inline-block bg-[#D4AF34]/20 px-3 py-1 rounded mb-4">
              <span className="text-[#D4AF34] text-sm uppercase tracking-wider font-semibold">Digital Marketing</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              How We Increased Boomplay Music's User Engagement by 75%
            </h3>
            
            <p className="text-white/70 mb-6">
              Boomplay Music needed to increase user engagement and app downloads in the competitive music streaming market. We developed a comprehensive digital marketing strategy that combined social media campaigns, influencer partnerships, and targeted advertising.
            </p>
            
            <div className="mb-8 grid grid-cols-2 gap-4">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4">
                <div className="text-[#D4AF34] text-2xl font-bold mb-1">75%</div>
                <div className="text-white/70 text-sm">Increase in User Engagement</div>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4">
                <div className="text-[#D4AF34] text-2xl font-bold mb-1">2.5M</div>
                <div className="text-white/70 text-sm">New App Downloads</div>
              </div>
            </div>
            
            <Link 
              href="/case-studies/boomplay-music"
              className="inline-flex items-center bg-[#D4AF34] hover:bg-[#c9a52f] text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg"
            >
              <span>Read Full Case Study</span>
              <FaLongArrowAltRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;