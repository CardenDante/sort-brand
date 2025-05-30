"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Solution {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  link: string;
  benefits?: string[];
}

const solutionsData: Solution[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'Tailored digital marketing campaigns that enhance brand awareness and drive conversions.',
    fullDescription: 'We are dedicated to providing tailored digital marketing campaigns that enhance brand awareness, drive traffic to your website, generate leads, and increase conversions, all of which directly contribute to a higher Return of Investment (ROI).',
    image: '/images/services/digital-marketing.jpg',
    link: '/solutions/digital-marketing',
    benefits: [
      'Brand Awareness: Reach a large audience and boost visibility.',
      'Targeted Advertising: Tailor campaigns to specific demographics.',
      'Cost-Effective: Affordable compared to traditional ads.',
      'Customer Engagement: Interact with customers in real time.'
    ]
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    shortDescription: 'High-quality, eye-catching designs to help your brand stand out.',
    fullDescription: 'We create high-quality, eye-catching, and simple customized social media posters to help individuals and businesses stand out, cast a positive light, and effectively promote and sell their products and services. We also design a wide range of materials, including logos, flyers, brochures, CVs/resumes, portfolios, invitation cards, letterheads, business cards, job IDs, banners, envelopes, notebooks/diaries, calendars, magazines, company profiles, catalogues, receipts, billboards, and more.',
    image: '/images/services/graphic-design.jpg',
    link: '/solutions/graphic-design'
  },
  {
    id: 'branding',
    title: 'Branding',
    shortDescription: 'Comprehensive branding solutions to establish your unique identity.',
    fullDescription: 'We help businesses and individuals in branding with Brand Logo & Visual Identity, Brand Values & Mission, Brand Voice & Messaging, Customer Experience optimization, Trust & Reputation building, and Brand Visibility through high-quality promotional materials.',
    image: '/images/services/branding.jpg',
    link: '/solutions/branding'
  },
  {
    id: 'photography',
    title: 'Photography & Videography',
    shortDescription: 'Professional photography and videography for all your event needs.',
    fullDescription: 'We create memories by capturing beautiful shots and amazing footage at various events, including corporate functions, site visits, weddings, birthdays, church events, roadshows, baby showers, hiking trips, team building activities, burial ceremonies, and more. We also edit eye-catching promotional and advertisement videos for various products and events.',
    image: '/images/services/photography.jpg',
    link: '/solutions/photography'
  },
  {
    id: 'influencer-marketing',
    title: 'Influencer Marketing',
    shortDescription: 'Strategic influencer partnerships to amplify your brand message.',
    fullDescription: 'We help businesses by advising on suitable brand ambassadors or influencers for their brand. We manage influencers by guiding them on brand guidelines, content strategy, and business expectations and deliverables. We ensure they receive everything they need from the business to deliver the best results and effectively promote the brand.',
    image: '/images/services/influencer-marketing.jpg',
    link: '/solutions/influencer-marketing'
  },
  {
    id: 'consultation',
    title: 'Consultation',
    shortDescription: 'Expert guidance to optimize your digital marketing strategy.',
    fullDescription: 'We offer comprehensive Consultation to startups, medium-sized businesses, and large enterprises, helping them leverage all available tools to generate high-quality leads that translate into a strong return on investment.',
    image: '/images/services/consultation.jpg',
    link: '/solutions/consultation'
  }
];

const Solutions = () => {
  const [activeService, setActiveService] = useState(solutionsData[0]);

  const handleServiceClick = (solution: Solution) => {
    setActiveService(solution);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold text-xl mb-2 block">OUR SERVICES</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Solutions</h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            We provide comprehensive digital marketing solutions to help your business grow and stand out from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Service Navigation */}
          <div className="col-span-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {solutionsData.map((solution) => (
                  <li key={solution.id}>
                    <button
                      onClick={() => handleServiceClick(solution)}
                      className={`w-full px-6 py-4 text-left hover:bg-gray-50 transition duration-300 ${
                        activeService.id === solution.id
                          ? 'border-l-4 border-brand-gold bg-gray-50 font-bold'
                          : 'border-l-4 border-transparent'
                      }`}
                    >
                      <h3 className="text-lg">{solution.title}</h3>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service Details */}
          <div className="col-span-1 lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64 lg:h-80">
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-bold mb-4">{activeService.title}</h3>
                <div className="h-1 w-16 bg-brand-gold mb-6"></div>
                <p className="text-gray-700 mb-6">{activeService.fullDescription}</p>
                
                {activeService.benefits && (
                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-4">Benefits</h4>
                    <ul className="space-y-2">
                      {activeService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-brand-gold mr-2">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <Link
                  href={activeService.link}
                  className="inline-block bg-brand-gold text-black font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;