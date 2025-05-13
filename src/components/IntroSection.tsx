// src/components/IntroSection.tsx

import Image from 'next/image';
import Link from 'next/link';

interface ClientLogo {
  id: number;
  name: string;
  zIndex: number;
  logoSrc: string;
}

// Client logos with correct paths
const clientLogos: ClientLogo[] = [
  { 
    id: 1, 
    name: 'Lenovo', 
    zIndex: 100, 
    logoSrc: '/images/logo/2-140x140-lenovo.png'
  },
  { 
    id: 2, 
    name: 'Pearson', 
    zIndex: 99, 
    logoSrc: '/images/logo/3-140x140-pearson.png'
  },
  { 
    id: 3, 
    name: 'Safaricom', 
    zIndex: 98, 
    logoSrc: '/images/logo/1-140x140-saf.png'
  },
  { 
    id: 4, 
    name: 'Air Asia', 
    zIndex: 97, 
    logoSrc: '/images/logo/air-asia.png'
  },
  { 
    id: 5, 
    name: 'Uber', 
    zIndex: 96, 
    logoSrc: '/images/logo/5-140x140-uber.png'
  },
];

const IntroSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading with proper wrapping */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mx-auto max-w-4xl">
            Sort Brands is Africa's top marketing agency.
          </h2>
        </div>

        {/* Main text content */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <p className="text-lg">
            Global brands often miss the mark in Africa. Generic marketing campaigns fail to resonate with African consumers, leading to wasted resources and missed opportunities. At SORT BRANDS, we bridge this gap. As a passionate team of African storytellers, we possess a deep understanding of the continent's diverse cultures, languages, and consumer preferences. We leverage our expertise across Print Advertising, Experiential Marketing, Events Management, Digital Marketing, and Media Relations to craft campaigns that resonate on a deeper emotional level, helping your brand thrive in the dynamic African market.
          </p>
        </div>

        {/* Client logos - tighter spacing */}
        <div className="flex justify-center mb-6">
          <div className="flex justify-center relative h-20 w-[250px]">
            {clientLogos.map((client, index) => (
              <div 
                key={client.id} 
                style={{ 
                  zIndex: client.zIndex,
                  left: `${(index * 40)}px`,
                }}
                className="absolute w-[70px] h-[70px] rounded-full overflow-hidden"
              >
                <Image
                  src={client.logoSrc}
                  alt={client.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="70px"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Rating - reduced spacing */}
        <div className="text-center mb-8">
          <p className="text-xl font-bold">
            Rated <span className="text-[#D4AF34]">(4.9 of 5)</span> by top brands
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link 
            href="/portfolio"
            className="inline-block bg-[#D4AF34] hover:bg-[#000000] hover:text-white text-black font-bold py-4 px-10 rounded-full transition duration-300"
          >
            Our Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;