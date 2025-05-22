// src/components/PortfolioSection.tsx
"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  size: 'normal' | 'wide';
  link: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 'MCL',
    title: 'Billboard & Signage',
    image: '/images/Mockp2.jpg',
    size: 'wide',
    link: '/case-studies',
  },
  {
    id: 'MCL2',
    title: 'Branding & Marketing',
    image: '/images/Branding_m.jpg',
    size: 'normal',
    link: '/case-studies',
  },
  {
    id: 'Shamin',
    title: 'Tents & Tarpaulins',
    image: '/images/shamin.jpg',
    size: 'normal',
    link: '/case-studies',
  },
  {
    id: 'avpa',
    title: 'Banners',
    image: '/images/banners.jpg',
    size: 'normal',
    link: '/case-studies',
  },
  {
    id: 'uber',
    title: 'Awards & Recognition',
    image: '/images/Awards.jpeg',
    size: 'normal',
    link: '/case-studies',
  },
];

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Main');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When section becomes visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the element is visible
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
      className="py-20 relative overflow-hidden"
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
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#D4AF34] mb-4">Our Work</h2>
          <div className="w-20 h-1 bg-[#D4AF34] mx-auto"></div>
        </div>

        {/* Filter Navigation */}
        {/* <div className="flex justify-center space-x-8 mb-12">
          {['Main', 'Projects', 'Clients', 'Contact'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-lg font-medium transition-all duration-300 
                ${activeFilter === filter 
                  ? 'text-[#D4AF34] border-b-2 border-[#D4AF34]' 
                  : 'text-white hover:text-[#D4AF34]'}`}
            >
              {filter}
            </button>
          ))}
        </div> */}

        {/* Portfolio Grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`
                ${item.size === 'wide' ? 'col-span-12 md:col-span-8' : 'col-span-12 md:col-span-4'}
                relative overflow-hidden rounded-lg 
                transform transition-all duration-700 hover:scale-[1.02]
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                min-h-[250px] bg-gradient-to-br from-black to-gray-900
                shadow-lg
              `}
              style={{
                transitionDelay: `${150 * index}ms`,
              }}
            >
              {/* Placeholder for image - in production, use actual Image component */}
              <div className="absolute inset-0 z-0">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index === 0} // optional: prioritize first image
                />
                </div>

              {/* Content Overlay */}
              <Link href={item.link}>
                <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                  <div 
                    className="w-full h-2/3 absolute bottom-0 left-0 right-0 z-[-1]"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5), transparent)'
                    }}
                  ></div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#D4AF34] mb-2">{item.title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;