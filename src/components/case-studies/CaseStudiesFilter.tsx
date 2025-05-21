// src/components/CaseStudiesFilter.tsx
"use client";
import { useState, useEffect } from 'react';
import { Filter, X, ChevronDown } from 'lucide-react';

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
    <div className="mb-8">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-black mb-2">Explore Our Work</h2>
        <div className="w-16 h-1 bg-[#D4AF34] mx-auto mb-3"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Filter through our case studies to see how we've helped clients across different industries.
        </p>
      </div>

      {/* Desktop Filters - Horizontal Design */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between bg-white rounded-lg shadow-sm border border-gray-100 p-3">
          <div className="flex items-center space-x-4">
            {/* Categories Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50 flex items-center text-sm font-medium">
                <span>Category: </span>
                <span className={activeCategory !== 'all' ? "ml-1 text-[#D4AF34]" : "ml-1"}>
                  {categories.find(c => c.id === activeCategory)?.label}
                </span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              <div className="absolute left-0 mt-1 bg-white rounded-md shadow-md border border-gray-100 w-56 overflow-hidden z-10 hidden group-hover:block">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id as Category)}
                    className={`flex items-center w-full text-left px-4 py-2 text-sm transition-colors ${
                      activeCategory === category.id
                        ? 'bg-[#D4AF34]/10 text-[#D4AF34] font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="w-px h-6 bg-gray-300"></div>
            
            {/* Industries Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50 flex items-center text-sm font-medium">
                <span>Industry: </span>
                <span className={activeIndustry !== 'all' ? "ml-1 text-[#D4AF34]" : "ml-1"}>
                  {industries.find(i => i.id === activeIndustry)?.label}
                </span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              <div className="absolute left-0 mt-1 bg-white rounded-md shadow-md border border-gray-100 w-56 overflow-hidden z-10 hidden group-hover:block">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => handleIndustryChange(industry.id as Industry)}
                    className={`flex items-center w-full text-left px-4 py-2 text-sm transition-colors ${
                      activeIndustry === industry.id
                        ? 'bg-[#D4AF34]/10 text-[#D4AF34] font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {industry.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Reset button - only show if filters are active */}
          {(activeCategory !== 'all' || activeIndustry !== 'all') ? (
            <button 
              onClick={resetFilters}
              className="text-sm text-gray-500 hover:text-[#D4AF34] transition-colors flex items-center px-3 py-1"
            >
              <X className="w-4 h-4 mr-1" />
              Reset
            </button>
          ) : (
            <div className="flex items-center text-gray-400 text-sm px-3">
              <Filter className="w-4 h-4 mr-1" />
              Filter Results
            </div>
          )}
        </div>
        
        {/* Active filters display - only if needed */}
        {(activeCategory !== 'all' || activeIndustry !== 'all') && (
          <div className="mt-3 flex items-center flex-wrap gap-2">
            <span className="text-xs text-gray-500">Active Filters:</span>
            {activeCategory !== 'all' && (
              <div className="bg-[#D4AF34]/10 border border-[#D4AF34]/20 text-[#D4AF34] text-xs px-2 py-1 rounded-full flex items-center">
                {categories.find(c => c.id === activeCategory)?.label}
                <button 
                  onClick={() => setActiveCategory('all')}
                  className="ml-1 hover:text-black"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}
            {activeIndustry !== 'all' && (
              <div className="bg-[#D4AF34]/10 border border-[#D4AF34]/20 text-[#D4AF34] text-xs px-2 py-1 rounded-full flex items-center">
                {industries.find(i => i.id === activeIndustry)?.label}
                <button 
                  onClick={() => setActiveIndustry('all')}
                  className="ml-1 hover:text-black"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Filters */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileFilters}
          className="w-full bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between"
        >
          <div className="flex items-center">
            <Filter className="w-4 h-4 mr-2 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Filter Results</span>
            
            {/* Show active filter count if any */}
            {(activeCategory !== 'all' || activeIndustry !== 'all') && (
              <div className="ml-2 bg-[#D4AF34] text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {(activeCategory !== 'all' ? 1 : 0) + (activeIndustry !== 'all' ? 1 : 0)}
              </div>
            )}
          </div>
          
          <ChevronDown 
            className={`h-4 w-4 text-gray-500 transition-transform duration-300 ${mobileFiltersVisible ? 'transform rotate-180' : ''}`}
          />
        </button>
        
        {/* Mobile Filter Panel - Slide down with animation */}
        <div 
          className={`transition-all duration-300 overflow-hidden ${
            mobileFiltersVisible ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
            {/* Categories */}
            <div className="mb-4">
              <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Service Category</h4>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id as Category)}
                    className={`text-left px-3 py-2 rounded-md text-xs transition-all ${
                      activeCategory === category.id
                        ? 'bg-[#D4AF34]/10 text-[#D4AF34] font-medium border border-[#D4AF34]/20'
                        : 'text-gray-700 hover:bg-gray-50 border border-gray-100'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Industries */}
            <div className="mb-4">
              <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Industry</h4>
              <div className="grid grid-cols-2 gap-2">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => handleIndustryChange(industry.id as Industry)}
                    className={`text-left px-3 py-2 rounded-md text-xs transition-all ${
                      activeIndustry === industry.id
                        ? 'bg-[#D4AF34]/10 text-[#D4AF34] font-medium border border-[#D4AF34]/20'
                        : 'text-gray-700 hover:bg-gray-50 border border-gray-100'
                    }`}
                  >
                    {industry.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex justify-between pt-3 border-t border-gray-100">
              <button 
                onClick={resetFilters}
                className="text-xs text-gray-500 hover:text-gray-700 px-3 py-2"
              >
                Reset All
              </button>
              <button 
                onClick={toggleMobileFilters}
                className="text-xs font-medium bg-[#D4AF34] text-black px-4 py-2 rounded-md hover:bg-[#D4AF34]/90"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesFilter;