// src/components/Hero.tsx
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
}

const Hero = ({
  title = "We sort businesses of every size to thrive globally.",
  subtitle = "We are the world’s best digital creative agency, dedicated to sorting brands grow, adapt, and lead in the modern market through innovative marketing solutions.",
  buttonText = "Our Solutions",
  buttonLink = "/solutions",
  backgroundImage = "/images/hero.jpeg"
}: HeroProps) => {
  return (
    <section className="relative h-[60vh] sm:h-[70vh] bg-black">
      {/* Background image with black overlay effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Hero Background"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="opacity-40 mix-blend-soft-light"
        />
        {/* Additional black overlay for darker effect */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full max-w-4xl">
          {/* Responsive title with proper line breaks */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight">
            <span className="block sm:inline">We sort businesses of</span>
            <br className="hidden sm:block" />
            <span className="block sm:inline"> every size to thrive globally.</span>
          </h1>
          
          {/* Responsive gold underline accent */}
          <div className="w-32 sm:w-48 md:w-64 lg:w-96 h-1 bg-[#D4AF34] mt-3 sm:mt-4 mb-6 sm:mb-8"></div>
          
          {subtitle && (
            <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 max-w-full sm:max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
          
          <Link
            href={buttonLink}
            className="inline-block bg-[#D4AF34] text-black font-bold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-opacity-90 transition duration-300 text-sm sm:text-base"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;