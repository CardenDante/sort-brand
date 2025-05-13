// File: src/components/PageBanner.tsx

import Image from 'next/image';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageBannerProps {
  title: string;
  description?: string;
  backgroundImage: string;
  breadcrumbs?: BreadcrumbItem[];
}

const PageBanner = ({ 
  title, 
  description, 
  backgroundImage,
  breadcrumbs 
}: PageBannerProps) => {
  return (
    <section className="relative h-80 flex items-center justify-center text-white" id="top">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {breadcrumbs && (
          <div className="flex justify-center mb-4 text-sm">
            <div className="flex items-center">
              <Link href="/" className="text-gray-300 hover:text-brand-gold">
                Home
              </Link>
              
              {breadcrumbs.map((item, index) => (
                <div key={index} className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-brand-gold">{item.label}</span>
                  ) : (
                    <Link href={item.href} className="text-gray-300 hover:text-brand-gold">
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <div className="w-20 h-1 bg-brand-gold mx-auto mb-6"></div>
        
        {description && (
          <p className="text-lg max-w-3xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageBanner;