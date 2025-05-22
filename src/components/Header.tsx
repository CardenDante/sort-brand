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
  
  const dropdownRef = useRef<HTMLDivElement>(null);

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
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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

  return (
    <header className={`sticky top-0 z-40 bg-white ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="relative h-12 w-32">
                <Image
                  src="/images/logo/sb.png"
                  alt="Sort Brands Logo"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'left' }}
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link 
              href="/" 
              className={`text-gray-900 font-medium hover:text-[#D4AF34] transition-colors duration-300 text-sm ${isActive('/') ? 'text-[#D4AF34]' : ''}`}
            >
              Home
            </Link>
            
            <Link 
              href="/about" 
              className={`text-gray-900 font-medium hover:text-[#D4AF34] transition-colors duration-300 text-sm ${isActive('/about') ? 'text-[#D4AF34]' : ''}`}
            >
              About
            </Link>
            
            <Link 
              href="/case-studies" 
              className={`text-gray-900 font-medium hover:text-[#D4AF34] transition-colors duration-300 text-sm ${isActive('/case-studies') ? 'text-[#D4AF34]' : ''}`}
            >
              Case Studies
            </Link>
            
            <div className="relative" ref={dropdownRef}>
              <div className="flex items-center cursor-pointer" onClick={() => toggleDropdown('solutions')}>
                <Link 
                  href="/solutions" 
                  className={`text-gray-900 font-medium hover:text-[#D4AF34] transition-colors duration-300 text-sm ${isActiveSolution() ? 'text-[#D4AF34]' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  Solutions
                </Link>
                <ChevronDown className={`h-3 w-3 ml-1 transition-transform duration-300 ${activeDropdown === 'solutions' ? 'transform rotate-180' : ''} ${isActiveSolution() ? 'text-[#D4AF34]' : 'text-gray-900'}`} />
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
                    Digital Marketing Consultation
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              href="/news" 
              className={`text-gray-900 font-medium hover:text-[#D4AF34] transition-colors duration-300 text-sm ${isActive('/news') ? 'text-[#D4AF34]' : ''}`}
            >
              News & Insights
            </Link>
            
            <Link 
              href="/careers" 
              className={`text-gray-900 font-medium hover:text-[#D4AF34] transition-colors duration-300 text-sm ${isActive('/careers') ? 'text-[#D4AF34]' : ''}`}
            >
              Careers
            </Link>
            
            <Link 
              href="/contacts" 
              className={`text-gray-900 font-medium hover:text-[#D4AF34] transition-colors duration-300 text-sm ${isActive('/contacts') ? 'text-[#D4AF34]' : ''}`}
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
              className={`block font-medium hover:text-[#D4AF34] ${isActive('/') ? 'text-[#D4AF34]' : 'text-gray-900'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <Link 
              href="/about"
              className={`block font-medium hover:text-[#D4AF34] ${isActive('/about') ? 'text-[#D4AF34]' : 'text-gray-900'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            
            <Link 
              href="/case-studies"
              className={`block font-medium hover:text-[#D4AF34] ${isActive('/case-studies') ? 'text-[#D4AF34]' : 'text-gray-900'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Case Studies
            </Link>
            
            <div>
              <div className="flex items-center justify-between">
                <Link
                  href="/solutions"
                  className={`font-medium hover:text-[#D4AF34] ${isActiveSolution() ? 'text-[#D4AF34]' : 'text-gray-900'}`}
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
                    className={`block hover:text-[#D4AF34] ${isActive('/solutions/digital-marketing') ? 'text-[#D4AF34]' : 'text-gray-900'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Digital Marketing
                  </Link>
                  <Link
                    href="/solutions/graphic-design"
                    className={`block hover:text-[#D4AF34] ${isActive('/solutions/graphic-design') ? 'text-[#D4AF34]' : 'text-gray-900'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Graphic Design
                  </Link>
                  <Link
                    href="/solutions/branding"
                    className={`block hover:text-[#D4AF34] ${isActive('/solutions/branding') ? 'text-[#D4AF34]' : 'text-gray-900'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Branding
                  </Link>
                  <Link
                    href="/solutions/photography"
                    className={`block hover:text-[#D4AF34] ${isActive('/solutions/photography') ? 'text-[#D4AF34]' : 'text-gray-900'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Photography & Videography
                  </Link>
                  <Link
                    href="/solutions/influencer-marketing"
                    className={`block hover:text-[#D4AF34] ${isActive('/solutions/influencer-marketing') ? 'text-[#D4AF34]' : 'text-gray-900'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Influencer Marketing
                  </Link>
                  <Link
                    href="/solutions/consultation"
                    className={`block hover:text-[#D4AF34] ${isActive('/solutions/consultation') ? 'text-[#D4AF34]' : 'text-gray-900'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Digital Marketing Consultation
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              href="/news"
              className={`block font-medium hover:text-[#D4AF34] ${isActive('/news') ? 'text-[#D4AF34]' : 'text-gray-900'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              News & Insights
            </Link>
            
            <Link 
              href="/careers"
              className={`block font-medium hover:text-[#D4AF34] ${isActive('/careers') ? 'text-[#D4AF34]' : 'text-gray-900'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Careers
            </Link>
            
            <Link 
              href="/contacts"
              className={`block font-medium hover:text-[#D4AF34] ${isActive('/contacts') ? 'text-[#D4AF34]' : 'text-gray-900'}`}
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