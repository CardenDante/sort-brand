"use client";
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-black text-white"
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
        {/* CTA Section */}
        <div className="container mx-auto px-6 md:px-12 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-5xl font-bold text-white leading-tight mb-0">
                Let's create the next<br />
                <span className="text-white">success story.</span>
              </h2>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#D4AF34] hover:bg-[#c9a52f] text-black px-8 py-4 rounded-full transition-all duration-300 shadow-lg font-bold text-lg"
            >
              <FaPaperPlane className="text-black" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>

        {/* Main Footer */}
        <div className="border-t border-[#D4AF34]/20">
          <div className="container mx-auto px-6 md:px-12 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
              {/* About */}
              <div className="lg:col-span-4">
                <div className="flex items-center mb-6">
                  <div className="text-2xl font-bold text-[#D4AF34]">SortBrands</div>
                </div>

                <p className="text-white/70 mb-6">
                  We are the world's best digital creative agency, dedicated to sorting your brand through innovative advertising, marketing, and branding solutions.
                </p>

                {/* Social Icons */}
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

              {/* Quick Links */}
              <div className="lg:col-span-2">
                <h3 className="text-[#D4AF34] text-lg font-bold mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  {['careers', 'academy', 'faqs', 'portfolio'].map((slug, i) => (
                    <li key={i}>
                      <Link href={`/${slug}`} className="text-white hover:text-[#D4AF34] transition-colors duration-300 capitalize">
                        {slug.replace('-', ' ')}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div className="lg:col-span-2">
                <h3 className="text-[#D4AF34] text-lg font-bold mb-6">Legal</h3>
                <ul className="space-y-3">
                  <li><Link href="/privacy-policy" className="text-white hover:text-[#D4AF34] transition-colors duration-300">Privacy Policy</Link></li>
                  <li><Link href="/terms-of-use" className="text-white hover:text-[#D4AF34] transition-colors duration-300">Terms Of Use</Link></li>
                  <li><Link href="/news" className="text-white hover:text-[#D4AF34] transition-colors duration-300">News & Insights</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div className="lg:col-span-4">
                <h3 className="text-[#D4AF34] text-lg font-bold mb-6">Contact Us</h3>
                <div className="space-y-4">
                  <p className="flex items-start"><span className="mr-3 text-[#D4AF34]">📍</span>Off Thika Road, behind Safari Park Hotel next to USIU</p>
                  <p className="flex items-start"><span className="mr-3 text-[#D4AF34]">📱</span>+254 742 906 505</p>
                  <p className="flex items-start"><span className="mr-3 text-[#D4AF34]">📧</span>sortbrandske@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#D4AF34]/20 py-6">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
              <div>© {currentYear} - <span className="text-[#D4AF34]">SortBrands Group.</span> All Rights Reserved.</div>
              <div className="mt-4 md:mt-0">Designed with ❤️ by SortBrands</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
