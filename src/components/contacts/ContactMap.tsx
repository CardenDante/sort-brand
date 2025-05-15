// src/components/ContactMap.tsx
"use client";
import { useRef, useEffect, useState } from 'react';

const ContactMap = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, []);

  return (
    <section className="relative">
      {/* Map Container */}
      <div 
        ref={mapRef}
        className={`w-full h-[400px] bg-gray-200 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* For production, replace this with an actual map component */}
        {isVisible && (
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8127091882417!2d36.87613867489815!3d-1.254396435685506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f15deed7c8d65%3A0xb18e40776880a1e2!2sUSIU%20Road%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1715698425261!5m2!1sen!2ske" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="SortBrands Office Location"
            className="w-full h-full"
          />
        )}
      </div>
      
      {/* CTA Overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-black/70 backdrop-blur-sm p-6 md:p-8 rounded-lg text-center max-w-md w-11/12 shadow-2xl border border-[#D4AF34]/20">
        <h3 className="text-2xl font-bold text-[#D4AF34] mb-3">Visit Our Office</h3>
        <p className="text-white/80 mb-6">
          We're located off Thika Road, behind Safari Park Hotel next to USIU in Nairobi. 
          Stop by during business hours and let's discuss your brand needs.
        </p>
        <a 
          href="https://www.google.com/maps/dir//USIU+Road,+Nairobi/@-1.2543964,36.8761387,17z/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-[#D4AF34] hover:bg-[#c9a52f] text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg"
        >
          Get Directions
        </a>
      </div>
    </section>
  );
};

export default ContactMap;