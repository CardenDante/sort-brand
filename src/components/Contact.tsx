"use client";
import { useState } from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Replace with actual form submission logic
      // Example:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      
      // if (!response.ok) throw new Error('Failed to submit form');
      
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold text-xl mb-2 block">REACH OUT</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Have a question or ready to start your project? Reach out to us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-brand-black p-6">
              <h3 className="text-2xl font-bold text-white">Send Us a Message</h3>
              <div className="w-16 h-1 bg-brand-gold mt-2"></div>
            </div>
            
            <div className="p-8">
              {submitSuccess ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded mb-6">
                  <p className="font-bold">Thank you for your message!</p>
                  <p>We've received your inquiry and will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {submitError && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                      {submitError}
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
                        placeholder="+254 700 000000"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-brand-black text-white font-bold py-3 px-6 rounded-md hover:bg-brand-gold transition duration-300 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-8">
              <div className="bg-brand-black p-6">
                <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                <div className="w-16 h-1 bg-brand-gold mt-2"></div>
              </div>
              
              <div className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-brand-gold p-3 rounded-full mr-4">
                      <FaPhone className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Phone</h4>
                      <p className="text-gray-600">+254 742 906 505</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-gold p-3 rounded-full mr-4">
                      <FaWhatsapp className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">WhatsApp</h4>
                      <p className="text-gray-600">+254 742 906 505</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-gold p-3 rounded-full mr-4">
                      <FaEnvelope className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Email</h4>
                      <p className="text-gray-600">
                        <a href="mailto:Sortbrandske@gmail.com" className="hover:text-brand-gold transition duration-300">
                          Sortbrandske@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-gold p-3 rounded-full mr-4">
                      <FaMapMarkerAlt className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Head Office</h4>
                      <p className="text-gray-600">
                        Off Thika Road, behind Safari Park Hotel next to USIU
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="bg-brand-black p-6">
                <h3 className="text-2xl font-bold text-white">Business Hours</h3>
                <div className="w-16 h-1 bg-brand-gold mt-2"></div>
              </div>
              
              <div className="p-8">
                <div className="flex items-start mb-6">
                  <div className="bg-brand-gold p-3 rounded-full mr-4">
                    <FaClock className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Working Hours</h4>
                    <p className="text-gray-600">We're here to help during these hours</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="font-medium">Monday - Friday:</span>
                    <span className="text-gray-600">8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span className="text-gray-600">9:00 AM - 3:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span className="text-gray-600">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.745958416936!2d36.87683291545613!3d-1.3199019360310908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f13a25b750e05%3A0x8c8f43f33da73dde!2sSafari%20Park%20Hotel%20%26%20Casino!5e0!3m2!1sen!2ske!4v1684123456789!5m2!1sen!2ske" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Sortbrands Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;