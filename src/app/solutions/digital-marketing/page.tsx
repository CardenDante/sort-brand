// src/app/solutions/digital-marketing/page.tsx
import AboutBanner from '@/components/about/AboutBanner';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  benefits: string[];
}

const digitalMarketingServices: ServiceItem[] = [
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    description: 'We assist individuals and businesses in setting up and optimizing social media accounts across platforms such as Facebook, Instagram, X (formerly Twitter), LinkedIn, TikTok, and YouTube. We create and refine social media profiles to ensure they are fully optimized for visibility and engagement. This includes crafting compelling bios, selecting the perfect profile and cover photos, and making platform-specific adjustments to maximize each network\'s potential. Additionally, we create engaging content that resonates with your audience, respond to inquiries in real-time, and run Facebook and Google Ads to drive the growth of your social media presence—ultimately generating quality leads that contribute to business growth.',
    image: '/images/solutions/Social Media Marketing - Sortbrands Group.jpeg',
    benefits: [
      'Brand Awareness: Reach a large audience and boost visibility',
      'Targeted Advertising: Tailor campaigns to specific demographics',
      'Cost-Effective: Affordable compared to traditional ads',
      'Customer Engagement: Interact with customers in real time',
      'Lead Generation: Drive sales and gather leads',
      'Customer Insights: Understand audience behaviour and preferences'
    ]
  },
  {
    id: 'content-creation',
    title: 'Content Marketing',
    description: 'We assist businesses in designing eye-catching social media posters, creating engaging visual content, crafting compelling copy, and producing dynamic videos. Our content resonates with your audience and reflects your brand\'s unique voice and values. We also plan and manage content calendars to ensure a consistent, strategic posting schedule. From captivating graphics to thought-provoking articles and videos, we handle every aspect of content creation and management, keeping your social media channels vibrant, active, and aligned with your brand.',
    image: '/images/solutions/content-marketing.jpeg',
    benefits: [
      'Brand Awareness: Boosts visibility with consistent messaging',
      'Audience Engagement: Drives interaction and connection',
      'Organic Traffic: SEO-optimized content improves rankings',
      'Lead Generation: Converts visitors into potential leads',
      'Higher Conversions: Nurtures prospects through the sales funnel',
      'Authority: Builds trust and positions your brand as a leader'
    ]
  },
  {
    id: 'affiliate-marketing',
    title: 'Affiliate Marketing',
    description: 'We help businesses establish and manage comprehensive affiliate marketing programs that expand their reach through strategic partnerships. Our affiliate marketing services include recruiting high-quality affiliates, setting up tracking systems, creating compelling promotional materials, and managing commission structures. We identify and connect you with relevant influencers, bloggers, and content creators who align with your brand values and target audience. Our team handles the entire affiliate recruitment process, provides ongoing support to affiliates, monitors performance metrics, and ensures compliance with industry standards. This performance-based marketing approach allows you to scale your business through trusted partners who promote your products or services to their audiences.',
    image: '/images/solutions/Affiliate-Marketing - Sortbrands.webp',
    benefits: [
      'Performance-Based: Pay only for actual results and conversions',
      'Extended Reach: Access new audiences through affiliate networks',
      'Cost-Effective: Lower acquisition costs compared to traditional advertising',
      'Brand Credibility: Leverage affiliate trust and authority',
      'Scalable Growth: Expand market presence without direct investment',
      'Risk Mitigation: Reduced marketing risk with pay-per-performance model'
    ]
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'We create eye-catching, interactive, responsive, and fast websites, along with online portfolios for individuals, small businesses, and large organizations. Our designs are crafted to engage your audience, provide an exceptional user experience, and are fully optimized for search engine visibility.',
    image: '/images/solutions/Web development and management -  - Sortbrands Group.jpg',
    benefits: [
      '24/7 Online Presence: Your website works for you around the clock',
      'Credibility: A professional website builds trust with potential customers',
      'Brand Showcase: Display your products, services, and values',
      'Lead Generation: Convert visitors into customers with strategic design',
      'Analytics: Track visitor behavior to optimize marketing strategies',
      'Mobile Compatibility: Reach customers on any device'
    ]
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    description: 'We help businesses and individuals design and send newsletters, promotions, offers, and updates on products, services, or holidays to both existing and potential clients.',
    image: '/images/solutions/Email Marketing - Sortbrands Group.jpg',
    benefits: [
      'Direct Communication: Reach your audience directly in their inbox',
      'High ROI: Email marketing offers excellent return on investment',
      'Personalization: Tailor messages to specific customer segments',
      'Automated Campaigns: Set up sequences that nurture leads automatically',
      'Measurable Results: Track opens, clicks, and conversions',
      'Relationship Building: Stay connected with your audience regularly'
    ]
  }
];

export default function DigitalMarketingPage() {
  return (
    <main>
      {/* Banner */}
      <AboutBanner
        title="Digital Marketing"
        subtitle="Tailored digital marketing campaigns that enhance brand awareness, drive traffic, generate leads, and increase conversions."
        backgroundImage="/images/solutions/Digital Marketing Backgroud -Sortbrands Group.jpg"
        breadcrumbs={[
          { label: "Home", url: "/" },
          { label: "Solutions", url: "/solutions" },
          { label: "Digital Marketing" }
        ]}
      />
      
      {/* Introduction Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Boost Your Online <span className="text-[#D4AF34]">Presence</span>
            </h2>
            <p className="text-gray-700 text-lg">
              We are dedicated to providing tailored digital marketing campaigns that enhance brand awareness, 
              drive traffic to your website, generate leads, and increase conversions, all of which directly 
              contribute to a higher Return on Investment (ROI).
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      {digitalMarketingServices.map((service, index) => (
        <section 
          key={service.id} 
          className={`py-12 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Column - Switch sides based on index */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-700 hover:scale-105"
                  />
                </div>
                {/* Decorative gold corner */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-8 border-r-8 border-[#D4AF34] z-10"></div>
              </div>
              
              {/* Content Column */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <h2 className="text-3xl font-bold text-black mb-6">
                  {service.title}
                </h2>
                
                <p className="text-gray-700 mb-6">
                  {service.description}
                </p>
                
                <h3 className="text-xl font-bold text-black mb-4">Benefits</h3>
                <div className="grid grid-cols-1 gap-3 mb-6">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start">
                      <div className="bg-[#D4AF34] rounded-full p-1 mt-1 mr-3 flex-shrink-0">
                        <FaCheck className="text-black text-sm" />
                      </div>
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
                
                <Link 
                  href="/contacts" 
                  className="inline-flex items-center bg-[#D4AF34] hover:bg-black text-black hover:text-white px-6 py-3 rounded-full font-bold transition-colors duration-300"
                >
                  Get Started <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
      
      {/* CTA Section */}
      <section className="py-16 relative bg-white overflow-hidden">
  {/* Subtle geometric pattern background */}
  <div 
    className="absolute inset-0 z-0 opacity-5" 
    style={{
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")',
    }}
  ></div>
  
  {/* Decorative elements */}
  <div className="absolute inset-0 z-0">
    {/* Gold accent shapes */}
    <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#D4AF34]/5"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#D4AF34]/5"></div>
    
    {/* Subtle gold lines */}
    <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-white via-[#D4AF34]/30 to-white"></div>
    <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-white via-[#D4AF34]/30 to-white"></div>
  </div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-3xl mx-auto text-center py-8 px-6 md:px-10 bg-white rounded-xl shadow-lg border border-gray-100">
      {/* Gold decorative element */}
      <div className="w-20 h-1 bg-[#D4AF34] mx-auto mb-8"></div>
      
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Ready to Transform Your <span className="text-[#D4AF34]">Digital Presence?</span>
      </h2>
      
      <p className="text-gray-600 text-lg mb-8">
        Let's work together to create a digital marketing strategy that drives results for your business.
        Contact us today to get started.
      </p>
      
      <Link 
        href="/contacts" 
        className="inline-flex items-center bg-[#D4AF34] hover:bg-black text-black hover:text-white font-bold px-8 py-4 rounded-full transition-colors duration-300 transform hover:scale-105 shadow-md"
      >
        Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
      </Link>
      
      {/* Gold corner accents */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#D4AF34] rounded-tl-xl"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#D4AF34] rounded-br-xl"></div>
    </div>
  </div>
</section>
    </main>
  );
}