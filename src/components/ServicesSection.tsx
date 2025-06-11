// src/components/ServicesSection.tsx
"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FaBullhorn, FaNewspaper, FaCalendarAlt, FaCamera, FaComments, FaWifi, FaGlobe, FaPencilAlt, FaChartLine, FaPalette, FaPrint, FaUsers, FaGraduationCap } from 'react-icons/fa';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const services: Service[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Tailored digital marketing campaigns that enhance brand awareness, drive traffic, generate leads, and increase conversions for a higher ROI.',
    icon: <FaChartLine className="text-white text-3xl" />,
    link: '/solutions/digital-marketing',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'High-quality, eye-catching, and simple customized designs to help you stand out, create a positive impression, and effectively promote your products and services.',
    icon: <FaPalette className="text-white text-3xl" />,
    link: '/solutions/graphic-design',
  },
  {
    id: 'printing-outdoor-advertising',
    title: 'Printing & Outdoor Advertising',
    description: 'Professional printing and outdoor advertising solutions including billboards, business cards, banners, vehicle wrapping, and large format printing services.',
    icon: <FaPrint className="text-white text-3xl" />,
    link: '/solutions/printing-outdoor-advertising',
  },
  {
    id: 'photography-videography',
    title: 'Photography & Videography',
    description: 'Professional photography and videography services to capture beautiful shots and amazing footage at various events, along with eye-catching promotional videos.',
    icon: <FaCamera className="text-white text-3xl" />,
    link: '/solutions/photography',
  },
  // {
  //   id: 'influencer-marketing',
  //   title: 'Influencer Marketing',
  //   description: 'Strategic influencer marketing guidance, including selection of suitable brand ambassadors, management of influencers, and measurement of engagement and ROI.',
  //   icon: <FaUsers className="text-white text-3xl" />,
  //   link: '/solutions/influencer-marketing',
  // },
  {
    id: 'digital-marketing-consultation',
    title: 'Consultation',
    description: 'Comprehensive consultation services for businesses of all sizes, helping leverage available tools to generate high-quality leads and achieve strong ROI.',
    icon: <FaComments className="text-white text-3xl" />,
    link: '/solutions/consultation',
  },
  // {
  //   id: 'website-design',
  //   title: 'Website Design & Development',
  //   description: 'Custom websites that work as hard as you do. Responsive, user-friendly designs that convert visitors into customers and drive business growth.',
  //   icon: <FaGlobe className="text-white text-3xl" />,
  //   link: '/solutions/digital-marketing',
  // },
  {
    id: 'training',
    title: 'Training & Workshops',
    description: 'Professional training programs and workshops to upskill your team in digital marketing, branding strategies, and modern business practices.',
    icon: <FaGraduationCap className="text-white text-3xl" />,
    link: '/solutions/training',
  },
];

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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
        background: 'linear-gradient(135deg, #000000 0%, #D4AF34 100%)',
      }}
    >
      {/* Background overlay pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")',
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How We Do It</h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>

        {/* Services Grid */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> */}
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`
                bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-6 
                transform transition-all duration-700 hover:scale-105 hover:bg-black/40
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
              `}
              style={{
                transitionDelay: `${100 * index}ms`,
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className="w-12 h-12 rounded-full bg-[#D4AF34] flex items-center justify-center mb-4">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              
              <p className="text-white/80 mb-4 min-h-[60px]">
                {service.description}
              </p>
              
              <Link 
                href={service.link}
                className="inline-block text-[#D4AF34] hover:text-white transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;