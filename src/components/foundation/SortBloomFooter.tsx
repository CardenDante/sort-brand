// src/components/SortBloomFooter.tsx
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, HeartHandshake } from 'lucide-react';

const SortBloomFooter = () => {
  return (
    <footer className="bg-sortbloom-blue text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-sortbloom-gold/50 pb-10 mb-8">
          {/* Section 1: Brand Info */}
          <div className="md:col-span-1">
            <Link
              href="/foundation"
              className="flex items-center text-white text-2xl font-extrabold tracking-tight mb-4"
            >
              SortBloom
            </Link>
            <p className="text-sm text-gray-200">
              Sorting Needs. Blooming Futures.
            </p>
            <p className="mt-4 text-sm text-gray-200">
              A community-driven nonprofit dedicated to empowering vulnerable children across Kenya and beyond.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-sortbloom-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-sortbloom-gold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/impact"
                  className="hover:text-sortbloom-gold transition-colors"
                >
                  Areas of Impact
                </Link>
              </li>
              <li>
                <Link
                  href="/join"
                  className="hover:text-sortbloom-gold transition-colors"
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="hover:text-sortbloom-gold transition-colors"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Core Values */}
          <div>
            <h4 className="text-lg font-bold text-sortbloom-gold mb-4">
              Our Values
            </h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>Compassion</li>
              <li>Dignity</li>
              <li>Integrity</li>
              <li>Community</li>
              <li>Action</li>
            </ul>
          </div>

          {/* Section 4: Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-sortbloom-gold mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0 text-sortbloom-gold" />
                <span>Nairobi, Kenya</span>
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-sortbloom-gold" />
                <a
                  href="mailto:info@sortbloom.org"
                  className="hover:text-sortbloom-gold transition-colors"
                >
                  info@sortbloom.org
                </a>
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-sortbloom-gold" />
                <a
                  href="tel:+254742906505"
                  className="hover:text-sortbloom-gold transition-colors"
                >
                  +254 742 906 505
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row — Copyright + Powered by */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300 pt-4">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} SortBloom Child Foundation. All
            rights reserved. |{' '}
            <Link
              href="/"
              className="hover:text-sortbloom-gold transition-colors"
            >
              A Sortbrands Initiative
            </Link>
          </p>

          {/* Powered by Chacha Technologies */}
          <div className="flex items-center bg-sortbloom-gold/10 border border-sortbloom-gold/30 rounded-md px-3 py-1.5">
            <span className="text-gray-300 text-sm mr-2">Powered by</span>
            <a
              href="https://www.chach-a.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <Image
                src="https://www.chach-a.com/logoMark.svg"
                alt="Chacha Technologies"
                width={20}
                height={20}
                className="mr-1"
              />
              <span className="text-sortbloom-gold text-sm font-semibold">
                Chacha Technologies
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SortBloomFooter;
