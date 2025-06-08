// src/components/WhoWeWorkWith.tsx
import Link from 'next/link';
import { 
  FaRocket, 
  FaBuilding, 
  FaTrophy, 
  FaGlobeAfrica 
} from 'react-icons/fa';

interface ClientCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  learnMoreLink: string;
}

const clientCategories: ClientCategory[] = [
  {
    id: 'funded-startups',
    title: 'Funded Startups',
    description: 'Looking for marketing firepower to scale their business.',
    icon: <FaRocket className="text-[#D4AF34] w-10 h-10" />,
    learnMoreLink: '/clients/startups'
  },
  {
    id: 'established-brands',
    title: 'Established Brands',
    description: 'That want to take their marketing to the next level.',
    icon: <FaBuilding className="text-[#D4AF34] w-10 h-10" />,
    learnMoreLink: '/clients/established'
  },
  {
    id: 'top-brands',
    title: 'Top Brands',
    description: 'Who aspire for optimal efficiency to achieve more with less.',
    icon: <FaTrophy className="text-[#D4AF34] w-10 h-10" />,
    learnMoreLink: '/clients/top-brands'
  },
  {
    id: 'impact-brands',
    title: 'Impact Brands',
    description: 'That focus on making a meaningful difference in the world.',
    icon: <FaGlobeAfrica className="text-[#D4AF34] w-10 h-10" />,
    learnMoreLink: '/clients/impact'
  }
];

const WhoWeWorkWith = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">Who we work with</h2>
          <div className="w-16 h-1 bg-[#D4AF34] mx-auto"></div>
        </div>
        
        {/* Client categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14 px-4 md:px-10">
          {clientCategories.map((category) => (
            <div key={category.id} className="flex flex-col items-center text-center md:items-center md:text-center">
              {/* Icon */}
              <div className="mb-6">{category.icon}</div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-3">{category.title}</h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-4 flex-grow">{category.description}</p>
              
              {/* Learn More Link */}
              {/* <Link 
                href={category.learnMoreLink}
                className="text-[#D4AF34] font-medium hover:underline transition-colors"
              >
                Learn More
              </Link> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;