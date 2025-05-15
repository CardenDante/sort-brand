// src/components/ContactBanner.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaHome, FaChevronRight } from 'react-icons/fa';

interface ContactBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const ContactBanner = ({
  title,
  subtitle,
  backgroundImage = "/images/contact-us-banner.jpg",
}: ContactBannerProps) => {
  return (
    <section className="relative">
      {/* Background Image with Black Overlay */}
      <div className="relative h-[281px] overflow-hidden">
        {/* Background Image */}
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        
        {/* Content Container */}
        <div className="container mx-auto px-4 relative h-full z-10 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-white/80 max-w-2xl mx-auto text-lg">{subtitle}</p>
          )}
        </div>
      </div>
      
      {/* Breadcrumbs Section */}
      <div className="bg-[#f5f5f5] border-b border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="py-4">
            <ol className="flex items-center flex-wrap">
              <li className="flex items-center">
                <FaHome className="mr-1 text-gray-500" />
                <Link 
                  href="/" 
                  className="text-gray-500 hover:text-[#D4AF34] transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              
              <li className="flex items-center">
                <FaChevronRight className="mx-2 text-xs text-gray-400" />
                <span className="text-[#D4AF34] font-medium">Contact Us</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;