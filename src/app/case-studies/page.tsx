// src/app/case-studies/page.tsx
"use client";
import { useState } from 'react';
import CaseStudiesBanner from '@/components/case-studies/CaseStudiesBanner';
import CaseStudiesGrid from '@/components/case-studies/CaseStudiesGrid';
import CaseStudiesFilter from '@/components/case-studies/CaseStudiesFilter';
import FeaturedCaseStudy from '@/components/case-studies/FeaturedCaseStudy';
import ClientsSection from '@/components/case-studies/ClientsSection';


type Category = 'all' | 'digital-marketing' | 'branding' | 'web-development' | 'design' | 'social-media';
type Industry = 'all' | 'education' | 'entertainment' | 'finance' | 'government' | 'manufacturing' | 'nonprofit';

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [activeIndustry, setActiveIndustry] = useState<Industry>('all');

  const handleFilterChange = (category: Category, industry: Industry) => {
    setActiveCategory(category);
    setActiveIndustry(industry);
  };

  return (
    <main>
      {/* Case Studies Banner */}
      <CaseStudiesBanner 
        title="Case Studies"
        subtitle="Explore how we've helped our clients achieve remarkable results through strategic branding and marketing."
        backgroundImage="/images/case-studies-banner.jpg"
      />
      
      {/* Featured Case Study Section */}
      <FeaturedCaseStudy />
      
      {/* Filter and Case Studies Grid */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <CaseStudiesFilter onFilterChange={handleFilterChange} />
          
          {/* Filter results summary */}
          {(activeCategory !== 'all' || activeIndustry !== 'all') && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-black mb-2">
                {activeCategory === 'all' && activeIndustry !== 'all' && (
                  <>Results for {activeIndustry.charAt(0).toUpperCase() + activeIndustry.slice(1)} Industry</>
                )}
                {activeCategory !== 'all' && activeIndustry === 'all' && (
                  <>Results for {activeCategory.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Projects</>
                )}
                {activeCategory !== 'all' && activeIndustry !== 'all' && (
                  <>Results for {activeCategory.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Projects in {activeIndustry.charAt(0).toUpperCase() + activeIndustry.slice(1)} Industry</>
                )}
              </h3>
            </div>
          )}
          
          {/* Case Studies Grid */}
          <CaseStudiesGrid 
            activeCategory={activeCategory} 
            activeIndustry={activeIndustry}
          />
        </div>
      </section>
      
      {/* Clients Section */}
      <ClientsSection />
    </main>
  );
}