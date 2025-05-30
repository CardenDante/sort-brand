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
  FaChevronUp,
} from 'react-icons/fa';

const FooterAccordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#D4AF34]/30 py-3 md:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left md:cursor-default"
      >
        <h3 className="text-[#D4AF34] text-lg font-bold md:mb-6">{title}</h3>
        <span className="md:hidden text-[#D4AF34]">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      <div
        className={`transition-all duration-300 md:block overflow-hidden ${
          isOpen ? 'max-h-[500px] mt-3' : 'max-h-0 md:max-h-screen'
        }`}
      >
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
        backgroundImage: "url('/images/footer.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* CTA */}
        <div className="container mx-auto px-6 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-6 md:mb-0">
              We Are <span className="text-[#D4AF34]">Social.</span>
            </h2>
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center gap-2 bg-[#D4AF34] hover:bg-[#c9a52f] text-black px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 shadow-lg font-bold text-base md:text-lg"
            >
              <FaPaperPlane />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>

        {/* Footer Main Sections */}
        <div className="border-t border-[#D4AF34]/20">
          <div className="container mx-auto px-6 py-10 md:py-16">
            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-12 gap-8">
              {/* About */}
              <div className="col-span-4">
                <p className="text-white/70 mb-6">
                 Slogan - Sort. Grow. Lead.
                 Sorting your brand for success
                </p>
                <div className="flex gap-3">
                  {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="w-20 h-20 rounded-full bg-[#D4AF34]/10 flex items-center justify-center text-[#D4AF34] hover:bg-[#D4AF34] hover:text-black transition-all"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="col-span-2">
                <h3 className="text-[#D4AF34] text-lg font-bold mb-6">Quick Links</h3>
                <ul className="space-y-3 text-white/80">
                  {['Careers', 'Academy', 'FAQs', 'Client Portfolio'].map(link => (
                    <li key={link}>
                      <Link href={`/${link.toLowerCase().replace(/\s/g, '-')}`} className="hover:text-[#D4AF34]">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div className="col-span-2">
                <h3 className="text-[#D4AF34] text-lg font-bold mb-6">Legal</h3>
                <ul className="space-y-3 text-white/80">
                  <li><Link href="/privacy-policy" className="hover:text-[#D4AF34]">Privacy Policy</Link></li>
                  <li><Link href="/terms-of-use" className="hover:text-[#D4AF34]">Terms of Use</Link></li>
                  <li><Link href="/news" className="hover:text-[#D4AF34]">News & Insights</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div className="col-span-4">
                <h3 className="text-[#D4AF34] text-lg font-bold mb-6">Contact Us</h3>
                <div className="space-y-4 text-white/80">
                  <div className="flex items-start"><FaMapMarkerAlt className="text-[#D4AF34] mr-2 mt-1" /><span>Off Thika Road, behind Safari Park Hotel next to USIU</span></div>
                  <div className="flex items-start"><FaPhone className="text-[#D4AF34] mr-2 mt-1" /><span>+254 742 906 505</span></div>
                  <div className="flex items-start"><FaEnvelope className="text-[#D4AF34] mr-2 mt-1" /><span>Sortbrandske@gmail.com</span></div>
                </div>
              </div>
            </div>

            {/* Mobile Accordion View */}
            <div className="md:hidden">
              {/* Logo and Socials */}
              <div className="flex justify-center mb-6">
                <div className="text-2xl font-bold text-[#D4AF34]">Sortbrands</div>
              </div>
              <div className="flex justify-center gap-4 mb-6">
                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="https://www.linkedin.com/company/Sortbrands-group/about/?viewAsMember=true"
                    className="w-9 h-9 rounded-full bg-[#D4AF34]/10 flex items-center justify-center text-[#D4AF34] hover:bg-[#D4AF34] hover:text-black transition-all"
                  >
                    <Icon />
                  </a>
                ))}
              </div>

              {/* Accordions */}
              <FooterAccordion title="About Us">
                <p className="text-white/70 text-sm mb-3">
                  We sort your brand through innovation in advertising, design, and digital marketing.
                </p>
                <div className="flex items-start mb-3">
                  <FaMapMarkerAlt className="text-[#D4AF34] mr-2 mt-1" />
                  <span className="text-sm">Off Thika Road, behind Safari Park Hotel next to USIU</span>
                </div>
              </FooterAccordion>

              <FooterAccordion title="Quick Links">
                <ul className="space-y-2 text-sm text-white/80">
                  {['Careers', 'Academy', 'FAQs', 'Client Portfolio'].map(link => (
                    <li key={link}>
                      <Link href={`/${link.toLowerCase().replace(/\s/g, '-')}`} className="hover:text-[#D4AF34]">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterAccordion>

              <FooterAccordion title="Legal">
                <ul className="space-y-2 text-sm text-white/80">
                  <li><Link href="/privacy-policy" className="hover:text-[#D4AF34]">Privacy Policy</Link></li>
                  <li><Link href="/terms-of-use" className="hover:text-[#D4AF34]">Terms of Use</Link></li>
                  <li><Link href="/news" className="hover:text-[#D4AF34]">News & Insights</Link></li>
                </ul>
              </FooterAccordion>

              <FooterAccordion title="Contact">
                <div className="space-y-3 text-sm text-white/80">
                  <div className="flex items-start"><FaPhone className="text-[#D4AF34] mr-2 mt-1" /><span>+254 742 906 505</span></div>
                  <div className="flex items-start"><FaEnvelope className="text-[#D4AF34] mr-2 mt-1" /><span>Sortbrandske@gmail.com</span></div>
                </div>
              </FooterAccordion>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#D4AF34]/20 py-4 text-white/60 text-center text-sm">
          <div className="container mx-auto px-6">
            <p>© {currentYear} Sortbrands Group. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MobileOptimizedFooter;
