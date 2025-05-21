// src/components/FeaturedCaseStudy.tsx
"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
      className="py-16 md:py-20 relative overflow-hidden bg-white"
    >
      {/* Subtle patterns and decorative elements */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")',
        }}
      ></div>
      
      {/* Gold accent shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[#D4AF34]/5"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-[#D4AF34]/5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Featured Success Story</h2>
          <div className="w-16 h-1 bg-[#D4AF34] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped our clients achieve exceptional results with our innovative solutions
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div 
            className={`
              bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden
              transform transition-all duration-1000 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Column */}
              <div className="relative h-[300px] md:h-full">
                <Image
                  src="/images/case-studies/mwanainchi-credit.jpeg" // Replace with actual image path
                  alt="Mwanainchi Credit Branding Campaign"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 hover:scale-105"
                />
                
                {/* Overlay for gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-white shadow-md px-3 py-1 rounded-full">
                  <span className="text-[#D4AF34] text-xs uppercase tracking-wider font-bold">Branding & Digital Marketing</span>
                </div>
                
                {/* Client Logo - visible on mobile only */}
                <div className="absolute bottom-4 left-4 lg:hidden">
                  <div className="bg-white rounded-lg shadow-md p-2">
                    <div className="relative h-10 w-28">
                      <Image
                        src="/images/logo/mcl.jpg" // Replace with actual logo path
                        alt="Mwanainchi Credit"
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content Column */}
              <div className="p-6 md:p-10">
                {/* Client Logo - desktop */}
                <div className="hidden lg:block mb-6">
                  <div className="bg-white rounded-lg shadow-sm p-3 inline-block border border-gray-100">
                    <div className="relative h-12 w-32">
                      <Image
                        src="/images/logo/mcl.jpg" // Replace with actual logo path
                        alt="Mwanainchi Credit"
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  Revitalizing Mwanainchi Credit's Brand Identity and Digital Presence
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Mwanainchi Credit sought to refresh their brand identity and expand their digital footprint in Kenya's competitive financial services market. We developed a comprehensive branding strategy and digital marketing campaign that resonated with their target audience of small business owners and entrepreneurs.
                </p>
                
                <Link 
                  href="/case-studies/mwanainchi-credit"
                  className="inline-flex items-center bg-[#D4AF34] hover:bg-gray-900 text-black hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md group"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Optional: Decorative element */}
          <div className="absolute -bottom-6 right-10 w-24 h-24 border-b-8 border-r-8 border-[#D4AF34]/20 z-0 hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;