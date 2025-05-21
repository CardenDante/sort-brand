// src/app/solutions/influencer-marketing/page.tsx
import AboutBanner from '@/components/about/AboutBanner';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck, FaArrowRight, FaInstagram, FaYoutube, FaTwitter, FaTiktok } from 'react-icons/fa';

interface BenefitItem {
  id: string;
  title: string;
  description: string;
}

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  number: string;
}

const benefits: BenefitItem[] = [
  {
    id: 'authenticity',
    title: 'Authentic Promotion',
    description: 'Influencers provide genuine endorsements that resonate more deeply with audiences than traditional advertising.'
  },
  {
    id: 'targeted',
    title: 'Targeted Audience Reach',
    description: 'Reach precisely defined audience segments that align with your brand through carefully selected influencers.'
  },
  {
    id: 'trust',
    title: 'Enhanced Trust & Credibility',
    description: 'Leverage the established trust between influencers and their followers to build credibility for your brand.'
  },
  {
    id: 'content',
    title: 'Quality Content Creation',
    description: 'Gain access to creative, professional content produced by influencers who understand their audience.'
  },
  {
    id: 'engagement',
    title: 'Higher Engagement Rates',
    description: 'Enjoy better engagement compared to traditional ads, with more likes, comments, and shares.'
  },
  {
    id: 'roi',
    title: 'Measurable ROI',
    description: 'Track clear metrics to measure campaign performance and return on investment.'
  }
];

const processSteps: ProcessStep[] = [
  {
    id: 'strategy',
    title: 'Strategy Development',
    description: 'We create a customized influencer marketing strategy aligned with your business goals and target audience.',
    number: '01'
  },
  {
    id: 'selection',
    title: 'Influencer Selection',
    description: 'We identify and vet suitable influencers whose audience and values align with your brand.',
    number: '02'
  },
  {
    id: 'management',
    title: 'Campaign Management',
    description: 'We handle all aspects of the campaign, from briefing and content approval to monitoring and optimization.',
    number: '03'
  },
  {
    id: 'measurement',
    title: 'Performance Measurement',
    description: 'We track key metrics and provide detailed reports on campaign performance and ROI.',
    number: '04'
  }
];

export default function InfluencerMarketingPage() {
  return (
    <main>
      {/* Banner */}
      <AboutBanner
        title="Influencer Marketing"
        subtitle="Strategic partnerships with relevant influencers to amplify your brand message and reach new audiences."
        backgroundImage="/images/solutions/influencer-marketing-banner.jpg"
        breadcrumbs={[
          { label: "Home", url: "/" },
          { label: "Solutions", url: "/solutions" },
          { label: "Influencer Marketing" }
        ]}
      />
      
      {/* Introduction Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Amplify Your Brand with <span className="text-[#D4AF34]">Influencer Marketing</span>
            </h2>
            <p className="text-gray-700 text-lg">
              We help businesses identify suitable brand ambassadors or influencers, manage their activities, 
              and measure their impact to ensure your brand message reaches the right audience effectively.
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
                  src="/images/solutions/influencer-marketing-main.jpg"
                  alt="Influencer Marketing"
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
                Strategic Influencer Partnerships
              </h2>
              
              <p className="text-gray-700 mb-6">
                At SortBrands, we specialize in connecting businesses with the right influencers who can authentically 
                represent your brand and effectively engage with your target audience. Our comprehensive influencer 
                marketing services help you navigate this dynamic landscape to achieve measurable results.
              </p>
              
              <p className="text-gray-700 mb-6">
                We manage the entire influencer marketing process, from selecting the perfect brand ambassadors to 
                guiding them on content creation, monitoring performance, and measuring ROI. Our strategic approach 
                ensures that your influencer campaigns align with your overall marketing objectives and deliver 
                real business results.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                  <FaInstagram className="text-[#D4AF34] mr-2" />
                  <span className="font-medium">Instagram</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                  <FaYoutube className="text-[#D4AF34] mr-2" />
                  <span className="font-medium">YouTube</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                  <FaTwitter className="text-[#D4AF34] mr-2" />
                  <span className="font-medium">Twitter/X</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                  <FaTiktok className="text-[#D4AF34] mr-2" />
                  <span className="font-medium">TikTok</span>
                </div>
              </div>
              
              <Link 
                href="/contacts" 
                className="inline-flex items-center bg-[#D4AF34] hover:bg-black text-black hover:text-white px-6 py-3 rounded-full font-bold transition-colors duration-300"
              >
                Start Your Influencer Campaign <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Benefits of <span className="text-[#D4AF34]">Influencer Marketing</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Partnering with influencers offers numerous advantages for your brand:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div 
                key={benefit.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl border border-gray-100 hover:border-[#D4AF34]/20 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-black mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Influencer Marketing <span className="text-[#D4AF34]">Process</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              We follow a strategic approach to ensure your influencer campaigns deliver measurable results:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step) => (
              <div 
                key={step.id}
                className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#D4AF34]"
              >
                <div className="flex items-start">
                  <div className="text-4xl font-bold text-[#D4AF34] opacity-50 mr-4">{step.number}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Column */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-black mb-6">
                Our Influencer Marketing Services
              </h2>
              
              <p className="text-gray-700 mb-6">
                We provide comprehensive influencer marketing services to help you achieve your brand objectives:
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-[#D4AF34] rounded-full p-1 mt-1 mr-3 flex-shrink-0">
                    <FaCheck className="text-black text-sm" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Influencer Selection & Vetting</h4>
                    <p className="text-gray-700">Identifying the right influencers whose audience and values align with your brand.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-[#D4AF34] rounded-full p-1 mt-1 mr-3 flex-shrink-0">
                    <FaCheck className="text-black text-sm" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Campaign Strategy & Planning</h4>
                    <p className="text-gray-700">Developing effective campaigns that align with your marketing objectives.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-[#D4AF34] rounded-full p-1 mt-1 mr-3 flex-shrink-0">
                    <FaCheck className="text-black text-sm" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Influencer Relationship Management</h4>
                    <p className="text-gray-700">Handling all communications, briefings, and ongoing relationship management.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-[#D4AF34] rounded-full p-1 mt-1 mr-3 flex-shrink-0">
                    <FaCheck className="text-black text-sm" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Content Strategy & Approval</h4>
                    <p className="text-gray-700">Guiding influencers on content creation and ensuring brand alignment.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-[#D4AF34] rounded-full p-1 mt-1 mr-3 flex-shrink-0">
                    <FaCheck className="text-black text-sm" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Performance Tracking & Reporting</h4>
                    <p className="text-gray-700">Measuring campaign results and providing detailed analytics.</p>
                  </div>
                </li>
              </ul>
              
              <Link 
                href="/contacts" 
                className="inline-flex items-center bg-[#D4AF34] hover:bg-black text-black hover:text-white px-6 py-3 rounded-full font-bold transition-colors duration-300"
              >
                Discuss Your Influencer Strategy <FaArrowRight className="ml-2" />
              </Link>
            </div>
            
            {/* Image Column */}
            <div className="relative order-1 lg:order-2">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/solutions/influencer-services.jpg"
                  alt="Influencer Marketing Services"
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
      
      {/* CTA Section */}
      
    </main>
  );
}

// //<section 
//         className="py-16 relative"
//         style={{
//           background: 'linear-gradient(135deg, #000000 0%, #222222 60%, #333333 100%)',
//         }}
//       >
//         {/* Background overlay pattern */}
//         <div 
//           className="absolute inset-0 z-0 opacity-10" 
//           style={{
//             backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23D4AF34\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")',
//           }}
//         ></div>
        
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-3xl mx-auto text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//               Ready to Leverage the Power of <span className="text-[#D4AF34]">Influencers?</span>
//             </h2>
//             <p className="text-white/80 text-lg mb-8">
//               Let's work together to create influencer partnerships that amplify your brand message
//               and connect you with new audiences.
//             </p>
//             <Link 
//               href="/contacts" 
//               className="inline-block bg-[#D4AF34] hover:bg-white text-black font-bold px-8 py-4 rounded-full transition-colors duration-300 transform hover:scale-105"
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>
//       </section>