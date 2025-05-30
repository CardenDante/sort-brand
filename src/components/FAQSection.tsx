// src/components/FAQSection.tsx
"use client";
import { useRef, useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What services does Sortbrands Group offer?",
    answer: "We offer a comprehensive range of services including Digital Marketing, Social Media Marketing, Content Creation, Web Development, Email Marketing, Graphic Design, Branding, Photography & Videography, and Influencer Marketing. We provide tailored solutions to help businesses establish their brand identity and grow their digital presence."
  },
  {
    question: "How can Digital Marketing help my business?",
    answer: "Our Digital Marketing services can enhance brand awareness, drive website traffic, generate quality leads, and increase conversions, all contributing to a higher Return on Investment (ROI). We create tailored campaigns that connect with your target audience and achieve measurable results."
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer: "Yes, we work with startups, small businesses, medium-sized enterprises, and large corporations. Our solutions are scalable and can be customized to meet the specific needs and budget of any business size."
  },
  {
    question: "What makes Sortbrands Group different from other agencies?",
    answer: "What sets us apart is our unique approach of not just solving business needs through advertising and marketing, but also mentoring business owners to develop the mindset to succeed both in business and in the spiritual realm. We're dedicated to sorting your brand through innovative solutions while helping you grow personally."
  },
  {
    question: "How do I get started with your services?",
    answer: "Getting started is simple! You can contact us via phone at +254 742 906 505, WhatsApp, or email at sortbrandske@gmail.com. We'll schedule a consultation to understand your business needs and recommend the most suitable solutions for your brand."
  },
  {
    question: "Do you offer consultation services?",
    answer: "Yes, we offer comprehensive digital marketing consultation services to startups, medium-sized businesses, and large enterprises. We help you leverage all available tools to generate high-quality leads that translate into a strong return on investment."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
      className="py-24 relative"
      style={{
        backgroundColor: '#000000',
        backgroundImage: `radial-gradient(circle at 50% 50%, #111111 0%, #000000 70%)`,
      }}
    >
      {/* Gold accent elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-[#D4AF34]"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 bg-[#D4AF34]"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column - Title and description */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="sticky top-24">
              <div className="inline-block mb-4 bg-[#D4AF34]/10 px-3 py-1 rounded">
                <span className="text-[#D4AF34] text-sm uppercase tracking-widest font-semibold">Got Questions?</span>
              </div>
              
              <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
                Frequently <span className="text-[#D4AF34]">Asked</span> Questions
              </h2>
              
              <p className="text-white/70 text-lg mb-8 leading-relaxed max-w-md">
                Find answers to common questions about our services and how we can help sort your business needs. If you have more questions, our team is ready to assist you.
              </p>
              
              <div className="p-6 border border-[#D4AF34] rounded-lg bg-black">
                <h3 className="text-[#D4AF34] text-xl font-bold mb-3">Need More Help?</h3>
                <p className="text-white/80 mb-4">Our team is available to answer any specific questions about our services.</p>
                
                <div className="space-y-3">
                  <a href="tel:+254742906505" className="flex items-center space-x-3 text-white hover:text-[#D4AF34] transition-colors">
                    <div className="w-8 h-8 rounded-full bg-[#D4AF34]/20 flex items-center justify-center text-[#D4AF34]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span>+254 742 906 505</span>
                  </a>
                  
                  <a href="mailto:sortbrandske@gmail.com" className="flex items-center space-x-3 text-white hover:text-[#D4AF34] transition-colors">
                    <div className="w-8 h-8 rounded-full bg-[#D4AF34]/20 flex items-center justify-center text-[#D4AF34]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span>sortbrandske@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - FAQ Accordion */}
          <div>
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`
                  mb-4 
                  transform transition-all duration-700
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{
                  transitionDelay: `${150 * index}ms`,
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`
                    w-full flex items-center justify-between p-6 text-left 
                    transition-all duration-300 rounded-lg
                    ${openIndex === index 
                      ? 'bg-[#D4AF34] text-black' 
                      : 'bg-black border border-[#D4AF34]/30 text-white hover:border-[#D4AF34]/70'}
                  `}
                >
                  <span className="text-lg font-semibold pr-8">{item.question}</span>
                  <span className={`flex-shrink-0 ${openIndex === index ? 'text-black' : 'text-[#D4AF34]'}`}>
                    {openIndex === index ? <FaMinus size={16} /> : <FaPlus size={16} />}
                  </span>
                </button>
                <div
                  className={`
                    overflow-hidden transition-all duration-500 ease-in-out
                    ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="p-6 text-white/80 border-x border-b border-[#D4AF34]/30 rounded-b-lg">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}

            <div 
              className={`
                mt-8 ml-6 border-l-2 border-[#D4AF34] pl-6 py-2
                transform transition-all duration-1000 delay-700
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              <p className="text-[#D4AF34] font-medium mb-1">Our Mission</p>
              <p className="text-white">To sort business needs by delivering high-quality advertising, marketing, and branding services to both local and international markets</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;