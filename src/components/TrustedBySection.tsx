// src/components/TrustedBySection.tsx
"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Client logos array with your actual logo paths
const clientLogos = [
  { id: 1, name: 'Boomplay', src: '/images/logo/Boomplay.jpg' },
  { id: 2, name: 'cuea', src: '/images/logo/cuea.jpg' },
  { id: 3, name: 'IBM', src: '/images/logo/DerineMarketingAgency.jpg' },
  { id: 4, name: 'CURAPROX', src: '/images/logo/GBS.jpg' },
  { id: 5, name: 'AirAsia', src: '/images/logo/TalantaHela.jpg' },
  { id: 6, name: 'Jumia', src: '/images/logo/MinistryofYouth.jpg' },
  { id: 7, name: 'Doshi', src: '/images/logo/KaziCloud.jpg' },
  { id: 8, name: '7-Eleven', src: '/images/logo/mcl.jpg' },
  { id: 9, name: 'BNI', src: '/images/logo/MIHS.jpg' },
  { id: 10, name: 'BNI', src: '/images/logo/Rosky.jpg' },
  { id: 11, name: 'BNI', src: '/images/logo/Tetnaz.jpg' },
  { id: 12, name: 'BNI', src: '/images/logo/Weekend-Academy.jpg' },
  { id: 13, name: 'BNI', src: '/images/logo/ZINCO.jpg' },
];

// Phrases to animate in typewriter effect
const phrases = [
  "top brands Globally",
  "global industry leaders",
  "innovative businesses"
];

const TrustedBySection = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [shadePosition, setShadePosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Animation for the gold shade
  useEffect(() => {
    const animateShade = () => {
      const shadeAnimation = setInterval(() => {
        setShadePosition(prev => (prev >= 100 ? 0 : prev + 0.5));
      }, 50);
      
      return () => clearInterval(shadeAnimation);
    };
    
    if (isVisible) {
      animateShade();
    }
  }, [isVisible]);
  
  // Intersection Observer to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Typewriter effect
  useEffect(() => {
    if (!isVisible) return;
    
    const typeSpeed = 100; // typing speed in ms
    const deleteSpeed = 50; // deleting speed in ms
    const delayBetweenPhrases = 2000; // pause between phrases in ms
    
    const handleTyping = () => {
      const currentPhraseFull = phrases[currentPhrase];
      
      if (!isDeleting) {
        // Typing
        setCurrentText(prev => currentPhraseFull.substring(0, prev.length + 1));
        
        // If completed typing
        if (currentText === currentPhraseFull) {
          setTimeout(() => setIsDeleting(true), delayBetweenPhrases);
          return;
        }
      } else {
        // Deleting
        setCurrentText(prev => currentPhraseFull.substring(0, prev.length - 1));
        
        // If completed deleting
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentPhrase(prev => (prev + 1) % phrases.length);
          return;
        }
      }
    };
    
    const timer = setTimeout(
      handleTyping, 
      isDeleting ? deleteSpeed : typeSpeed
    );
    
    return () => clearTimeout(timer);
  }, [currentText, currentPhrase, isDeleting, isVisible]);
  
  return (
    <section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${shadePosition}% 50%, #D4AF34 0%, #ffffff 60%)`,
      }}
    >
      {/* Client Portfolio Title */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-black">Client Portfolio</h3>
        <div className="w-12 h-0.5 bg-black mx-auto mt-1"></div>
      </div>
      
      {/* Logo container with faded edges - without the rectangular shape */}
      <div className="mb-16 max-w-6xl mx-auto relative">
        {/* Fading logo container */}
        <div className="overflow-hidden relative h-24" 
             style={{ 
               maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
               WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
             }}>
          <div className="logos-slide flex whitespace-nowrap items-center h-full">
            {clientLogos.map(logo => (
              <div key={logo.id} className="inline-block flex-shrink-0 w-32 h-16 mx-8 relative">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
            {clientLogos.map(logo => (
              <div key={`dup-${logo.id}`} className="inline-block flex-shrink-0 w-32 h-16 mx-8 relative">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main "Trusted by" heading with typewriter effect */}
      <div className="container mx-auto px-4 text-center mt-4">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          Trusted by 
        </h2>
        <div className="relative inline-block">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold min-h-[1.2em]">
            {currentText}
            <span className="inline-block w-1 h-14 bg-black ml-1 animate-blink"></span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;