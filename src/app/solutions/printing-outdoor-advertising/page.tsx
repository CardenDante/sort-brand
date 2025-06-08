// src/app/solutions/printing-outdoor-advertising/page.tsx
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

const printingServices: ServiceItem[] = [
  {
    id: 'billboard-advertising',
    title: 'Billboard Advertising',
    description: 'We design and manage high-impact billboard campaigns that capture attention and drive brand awareness. Our billboard advertising services include strategic location analysis, eye-catching design creation, permit handling, and installation coordination. We work with premium billboard locations across key areas to ensure maximum visibility for your brand. Our team handles everything from concept development to final installation, ensuring your message reaches your target audience effectively. We also provide ongoing campaign monitoring and performance analysis to maximize your outdoor advertising investment.',
    image: '/images/solutions/billboard-advertising.jpg',
    benefits: [
      'High Visibility: Reach thousands of potential customers daily',
      'Brand Awareness: Build strong brand recognition in target areas',
      'Cost-Effective: Lower cost per impression compared to other media',
      'Strategic Locations: Premium placements in high-traffic areas',
      '24/7 Exposure: Round-the-clock advertising presence',
      'Local Targeting: Focus on specific geographic markets'
    ]
  },
  {
    id: 'business-cards-printing',
    title: 'Business Cards & Stationery',
    description: 'We create professional business cards, letterheads, envelopes, and complete stationery packages that reflect your brand identity. Our printing services use high-quality materials and finishes including matte, gloss, embossed, and specialty papers. We ensure your business cards make a lasting first impression with creative designs, premium printing quality, and attention to detail. From concept to delivery, we handle the entire process including design consultation, material selection, proofing, and timely delivery of your printed materials.',
    image: '/images/solutions/business-cards-printing.jpg',
    benefits: [
      'Professional Image: Create lasting first impressions',
      'Brand Consistency: Maintain uniform brand identity across materials',
      'High-Quality Printing: Premium materials and finishes',
      'Custom Design: Tailored to your specific brand requirements',
      'Quick Turnaround: Fast production and delivery times',
      'Cost-Effective: Affordable solutions for all business sizes'
    ]
  },
  {
    id: 'banners-signage',
    title: 'Banners & Signage',
    description: 'We design and produce custom banners, signs, and displays for events, businesses, and promotional campaigns. Our banner and signage services include indoor and outdoor solutions, from small event banners to large-scale building signage. We use weather-resistant materials and high-quality printing techniques to ensure durability and vibrant colors. Our team provides complete solutions including design, production, installation, and maintenance. Whether you need trade show displays, storefront signs, or promotional banners, we deliver professional results that enhance your brand visibility.',
    image: '/images/solutions/banners-signage.jpg',
    benefits: [
      'Versatile Applications: Suitable for various events and locations',
      'Weather Resistant: Durable materials for indoor and outdoor use',
      'Eye-Catching Designs: Vibrant colors and professional graphics',
      'Custom Sizes: Any dimension to fit your specific needs',
      'Easy Installation: Simple setup and mounting options',
      'Brand Visibility: Increase awareness at events and locations'
    ]
  },
  {
    id: 'vehicle-wrapping',
    title: 'Vehicle Wrapping & Graphics',
    description: 'We transform vehicles into moving billboards with professional vehicle wrapping and graphic services. Our vehicle branding solutions include full wraps, partial wraps, and custom decals for cars, trucks, vans, and commercial fleets. We use premium vinyl materials that protect your vehicle\'s original paint while delivering stunning visual impact. Our experienced team ensures precise installation and professional finish. Vehicle wrapping is a cost-effective way to advertise your business everywhere you go, turning your fleet into a powerful marketing tool.',
    image: '/images/solutions/vehicle-wrapping.jpg',
    benefits: [
      'Mobile Advertising: Reach customers wherever you drive',
      'Cost-Effective: One-time investment with long-term exposure',
      'Paint Protection: Preserve vehicle\'s original paint finish',
      'Professional Installation: Expert application and finish',
      'High Impact: Eye-catching designs that generate leads',
      'Fleet Branding: Consistent brand image across all vehicles'
    ]
  },
  {
    id: 'promotional-materials',
    title: 'Promotional Materials',
    description: 'We create a wide range of promotional materials including brochures, flyers, posters, catalogs, and marketing collaterals. Our promotional printing services help businesses communicate their message effectively through high-quality printed materials. We handle everything from design and layout to printing and finishing, ensuring your materials stand out and effectively communicate your brand message. Our promotional materials are designed to engage your audience and drive action, whether for product launches, events, or ongoing marketing campaigns.',
    image: '/images/solutions/promotional-materials.jpg',
    benefits: [
      'Professional Quality: High-resolution printing and premium materials',
      'Brand Consistency: Aligned with your visual identity guidelines',
      'Engaging Content: Compelling designs that capture attention',
      'Versatile Formats: Multiple sizes and formats available',
      'Quick Production: Fast turnaround for urgent campaigns',
      'Measurable Impact: Track response rates and campaign effectiveness'
    ]
  },
  {
    id: 'large-format-printing',
    title: 'Large Format Printing',
    description: 'We specialize in large format printing for oversized marketing materials, architectural plans, trade show graphics, and wall murals. Our large format printing capabilities include posters, canvas prints, fabric displays, and architectural drawings. Using state-of-the-art printing technology, we deliver sharp, vibrant prints that maintain quality even at massive scales. Whether you need exhibition graphics, retail displays, or decorative wall prints, our large format printing services provide the impact and quality your project demands.',
    image: '/images/solutions/large-format-printing.jpg',
    benefits: [
      'Massive Scale: Print materials up to any required size',
      'Superior Quality: Sharp detail and vibrant colors at large sizes',
      'Versatile Materials: Print on paper, canvas, fabric, and vinyl',
      'Exhibition Ready: Perfect for trade shows and events',
      'Architectural Support: Technical drawings and blueprints',
      'Custom Applications: Tailored solutions for unique requirements'
    ]
  }
];

export default function PrintingOutdoorAdvertisingPage() {
  return (
    <main>
      {/* Banner */}
      <AboutBanner
        title="Printing & Outdoor Advertising"
        subtitle="Professional printing and outdoor advertising solutions that make your brand visible and memorable."
        backgroundImage="/images/solutions/printing-outdoor-background.jpg"
        breadcrumbs={[
          { label: "Home", url: "/" },
          { label: "Solutions", url: "/solutions" },
          { label: "Printing & Outdoor Advertising" }
        ]}
      />
      
      {/* Introduction Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Make Your Brand <span className="text-[#D4AF34]">Visible Everywhere</span>
            </h2>
            <p className="text-gray-700 text-lg">
              From high-impact billboard campaigns to professional business cards, we provide comprehensive 
              printing and outdoor advertising solutions that help your brand stand out in the physical world. 
              Our services combine creative design with quality production to deliver materials that make 
              lasting impressions and drive business results.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      {printingServices.map((service, index) => (
        <section 
          key={service.id} 
          className={`py-12 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Column - Switch sides based on index */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl bg-gray-50">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="transition-transform duration-700 hover:scale-105 p-4"
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
                  Get Quote <FaArrowRight className="ml-2" />
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
          <div className="max-w-3xl mx-auto text-center py-8 px-6 md:px-10 bg-white rounded-xl shadow-lg border border-gray-100 relative">
            {/* Gold decorative element */}
            <div className="w-20 h-1 bg-[#D4AF34] mx-auto mb-8"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Make Your Brand <span className="text-[#D4AF34]">Stand Out?</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-8">
              Let's create high-impact printing and outdoor advertising solutions that get your brand noticed. 
              Contact us today for a free quote and consultation.
            </p>
            
            <Link 
              href="/contacts" 
              className="inline-flex items-center bg-[#D4AF34] hover:bg-black text-black hover:text-white font-bold px-8 py-4 rounded-full transition-colors duration-300 transform hover:scale-105 shadow-md"
            >
              Get Free Quote <ArrowRight className="ml-2 w-5 h-5" />
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