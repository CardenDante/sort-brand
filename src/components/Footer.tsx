// src/components/MobileOptimizedFooter.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';

// Accordion component for mobile view
const FooterAccordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#D4AF34]/20 py-3 md:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left md:cursor-default"
      >
        <h3 className="text-[#D4AF34] text-lg font-bold md:mb-6">{title}</h3>
        <span className="md:hidden text-[#D4AF34]">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      <div className={`mt-3 transition-all duration-300 overflow-hidden md:block ${isOpen ? "max-h-60" : "max-h-0 md:max-h-screen"}`}>
        {children}
      </div>
    </div>
  );
};

const MobileOptimizedFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative text-white"
      style={{
        backgroundImage: "url('/images/hero-bg.jpeg')", // Update path as needed
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      {/* Footer Content */}
      <div className="relative z-10">
        {/* CTA Section - Shortened for mobile */}
        <div className="container mx-auto px-6 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Let's create the next <span className="text-[#D4AF34]">success story.</span>
              </h2>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#D4AF34] hover:bg-[#c9a52f] text-black px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 shadow-lg font-bold text-base md:text-lg"
            >
              <FaPaperPlane className="text-black" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>

        {/* Main Footer - Condensed for mobile with accordions */}
        <div className="border-t border-[#D4AF34]/20">
          <div className="container mx-auto px-6 py-8 md:py-16">
            {/* About section - Always visible */}
            <div className="mb-8 md:hidden">
              <div className="flex items-center justify-center mb-4">
                <div className="text-2xl font-bold text-[#D4AF34]">SortBrands</div>
              </div>
              
              {/* Social Icons */}
              <div className="flex justify-center space-x-4 mb-6">
                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#D4AF34]/10 flex items-center justify-center text-[#D4AF34] hover:bg-[#D4AF34] hover:text-black transition-all duration-300"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Desktop layout */}
            <div className="hidden md:grid md:grid-cols-12 md:gap-8">
              {/* About Column */}
              <div className="md:col-span-4">
                <div className="flex items-center mb-6">
                  <div className="text-2xl font-bold text-[#D4AF34]">SortBrands</div>
                </div>
                <p className="text-white/70 mb-6">
                  We are the world's best digital creative agency, dedicated to sorting your brand through innovative advertising, marketing, and branding solutions.
                </p>
                <div className="flex space-x-4">
                  {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="w-10 h-10 rounded-full bg-[#D4AF34]/10 flex items-center justify-center text-[#D4AF34] hover:bg-[#D4AF34] hover:text-black transition-all duration-300"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Quick Links Column */}
              <div className="md:col-span-2">
                <h3 className="text-[#D4AF34] text-lg font-bold mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  {['Careers', 'Academy', 'FAQs', 'Client Portfolio'].map((link, i) => (
                    <li key={i}>
                      <Link 
                        href={`/${link.toLowerCase().replace(' ', '-')}`} 
                        className="text-white hover:text-[#D4AF34] transition-colors duration-300"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Legal Column */}
              <div className="md:col-span-2">
                <h3 className="text-[#D4AF34] text-lg font-bold mb-6">Legal</h3>
                <ul className="space-y-3">
                  <li><Link href="/privacy-policy" className="text-white hover:text-[#D4AF34] transition-colors duration-300">Privacy Policy</Link></li>
                  <li><Link href="/terms-of-use" className="text-white hover:text-[#D4AF34] transition-colors duration-300">Terms Of Use</Link></li>
                  <li><Link href="/news" className="text-white hover:text-[#D4AF34] transition-colors duration-300">News & Insights</Link></li>
                </ul>
              </div>
              
              {/* Contact Column */}
              <div className="md:col-span-4">
                <h3 className="text-[#D4AF34] text-lg font-bold mb-6">Contact Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="mr-3 text-[#D4AF34] mt-1"><FaMapMarkerAlt /></span>
                    <span>Off Thika Road, behind Safari Park Hotel next to USIU</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-3 text-[#D4AF34] mt-1"><FaPhone /></span>
                    <span>+254 742 906 505</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-3 text-[#D4AF34] mt-1"><FaEnvelope /></span>
                    <span>sortbrandske@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Accordion Layout */}
            <div className="md:hidden">
              {/* Contact Us - Always visible on mobile */}
              <div className="mb-6">
                <h3 className="text-[#D4AF34] text-lg font-bold mb-4 text-center">Contact Us</h3>
                <div className="space-y-3 flex flex-col items-center">
                  <a href="tel:+254742906505" className="flex items-center text-white hover:text-[#D4AF34]">
                    <span className="mr-2 text-[#D4AF34]"><FaPhone /></span>
                    <span>+254 742 906 505</span>
                  </a>
                  <a href="mailto:sortbrandske@gmail.com" className="flex items-center text-white hover:text-[#D4AF34]">
                    <span className="mr-2 text-[#D4AF34]"><FaEnvelope /></span>
                    <span>sortbrandske@gmail.com</span>
                  </a>
                </div>
              </div>
              
              {/* Accordion Sections */}
              <FooterAccordion title="About Us">
                <p className="text-white/70 mb-4 text-sm">
                  We are the world's best digital creative agency, dedicated to sorting your brand through innovative advertising, marketing, and branding solutions.
                </p>
                <div className="flex items-start mb-3">
                  <span className="mr-2 text-[#D4AF34] mt-1"><FaMapMarkerAlt /></span>
                  <span className="text-sm">Off Thika Road, behind Safari Park Hotel next to USIU</span>
                </div>
              </FooterAccordion>
              
              <FooterAccordion title="Quick Links">
                <ul className="space-y-2">
                  {['Careers', 'Academy', 'FAQs', 'Client Portfolio'].map((link, i) => (
                    <li key={i}>
                      <Link 
                        href={`/${link.toLowerCase().replace(' ', '-')}`} 
                        className="text-white hover:text-[#D4AF34] transition-colors duration-300 text-sm"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterAccordion>
              
              <FooterAccordion title="Legal">
                <ul className="space-y-2">
                  <li><Link href="/privacy-policy" className="text-white hover:text-[#D4AF34] transition-colors duration-300 text-sm">Privacy Policy</Link></li>
                  <li><Link href="/terms-of-use" className="text-white hover:text-[#D4AF34] transition-colors duration-300 text-sm">Terms Of Use</Link></li>
                  <li><Link href="/news" className="text-white hover:text-[#D4AF34] transition-colors duration-300 text-sm">News & Insights</Link></li>
                </ul>
              </FooterAccordion>
            </div>
          </div>
        </div>

        {/* Copyright - Simplified for mobile */}
        <div className="border-t border-[#D4AF34]/20 py-4 md:py-6">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center md:flex-row md:justify-between text-white/60 text-xs md:text-sm">
              <div className="text-center md:text-left">© {currentYear} - <span className="text-[#D4AF34]">SortBrands Group.</span> All Rights Reserved.</div>
              <div className="mt-1 md:mt-0">Designed with ❤️ by SortBrands</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MobileOptimizedFooter;