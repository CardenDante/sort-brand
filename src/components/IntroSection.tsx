// src/components/IntroSection.tsx

import Image from 'next/image';
import Link from 'next/link';

interface ClientLogo {
  id: number;
  name: string;
  logoSrc: string;
  bgColor: string;
}

// Sample client logos - replace with your actual clients
const clientLogos: ClientLogo[] = [
  { id: 1, name: 'Client 1', logoSrc: '/images/clients/client1.png', bgColor: '#E32727' },  // Red like AirAsia
  { id: 2, name: 'Client 2', logoSrc: '/images/clients/client2.png', bgColor: '#000000' },  // Black like Uber
  { id: 3, name: 'Client 3', logoSrc: '/images/clients/client3.png', bgColor: '#00A3E0' },  // Blue like Pearson
  { id: 4, name: 'Client 4', logoSrc: '/images/clients/client4.png', bgColor: '#00AF3F' },  // Green like Safaricom
  { id: 5, name: 'Client 5', logoSrc: '/images/clients/client5.png', bgColor: '#E32727' },  // Red again
];

const IntroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading with underline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            Sort Brands is Africa's top marketing agency.
          </h2>
          {/* Curved underline */}
          <div className="relative w-full flex justify-center mt-4 mb-2">
            <svg className="w-96 h-6" viewBox="0 0 384 24">
              <path 
                d="M0,12 C64,4 128,20 192,12 C256,4 320,20 384,12" 
                stroke="#D4AF34" 
                strokeWidth="2" 
                fill="none" 
              />
            </svg>
          </div>
        </div>

        {/* Main text content */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <p className="text-lg leading-relaxed">
            Global brands often miss the mark in Africa. Generic marketing campaigns fail to resonate with African consumers, leading to wasted resources and missed opportunities. At SORT BRANDS, we bridge this gap. As a passionate team of African storytellers, we possess a deep understanding of the continent's diverse cultures, languages, and consumer preferences. We leverage our expertise across Print Advertising, Experiential Marketing, Events Management, Digital Marketing, and Media Relations to craft campaigns that resonate on a deeper emotional level, helping your brand thrive in the dynamic African market.
          </p>
        </div>

        {/* Client logos in circular arrangement */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center">
            {clientLogos.map((client) => (
              <div 
                key={client.id} 
                className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex items-center justify-center mx-1"
                style={{ backgroundColor: client.bgColor }}
              >
                <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                  <Image
                    src={client.logoSrc}
                    alt={client.name}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div className="text-center mb-12">
          <p className="text-xl font-bold">
            Rated <span className="text-[#D4AF34]">(4.9 of 5)</span> by top brands
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link 
            href="/portfolio"
            className="inline-block bg-[#003087] hover:bg-[#002266] text-white font-bold py-4 px-10 rounded-full transition duration-300"
          >
            Our Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;