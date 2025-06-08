// src/components/CaseStudiesGrid.tsx
"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

type Category = 'all' | 'digital-marketing' | 'branding' | 'web-development' | 'design' | 'social-media' | 'training';
type Industry = 'all' | 'education' | 'entertainment' | 'finance' | 'government' | 'manufacturing' | 'nonprofit' | 'corporate';

interface CaseStudy {
  id: string;
  title: string;
  clientName: string;
  image: string;
  category: string;
  industry: string;
  result: string;
  resultNumber: string;
  description: string;
  size: 'normal' | 'wide';
}

// Sample case studies data - in a real app, this would come from a database or API
const allCaseStudies: CaseStudy[] = [
  {
    id: 'boomplay-music',
    title: 'Streaming App User Engagement Campaign',
    clientName: 'Boomplay Music',
    image: '/images/case-studies/boomplay-case-study.jpeg',
    category: 'digital-marketing',
    industry: 'entertainment',
    result: 'Increase in User Engagement',
    resultNumber: '75%',
    description: 'Comprehensive digital marketing strategy that combined social media campaigns, influencer partnerships, and targeted advertising.',
    size: 'wide'
  },
  {
    id: 'mahanaim-school',
    title: 'Educational Institution Rebrand',
    clientName: 'Mahanaim International School',
    image: '/images/case-studies/mahanaim-case-study1.jpeg',
    category: 'branding',
    industry: 'education',
    result: 'Increase in Student Applications',
    resultNumber: '45%',
    description: 'Complete rebranding including visual identity, messaging, and marketing collateral to position the school as a premier educational institution.',
    size: 'normal'
  },
  {
    id: 'mwananchi-credit',
    title: 'Financial Services Digital Transformation',
    clientName: 'Mwananchi Credit Limited',
    image: '/images/case-studies/ssr1.jpg',
    category: 'Outdoor Advertising',
    industry: 'finance',
    result: 'Increase in Online Loan Applications',
    resultNumber: '120%',
    description: 'Digital transformation project that included website redesign, online application system, and integrated marketing strategy.',
    size: 'normal'
  },
  {
    id: 'youth-affairs',
    title: 'Government Youth Program Campaign',
    clientName: 'Ministry of Youth Affairs',
    image: '/images/case-studies/youth-affairs-case-study.jpg',
    category: 'social-media',
    industry: 'government',
    result: 'Youth Program Participants',
    resultNumber: '10,000+',
    description: 'Nationwide social media campaign to increase awareness and participation in government youth programs.',
    size: 'normal'
  },
  {
    id: 'zinco-mabati',
    title: 'Manufacturing Brand Identity',
    clientName: 'Zinco Mabati Factory Limited',
    image: '/images/case-studies/zinco-case-study1.jpg',
    category: 'branding',
    industry: 'manufacturing',
    result: 'Increase in Brand Recognition',
    resultNumber: '60%',
    description: 'Brand identity development and marketing strategy for a leading roofing materials manufacturer.',
    size: 'normal'
  },
  {
    id: 'international-youth-fellowship',
    title: 'Global Non-Profit Event Campaign',
    clientName: 'International Youth Fellowship',
    image: '/images/case-studies/iyf-case-study1.jpg',
    category: 'Event Marketing',
    industry: 'nonprofit',
    result: 'Event Participants',
    resultNumber: '5,000+',
    description: 'Comprehensive event marketing campaign including print materials, digital advertising, and social media strategy.',
    size: 'wide'
  },
  {
    id: 'corporate-training-event',
    title: 'Corporate Training & Development Program',
    clientName: 'TechCorp Solutions',
    image: '/images/case-studies/corporate-training-case-study.jpg',
    category: 'training',
    industry: 'corporate',
    result: 'Employee Skill Improvement',
    resultNumber: '85%',
    description: 'Comprehensive corporate training program including digital marketing workshops, brand strategy sessions, leadership development, and skill assessment tracking.',
    size: 'normal'
  }
];

interface CaseStudiesGridProps {
  activeCategory?: Category;
  activeIndustry?: Industry;
}

const CaseStudiesGrid = ({ activeCategory = 'all', activeIndustry = 'all' }: CaseStudiesGridProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [filteredCaseStudies, setFilteredCaseStudies] = useState<CaseStudy[]>(allCaseStudies);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Apply filters when they change
  useEffect(() => {
    let result = allCaseStudies;
    
    // Filter by category if not 'all'
    if (activeCategory !== 'all') {
      result = result.filter(study => study.category === activeCategory);
    }
    
    // Filter by industry if not 'all'
    if (activeIndustry !== 'all') {
      result = result.filter(study => study.industry === activeIndustry);
    }
    
    setFilteredCaseStudies(result);
  }, [activeCategory, activeIndustry]);

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

  if (filteredCaseStudies.length === 0) {
    return (
      <div className="text-center py-16 bg-gray-50 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-bold text-gray-700 mb-2">No Case Studies Found</h3>
        <p className="text-gray-500 max-w-md mx-auto">
          We couldn't find any case studies that match your current filters. Try adjusting your filters or browse all of our work.
        </p>
      </div>
    );
  }

  return (
    <div ref={sectionRef} className="grid grid-cols-12 gap-6">
      {filteredCaseStudies.map((study, index) => (
        <div
          key={study.id}
          className={`
            ${study.size === 'wide' ? 'col-span-12 md:col-span-8' : 'col-span-12 md:col-span-4'}
            relative overflow-hidden rounded-lg shadow-lg bg-white
            transform transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
          style={{
            transitionDelay: `${150 * index}ms`,
          }}
        >
          {/* Image Section */}
          <div className="relative h-64 overflow-hidden">
            <Image
              src={study.image}
              alt={study.title}
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute top-0 right-0 m-4">
              <span className="inline-block bg-[#D4AF34] text-black text-xs font-semibold px-3 py-1 rounded-full">
                {study.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </span>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-black flex-1">{study.title}</h3>
              <div className="p-3 bg-gray-100 rounded-lg text-center min-w-[80px]">
                <div className="text-[#D4AF34] font-bold text-xl">{study.resultNumber}</div>
                <div className="text-gray-600 text-xs">Result</div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">{study.description}</p>
            
            {/* <Link 
              href={`/case-studies/${study.id}`}
              className="inline-flex items-center text-[#D4AF34] font-semibold hover:text-black transition-colors duration-300"
            >
              <span>View Case Study</span>
              <FaArrowRight className="ml-2" />
            </Link> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CaseStudiesGrid;