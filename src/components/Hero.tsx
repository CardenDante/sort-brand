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
  title = "Sort Brands helps top businesses thrive in Africa.",
  subtitle = "We are the leading digital creative agency dedicated to helping brands grow through innovative marketing solutions.",
  buttonText = "Our Solutions",
  buttonLink = "/solutions",
  backgroundImage = "/images/hero-bg.jpg"
}: HeroProps) => {
  return (
    <section className="relative h-[70vh] bg-black">
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
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-4xl">
          {/* Two-line title styling like in the reference */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight">
            Sort Brands helps top
            <br />
            businesses thrive in Africa.
          </h1>
          
          {/* Gold underline accent - positioned like the red one in the reference */}
          <div className="relative w-96 h-1 bg-[#D4AF34] mt-4 mb-8"></div>
          
          {subtitle && (
            <p className="text-lg text-white mb-8 max-w-2xl">
              {subtitle}
            </p>
          )}
          
          <Link
            href={buttonLink}
            className="inline-block bg-[#D4AF34] text-black font-bold px-8 py-3 rounded-full hover:bg-opacity-90 transition duration-300"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;