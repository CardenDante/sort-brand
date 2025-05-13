import Link from 'next/link';
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa';

const TopBanner = () => {
  return (
    <div className="bg-black text-white py-3 text-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
        {/* Row 1: Social Icons (centered on mobile, left on desktop) */}
        <div className="flex justify-center md:justify-start space-x-4">
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF34] transition-colors duration-300">
            <FaTwitter />
          </Link>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF34] transition-colors duration-300">
            <FaFacebook />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF34] transition-colors duration-300">
            <FaInstagram />
          </Link>
          <Link href="https://wa.me/+254742906505" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF34] transition-colors duration-300">
            <FaWhatsapp />
          </Link>
          <Link href="mailto:sortbrandske@gmail.com" className="hover:text-[#D4AF34] transition-colors duration-300">
            <FaEnvelope />
          </Link>
        </div>

        {/* Row 2: Appointment Link (centered on mobile, center on desktop) */}
        <div className="text-center md:flex-grow md:text-center">
          <Link href="/appointment" className="font-medium hover:text-[#D4AF34] transition-colors duration-300">
            Book An Appointment
          </Link>
        </div>

        {/* Row 3: Placeholder for layout balance (right on desktop only) */}
        <div className="hidden md:block w-[100px]"></div>
      </div>
    </div>
  );
};

export default TopBanner;
