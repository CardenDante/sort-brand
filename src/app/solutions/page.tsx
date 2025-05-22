// src/app/solutions/page.tsx
import AboutBanner from '@/components/about/AboutBanner';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

interface SolutionCard {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const solutions: SolutionCard[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Tailored digital marketing campaigns that enhance brand awareness, drive traffic, generate leads, and increase conversions for a higher ROI.',
    image: '/images/solutions/digital-marketing.jpg',
    link: '/solutions/digital-marketing'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'High-quality, eye-catching, and simple customized designs to help you stand out, create a positive impression, and effectively promote your products and services.',
    image: '/images/solutions/graphic-design.jpg',
    link: '/solutions/graphic-design'
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'Comprehensive branding services to help businesses create a strong identity, boost customer loyalty, differentiate in the market, and clearly communicate values and purpose.',
    image: '/images/solutions/branding.jpg',
    link: '/solutions/branding'
  },
  {
    id: 'photography',
    title: 'Photography & Videography',
    description: 'Professional photography and videography services to capture beautiful shots and amazing footage at various events, along with eye-catching promotional videos.',
    image: '/images/case-studies/ssr.jpeg',
    link: '/solutions/photography'
  },
  {
    id: 'influencer-marketing',
    title: 'Influencer Marketing',
    description: 'Strategic influencer marketing guidance, including selection of suitable brand ambassadors, management of influencers, and measurement of engagement and ROI.',
    image: '/images/solutions/influencer-marketing.jpeg',
    link: '/solutions/influencer-marketing'
  },
  {
    id: 'consultation',
    title: 'Digital Marketing Consultation',
    description: 'Comprehensive consultation services for businesses of all sizes, helping leverage available tools to generate high-quality leads and achieve strong ROI.',
    image: '/images/solutions/consultation.jpg',
    link: '/solutions/consultation'
  }
];

export default function SolutionsPage() {
  return (
    <main>
      {/* About Banner */}
      <AboutBanner
        title="Our Solutions"
        subtitle="Comprehensive marketing and branding solutions to help your business thrive in the digital age."
        backgroundImage="/images/solutions/solutions-banner.jpeg"
        breadcrumbs={[
          { label: "Home", url: "/" },
          { label: "Solutions" }
        ]}
      />
      
      {/* Solutions Introduction */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Driving Growth Through <span className="text-[#D4AF34]">Strategic Solutions</span>
            </h2>
            <p className="text-gray-700 text-lg">
              At SortBrands, we offer a comprehensive suite of services designed to boost your brand's visibility, 
              engage your audience, and drive measurable results. Our team of experts combines creativity with 
              strategic thinking to deliver tailored solutions for businesses of all sizes.
            </p>
          </div>
          
          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <div 
                key={solution.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#D4AF34]/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Solution Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3">{solution.title}</h3>
                  <p className="text-gray-700 mb-6">{solution.description}</p>
                  <Link 
                    href={solution.link}
                    className="inline-flex items-center text-[#D4AF34] font-medium hover:underline transition-colors"
                  >
                    Learn More <FaArrowRight className="ml-2 text-sm" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section 
        className="py-16 relative"
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #222222 60%, #333333 100%)',
        }}
      >
        {/* Background overlay pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-10" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23D4AF34\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")',
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Take Your Brand to the <span className="text-[#D4AF34]">Next Level?</span>
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Our team of experts is ready to help you achieve your marketing and branding goals.
              Let's create something amazing together.
            </p>
            <Link 
              href="/contacts" 
              className="inline-block bg-[#D4AF34] hover:bg-white text-black font-bold px-8 py-4 rounded-full transition-colors duration-300 transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}