// src/components/Header.tsx
"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  
  const solutionsDropdownRef = useRef<HTMLDivElement>(null);
  const opportunitiesDropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll event to change header style when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Check if click is outside both dropdowns
      const clickedOutsideSolutions = solutionsDropdownRef.current && !solutionsDropdownRef.current.contains(target);
      const clickedOutsideOpportunities = opportunitiesDropdownRef.current && !opportunitiesDropdownRef.current.contains(target);
      
      if (clickedOutsideSolutions && clickedOutsideOpportunities) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  const isActiveSolution = () => {
    return pathname.startsWith('/solutions');
  };

  const isActiveOpportunity = () => {
    return pathname.startsWith('/careers') || pathname.startsWith('/referral-program');
  };

  return (
    <header className={`sticky top-0 z-40 bg-white ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">

            <Link href="/" className="flex items-center flex-shrink-0">
              <div className="relative w-22 h-12 sm:w-22 sm:h-16 lg:w-26 lg:h-20">
                <Image 
                  src="/images/logo/sb.png" 
                  alt="SB" 
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link 
              href="/" 
              className={`text-gray-900 font-bold hover:text-[#D4AF34] transition-colors duration-300 text-base relative ${isActive('/') ? 'text-[#D4AF34] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-[#D4AF34] after:rounded-full' : ''}`}
            >
              Home
            </Link>
            
            <Link 
              href="/about" 
              className={`text-gray-900 font-bold hover:text-[#D4AF34] transition-colors duration-300 text-base relative ${isActive('/about') ? 'text-[#D4AF34] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-[#D4AF34] after:rounded-full' : ''}`}
            >
              About
            </Link>
            
            <Link 
              href="/case-studies" 
              className={`text-gray-900 font-bold hover:text-[#D4AF34] transition-colors duration-300 text-base relative ${isActive('/case-studies') ? 'text-[#D4AF34] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-[#D4AF34] after:rounded-full' : ''}`}
            >
              Case Studies
            </Link>
            
            <div className="relative" ref={solutionsDropdownRef}>
              <div className="flex items-center cursor-pointer" onClick={() => toggleDropdown('solutions')}>
                <Link 
                  href="/solutions" 
                  className={`text-gray-900 font-bold hover:text-[#D4AF34] transition-colors duration-300 text-base relative ${isActiveSolution() ? 'text-[#D4AF34] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-[#D4AF34] after:rounded-full' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  Solutions
                </Link>
                <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-300 ${activeDropdown === 'solutions' ? 'transform rotate-180' : ''} ${isActiveSolution() ? 'text-[#D4AF34]' : 'text-gray-900'}`} />
              </div>
              
              {activeDropdown === 'solutions' && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50 animate-fadeIn border border-gray-100">
                  <Link
                    href="/solutions/digital-marketing"
                    className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#D4AF34] text-sm ${isActive('/solutions/digital-marketing') ? 'text-[#D4AF34] bg-gray-50' : ''}`}
                    onClick={() => setActiveDropdown(null)}
                  >
                    Digital Marketing
                  </Link>
                  <Link
                    href="/solutions/graphic-design"
                    className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#D4AF34] text-sm ${isActive('/solutions/graphic-design') ? 'text-[#D4AF34] bg-gray-50' : ''}`}
                    onClick={() => setActiveDropdown(null)}
                  >
                    Graphic Design
                  </Link>
                  <Link
                    href="/solutions/branding"
                    className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#D4AF34] text-sm ${isActive('/solutions/branding') ? 'text-[#D4AF34] bg-gray-50' : ''}`}
                    onClick={() => setActiveDropdown(null)}
                  >
                    Branding
                  </Link>
                  <Link
                    href="/solutions/photography"
                    className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#D4AF34] text-sm ${isActive('/solutions/photography') ? 'text-[#D4AF34] bg-gray-50' : ''}`}
                    onClick={() => setActiveDropdown(null)}
                  >
                    Photography & Videography
                  </Link>
                  <Link
                    href="/solutions/influencer-marketing"
                    className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#D4AF34] text-sm ${isActive('/solutions/influencer-marketing') ? 'text-[#D4AF34] bg-gray-50' : ''}`}
                    onClick={() => setActiveDropdown(null)}
                  >
                    Influencer Marketing
                  </Link>
                  <Link
                    href="/solutions/consultation"
                    className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#D4AF34] text-sm ${isActive('/solutions/consultation') ? 'text-[#D4AF34] bg-gray-50' : ''}`}
                    onClick={() => setActiveDropdown(null)}
                  >
                    Consultation
                  </Link>
                  <Link
                    href="/solutions/printing-outdoor-advertising"
                    className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#D4AF34] text-sm ${isActive('/solutions/consultation') ? 'text-[#D4AF34] bg-gray-50' : ''}`}
                    onClick={() => setActiveDropdown(null)}
                  >
                   Printing & Outdoor Advertising
                  </Link>
                  <Link
                    href="/solutions/training"
                    className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#D4AF34] text-sm ${isActive('/solutions/consultation') ? 'text-[#D4AF34] bg-gray-50' : ''}`}
                    onClick={() => setActiveDropdown(null)}
                  >
                    Training & Workshops
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              href="/news" 
              className={`text-gray-900 font-bold hover:text-[#D4AF34] transition-colors duration-300 text-base relative ${isActive('/news') ? 'text-[#D4AF34] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-[#D4AF34] after:rounded-full' : ''}`}
            >
              News & Insights
            </Link>
            
            <div className="relative" ref={opportunitiesDropdownRef}>
              <div className="flex items-center cursor-pointer" onClick={() => toggleDropdown('opportunities')}>
                <span className={`text-gray-900 font-bold hover:text-[#D4AF34] transition-colors duration-300 text-base relative ${isActiveOpportunity() ? 'text-[#D4AF34] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-[#D4AF34] after:rounded-full' : ''}`}>
                  Opportunities
                </span>
                <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-300 ${activeDropdown === 'opportunities' ? 'transform rotate-180' : ''} ${isActiveOpportunity() ? 'text-[#D4AF34]' : 'text-gray-900'}`} />
              </div>
              
              {activeDropdown === 'opportunities' && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 animate-fadeIn border border-gray-100">
                  <Link
                    href="/referral-program"
                    className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#D4AF34] text-sm ${isActive('/referral-program') ? 'text-[#D4AF34] bg-gray-50' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveDropdown(null);
                      window.location.href = '/referral-program';
                    }}
                  >
                    Referral Program
                  </Link>
                  <Link
                    href="/careers"
                    className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#D4AF34] text-sm ${isActive('/careers') ? 'text-[#D4AF34] bg-gray-50' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveDropdown(null);
                      window.location.href = '/careers';
                    }}
                  >
                    Careers
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              href="/contacts" 
              className={`text-gray-900 font-bold hover:text-[#D4AF34] transition-colors duration-300 text-base relative ${isActive('/contacts') ? 'text-[#D4AF34] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-[#D4AF34] after:rounded-full' : ''}`}
            >
              Contacts
            </Link>
          </nav>

          {/* Call Us Button */}
          <div className="hidden md:block">
            <Link 
              href="tel:+254742906505" 
              className="group bg-[#D4AF34] hover:bg-[#000000] text-black hover:text-white px-4 py-2 rounded-full flex items-center transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              <Phone className="mr-2 w-4 h-4 group-hover:animate-pulse" />
              <span className="text-sm font-bold">Call Us</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-900 focus:outline-none"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-4 py-4 space-y-4 border-t">
            <Link 
              href="/"
              className={`block font-bold hover:text-[#D4AF34] text-lg relative ${isActive('/') ? 'text-[#D4AF34] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#D4AF34] after:rounded-full' : 'text-gray-900'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <Link 
              href="/about"
              className={`block font-bold hover:text-[#D4AF34] text-lg relative ${isActive('/about') ? 'text-[#D4AF34] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#D4AF34] after:rounded-full' : 'text-gray-900'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            
            <Link 
              href="/case-studies"
              className={`block font-bold hover:text-[#D4AF34] text-lg relative ${isActive('/case-studies') ? 'text-[#D4AF34] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#D4AF34] after:rounded-full' : 'text-gray-900'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Case Studies
            </Link>
            
            <div>
              <div className="flex items-center justify-between">
                <Link
                  href="/solutions"
                  className={`font-bold hover:text-[#D4AF34] text-lg relative ${isActiveSolution() ? 'text-[#D4AF34] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#D4AF34] after:rounded-full' : 'text-gray-900'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Solutions
                </Link>
                <button
                  onClick={() => toggleDropdown('mobile-solutions')}
                  className="text-gray-900 hover:text-[#D4AF34] focus:outline-none p-1"
                >
                  <ChevronDown className={`transition-transform duration-300 ${
                    activeDropdown === 'mobile-solutions' ? 'transform rotate-180' : ''
                  } ${isActiveSolution() ? 'text-[#D4AF34]' : ''}`} />
                </button>
              </div>
              
              {activeDropdown === 'mobile-solutions' && (
                <div className="mt-2 pl-4 space-y-2">
                  <Link
                    href="/solutions/digital-marketing"
                    className={`block hover:text-[#D4AF34] relative ${isActive('/solutions/digital-marketing') ? 'text-[#D4AF34] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-[#D4AF34] after:rounded-full' : 'text-gray-900'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Digital Marketing
                  </Link>
                  <Link
                    href="/solutions/graphic-design"
                    className={`block hover:text-[#D4AF34] relative ${isActive('/solutions/graphic-design') ? 'text-[#D4AF34] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-[#D4AF34] after:rounded-full' : 'text-gray-900'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Graphic Design
                  </Link>
                  <Link
                    href="/solutions/branding"
                    className={`block hover:text-[#D4AF34] relative ${isActive('/solutions/branding') ? 'text-[#D4AF34] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-[#D4AF34] after:rounded-full' : 'text-gray-900'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Branding
                  </Link>
                  <Link
                    href="/solutions/photography"
                    className={`block hover:text-[#D4AF34] relative ${isActive('/solutions/photography') ? 'text-[#D4AF34] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-[#D4AF34] after:rounded-full' : 'text-gray-900'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Photography & Videography
                  </Link>
                  <Link
                    href="/solutions/influencer-marketing"
                    className={`block hover:text-[#D4AF34] relative ${isActive('/solutions/influencer-marketing') ? 'text-[#D4AF34] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-[#D4AF34] after:rounded-full' : 'text-gray-900'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Influencer Marketing
                  </Link>
                  <Link
                    href="/solutions/consultation"
                    className={`block hover:text-[#D4AF34] relative ${isActive('/solutions/consultation') ? 'text-[#D4AF34] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-[#D4AF34] after:rounded-full' : 'text-gray-900'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Consultation
                  </Link>
                  <Link
                    href="/solutions/printing-outdoor-advertising"
                    className={`block hover:text-[#D4AF34] relative ${isActive('/solutions/consultation') ? 'text-[#D4AF34] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-[#D4AF34] after:rounded-full' : 'text-gray-900'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Printing & Outdoor Advertising
                  </Link>
                  <Link
                    href="/solutions/training"
                    className={`block hover:text-[#D4AF34] relative ${isActive('/solutions/consultation') ? 'text-[#D4AF34] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-[#D4AF34] after:rounded-full' : 'text-gray-900'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Training & Workshops
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              href="/news"
              className={`block font-bold hover:text-[#D4AF34] text-lg relative ${isActive('/news') ? 'text-[#D4AF34] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#D4AF34] after:rounded-full' : 'text-gray-900'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              News & Insights
            </Link>
            
            <div>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => toggleDropdown('mobile-opportunities')}
                  className={`font-bold hover:text-[#D4AF34] focus:outline-none text-left text-lg relative ${isActiveOpportunity() ? 'text-[#D4AF34] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#D4AF34] after:rounded-full' : 'text-gray-900'}`}
                >
                  Opportunities
                </button>
                <button
                  onClick={() => toggleDropdown('mobile-opportunities')}
                  className="text-gray-900 hover:text-[#D4AF34] focus:outline-none p-1"
                >
                  <ChevronDown className={`transition-transform duration-300 ${
                    activeDropdown === 'mobile-opportunities' ? 'transform rotate-180' : ''
                  } ${isActiveOpportunity() ? 'text-[#D4AF34]' : ''}`} />
                </button>
              </div>
              
              {activeDropdown === 'mobile-opportunities' && (
                <div className="mt-2 pl-4 space-y-2">
                  <Link
                    href="/referral-program"
                    className={`block hover:text-[#D4AF34] relative ${isActive('/referral-program') ? 'text-[#D4AF34] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-[#D4AF34] after:rounded-full' : 'text-gray-900'}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      setActiveDropdown(null);
                      window.location.href = '/referral-program';
                    }}
                  >
                    Referral Program
                  </Link>
                  <Link
                    href="/careers"
                    className={`block hover:text-[#D4AF34] relative ${isActive('/careers') ? 'text-[#D4AF34] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-[#D4AF34] after:rounded-full' : 'text-gray-900'}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      setActiveDropdown(null);
                      window.location.href = '/careers';
                    }}
                  >
                    Careers
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              href="/contacts"
              className={`block font-bold hover:text-[#D4AF34] text-lg relative ${isActive('/contacts') ? 'text-[#D4AF34] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#D4AF34] after:rounded-full' : 'text-gray-900'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacts
            </Link>
            
            <Link 
              href="tel:+254742906505" 
              className="flex items-center bg-[#D4AF34] text-black hover:bg-[#000000] hover:text-white px-4 py-2 rounded-full w-full justify-center shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone className="mr-2 w-4 h-4" />
              <span className="text-sm font-bold">Call Us</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;