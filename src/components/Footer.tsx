import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-gray-900 text-white pt-16 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold text-brand-gold mb-6">About Sort Brands</h3>
              <div className="mb-6">
                <Link href="/" className="inline-block">
                  {/* Replace with your actual logo */}
                  <span className="text-2xl font-bold text-brand-gold">SORT BRANDS</span>
                </Link>
              </div>
              <p className="mb-6 text-gray-400">
                We are the world's best digital creative agency, dedicated to sorting your brand through innovative advertising, 
                marketing, and branding solutions.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 hover:bg-brand-gold text-white p-2 rounded-full transition duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 hover:bg-brand-gold text-white p-2 rounded-full transition duration-300"
                  aria-label="Twitter"
                >
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 hover:bg-brand-gold text-white p-2 rounded-full transition duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 hover:bg-brand-gold text-white p-2 rounded-full transition duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-brand-gold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-brand-gold transition duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-brand-gold transition duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="text-gray-400 hover:text-brand-gold transition duration-300">
                    Our Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/clients" className="text-gray-400 hover:text-brand-gold transition duration-300">
                    Our Clientele
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="text-gray-400 hover:text-brand-gold transition duration-300">
                    News & Insights
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-brand-gold transition duration-300">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-xl font-bold text-brand-gold mb-6">Our Solutions</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/solutions/digital-marketing" className="text-gray-400 hover:text-brand-gold transition duration-300">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/graphic-design" className="text-gray-400 hover:text-brand-gold transition duration-300">
                    Graphic Design
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/branding" className="text-gray-400 hover:text-brand-gold transition duration-300">
                    Branding
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/photography" className="text-gray-400 hover:text-brand-gold transition duration-300">
                    Photography & Videography
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/influencer-marketing" className="text-gray-400 hover:text-brand-gold transition duration-300">
                    Influencer Marketing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-brand-gold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-brand-gold mt-1.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-400">
                    Off Thika Road, behind Safari Park Hotel next to USIU
                  </span>
                </li>
                <li className="flex items-center">
                  <FaPhone className="text-brand-gold mr-3 flex-shrink-0" />
                  <span className="text-gray-400">+254 742 906 505</span>
                </li>
                <li className="flex items-center">
                  <FaWhatsapp className="text-brand-gold mr-3 flex-shrink-0" />
                  <span className="text-gray-400">+254 742 906 505</span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="text-brand-gold mr-3 flex-shrink-0" />
                  <a href="mailto:sortbrandske@gmail.com" className="text-gray-400 hover:text-brand-gold transition duration-300">
                    sortbrandske@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              &copy; {currentYear} All Rights Reserved @SortbrandsGroup
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-brand-gold transition duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-brand-gold transition duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;