// src/components/ContactInfo.tsx
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp
} from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="bg-black text-white rounded-lg overflow-hidden shadow-xl">
      {/* Header */}
      <div className="bg-[#D4AF34] py-6 px-8">
        <h2 className="text-2xl font-bold text-black">Contact Information</h2>
      </div>
      
      {/* Contact Details */}
      <div className="p-8">
        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-start">
            <div className="mt-1 mr-4 text-[#D4AF34]">
              <FaMapMarkerAlt size={20} />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">Office Location</h3>
              <p className="text-white/70">
                Off thika Road, behind safari park hotel next to USIU<br />
                Nairobi, Kenya
              </p>
            </div>
          </div>
          
          {/* Phone */}
          <div className="flex items-start">
            <div className="mt-1 mr-4 text-[#D4AF34]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>   
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">Phone Number</h3>
              <p className="text-white/70">
                <a href="tel:+254742906505" className="hover:text-[#D4AF34] transition-colors">
                  +254 742 906 505
                </a>
              </p>
            </div>
          </div>
          
          {/* WhatsApp */}
          <div className="flex items-start">
            <div className="mt-1 mr-4 text-[#D4AF34]">
              <FaWhatsapp size={20} />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">WhatsApp</h3>
              <p className="text-white/70">
                <a 
                  href="https://wa.me/254742906505" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF34] transition-colors"
                >
                  +254 742 906 505
                </a>
              </p>
            </div>
          </div>
          
          {/* Email */}
          <div className="flex items-start">
            <div className="mt-1 mr-4 text-[#D4AF34]">
              <FaEnvelope size={20} />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">Email Address</h3>
              <p className="text-white/70">
                <a href="mailto:Sortbrandske@gmail.com" className="hover:text-[#D4AF34] transition-colors">
                  Sortbrandske@gmail.com
                </a>
              </p>
            </div>
          </div>
          
          {/* Office Hours */}
          <div className="flex items-start">
            <div className="mt-1 mr-4 text-[#D4AF34]">
              <FaClock size={20} />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">Office Hours</h3>
              <p className="text-white/70">
                Monday - Friday: 8:00 AM - 4:00 PM<br />
                Saturday: Closed <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
        
        {/* Social Media */}
        <div className="mt-8">
          <h3 className="font-bold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-3">
            <a 
              href="https://www.facebook.com/Sortbrands/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#D4AF34]/20 flex items-center justify-center text-[#D4AF34] hover:bg-[#D4AF34] hover:text-black transition-all duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-[#D4AF34]/20 flex items-center justify-center text-[#D4AF34] hover:bg-[#D4AF34] hover:text-black transition-all duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a 
              href="https://www.instagram.com/Sortbrandsgroup/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#D4AF34]/20 flex items-center justify-center text-[#D4AF34] hover:bg-[#D4AF34] hover:text-black transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://www.linkedin.com/company/Sortbrands-group/about/?viewAsMember=true" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#D4AF34]/20 flex items-center justify-center text-[#D4AF34] hover:bg-[#D4AF34] hover:text-black transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a 
              href="https://wa.me/+254742906505" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#D4AF34]/20 flex items-center justify-center text-[#D4AF34] hover:bg-[#D4AF34] hover:text-black transition-all duration-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;