// src/app/solutions/graphic-design/page.tsx
import AboutBanner from '@/components/about/AboutBanner';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface DesignItem {
  id: string;
  title: string;
  icon: string;
}

const designTypes: DesignItem[] = [
  { id: 'logos', title: 'Logos & Brand Identity', icon: '/images/icons/logo-design.svg' },
  { id: 'social-media', title: 'Social Media Graphics', icon: '/images/icons/social-media.svg' },
  { id: 'print', title: 'Print Materials', icon: '/images/icons/print.svg' },
  { id: 'marketing', title: 'Marketing Collateral', icon: '/images/icons/marketing.svg' },
  { id: 'stationery', title: 'Business Stationery', icon: '/images/icons/stationery.svg' },
  { id: 'advertising', title: 'Advertising Materials', icon: '/images/icons/advertising.svg' },
  { id: 'publications', title: 'Publications', icon: '/images/icons/publications.svg' },
  { id: 'packaging', title: 'Packaging Design', icon: '/images/icons/packaging.svg' }
];

export default function GraphicDesignPage() {
  return (
    <main>
      {/* Banner */}
      <AboutBanner
        title="Graphic Design"
        subtitle="High-quality, eye-catching, and customized designs to help you stand out and effectively promote your brand."
        backgroundImage="/images/solutions/graphic-design-banner.jpg"
        breadcrumbs={[
          { label: "Home", url: "/" },
          { label: "Solutions", url: "/solutions" },
          { label: "Graphic Design" }
        ]}
      />
      
      {/* Introduction Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Captivating <span className="text-[#D4AF34]">Visual Solutions</span>
            </h2>
            <p className="text-gray-700 text-lg">
              We create high-quality, eye-catching, and simple customized designs to help individuals and 
              businesses stand out, cast a positive light, and effectively promote and sell their products 
              and services.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/solutions/graphic-design-main.jpg"
                  alt="Graphic Design Services"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 hover:scale-105"
                />
              </div>
              {/* Decorative gold corner */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-8 border-r-8 border-[#D4AF34] z-10"></div>
            </div>
            
            {/* Content Column */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">
                Comprehensive Design Solutions
              </h2>
              
              <p className="text-gray-700 mb-6">
                Our talented design team creates visually striking materials that capture attention and effectively 
                communicate your brand message. We design a wide range of materials to help your business make a 
                lasting impression in both digital and physical spaces.
              </p>
              
              <p className="text-gray-700 mb-8">
                From logo design to comprehensive brand packages, our goal is to craft designs that not only look 
                beautiful but also strategically support your business objectives and resonate with your target audience.
              </p>
              
              <Link 
                href="/contacts" 
                className="inline-flex items-center bg-[#D4AF34] hover:bg-black text-black hover:text-white px-6 py-3 rounded-full font-bold transition-colors duration-300"
              >
                Start Your Design Project <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Design Types Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Design <span className="text-[#D4AF34]">Services</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              We design a wide range of materials, including but not limited to:
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {designTypes.map((item) => (
              <div 
                key={item.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl border border-gray-100 hover:border-[#D4AF34]/20 transition-all duration-300"
              >
                <div className="mb-4 h-16 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="text-lg font-bold text-center">{item.title}</h3>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6">
              We also create logos, flyers, brochures, CVs/resumes, portfolios, invitation cards, letterheads, business cards, 
              job IDs, banners, envelopes, notebooks/diaries, calendars, magazines, company profiles, catalogues, receipts, 
              billboards, and more.
            </p>
            <Link 
              href="/contacts" 
              className="inline-flex items-center text-[#D4AF34] font-medium hover:underline transition-colors"
            >
              Discuss Your Design Needs <FaArrowRight className="ml-2 text-sm" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Design <span className="text-[#D4AF34]">Process</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              We follow a collaborative approach to ensure your design perfectly captures your vision and meets your objectives.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-white rounded-lg p-6 shadow-md h-full border-t-4 border-[#D4AF34]">
                  <div className="text-3xl font-bold text-[#D4AF34] mb-4">01</div>
                  <h3 className="text-xl font-bold mb-3">Discovery</h3>
                  <p className="text-gray-700">
                    We start by understanding your brand, objectives, target audience, and design preferences to create a solid foundation.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-[#D4AF34]">
                  <FaArrowRight className="text-2xl" />
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative">
                <div className="bg-white rounded-lg p-6 shadow-md h-full border-t-4 border-[#D4AF34]">
                  <div className="text-3xl font-bold text-[#D4AF34] mb-4">02</div>
                  <h3 className="text-xl font-bold mb-3">Design</h3>
                  <p className="text-gray-700">
                    Our design team creates concepts based on your requirements, incorporating your feedback through revisions.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-[#D4AF34]">
                  <FaArrowRight className="text-2xl" />
                </div>
              </div>
              
              {/* Step 3 */}
              <div>
                <div className="bg-white rounded-lg p-6 shadow-md h-full border-t-4 border-[#D4AF34]">
                  <div className="text-3xl font-bold text-[#D4AF34] mb-4">03</div>
                  <h3 className="text-xl font-bold mb-3">Delivery</h3>
                  <p className="text-gray-700">
                    We finalize the design and provide all necessary file formats for both digital and print applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden bg-white">
  {/* Subtle geometric pattern background */}
  <div 
    className="absolute inset-0 z-0 opacity-5" 
    style={{
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0 h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")', 
    }}
  ></div>
  
  {/* Gold decorative elements */}
  <div className="absolute inset-0 z-0">
    {/* Top right gold circle */}
    <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#D4AF34]/10"></div>
    
    {/* Bottom left gold circle */}
    <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#D4AF34]/5"></div>
    
    {/* Gold accent lines */}
    <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF34]/30 to-transparent"></div>
    <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF34]/30 to-transparent"></div>
  </div>
  
  {/* CTA Card with shadow */}
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-10 relative">
      {/* Gold accent corners */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#D4AF34] rounded-tl-2xl"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#D4AF34] rounded-br-2xl"></div>
      
      <div className="text-center">
        <div className="w-16 h-1 bg-[#D4AF34] mx-auto mb-6"></div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready for Eye-Catching <span className="text-[#D4AF34]">Designs?</span>
        </h2>
        
        <p className="text-gray-600 text-lg mb-8">
          Let our design experts create visuals that capture attention and elevate your brand.
          Contact us today to discuss your project.
        </p>
        
        <Link 
          href="/contacts" 
          className="inline-flex items-center bg-[#D4AF34] hover:bg-black text-black hover:text-white font-bold px-8 py-4 rounded-full transition-colors duration-300 transform hover:scale-105 shadow-md"
        >
          Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}