// src/app/solutions/branding/page.tsx
import AboutBanner from '@/components/about/AboutBanner';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight, Award, Heart, MessageSquare, Users, Shield, Layers } from 'lucide-react';

interface BrandingService {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const brandingServices: BrandingService[] = [
  {
    id: 'brand-logo',
    title: 'Brand Logo & Visual Identity',
    description: 'Custom logo and design elements to make your brand stand out in the market and create instant recognition.',
    icon: <Layers className="w-12 h-12 text-[#D4AF34]" />
  },
  {
    id: 'brand-values',
    title: 'Brand Values & Mission',
    description: 'Guidance on defining your core principles, mission, and vision to create a strong foundation for your brand.',
    icon: <Heart className="w-12 h-12 text-[#D4AF34]" />
  },
  {
    id: 'brand-voice',
    title: 'Brand Voice & Messaging',
    description: 'Shaping the right tone and style to connect with your audience and communicate your brand essence.',
    icon: <MessageSquare className="w-12 h-12 text-[#D4AF34]" />
  },
  {
    id: 'customer-experience',
    title: 'Customer Experience',
    description: 'Optimizing every interaction to enhance your brand\'s perception and create meaningful connections.',
    icon: <Users className="w-12 h-12 text-[#D4AF34]" />
  },
  {
    id: 'trust',
    title: 'Trust & Reputation',
    description: 'Building customer trust through consistent performance and reliability across all touchpoints.',
    icon: <Shield className="w-12 h-12 text-[#D4AF34]" />
  },
  {
    id: 'visibility',
    title: 'Brand Visibility',
    description: 'Design, print, brand, and install high-quality promotional materials to help individuals and businesses stand out.',
    icon: <Award className="w-12 h-12 text-[#D4AF34]" />
  }
];

const benefits = [
  'Increased brand recognition and recall',
  'Consistent brand experience across all touchpoints',
  'Stronger emotional connection with your audience',
  'Clear differentiation from competitors',
  'Higher perceived value for your products and services',
  'Improved customer loyalty and retention',
  'Enhanced credibility and trust in your market',
  'Clear communication of your company values and purpose'
];

export default function BrandingPage() {
  return (
    <main>
      {/* Banner */}
      <AboutBanner
        title="Branding"
        subtitle="Comprehensive branding services to help businesses create a strong identity and connect with their audience."
        backgroundImage="/images/solutions/solutions-banner.jpeg"
        breadcrumbs={[
          { label: "Home", url: "/" },
          { label: "Solutions", url: "/solutions" },
          { label: "Branding" }
        ]}
      />
      
      {/* Introduction Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Build a <span className="text-[#D4AF34]">Powerful Brand</span>
            </h2>
            <p className="text-gray-700 text-lg">
              We help businesses create strong brands that resonate with their audience, build customer
              loyalty, differentiate from competitors, and clearly communicate values and purpose.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Column */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">
                Comprehensive Branding Solutions
              </h2>
              
              <p className="text-gray-700 mb-6">
                Your brand is more than just a logo—it's the complete experience customers have with your business.
                At SortBrands, we take a holistic approach to branding, addressing every aspect of how your
                business is perceived in the market.
              </p>
              
              <p className="text-gray-700 mb-8">
                From developing your visual identity to crafting your brand messaging and ensuring consistency
                across all touchpoints, we help you build a brand that stands out, connects with your audience,
                and drives business growth.
              </p>
              
              <h3 className="text-xl font-bold text-black mb-4">The Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-[#D4AF34] rounded-full p-1 mt-1 mr-3 flex-shrink-0">
                      <Check className="text-black w-3 h-3" />
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Image Column */}
            <div className="relative">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/solutions/branding-main.png"
                  alt="Branding Services"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 hover:scale-105"
                />
              </div>
              {/* Decorative gold corner */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-8 border-r-8 border-[#D4AF34] z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Branding Services Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Branding <span className="text-[#D4AF34]">Services</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              We offer a comprehensive suite of branding services to help your business
              establish a strong market presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandingServices.map((service) => (
              <div 
                key={service.id}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl border border-gray-100 hover:border-[#D4AF34]/20 transition-all duration-300"
              >
                <div className="mb-5 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
                <p className="text-gray-700 text-center">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6">
              We also offer branding services for promotional materials including tents, umbrellas, billboards,
              street pole banners, hoodies, t-shirts, office/car branding, and more.
            </p>
            <Link 
              href="/contacts" 
              className="inline-flex items-center bg-[#D4AF34] hover:bg-black text-black hover:text-white px-6 py-3 rounded-full font-bold transition-colors duration-300"
            >
              Discuss Your Brand Strategy <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Brand Development Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Brand Development <span className="text-[#D4AF34]">Process</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              We follow a strategic approach to help you create a powerful brand that resonates with your audience.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Brand Process Steps */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Step 1 */}
                <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-[#D4AF34]">
                  <div className="text-3xl font-bold text-[#D4AF34] mb-4">01</div>
                  <h3 className="text-xl font-bold mb-3">Brand Discovery</h3>
                  <p className="text-gray-700">
                    We start by understanding your business goals, target audience, market position, 
                    and competitors to establish a solid foundation for your brand.
                  </p>
                </div>
                
                {/* Step 2 */}
                <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-[#D4AF34]">
                  <div className="text-3xl font-bold text-[#D4AF34] mb-4">02</div>
                  <h3 className="text-xl font-bold mb-3">Brand Strategy</h3>
                  <p className="text-gray-700">
                    We develop a comprehensive brand strategy that defines your brand positioning, 
                    values, personality, messaging, and unique value proposition.
                  </p>
                </div>
                
                {/* Step 3 */}
                <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-[#D4AF34]">
                  <div className="text-3xl font-bold text-[#D4AF34] mb-4">03</div>
                  <h3 className="text-xl font-bold mb-3">Brand Identity</h3>
                  <p className="text-gray-700">
                    We create the visual elements of your brand, including logo, color palette, 
                    typography, and design system that will represent your brand across all channels.
                  </p>
                </div>
                
                {/* Step 4 */}
                <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-[#D4AF34]">
                  <div className="text-3xl font-bold text-[#D4AF34] mb-4">04</div>
                  <h3 className="text-xl font-bold mb-3">Brand Implementation</h3>
                  <p className="text-gray-700">
                    We help you implement your brand across all touchpoints, from digital presence 
                    to physical materials, ensuring consistency in how your brand is presented.
                  </p>
                </div>
              </div>
              
              {/* Connecting Line for Desktop */}
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-px bg-gray-300"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section - Updated with new design */}
      <section className="py-16 relative overflow-hidden">
        {/* Background with geometric patterns */}
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundColor: '#000000',
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(212, 175, 52, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(212, 175, 52, 0.15) 0%, transparent 50%)
            `,
          }}
        >
          {/* Animated gold lines */}
          <div className="absolute w-full h-full opacity-10">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF34] animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-full h-1 bg-[#D4AF34] animate-pulse"></div>
            <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF34] animate-pulse"></div>
            <div className="absolute top-0 right-0 w-1 h-full bg-[#D4AF34] animate-pulse"></div>
          </div>
          
          {/* Diagonal gold lines */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full border-t border-l border-[#D4AF34]"></div>
            <div className="absolute bottom-0 right-0 w-full h-full border-b border-r border-[#D4AF34]"></div>
          </div>
          
          {/* Gold dots pattern */}
          <div className="absolute inset-0 z-0 opacity-10"
               style={{
                 backgroundImage: 'radial-gradient(#D4AF34 1px, transparent 1px)',
                 backgroundSize: '20px 20px'
               }}>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* CTA Content */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center border-4 border-[#D4AF34] bg-black/30">
                <Award className="w-12 h-12 text-[#D4AF34]" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build a <span className="text-[#D4AF34]">Stronger Brand?</span>
            </h2>
            
            <p className="text-white/80 text-lg mb-8">
              Let's work together to create a brand that resonates with your audience and helps you stand out in the market.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link 
                href="/contacts" 
                className="inline-flex items-center bg-[#D4AF34] hover:bg-white text-black px-8 py-4 rounded-full font-bold transition-colors duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Brand Journey <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link 
                href="/case-studies" 
                className="inline-flex items-center bg-transparent border-2 border-[#D4AF34] text-[#D4AF34] hover:bg-[#D4AF34]/10 px-8 py-4 rounded-full font-bold transition-colors duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}