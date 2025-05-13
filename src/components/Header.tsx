// src/components/Header.tsx
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle scroll event to change header style when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  return (
    <header className={`sticky top-0 z-40 bg-white ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="relative h-14 w-40">
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
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-900 font-medium hover:text-[#D4AF34] transition-colors duration-300">
              Home
            </Link>
            
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('about')}
                className="flex items-center text-gray-900 font-medium hover:text-[#D4AF34] transition-colors duration-300"
                aria-expanded={activeDropdown === 'about'}
              >
                About
                <FaChevronDown className="ml-1 h-3 w-3" />
              </button>
              
              {activeDropdown === 'about' && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                  <Link
                    href="/about/company"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#D4AF34]"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Company
                  </Link>
                  <Link
                    href="/about/mission"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#D4AF34]"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Mission & Vision
                  </Link>
                  <Link
                    href="/about/team"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#D4AF34]"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Our Team
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/case-studies" className="text-gray-900 font-medium hover:text-[#D4AF34] transition-colors duration-300">
              Case Studies
            </Link>
            
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('solutions')}
                className="flex items-center text-gray-900 font-medium hover:text-[#D4AF34] transition-colors duration-300"
                aria-expanded={activeDropdown === 'solutions'}
              >
                Solutions
                <FaChevronDown className="ml-1 h-3 w-3" />
              </button>
              
              {activeDropdown === 'solutions' && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50">
                  <Link
                    href="/solutions/digital-marketing"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#D4AF34]"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Digital Marketing
                  </Link>
                  <Link
                    href="/solutions/graphic-design"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#D4AF34]"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Graphic Design
                  </Link>
                  <Link
                    href="/solutions/branding"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#D4AF34]"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Branding
                  </Link>
                  <Link
                    href="/solutions/photography"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#D4AF34]"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Photography & Videography
                  </Link>
                  <Link
                    href="/solutions/influencer-marketing"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#D4AF34]"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Influencer Marketing
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/news" className="text-gray-900 font-medium hover:text-[#D4AF34] transition-colors duration-300">
              News & Insights
            </Link>
            
            <Link href="/contacts" className="text-gray-900 font-medium hover:text-[#D4AF34] transition-colors duration-300">
              Contacts
            </Link>
          </nav>

          {/* Call Us Button - Using gold color to stand out */}
          <div className="hidden md:block">
            <Link 
              href="tel:+254742906505" 
              className="group bg-[#D4AF34] hover:bg-[#000000] text-black hover:text-white px-5 py-2 rounded-full flex items-center transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              <FaPhone className="mr-2 group-hover:animate-pulse" />
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
          <div className="container mx-auto px-4 py-4 space-y-4 border-t">
            <Link 
              href="/"
              className="block text-gray-900 font-medium hover:text-[#D4AF34]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <div>
              <button
                onClick={() => toggleDropdown('mobile-about')}
                className="flex items-center justify-between w-full text-gray-900 font-medium hover:text-[#D4AF34]"
              >
                <span>About</span>
                <FaChevronDown className={`transition-transform duration-200 ${
                  activeDropdown === 'mobile-about' ? 'transform rotate-180' : ''
                }`} />
              </button>
              
              {activeDropdown === 'mobile-about' && (
                <div className="mt-2 pl-4 space-y-2">
                  <Link
                    href="/about/company"
                    className="block text-gray-900 hover:text-[#D4AF34]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Company
                  </Link>
                  <Link
                    href="/about/mission"
                    className="block text-gray-900 hover:text-[#D4AF34]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Mission & Vision
                  </Link>
                  <Link
                    href="/about/team"
                    className="block text-gray-900 hover:text-[#D4AF34]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Our Team
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              href="/case-studies"
              className="block text-gray-900 font-medium hover:text-[#D4AF34]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Case Studies
            </Link>
            
            <div>
              <button
                onClick={() => toggleDropdown('mobile-solutions')}
                className="flex items-center justify-between w-full text-gray-900 font-medium hover:text-[#D4AF34]"
              >
                <span>Solutions</span>
                <FaChevronDown className={`transition-transform duration-200 ${
                  activeDropdown === 'mobile-solutions' ? 'transform rotate-180' : ''
                }`} />
              </button>
              
              {activeDropdown === 'mobile-solutions' && (
                <div className="mt-2 pl-4 space-y-2">
                  <Link
                    href="/solutions/digital-marketing"
                    className="block text-gray-900 hover:text-[#D4AF34]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Digital Marketing
                  </Link>
                  <Link
                    href="/solutions/graphic-design"
                    className="block text-gray-900 hover:text-[#D4AF34]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Graphic Design
                  </Link>
                  <Link
                    href="/solutions/branding"
                    className="block text-gray-900 hover:text-[#D4AF34]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Branding
                  </Link>
                  <Link
                    href="/solutions/photography"
                    className="block text-gray-900 hover:text-[#D4AF34]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Photography & Videography
                  </Link>
                  <Link
                    href="/solutions/influencer-marketing"
                    className="block text-gray-900 hover:text-[#D4AF34]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Influencer Marketing
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              href="/news"
              className="block text-gray-900 font-medium hover:text-[#D4AF34]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              News & Insights
            </Link>
            
            <Link 
              href="/contacts"
              className="block text-gray-900 font-medium hover:text-[#D4AF34]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacts
            </Link>
            
            <Link 
              href="tel:+254742906505" 
              className="flex items-center bg-[#D4AF34] text-black hover:bg-[#000000] hover:text-white px-4 py-2 rounded-full w-full justify-center shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaPhone className="mr-2" />
              <span className="text-sm font-bold">Call Us</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;