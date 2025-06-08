// src/components/ClientsSection.tsx
"use client";
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Client {
  id: number;
  name: string;
  logo: string;
}

const clients: Client[] = [
  { id: 1, name: 'International Youth Fellowship', logo: '/images/logo/IYFKenya.jpg' },
  { id: 2, name: 'Weekend Academy', logo: '/images/logo/Weekend-Academy.jpg' },
  { id: 3, name: 'Mahanaim International School', logo: '/images/logo/MIHS.jpg' },
  { id: 4, name: 'GBS TV Africa', logo: '/images/logo/GBS.jpg' },
  { id: 5, name: 'Talanta Hela', logo: '/images/logo/TalantaHela.jpg' },
  { id: 6, name: 'Ministry of Youth Affairs', logo: '/images/logo/MinistryofYouth.jpg' },
  { id: 7, name: 'Zinco Mabati Factory Limited', logo: '/images/logo/ZINCO.jpg' },
  { id: 8, name: 'Mwananchi Credit Limited', logo: '/images/logo/mcl.jpg' },
  { id: 9, name: 'Boomplay Music', logo: '/images/logo/Boomplay.jpg' },
  { id: 10, name: 'Kazicloud Careers', logo: '/images/logo/KaziCloud.jpg' },
  { id: 11, name: 'Derine Marketing', logo: '/images/logo/DerineMarketingAgency.jpg' },
  { id: 12, name: 'Catholic University', logo: '/images/logo/cuea.jpg' },
];

const ClientsSection = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF34] mb-3">Our clients</h2>
          <div className="w-16 h-1 bg-[#D4AF34] mx-auto mb-4"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            We've had the privilege of working with these amazing organizations to help them achieve their marketing and branding goals.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className={`
                bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center 
                h-24 transition-all duration-300 hover:bg-white/20
                transform transition-opacity duration-700
                ${isVisible ? 'opacity-100' : 'opacity-0'}
              `}
              style={{ transitionDelay: `${50 * index}ms` }}
            >
              <div className="relative h-full w-full">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/contacts"
            className="inline-flex items-center bg-[#D4AF34] hover:bg-[#c9a52f] text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg"
          >
            <span>Become Our Client</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;