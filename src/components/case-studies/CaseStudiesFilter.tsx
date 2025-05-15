// src/components/CaseStudiesFilter.tsx
"use client";
import { useState, useEffect } from 'react';

type Category = 'all' | 'digital-marketing' | 'branding' | 'web-development' | 'design' | 'social-media';
type Industry = 'all' | 'education' | 'entertainment' | 'finance' | 'government' | 'manufacturing' | 'nonprofit';

interface CaseStudiesFilterProps {
  onFilterChange: (category: Category, industry: Industry) => void;
}

const CaseStudiesFilter = ({ onFilterChange }: CaseStudiesFilterProps) => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [activeIndustry, setActiveIndustry] = useState<Industry>('all');
  const [mobileFiltersVisible, setMobileFiltersVisible] = useState(false);

  // Apply filters when they change
  useEffect(() => {
    onFilterChange(activeCategory, activeIndustry);
  }, [activeCategory, activeIndustry, onFilterChange]);

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
  };

  const handleIndustryChange = (industry: Industry) => {
    setActiveIndustry(industry);
  };

  const toggleMobileFilters = () => {
    setMobileFiltersVisible(!mobileFiltersVisible);
  };

  // Reset all filters
  const resetFilters = () => {
    setActiveCategory('all');
    setActiveIndustry('all');
  };

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'digital-marketing', label: 'Digital Marketing' },
    { id: 'branding', label: 'Branding' },
    { id: 'web-development', label: 'Web Development' },
    { id: 'design', label: 'Graphic Design' },
    { id: 'social-media', label: 'Social Media' }
  ];

  const industries = [
    { id: 'all', label: 'All Industries' },
    { id: 'education', label: 'Education' },
    { id: 'entertainment', label: 'Entertainment' },
    { id: 'finance', label: 'Finance' },
    { id: 'government', label: 'Government' },
    { id: 'manufacturing', label: 'Manufacturing' },
    { id: 'nonprofit', label: 'Non-Profit' }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-black mb-3">Explore Our Work</h2>
        <div className="w-16 h-1 bg-[#D4AF34] mx-auto mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Filter through our case studies to see how we've helped clients across different industries and service categories.
        </p>
      </div>

      {/* Desktop Filters */}
      <div className="hidden md:block">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-black">Filter Case Studies</h3>
            
            {/* Reset button - only show if filters are active */}
            {(activeCategory !== 'all' || activeIndustry !== 'all') && (
              <button 
                onClick={resetFilters}
                className="text-sm text-[#D4AF34] hover:text-black transition-colors flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Reset Filters
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {/* Service Categories */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Service Category</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id as Category)}
                    className={`flex items-center w-full text-left px-3 py-2 rounded-md text-sm transition-all ${
                      activeCategory === category.id
                        ? 'bg-[#D4AF34]/10 text-[#D4AF34] font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span 
                      className={`w-4 h-4 rounded-full mr-3 border ${
                        activeCategory === category.id 
                          ? 'border-[#D4AF34] bg-[#D4AF34]' 
                          : 'border-gray-300'
                      }`}
                    ></span>
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Industries */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Industry</h4>
              <div className="space-y-2">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => handleIndustryChange(industry.id as Industry)}
                    className={`flex items-center w-full text-left px-3 py-2 rounded-md text-sm transition-all ${
                      activeIndustry === industry.id
                        ? 'bg-[#D4AF34]/10 text-[#D4AF34] font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span 
                      className={`w-4 h-4 rounded-full mr-3 border ${
                        activeIndustry === industry.id 
                          ? 'border-[#D4AF34] bg-[#D4AF34]' 
                          : 'border-gray-300'
                      }`}
                    ></span>
                    {industry.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Active filters display */}
        {(activeCategory !== 'all' || activeIndustry !== 'all') && (
          <div className="bg-gray-50 rounded-lg p-4 mb-8 flex items-center">
            <span className="text-sm text-gray-500 mr-3">Active Filters:</span>
            <div className="flex flex-wrap gap-2">
              {activeCategory !== 'all' && (
                <div className="bg-[#D4AF34] text-black text-xs px-3 py-1 rounded-full flex items-center">
                  {categories.find(c => c.id === activeCategory)?.label}
                  <button 
                    onClick={() => setActiveCategory('all')}
                    className="ml-2 hover:text-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              )}
              {activeIndustry !== 'all' && (
                <div className="bg-[#D4AF34] text-black text-xs px-3 py-1 rounded-full flex items-center">
                  {industries.find(i => i.id === activeIndustry)?.label}
                  <button 
                    onClick={() => setActiveIndustry('all')}
                    className="ml-2 hover:text-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Filters */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileFilters}
          className="w-full bg-white p-4 rounded-lg shadow-md flex items-center justify-between mb-4"
        >
          <span className="font-medium text-gray-800">Filter Case Studies</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${mobileFiltersVisible ? 'transform rotate-180' : ''}`} 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        
        {/* Mobile Filter Panel */}
        {mobileFiltersVisible && (
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            {/* Categories */}
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Service Category</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id as Category)}
                    className={`flex items-center w-full text-left px-3 py-2 rounded-md text-sm transition-all ${
                      activeCategory === category.id
                        ? 'bg-[#D4AF34]/10 text-[#D4AF34] font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span 
                      className={`w-4 h-4 rounded-full mr-3 border ${
                        activeCategory === category.id 
                          ? 'border-[#D4AF34] bg-[#D4AF34]' 
                          : 'border-gray-300'
                      }`}
                    ></span>
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Industries */}
            <div className="mb-4">
              <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Industry</h4>
              <div className="space-y-2">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => handleIndustryChange(industry.id as Industry)}
                    className={`flex items-center w-full text-left px-3 py-2 rounded-md text-sm transition-all ${
                      activeIndustry === industry.id
                        ? 'bg-[#D4AF34]/10 text-[#D4AF34] font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span 
                      className={`w-4 h-4 rounded-full mr-3 border ${
                        activeIndustry === industry.id 
                          ? 'border-[#D4AF34] bg-[#D4AF34]' 
                          : 'border-gray-300'
                      }`}
                    ></span>
                    {industry.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex justify-between pt-4 border-t border-gray-200">
              <button 
                onClick={resetFilters}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Reset All
              </button>
              <button 
                onClick={toggleMobileFilters}
                className="text-sm font-medium text-[#D4AF34] hover:text-black"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}
        
        {/* Display active filters on mobile */}
        {(activeCategory !== 'all' || activeIndustry !== 'all') && (
          <div className="bg-gray-50 rounded-lg p-3 mb-6 flex flex-wrap gap-2">
            {activeCategory !== 'all' && (
              <div className="bg-[#D4AF34] text-black text-xs px-3 py-1 rounded-full flex items-center">
                {categories.find(c => c.id === activeCategory)?.label}
                <button 
                  onClick={() => setActiveCategory('all')}
                  className="ml-2 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            )}
            {activeIndustry !== 'all' && (
              <div className="bg-[#D4AF34] text-black text-xs px-3 py-1 rounded-full flex items-center">
                {industries.find(i => i.id === activeIndustry)?.label}
                <button 
                  onClick={() => setActiveIndustry('all')}
                  className="ml-2 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudiesFilter;