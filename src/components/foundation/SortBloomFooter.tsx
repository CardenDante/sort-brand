// src/components/SortBloomFooter.tsx
import Link from 'next/link';
import { MapPin, Phone, Mail, HeartHandshake } from 'lucide-react';

const SortBloomFooter = () => {
  return (
    <footer className="bg-sortbloom-blue text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-sortbloom-gold/50 pb-10 mb-8">
          {/* Section 1: Brand Info */}
          <div className="md:col-span-1">
            <Link href="/foundation" className="flex items-center text-white text-2xl font-extrabold tracking-tight mb-4">
                <HeartHandshake className="w-8 h-8 mr-2 text-sortbloom-gold"/>
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
            <h4 className="text-lg font-bold text-sortbloom-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-sortbloom-gold transition-colors">About Us</Link></li>
              <li><Link href="/impact" className="hover:text-sortbloom-gold transition-colors">Areas of Impact</Link></li>
              <li><Link href="/join" className="hover:text-sortbloom-gold transition-colors">Get Involved</Link></li>
              <li><Link href="/donate" className="hover:text-sortbloom-gold transition-colors">Donate</Link></li>
            </ul>
          </div>

          {/* Section 3: Core Values */}
          <div>
            <h4 className="text-lg font-bold text-sortbloom-gold mb-4">Our Values</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>Compassion</li>
              <li>Dignity</li>
              <li>Integrity</li>
              <li>Community</li>
              <li>Action</li>
            </ul>
          </div>

          {/* Section 4: Contact Info - Placeholder for now */}
          <div>
            <h4 className="text-lg font-bold text-sortbloom-gold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0 text-sortbloom-gold" /> 
                <span>Nairobi, Kenya</span>
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-sortbloom-gold" /> 
                <a href="mailto:info@sortbloom.org" className="hover:text-sortbloom-gold transition-colors">info@sortbloom.org</a>
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-sortbloom-gold" /> 
                <a href="tel:+2547XXXXXXXX" className="hover:text-sortbloom-gold transition-colors">+254 742 906 505</a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-4 text-sm text-gray-300">
          &copy; {new Date().getFullYear()} SortBloom Child Foundation. All rights reserved. | <Link href="/" className="hover:text-sortbloom-gold transition-colors">A Sortbrands Initiative</Link>
        </div>
      </div>
    </footer>
  );
};

export default SortBloomFooter;