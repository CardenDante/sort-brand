// src/app/case-studies/[id]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaHome, FaChevronRight, FaChartLine, FaUsers, FaCheckCircle, FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

// In a real application, this would be fetched from a database or API
// based on the ID parameter from the URL
const getCaseStudy = (id: string) => {
  // This is a placeholder for demonstration purposes
  return {
    id: 'boomplay-music',
    title: 'How We Increased Boomplay Musics User Engagement by 75%',
    clientName: 'Boomplay Music',
    clientLogo: '/images/clients/boomplay-logo.png',
    heroImage: '/images/case-studies/boomplay-hero.jpg',
    category: 'Digital Marketing',
    industry: 'Entertainment',
    date: 'June 2023',
    challenge: `
      Boomplay Music, a leading music streaming service in Africa, faced increasing competition in the digital entertainment space. 
      Despite having a robust platform and extensive music library, they struggled with user engagement metrics and needed to 
      increase active users and session duration. The challenge was to develop a comprehensive digital marketing strategy that would:
      
      1. Increase daily active users and user engagement
      2. Expand their user base in key target markets
      3. Improve app download and retention rates
      4. Establish stronger brand recognition in a competitive market
    `,
    solution: `
      We developed a multi-faceted digital marketing strategy that combined social media campaigns, influencer partnerships, 
      and targeted advertising. Our approach included:
      
      1. Data-driven user persona development to better understand target audiences
      2. Strategic partnerships with 25+ music influencers across multiple African markets
      3. Regionally targeted social media campaigns highlighting local artists and music genres
      4. Programmatic advertising focused on high-value user acquisition
      5. In-app event promotions and personalized user engagement strategies
    `,
    results: [
      { metric: 'User Engagement', value: '75%', description: 'Increase in daily active users and session time' },
      { metric: 'App Downloads', value: '2.5M', description: 'New app installations across target markets' },
      { metric: 'Retention Rate', value: '40%', description: 'Improvement in 30-day user retention' },
      { metric: 'Social Media Growth', value: '150%', description: 'Increase in social media followers and engagement' }
    ],
    testimonial: {
      quote: "SortBrands transformed our digital marketing approach. Their strategic insights and execution capabilities helped us significantly increase our user engagement and app downloads. They truly understood our market and delivered exceptional results.",
      author: "Marketing Director",
      company: "Boomplay Music"
    },
    galleryImages: [
      { src: '/images/case-studies/boomplay-gallery-1.jpg', alt: 'Social media campaign visual' },
      { src: '/images/case-studies/boomplay-gallery-2.jpg', alt: 'Influencer partnership event' },
      { src: '/images/case-studies/boomplay-gallery-3.jpg', alt: 'Campaign analytics dashboard' }
    ],
    relatedCaseStudies: [
      { id: 'gbs-tv-africa', title: 'Media Brand Revitalization for GBS TV Africa' },
      { id: 'weekend-academy', title: 'Digital Presence Strategy for Weekend Academy' }
    ]
  };
};

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const caseStudy = getCaseStudy(params.id);
  
  return (
    <main>
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[500px] overflow-hidden">
          <Image
            src={caseStudy.heroImage}
            alt={caseStudy.title}
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-1/2"></div>
          
          <div className="container mx-auto px-4 relative h-full z-10">
            <div className="absolute bottom-10 left-4 md:left-12 max-w-2xl">
              <div className="flex items-center mb-4">
                <div className="bg-white/90 backdrop-blur-sm p-2 rounded-md mr-4">
                  <div className="relative h-12 w-32">
                    <Image
                      src={caseStudy.clientLogo}
                      alt={caseStudy.clientName}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
                <span className="inline-block bg-[#D4AF34] text-black text-sm font-semibold px-3 py-1 rounded-full">
                  {caseStudy.category}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {caseStudy.title}
              </h1>
            </div>
          </div>
        </div>
        
        {/* Breadcrumbs Section */}
        <div className="bg-[#f5f5f5] border-b border-gray-200">
          <div className="container mx-auto px-4">
            <nav className="py-4">
              <ol className="flex items-center flex-wrap">
                <li className="flex items-center">
                  <FaHome className="mr-1 text-gray-500" />
                  <Link 
                    href="/" 
                    className="text-gray-500 hover:text-[#D4AF34] transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                
                <li className="flex items-center">
                  <FaChevronRight className="mx-2 text-xs text-gray-400" />
                  <Link 
                    href="/case-studies" 
                    className="text-gray-500 hover:text-[#D4AF34] transition-colors duration-300"
                  >
                    Case Studies
                  </Link>
                </li>
                
                <li className="flex items-center">
                  <FaChevronRight className="mx-2 text-xs text-gray-400" />
                  <span className="text-[#D4AF34] font-medium">{caseStudy.clientName}</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-gray-500 text-sm mb-1">Client</div>
                <div className="font-semibold">{caseStudy.clientName}</div>
              </div>
              
              <div className="text-center">
                <div className="text-gray-500 text-sm mb-1">Industry</div>
                <div className="font-semibold">{caseStudy.industry}</div>
              </div>
              
              <div className="text-center">
                <div className="text-gray-500 text-sm mb-1">Services</div>
                <div className="font-semibold">{caseStudy.category}</div>
              </div>
              
              <div className="text-center">
                <div className="text-gray-500 text-sm mb-1">Date</div>
                <div className="font-semibold">{caseStudy.date}</div>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">The Challenge</h2>
              <div className="w-16 h-1 bg-[#D4AF34] mb-6"></div>
              <div className="text-gray-700 space-y-4 whitespace-pre-line">
                {caseStudy.challenge}
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Our Solution</h2>
              <div className="w-16 h-1 bg-[#D4AF34] mb-6"></div>
              <div className="text-gray-700 space-y-4 whitespace-pre-line">
                {caseStudy.solution}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 text-center">The Results</h2>
            <div className="w-16 h-1 bg-[#D4AF34] mx-auto mb-10"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md">
                  <div className="text-[#D4AF34] text-3xl md:text-4xl font-bold mb-2">{result.value}</div>
                  <div className="font-semibold text-gray-800 mb-2">{result.metric}</div>
                  <div className="text-gray-600 text-sm">{result.description}</div>
                </div>
              ))}
            </div>
            
            {/* Testimonial */}
            <div className="bg-[#D4AF34]/10 border-l-4 border-[#D4AF34] p-6 rounded-r-lg">
              <p className="text-gray-700 italic mb-4">"{caseStudy.testimonial.quote}"</p>
              <div className="font-semibold text-gray-900">{caseStudy.testimonial.author}, {caseStudy.testimonial.company}</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 text-center">Project Gallery</h2>
            <div className="w-16 h-1 bg-[#D4AF34] mx-auto mb-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudy.galleryImages.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                  <div className="relative h-64">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Case Studies */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 text-center">Related Case Studies</h2>
            <div className="w-16 h-1 bg-[#D4AF34] mx-auto mb-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudy.relatedCaseStudies.map((related, index) => (
                <Link 
                  key={index} 
                  href={`/case-studies/${related.id}`}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold text-black mb-2">{related.title}</h3>
                  <div className="flex items-center text-[#D4AF34]">
                    <span className="mr-2">View Case Study</span>
                    <FaLongArrowAltRight />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Achieve Similar Results?</h2>
            <p className="text-white/70 mb-8">
              Let's discuss how we can help your brand reach its full potential through strategic marketing and branding solutions.
            </p>
            <Link
              href="/contacts"
              className="inline-flex items-center bg-[#D4AF34] hover:bg-[#c9a52f] text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg"
            >
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Navigation */}
      <section className="py-8 bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <Link 
              href="/case-studies"
              className="flex items-center text-gray-700 hover:text-[#D4AF34] transition-colors duration-300"
            >
              <FaLongArrowAltLeft className="mr-2" />
              <span>Back to Case Studies</span>
            </Link>
            
            <Link 
              href={`/case-studies/${caseStudy.relatedCaseStudies[0].id}`}
              className="flex items-center text-gray-700 hover:text-[#D4AF34] transition-colors duration-300"
            >
              <span>Next Case Study</span>
              <FaLongArrowAltRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}