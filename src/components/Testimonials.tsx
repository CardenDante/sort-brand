"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  testimonial: string;
}

// Example testimonials - replace with actual testimonials
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Jane Doe',
    position: 'Marketing Director',
    company: 'ABC Corporation',
    image: '/images/testimonials/client1.jpg',
    testimonial: 'Sortbrands transformed our digital presence completely. Their strategic approach to social media marketing increased our engagement by 200% and drove significant traffic to our website. Their team is professional, responsive, and delivers results beyond expectations.',
  },
  {
    id: 2,
    name: 'John Smith',
    position: 'CEO',
    company: 'XYZ Enterprises',
    image: '/images/testimonials/client2.jpg',
    testimonial: 'We hired Sortbrands for a complete rebranding exercise and they exceeded our expectations. Their creativity and understanding of our vision were impressive. The new brand identity has been well-received by our customers and has given us a fresh, modern look.',
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    position: 'Brand Manager',
    company: 'Global Solutions',
    image: '/images/testimonials/client3.jpg',
    testimonial: 'Working with Sortbrands on our influencer marketing campaign was a game-changer. They connected us with the perfect influencers for our target audience and managed the entire process seamlessly. The campaign reached over 1 million people and significantly boosted our sales.',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section className="py-24 bg-gray-900 text-white relative">
      {/* Background overlay with pattern */}
      <div className="absolute inset-0 bg-opacity-20 bg-pattern"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold text-xl mb-2 block">TESTIMONIALS</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial slides */}
            <div className="overflow-hidden relative">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-black bg-opacity-40 p-10 rounded-lg">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        <div className="flex-shrink-0">
                          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-brand-gold relative">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              fill
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                        </div>
                        <div>
                          <FaQuoteLeft className="text-brand-gold text-4xl mb-4 opacity-50" />
                          <p className="text-lg mb-6 italic">
                            "{testimonial.testimonial}"
                          </p>
                          <div>
                            <h4 className="text-xl font-bold text-brand-gold">{testimonial.name}</h4>
                            <p className="text-gray-300">
                              {testimonial.position}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 -left-5 -translate-y-1/2 bg-brand-gold hover:bg-black hover:text-brand-gold text-black rounded-full p-3 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <FaArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 -right-5 -translate-y-1/2 bg-brand-gold hover:bg-black hover:text-brand-gold text-black rounded-full p-3 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <FaArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Testimonial indicators */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-brand-gold w-8' : 'bg-white bg-opacity-30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;