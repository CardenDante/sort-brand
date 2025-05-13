import Image from 'next/image';
import { FaCheckCircle, FaLightbulb } from 'react-icons/fa';

const MissionVision = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold text-xl mb-2 block">WHO WE ARE</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            We are the world's best digital creative agency, dedicated to sorting your brand through innovative advertising, 
            marketing, and branding solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              {/* Mission */}
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="bg-brand-gold p-3 rounded-full mr-4">
                    <FaCheckCircle className="text-white h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-gray-700 text-lg pl-16">
                  To sort business needs by delivering high-quality advertising, marketing, and branding services 
                  to both local and international markets, creating value for our clients through innovative and 
                  effective solutions.
                </p>
              </div>
              
              {/* Vision */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-brand-gold p-3 rounded-full mr-4">
                    <FaLightbulb className="text-white h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-gray-700 text-lg pl-16">
                  To mentor business owners and entrepreneurs, helping them develop the mindset to succeed not only 
                  in business but also in the spiritual realm. We aim to be the leading digital creative agency that 
                  transforms businesses through strategic marketing and branding solutions.
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main image */}
              <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/about/mission-vision.jpg"
                  alt="Sort Brands Mission and Vision"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              
              {/* Floating accent image */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-lg overflow-hidden shadow-xl border-4 border-white hidden md:block">
                <Image
                  src="/images/about/accent-image.jpg"
                  alt="Sort Brands Accent"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              
              {/* Gold accent block */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-gold rounded-lg hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;