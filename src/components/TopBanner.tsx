// src/components/TopBanner.tsx

import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const TopBanner = () => {
  return (
    <div className="bg-[#000000] text-white py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#D4AF34] transition-colors duration-300">
            <FaTwitter />
          </Link>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#D4AF34] transition-colors duration-300">
            <FaFacebook />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#D4AF34] transition-colors duration-300">
            <FaInstagram />
          </Link>
          <Link href="https://wa.me/+254742906505" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#D4AF34] transition-colors duration-300">
            <FaWhatsapp />
          </Link>
          <Link href="mailto:sortbrandske@gmail.com" className="text-white hover:text-[#D4AF34] transition-colors duration-300">
            <FaEnvelope />
          </Link>
        </div>

        {/* Appointment Button - Centered Text */}
        <div className="flex-grow text-center">
          <Link href="/appointment" className="text-white hover:text-[#D4AF34] font-medium transition-colors duration-300">
            Book An Appointment
          </Link>
        </div>
        
        {/* Empty div to balance the flex layout */}
        <div className="w-[100px]"></div>
      </div>
    </div>
  );
};

export default TopBanner;