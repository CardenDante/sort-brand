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
    role: 'Chairman',
    image: '/images/team/Kelvin.jpg',
    bio: 'Visionary leader with extensive experience in branding and marketing strategy. Kelvin drives our company vision and ensures we deliver exceptional value to every client.'
  },
  {
    id: 'yohan-kim',
    name: 'Yohan Kim',
    role: 'Chief Advisor',
    image: '/images/team/yohan-kim.jpg',
    bio: 'With a rich international background, Yohan brings global perspective and strategic insight to our operations, helping clients navigate complex marketing challenges.'
  },
  {
    id: 'evans-mutiga',
    name: 'Evans Mutiga',
    role: 'Business Development Officer',
    image: '/images/team/Evans.jpg',
    bio: 'Driving growth and fostering key partnerships, Evans excels at identifying opportunities and creating tailored solutions that exceed client expectations.'
  }
];

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTeamMember, setActiveTeamMember] = useState<string | null>(null);
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
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">Our Leadership Team</h2>
          <div className="w-16 h-1 bg-[#D4AF34] mx-auto mb-3"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Meet the exceptional team driving our mission to sort your brand through innovative marketing and advertising solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`
                transform transition-all duration-700
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveTeamMember(member.id)}
              onMouseLeave={() => setActiveTeamMember(null)}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-60 md:h-70 overflow-hidden">
                  {/* Use Next.js Image component with actual image path */}
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    priority={index === 0}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Gold overlay on hover */}
                  <div className="absolute inset-0 bg-[#D4AF34] mix-blend-overlay opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="p-4 md:p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#D4AF34] font-medium mb-2 text-sm">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Join the team CTA */}
        <div 
          className={`
            bg-black rounded-lg p-6 md:p-8 shadow-xl max-w-4xl mx-auto
            transform transition-all duration-1000 delay-500
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 md:mr-8">
              <h3 className="text-xl font-bold text-white mb-2">Join Our Team</h3>
              <p className="text-white/70 text-sm">
                Are you passionate about branding and marketing? We're always looking for talented individuals to join our growing team.
              </p>
            </div>
            <a 
              href="/careers" 
              className="inline-block bg-[#D4AF34] hover:bg-[#c9a52f] text-black font-bold py-2 px-6 rounded-lg transition-all duration-300 shadow-lg text-center whitespace-nowrap"
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