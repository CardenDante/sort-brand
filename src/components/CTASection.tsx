// src/components/CTASection.tsx
"use client";
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaPhone } from 'react-icons/fa';

const CTASection = () => {
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
      className="py-24 relative bg-white"
    >
      {/* Decorative Element - Gold line top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#D4AF34]"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div 
            className={`
              relative transform transition-all duration-1000 ease-out
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'}
            `}
          >
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg shadow-xl">
              {/* This would be an actual image in production */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#000000] to-[#333333]" />
              
              {/* Gold overlay for image */}
              <div className="absolute inset-0 bg-[#D4AF34] mix-blend-overlay opacity-40" />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-2 -right-2 w-4/5 h-4/5 border-2 border-[#D4AF34] rounded-lg" />
              
              {/* Content overlay on the image */}
              <div className="absolute inset-0 flex flex-col justify-center p-8">
                <div className="bg-white bg-opacity-90 p-6 backdrop-blur-sm rounded-lg inline-block max-w-lg shadow-lg">
                  <span className="text-[#D4AF34] text-sm uppercase tracking-wider font-semibold">Our Mission</span>
                  <h3 className="text-[#000000] text-2xl font-bold mt-2">
                    To sort business needs by delivering high-quality services to both local and international markets
                  </h3>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div 
            className={`
              transform transition-all duration-1000 delay-300 ease-out
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'}
            `}
          >
            <h2 className="text-5xl font-bold text-[#000000] leading-tight mb-6">
              Let's <span className="text-[#D4AF34]">sort</span> your business today!
            </h2>
            
            <p className="text-[#333333] text-lg mb-8 leading-relaxed">
              We are the world's best digital creative agency, dedicated to sorting your brand through innovative advertising, marketing, and branding solutions.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#D4AF34] flex items-center justify-center">
                  <span className="text-black font-bold">01</span>
                </div>
                <span className="text-[#333333] font-medium">Brand Strategy & Identity Development</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#D4AF34] flex items-center justify-center">
                  <span className="text-black font-bold">02</span>
                </div>
                <span className="text-[#333333] font-medium">Digital Marketing & Content Creation</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#D4AF34] flex items-center justify-center">
                  <span className="text-black font-bold">03</span>
                </div>
                <span className="text-[#333333] font-medium">Web Development & Graphic Design</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link 
                href="/contacts" 
                className="inline-flex items-center justify-center gap-2 bg-[#000000] hover:bg-[#222222] text-white font-bold py-4 px-8 rounded-md text-center transition-all duration-300 shadow-lg"
              >
                <span>Sort My Business</span>
                <FaArrowRight />
              </Link>
              
              <a 
                href="tel:+254742906505" 
                className="inline-flex items-center justify-center gap-2 border-2 border-[#D4AF34] text-[#000000] hover:bg-[#D4AF34]/10 font-bold py-4 px-8 rounded-md transition-all duration-300"
              >
<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>                <span>+254 742 906 505</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;