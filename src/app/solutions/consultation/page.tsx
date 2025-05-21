// src/app/solutions/consultation/page.tsx
import AboutBanner from '@/components/about/AboutBanner';
import { ArrowRight, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaChartLine, FaLightbulb, FaBullseye, FaSearch, FaCog, FaChartBar, FaCheck } from 'react-icons/fa';

interface ConsultationService {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const consultationServices: ConsultationService[] = [
  {
    id: 'digital-audit',
    title: 'Digital Marketing Audit',
    description: 'Comprehensive assessment of your current digital presence and marketing efforts to identify strengths, weaknesses, and opportunities.',
    icon: <FaSearch className="text-[#D4AF34] text-4xl" />
  },
  {
    id: 'strategy',
    title: 'Strategy Development',
    description: 'Custom digital marketing strategies tailored to your business goals, target audience, and industry landscape.',
    icon: <FaLightbulb className="text-[#D4AF34] text-4xl" />
  },
  {
    id: 'campaign',
    title: 'Campaign Planning',
    description: 'Tactical campaign planning across multiple digital channels to maximize reach and conversions.',
    icon: <FaBullseye className="text-[#D4AF34] text-4xl" />
  },
  {
    id: 'implementation',
    title: 'Implementation Guidance',
    description: 'Expert guidance on executing digital marketing strategies effectively, whether with your team or through our services.',
    icon: <FaCog className="text-[#D4AF34] text-4xl" />
  },
  {
    id: 'performance',
    title: 'Performance Analysis',
    description: 'In-depth analysis of your marketing performance with actionable insights for continuous improvement.',
    icon: <FaChartBar className="text-[#D4AF34] text-4xl" />
  },
  {
    id: 'growth',
    title: 'Growth Planning',
    description: 'Strategic planning for scaling your digital marketing efforts to support business growth objectives.',
    icon: <FaChartLine className="text-[#D4AF34] text-4xl" />
  }
];

export default function ConsultationPage() {
  return (
    <main>
      {/* Banner */}
      <AboutBanner
        title="Digital Marketing Consultation"
        subtitle="Expert guidance to help your business leverage digital marketing effectively for maximum ROI."
        backgroundImage="/images/solutions/solutions-banner.jpeg"
        breadcrumbs={[
          { label: "Home", url: "/" },
          { label: "Solutions", url: "/solutions" },
          { label: "Digital Marketing Consultation" }
        ]}
      />
      
      {/* Introduction Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Expert Digital Marketing <span className="text-[#D4AF34]">Guidance</span>
            </h2>
            <p className="text-gray-700 text-lg">
              We offer comprehensive digital marketing consultation to startups, medium-sized businesses, 
              and large enterprises, helping them leverage all available tools to generate high-quality leads 
              that translate into a strong return on investment.
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
                  src="/images/solutions/consultation.jpg"
                  alt="Digital Marketing Consultation"
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
                Strategic Digital Marketing Guidance
              </h2>
              
              <p className="text-gray-700 mb-6">
                In today's rapidly evolving digital landscape, having expert guidance can make the difference between 
                a marketing strategy that drives results and one that wastes resources. Our digital marketing consultation 
                services provide you with strategic insights and tactical recommendations tailored to your specific business needs.
              </p>
              
              <p className="text-gray-700 mb-6">
                Whether you're looking to launch a new digital marketing initiative, optimize your current efforts, or 
                completely transform your approach, our team of experienced consultants will help you navigate the 
                digital marketing landscape with confidence.
              </p>
              
              <p className="text-gray-700 mb-8">
                We analyze your business objectives, target audience, competitive landscape, and current marketing 
                performance to develop actionable strategies that deliver measurable results.
              </p>
              
              <Link 
                href="/contacts" 
                className="inline-flex items-center bg-[#D4AF34] hover:bg-black text-black hover:text-white px-6 py-3 rounded-full font-bold transition-colors duration-300"
              >
                Schedule a Consultation <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Consultation <span className="text-[#D4AF34]">Services</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              We provide a range of specialized consultation services to address your digital marketing needs:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultationServices.map((service) => (
              <div 
                key={service.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl border border-gray-100 hover:border-[#D4AF34]/20 transition-all duration-300 flex flex-col"
              >
                <div className="mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-3">{service.title}</h3>
                <p className="text-gray-700 text-center flex-grow">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Consultation <span className="text-[#D4AF34]">Approach</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              We follow a structured approach to ensure our consultation services deliver maximum value:
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process Steps - Using a vertical timeline for desktop */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
              
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-3">Discovery & Assessment</h3>
                        <p className="text-gray-700">
                          We start by understanding your business goals, target audience, and current digital marketing 
                          efforts. We conduct a comprehensive audit of your digital presence to establish a baseline.
                        </p>
                      </div>
                    </div>
                    
                    <div className="hidden md:block absolute left-1/2 w-8 h-8 bg-[#D4AF34] rounded-full transform -translate-x-1/2 z-10"></div>
                    
                    <div className="md:w-1/2 md:pl-12">
                      <div className="bg-white p-6 rounded-lg shadow-md opacity-0"></div>
                    </div>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:order-2">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-3">Strategy Development</h3>
                        <p className="text-gray-700">
                          Based on our findings, we develop a customized digital marketing strategy that aligns with 
                          your business objectives and addresses identified opportunities and challenges.
                        </p>
                      </div>
                    </div>
                    
                    <div className="hidden md:block absolute left-1/2 w-8 h-8 bg-[#D4AF34] rounded-full transform -translate-x-1/2 z-10">
                    </div>
                    
                    <div className="md:w-1/2 md:pl-12 md:order-1">
                      <div className="bg-white p-6 rounded-lg shadow-md opacity-0"></div>
                    </div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-3">Action Plan Creation</h3>
                        <p className="text-gray-700">
                          We translate the strategy into a detailed action plan with specific tactics, 
                          timelines, resource requirements, and key performance indicators.
                        </p>
                      </div>
                    </div>
                    
                    <div className="hidden md:block absolute left-1/2 w-8 h-8 bg-[#D4AF34] rounded-full transform -translate-x-1/2 z-10"></div>
                    
                    <div className="md:w-1/2 md:pl-12">
                      <div className="bg-white p-6 rounded-lg shadow-md opacity-0"></div>
                    </div>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:order-2">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-3">Implementation Support</h3>
                        <p className="text-gray-700">
                          We provide guidance and support during the implementation phase, 
                          whether you're executing the plan with your team or through our services.
                        </p>
                      </div>
                    </div>
                    
                    <div className="hidden md:block absolute left-1/2 w-8 h-8 bg-[#D4AF34] rounded-full transform -translate-x-1/2 z-10"></div>
                    
                    <div className="md:w-1/2 md:pl-12 md:order-1">
                      <div className="bg-white p-6 rounded-lg shadow-md opacity-0"></div>
                    </div>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-3">Monitoring & Optimization</h3>
                        <p className="text-gray-700">
                          We track performance against KPIs, analyze results, and provide recommendations 
                          for ongoing optimization to maximize your return on investment.
                        </p>
                      </div>
                    </div>
                    
                    <div className="hidden md:block absolute left-1/2 w-8 h-8 bg-[#D4AF34] rounded-full transform -translate-x-1/2 z-10"></div>
                    
                    <div className="md:w-1/2 md:pl-12">
                      <div className="bg-white p-6 rounded-lg shadow-md opacity-0"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile Version */}
              <div className="md:hidden space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#D4AF34]">
                  <h3 className="text-xl font-bold mb-3">Discovery & Assessment</h3>
                  <p className="text-gray-700">
                    We start by understanding your business goals, target audience, and current digital marketing 
                    efforts. We conduct a comprehensive audit of your digital presence to establish a baseline.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#D4AF34]">
                  <h3 className="text-xl font-bold mb-3">Strategy Development</h3>
                  <p className="text-gray-700">
                    Based on our findings, we develop a customized digital marketing strategy that aligns with 
                    your business objectives and addresses identified opportunities and challenges.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#D4AF34]">
                  <h3 className="text-xl font-bold mb-3">Action Plan Creation</h3>
                  <p className="text-gray-700">
                    We translate the strategy into a detailed action plan with specific tactics, 
                    timelines, resource requirements, and key performance indicators.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#D4AF34]">
                  <h3 className="text-xl font-bold mb-3">Implementation Support</h3>
                  <p className="text-gray-700">
                    We provide guidance and support during the implementation phase, 
                    whether you're executing the plan with your team or through our services.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#D4AF34]">
                  <h3 className="text-xl font-bold mb-3">Monitoring & Optimization</h3>
                  <p className="text-gray-700">
                    We track performance against KPIs, analyze results, and provide recommendations 
                    for ongoing optimization to maximize your return on investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Business Types Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Who We <span className="text-[#D4AF34]">Work With</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Our digital marketing consultation services are tailored for businesses at various stages:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Startups */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl border border-gray-100 hover:border-[#D4AF34]/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-black mb-4">Startups</h3>
              <p className="text-gray-700 mb-6">
                We help startups establish a strong digital foundation and develop cost-effective strategies 
                to build brand awareness and acquire early customers.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <div className="bg-[#D4AF34] rounded-full p-1 mt-1 mr-3 flex-shrink-0">
                    <FaCheck className="text-black text-sm" />
                  </div>
                  <span className="text-gray-700">Digital presence establishment</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#D4AF34] rounded-full p-1 mt-1 mr-3 flex-shrink-0">
                    <FaCheck className="text-black text-sm" />
                  </div>
                  <span className="text-gray-700">Lean marketing strategies</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#D4AF34] rounded-full p-1 mt-1 mr-3 flex-shrink-0">
                    <FaCheck className="text-black text-sm" />
                  </div>
                  <span className="text-gray-700">Customer acquisition planning</span>
                </li>
              </ul>
            </div>
            
            {/* Medium-Sized Businesses */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl border border-gray-100 hover:border-[#D4AF34]/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-black mb-4">Medium-Sized Businesses</h3>
              <p className="text-gray-700 mb-6">
                We assist medium-sized businesses in optimizing their digital marketing efforts to scale 
                efficiently and achieve sustainable growth.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <div className="bg-[#D4AF34] rounded-full p-1 mt-1 mr-3 flex-shrink-0">
                    <FaCheck className="text-black text-sm" />
                  </div>
                  <span className="text-gray-700">Marketing process optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#D4AF34] rounded-full p-1 mt-1 mr-3 flex-shrink-0">
                    <FaCheck className="text-black text-sm" />
                  </div>
                  <span className="text-gray-700">Performance improvement</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#D4AF34] rounded-full p-1 mt-1 mr-3 flex-shrink-0">
                    <FaCheck className="text-black text-sm" />
                  </div>
                  <span className="text-gray-700">Channel expansion strategy</span>
                </li>
              </ul>
            </div>
            
            {/* Enterprise */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl border border-gray-100 hover:border-[#D4AF34]/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-black mb-4">Large Enterprises</h3>
              <p className="text-gray-700 mb-6">
                We work with enterprises to enhance their digital marketing operations, integrate new technologies, 
                and maintain competitive advantage.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <div className="bg-[#D4AF34] rounded-full p-1 mt-1 mr-3 flex-shrink-0">
                    <FaCheck className="text-black text-sm" />
                  </div>
                  <span className="text-gray-700">Digital transformation</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#D4AF34] rounded-full p-1 mt-1 mr-3 flex-shrink-0">
                    <FaCheck className="text-black text-sm" />
                  </div>
                  <span className="text-gray-700">Cross-channel optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#D4AF34] rounded-full p-1 mt-1 mr-3 flex-shrink-0">
                    <FaCheck className="text-black text-sm" />
                  </div>
                  <span className="text-gray-700">Advanced analytics implementation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
  {/* Background with dynamic elements */}
  <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-[#111111] to-[#222222]">
    {/* Animated gold particles */}
    <div className="absolute inset-0 opacity-20">
      <div className="absolute w-4 h-4 rounded-full bg-[#D4AF34] top-1/4 left-1/4 animate-pulse"></div>
      <div className="absolute w-3 h-3 rounded-full bg-[#D4AF34] top-3/4 left-1/3 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute w-5 h-5 rounded-full bg-[#D4AF34] top-1/3 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute w-2 h-2 rounded-full bg-[#D4AF34] bottom-1/4 right-1/3 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
    </div>
    
    {/* Golden mesh grid pattern */}
    <div className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `linear-gradient(to right, #D4AF34 1px, transparent 1px),
                          linear-gradient(to bottom, #D4AF34 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}>
    </div>
    
    {/* Diagonal accent line */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
      <div className="absolute -left-1/4 top-0 w-[150%] h-2 bg-[#D4AF34] transform rotate-12"></div>
      <div className="absolute -right-1/4 bottom-20 w-[150%] h-1 bg-[#D4AF34] transform -rotate-8"></div>
    </div>
  </div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-3xl mx-auto">
      {/* Content card with semi-transparent backdrop */}
      <div className="relative p-8 md:p-12 rounded-xl bg-black/30 backdrop-blur-sm border border-[#D4AF34]/20">
        {/* Gold accent corner decorations */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#D4AF34]"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#D4AF34]"></div>
        
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Expert <span className="text-[#D4AF34]">Guidance?</span>
          </h2>
          
          <p className="text-white/80 text-lg mb-8">
            Schedule a consultation with our digital marketing experts to discuss your business goals
            and how we can help you achieve them.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              href="/contacts" 
              className="inline-flex items-center justify-center bg-[#D4AF34] hover:bg-white text-black font-bold px-8 py-4 rounded-full transition-colors duration-300 transform hover:scale-105 shadow-md w-full sm:w-auto"
            >
              Book Your Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            
            <Link
              href="tel:+254742906505"
              className="inline-flex items-center justify-center border-2 border-[#D4AF34] text-[#D4AF34] hover:bg-[#D4AF34]/10 font-bold px-8 py-4 rounded-full transition-colors duration-300 w-full sm:w-auto"
            >
              <Phone className="mr-2 w-4 h-4" /> Call Us Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}