// src/app/booking/page.tsx
import AboutBanner from '@/components/about/AboutBanner';
import Link from 'next/link';
import { 
  FaCalendarAlt, 
  FaClock, 
  FaUser, 
  FaPhone, 
  FaEnvelope, 
  FaBriefcase,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';

export default function BookingPage() {
  return (
    <main>
      {/* Banner */}
      <AboutBanner
        title="Book Your Consultation"
        subtitle="Schedule a free consultation with our expert team to discuss your marketing and branding needs."
        backgroundImage="/images/Contact background  - Sortbrands Group.jpeg"
        breadcrumbs={[
          { label: "Home", url: "/" },
          { label: "Book Consultation" }
        ]}
      />
      
      {/* Booking Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Booking Form */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Schedule Your <span className="text-[#D4AF34]">Free Consultation</span>
                </h2>
                <p className="text-gray-600">
                  Ready to take your brand to the next level? Book a consultation with our experts 
                  and let's discuss how we can help grow your business.
                </p>
              </div>

              {/* Google Calendar Embed Option */}
              <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <FaCalendarAlt className="text-[#D4AF34] mr-3 text-xl" />
                  <h3 className="text-xl font-bold text-gray-900">Book Directly with Google Calendar</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Click the button below to view our available time slots and book your appointment directly through Google Calendar.
                </p>
                
                {/* Google Calendar Integration Button */}
                <a
                  href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2FER6jsVXhOw7Qd6CZ5H8XL2rJkQ6yGGJCNB1mYd5QP3F8R7tUcQsLd9?gv=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#D4AF34] hover:bg-black text-black hover:text-white px-6 py-3 rounded-full font-bold transition-colors duration-300"
                >
                  <FaCalendarAlt className="mr-2" />
                  View Available Times
                </a>
                
                {/* <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-blue-800 text-sm">
                    <strong>Note:</strong> Replace the href URL above with your actual Google Calendar appointment scheduling link.
                  </p>
                </div> */}
              </div>

              {/* Alternative Contact Form */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Or Contact Us Directly
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FaUser className="inline mr-2 text-[#D4AF34]" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF34] focus:border-transparent"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FaEnvelope className="inline mr-2 text-[#D4AF34]" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF34] focus:border-transparent"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FaPhone className="inline mr-2 text-[#D4AF34]" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF34] focus:border-transparent"
                        placeholder="+254 XXX XXX XXX"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FaBriefcase className="inline mr-2 text-[#D4AF34]" />
                        Service Needed
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF34] focus:border-transparent">
                        <option value="">Select a service</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="graphic-design">Graphic Design</option>
                        <option value="printing-outdoor">Printing & Outdoor Advertising</option>
                        <option value="photography">Photography & Videography</option>
                        <option value="consultation">General Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF34] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF34] focus:border-transparent"
                      placeholder="Tell us about your project or what you'd like to discuss..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-[#D4AF34] hover:bg-black text-black hover:text-white px-6 py-3 rounded-full font-bold transition-colors duration-300 flex items-center justify-center"
                  >
                    <FaArrowRight className="mr-2" />
                    Request Consultation
                  </button>
                </form>
              </div>
            </div>
            
            {/* Right Column - Information */}
            <div className="space-y-8">
              {/* What to Expect */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What to Expect in Your <span className="text-[#D4AF34]">Consultation</span>
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaCheckCircle className="text-[#D4AF34] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">Business Analysis</h4>
                      <p className="text-gray-600">We'll review your current marketing efforts and identify opportunities for growth.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaCheckCircle className="text-[#D4AF34] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">Strategy Discussion</h4>
                      <p className="text-gray-600">We'll discuss tailored strategies that align with your business goals and budget.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaCheckCircle className="text-[#D4AF34] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">Custom Proposal</h4>
                      <p className="text-gray-600">You'll receive a detailed proposal with timelines, deliverables, and pricing.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaCheckCircle className="text-[#D4AF34] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">No Obligation</h4>
                      <p className="text-gray-600">This consultation is completely free with no commitment required.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Office Hours */}
              <div className="bg-black text-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">
                  <FaClock className="inline mr-3 text-[#D4AF34]" />
                  Office Hours
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="text-[#D4AF34] font-bold">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="text-gray-400">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-gray-400">Closed</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p className="text-gray-300 text-sm">
                    <strong>Emergency consultations</strong> can be arranged outside regular hours. 
                    Contact us directly for urgent matters.
                  </p>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="bg-[#D4AF34] text-black rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaPhone className="mr-3 text-xl" />
                    <div>
                      <div className="font-bold">Call Us</div>
                      <a href="tel:+254742906505" className="hover:underline">+254 742 906 505</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <FaEnvelope className="mr-3 text-xl" />
                    <div>
                      <div className="font-bold">Email Us</div>
                      <a href="mailto:Sortbrandske@gmail.com" className="hover:underline">Sortbrandske@gmail.com</a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link 
                    href="/contacts" 
                    className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
                  >
                    View Full Contact Info <FaArrowRight className="ml-2" />
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