// src/components/TeamSection.tsx
"use client";
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 'kelvin-mosioma',
    name: 'Kelvin Mosioma',
    role: 'Executive Chairman',
    image: '/images/team/EddieVoke254.jpg',
    bio: 'Visionary leader with extensive experience in branding and marketing strategy. Kelvin drives our company vision and ensures we deliver exceptional value to every client.'
  },
  {
    id: 'evans-mutiga',
    name: 'Evans Mutiga',
    role: 'Chief Operations Officer(COO)',
    image: '/images/team/Evans1.png',
    bio: 'Driving growth and fostering key partnerships, Evans excels at identifying opportunities and creating tailored solutions that exceed client expectations.'
  }
];

const TeamSection = () => {
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
        backgroundColor: '#f9f9f9',
        backgroundImage: 'linear-gradient(315deg, #f9f9f9 0%, #eeeeee 74%)',
      }}
    >
      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#D4AF34]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - Styling consistent with FAQ section */}
        <div className="text-center mb-10">
          <div className="inline-block mb-4 bg-[#D4AF34]/10 px-3 py-1 rounded">
            <span className="text-[#D4AF34] text-sm uppercase tracking-widest font-semibold">Our Team</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Leadership <span className="text-[#D4AF34]">Team</span>
          </h2>
          <div className="w-16 h-1 bg-[#D4AF34] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Meet the exceptional team driving our mission to sort your brand through innovative marketing and advertising solutions.
          </p>
        </div>

        {/* Team Grid - Optimized for 2 members */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`
                  transform transition-all duration-700
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
                `}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Card with better proportions for 2-column layout */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col border border-gray-100 max-w-sm mx-auto">
                  {/* Image Container with fixed aspect ratio and better handling */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                      style={{ 
                        objectFit: 'cover', 
                        objectPosition: 'center 20%' 
                      }}
                      className="hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Gold accent bar at the bottom of image */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#D4AF34]"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-[#D4AF34] font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed flex-grow">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Join the team CTA - Styled more like FAQ section */}
        <div 
          className={`
            bg-black rounded-lg p-8 md:p-10 shadow-md max-w-4xl mx-auto mt-12
            transform transition-all duration-1000 delay-500
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-white mb-3">Join Our Team</h3>
              <p className="text-white/80 leading-relaxed">
                Are you passionate about branding and marketing? We're always looking for talented individuals with the right mindset to join our growing team.
              </p>
            </div>
            <a 
              href="/careers" 
              className="inline-block bg-[#D4AF34] hover:bg-white hover:text-black text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 text-center whitespace-nowrap"
            >
              View Careers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;