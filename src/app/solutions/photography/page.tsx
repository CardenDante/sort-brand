// src/app/solutions/photography/page.tsx
import AboutBanner from '@/components/about/AboutBanner';
import { Camera } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaCamera, FaVideo, FaEdit, FaCheck } from 'react-icons/fa';

interface PhotoService {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface EventType {
  id: string;
  name: string;
  imageUrl: string;
}

const photoServices: PhotoService[] = [
  {
    id: 'event-photography',
    title: 'Event Photography',
    description: 'Capture the most important moments of your events with our professional photography services.',
    icon: <FaCamera className="text-[#D4AF34] text-4xl" />
  },
  {
    id: 'video-production',
    title: 'Video Production',
    description: 'Create stunning videos that tell your story and engage your audience effectively.',
    icon: <FaVideo className="text-[#D4AF34] text-4xl" />
  },
  {
    id: 'editing',
    title: 'Editing & Post-Production',
    description: 'Transform raw footage into polished, professional content with our expert editing services.',
    icon: <FaEdit className="text-[#D4AF34] text-4xl" />
  }
];

const eventTypes: EventType[] = [
  { id: 'corporate', name: 'Corporate Events', imageUrl: '/images/solutions/corporate.jpg' },
  { id: 'weddings', name: 'Weddings', imageUrl: '/images/solutions/wedding.jpg' },
  { id: 'birthdays', name: 'Birthdays', imageUrl: '/images/solutions/birthday.jpg' },
  { id: 'church', name: 'Church Events', imageUrl: '/images/solutions/church.jpg' },
  { id: 'roadshows', name: 'Roadshows', imageUrl: '/images/solutions/roadshow.avif' },
  { id: 'team-building', name: 'Team Building', imageUrl: '/images/solutions/team-building.jpg' },
];

export default function PhotographyPage() {
  return (
    <main>
      {/* Banner */}
      <AboutBanner
        title="Photography & Videography"
        subtitle="Professional visual content to capture your important moments and promote your brand."
        backgroundImage="/images/solutions/Photography & Videography background  - Sortbrands Group.png"
        breadcrumbs={[
          { label: "Home", url: "/" },
          { label: "Solutions", url: "/solutions" },
          { label: "Photography & Videography" }
        ]}
      />
      
      {/* Introduction Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Capture Your <span className="text-[#D4AF34]">Moments</span>
            </h2>
            <p className="text-gray-700 text-lg">
              We create memories by capturing beautiful shots and amazing footage at various events. 
              Our professional photography and videography services ensure that your special moments 
              are preserved with the highest quality.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {photoServices.map((service) => (
              <div 
                key={service.id}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl border border-gray-100 hover:border-[#D4AF34]/20 transition-all duration-300 flex flex-col"
              >
                <div className="mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-3">{service.title}</h3>
                <p className="text-gray-700 text-center mb-6 flex-grow">{service.description}</p>
                <div className="text-center">
                  <Link 
                    href="/contacts" 
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
      
      {/* Main Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/solutions/Professional Visual Content  - Sortbrands Group.jpeg"
                  alt="Photography Services"
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
                Professional Visual Content
              </h2>
              
              <p className="text-gray-700 mb-6">
                At Sortbrands, we specialize in creating high-quality visual content that tells your story and showcases 
                your brand in the best light. Our team of experienced photographers and videographers combines technical 
                expertise with creative vision to deliver stunning results.
              </p>
              
              <p className="text-gray-700 mb-6">
                We offer comprehensive photography and videography services for a wide range of events and purposes, 
                from corporate functions and weddings to promotional videos and product photography.
              </p>
              
              <p className="text-gray-700 mb-8">
                Our goal is to capture the essence of your brand or event, creating visual content that resonates with 
                your audience and helps you achieve your objectives.
              </p>
              
              <Link 
                href="/contacts" 
                className="inline-flex items-center bg-[#D4AF34] hover:bg-black text-black hover:text-white px-6 py-3 rounded-full font-bold transition-colors duration-300"
              >
                Book Our Services <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Events We Cover Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Events We <span className="text-[#D4AF34]">Cover</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              We capture beautiful memories at a wide variety of events:
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((event) => (
              <div key={event.id} className="relative group overflow-hidden rounded-lg shadow-md">
                <div className="relative h-64">
                  <Image
                    src={event.imageUrl}
                    alt={event.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold text-center px-4">{event.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-700">
              We also cover site visits, baby showers, hiking trips, burial ceremonies, and more.
            </p>
          </div>
        </div>
      </section>
      
      {/* Video Services Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Column */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-black mb-6">
                Video Production Services
              </h2>
              
              <p className="text-gray-700 mb-6">
                Our video production services go beyond simple recording. We create compelling visual stories that 
                engage your audience and effectively communicate your message.
              </p>
              
              <h3 className="text-xl font-bold text-black mb-4">Our Video Services Include:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="bg-[#D4AF34] rounded-full p-1 mt-1 mr-3 flex-shrink-0">
                    <FaCheck className="text-black text-sm" />
                  </div>
                  <span className="text-gray-700">
                    <strong>Promotional Videos:</strong> Showcase your products, services, or events
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#D4AF34] rounded-full p-1 mt-1 mr-3 flex-shrink-0">
                    <FaCheck className="text-black text-sm" />
                  </div>
                  <span className="text-gray-700">
                    <strong>Corporate Videos:</strong> Present your company's values, culture, and achievements
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#D4AF34] rounded-full p-1 mt-1 mr-3 flex-shrink-0">
                    <FaCheck className="text-black text-sm" />
                  </div>
                  <span className="text-gray-700">
                    <strong>Event Coverage:</strong> Capture the highlights and atmosphere of your events
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#D4AF34] rounded-full p-1 mt-1 mr-3 flex-shrink-0">
                    <FaCheck className="text-black text-sm" />
                  </div>
                  <span className="text-gray-700">
                    <strong>Social Media Content:</strong> Create engaging short-form videos for your platforms
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#D4AF34] rounded-full p-1 mt-1 mr-3 flex-shrink-0">
                    <FaCheck className="text-black text-sm" />
                  </div>
                  <span className="text-gray-700">
                    <strong>Video Editing:</strong> Professional editing of existing footage
                  </span>
                </li>
              </ul>
              
              <Link 
                href="/contacts" 
                className="inline-flex items-center bg-[#D4AF34] hover:bg-black text-black hover:text-white px-6 py-3 rounded-full font-bold transition-colors duration-300"
              >
                Discuss Your Video Project <FaArrowRight className="ml-2" />
              </Link>
            </div>
            
            {/* Image Column */}
            <div className="relative order-1 lg:order-2">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/solutions/video-production.jpeg"
                  alt="Video Production Services"
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
      <section className="py-16 relative bg-white overflow-hidden">
  {/* Subtle geometric pattern background */}
  <div 
    className="absolute inset-0 z-0 opacity-5" 
    style={{
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")',
    }}
  ></div>
  
  {/* Photography-themed decorative elements */}
  <div className="absolute inset-0 z-0">
    {/* Circular elements suggesting camera lens */}
    <div className="absolute top-10 right-10 w-32 h-32 rounded-full border-4 border-[#D4AF34]/10"></div>
    <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full border-2 border-[#D4AF34]/5"></div>
    
    {/* Focus frame lines */}
    <div className="absolute top-6 left-20 w-16 h-px bg-[#D4AF34]/20"></div>
    <div className="absolute top-20 left-6 h-16 w-px bg-[#D4AF34]/20"></div>
    <div className="absolute bottom-6 right-20 w-16 h-px bg-[#D4AF34]/20"></div>
    <div className="absolute bottom-20 right-6 h-16 w-px bg-[#D4AF34]/20"></div>
  </div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 relative overflow-hidden">
      {/* Decorative camera shutter-like diagonal line */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#D4AF34]/50 via-[#D4AF34] to-[#D4AF34]/50"></div>
      
      <div className="p-10 text-center">
        {/* Camera icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 rounded-full bg-[#D4AF34]/10 flex items-center justify-center">
            <Camera className="w-8 h-8 text-[#D4AF34]" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to Capture Your <span className="text-[#D4AF34]">Story?</span>
        </h2>
        
        <p className="text-gray-600 text-lg mb-8">
          Let our professional photographers and videographers help you create stunning visual content
          that tells your story and captures your important moments.
        </p>
        
        <Link 
          href="/contacts" 
          className="inline-flex items-center bg-[#D4AF34] hover:bg-black text-black hover:text-white font-bold px-8 py-4 rounded-full transition-colors duration-300 transform hover:scale-105 shadow-md"
        >
          Book a Session <Camera className="ml-2 w-5 h-5" />
        </Link>
      </div>
      
      {/* Photography-themed bottom border */}
      <div className="h-4 bg-gradient-to-r from-[#D4AF34]/0 via-[#D4AF34]/30 to-[#D4AF34]/0"></div>
    </div>
  </div>
  
  {/* Small floating camera frame corner elements */}
  <div className="absolute top-24 left-1/4 w-3 h-3 border-t border-l border-[#D4AF34]/30"></div>
  <div className="absolute bottom-24 right-1/4 w-3 h-3 border-b border-r border-[#D4AF34]/30"></div>
</section>
    </main>
  );
}