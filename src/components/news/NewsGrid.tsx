// src/components/news/NewsGrid.tsx
"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';

// Article type definition
interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
  featured: boolean;
}

// Sample articles data
const allArticles: Article[] = [
  {
    id: '1',
    slug: 'top-branding-trends-2025',
    title: 'Top 10 Branding Trends to Watch in 2025',
    excerpt: 'Discover the emerging branding trends that will shape how businesses connect with their audiences in 2025.',
    image: '/images/news/branding-trends.jpg',
    category: 'Branding',
    date: 'May 18, 2025',
    author: 'Kelvin Musioma',
    featured: true
  },
  {
    id: '2',
    slug: 'social-media-strategy-guide',
    title: 'The Ultimate Social Media Strategy Guide for Small Businesses',
    excerpt: 'Learn how to create an effective social media strategy that drives engagement and growth for your small business.',
    image: '/images/news/social-media-guide.jpg',
    category: 'Digital Marketing',
    date: 'May 15, 2025',
    author: 'Kelvin Musioma',
    featured: false
  },
  {
    id: '3',
    slug: 'psychology-of-color-design',
    title: 'The Psychology of Color in Design: How to Choose the Right Colors for Your Brand',
    excerpt: 'Explore how color affects customer perception and how to select the perfect color palette for your brand.',
    image: '/images/news/color-psychology.jpg',
    category: 'Design',
    date: 'May 10, 2025',
    author: 'Kelvin Musioma',
    featured: false
  },
  {
    id: '4',
    slug: 'video-marketing-strategies',
    title: 'Video Marketing Strategies That Drive Results',
    excerpt: 'Discover proven video marketing tactics that can boost engagement, conversions, and brand awareness.',
    image: '/images/news/video-marketing.jpg',
    category: 'Digital Marketing',
    date: 'May 5, 2025',
    author: 'Kelvin Musioma',
    featured: false
  },
  {
    id: '5',
    slug: 'sustainable-packaging-design',
    title: 'Sustainable Packaging Design: Balancing Aesthetics and Environmental Responsibility',
    excerpt: 'How brands are innovating with eco-friendly packaging solutions without sacrificing visual appeal.',
    image: '/images/news/sustainable-packaging.jpg',
    category: 'Design',
    date: 'April 28, 2025',
    author: 'Emily Namwamba',
    featured: true
  },
  {
    id: '6',
    slug: 'ai-in-marketing',
    title: 'How AI is Transforming Digital Marketing in 2025',
    excerpt: 'Explore the latest applications of artificial intelligence in marketing and how they are changing the industry.',
    image: '/images/news/ai-marketing.jpg',
    category: 'Digital Marketing',
    date: 'April 22, 2025',
    author: 'David Kimani',
    featured: false
  },
  {
    id: '7',
    slug: 'building-brand-loyalty',
    title: 'Building Brand Loyalty in a Competitive Market',
    excerpt: 'Strategies to foster customer loyalty and create brand advocates in todays crowded marketplace.',
    image: '/images/news/brand-loyalty.jpg',
    category: 'Branding',
    date: 'April 18, 2025',
    author: 'Catherine Njeri',
    featured: false
  },
  {
    id: '8',
    slug: 'typography-trends',
    title: 'Typography Trends Reshaping Brand Identity Design',
    excerpt: 'How innovative typography choices are helping brands stand out and communicate their unique personality.',
    image: '/images/news/typography-trends.png',
    category: 'Design',
    date: 'April 12, 2025',
    author: 'Mark Otieno',
    featured: false
  },
  {
    id: '9',
    slug: 'influencer-marketing-best-practices',
    title: 'Influencer Marketing Best Practices for 2025',
    excerpt: 'Learn the most effective strategies for partnering with influencers to expand your brand reach.',
    image: '/images/news/influencer-marketing.jpg',
    category: 'Digital Marketing',
    date: 'April 8, 2025',
    author: 'Priscilla Auma',
    featured: false
  },
  {
    id: '10',
    slug: 'rebranding-success-stories',
    title: 'Inspiring Rebranding Success Stories from African Companies',
    excerpt: 'Case studies of successful rebranding initiatives that transformed business fortunes across Africa.',
    image: '/images/news/rebranding-success.jpg',
    category: 'Branding',
    date: 'April 3, 2025',
    author: 'John Mwangi',
    featured: true
  }
];

// Available categories
const categories = [
  'All',
  'Branding',
  'Digital Marketing',
  'Design'
];

const NewsGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(allArticles);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Apply category filter when it changes
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredArticles(allArticles);
    } else {
      setFilteredArticles(allArticles.filter(article => article.category === activeCategory));
    }
  }, [activeCategory]);

  // Intersection observer for animation
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
    <div ref={sectionRef}>
      {/* Category filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category
                ? 'bg-[#D4AF34] text-black'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured articles (larger cards) */}
      {filteredArticles.some(article => article.featured) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {filteredArticles
            .filter(article => article.featured)
            .slice(0, 2)
            .map((article, index) => (
              <div
                key={article.id}
                className={`
                  bg-white rounded-lg overflow-hidden shadow-md border border-gray-100
                  transform transition-all duration-700
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{ transitionDelay: `${100 * index}ms` }}
              >
                {/* Image Container - taller for featured articles */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#D4AF34] text-black text-xs font-bold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center mr-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {article.author}
                    </div>
                  </div>
                  
                  <Link 
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center text-[#D4AF34] font-medium hover:text-black transition-colors"
                  >
                    Read Article <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Regular articles grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles
          .filter(article => !article.featured || filteredArticles.filter(a => a.featured).length > 2)
          .map((article, index) => (
            <div
              key={article.id}
              className={`
                bg-white rounded-lg overflow-hidden shadow-md h-full border border-gray-100
                transform transition-all duration-700
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${150 * index}ms` }}
            >
              {/* Image container - optimized for poster designs with fixed aspect ratio */}
              <div className="relative pt-[133%] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-105"
                />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#D4AF34] text-black text-xs font-bold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {article.title}
                </h3>
                
                <div className="flex items-center text-xs text-gray-500 mb-3">
                  <div className="flex items-center mr-3">
                    <Calendar className="w-3 h-3 mr-1" />
                    {article.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    {article.author}
                  </div>
                </div>
                
                <Link 
                  href={`/news/${article.slug}`}
                  className="inline-flex items-center text-[#D4AF34] text-sm font-medium hover:text-black transition-colors"
                >
                  Read Article <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
      </div>
      
      {/* No articles found message */}
      {filteredArticles.length === 0 && (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <div className="h-16 w-16 mx-auto text-gray-300 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-700 mb-2">No Articles Found</h3>
          <p className="text-gray-500 max-w-md mx-auto">
            We couldn't find any articles in this category. Please try another category or check back later for new content.
          </p>
        </div>
      )}
    </div>
  );
};

export default NewsGrid;