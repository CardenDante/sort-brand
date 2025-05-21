// src/app/not-found.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Home, Search, Mail } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-[#D4AF34]/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-[#D4AF34]/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-20 w-4 h-4 bg-[#D4AF34]/15 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-[#D4AF34]/25 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Large decorative circles */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#D4AF34]/5 rounded-full"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#D4AF34]/5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          {/* <div className="mb-8">
            <Link href="/" className="inline-block">
              <div className="relative h-16 w-48 mx-auto">
                <Image
                  src="/images/logo/sb.png"
                  alt="Sort Brands Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </Link>
          </div> */}

          {/* 404 Visual */}
          <div className="mb-8">
            <div className="relative inline-block">
              {/* Large 404 text */}
              <h1 className="text-[150px] md:text-[200px] lg:text-[250px] font-bold text-gray-100 leading-none select-none">
                404
              </h1>
              
              {/* Overlay content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#D4AF34]/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#D4AF34]/20">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#D4AF34]/20 rounded-full flex items-center justify-center">
                    <Search className="w-8 h-8 text-[#D4AF34]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Page Not Found
                  </h2>
                  <p className="text-gray-600">
                    Oops! The page you're looking for seems to have wandered off.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-12 max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Don't worry, even the best brands sometimes lose their way. Let's get you back on track 
              to discover amazing branding and marketing solutions.
            </p>
            
            {/* Stats or fun fact */}
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#D4AF34]">
              <p className="text-gray-700">
                <span className="font-bold text-[#D4AF34]">Did you know?</span> The best brand experiences 
                are created when every touchpoint tells a consistent story. Let's help you tell yours!
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              href="/"
              className="inline-flex items-center bg-[#D4AF34] hover:bg-black text-black hover:text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              <Home className="mr-2 w-5 h-5" />
              Back to Home
            </Link>
            
            <Link 
              href="/solutions"
              className="inline-flex items-center border-2 border-[#D4AF34] text-[#D4AF34] hover:bg-[#D4AF34] hover:text-black px-8 py-4 rounded-full font-bold transition-all duration-300"
            >
              <Search className="mr-2 w-5 h-5" />
              Explore Our Services
            </Link>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <Link 
              href="/about"
              className="group bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:border-[#D4AF34]/30 hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#D4AF34] transition-colors">
                About Us
              </h3>
              <p className="text-gray-600 text-sm">
                Learn more about our mission to sort your brand through innovative solutions.
              </p>
            </Link>
            
            <Link 
              href="/case-studies"
              className="group bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:border-[#D4AF34]/30 hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#D4AF34] transition-colors">
                Case Studies
              </h3>
              <p className="text-gray-600 text-sm">
                See how we've helped other businesses achieve their branding goals.
              </p>
            </Link>
            
            <Link 
              href="/news"
              className="group bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:border-[#D4AF34]/30 hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#D4AF34] transition-colors">
                News & Insights
              </h3>
              <p className="text-gray-600 text-sm">
                Stay updated with the latest trends and insights in branding and marketing.
              </p>
            </Link>
          </div>

          {/* Contact CTA */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Still Can't Find What You're Looking For?</h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help you navigate to exactly what you need.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contacts"
                className="inline-flex items-center bg-[#D4AF34] hover:bg-black text-black hover:text-white px-6 py-3 rounded-lg font-bold transition-all duration-300"
              >
                <Mail className="mr-2 w-4 h-4" />
                Contact Us
              </Link>
              
              <Link 
                href="tel:+254742906505"
                className="inline-flex items-center text-[#D4AF34] hover:text-black font-medium transition-colors"
              >
                Or call us at +254 742 906 505
              </Link>
            </div>
          </div>

          {/* Back to previous page */}
          <div className="mt-8">
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center text-gray-500 hover:text-[#D4AF34] transition-colors text-sm"
            >
              <ArrowLeft className="mr-1 w-4 h-4" />
              Go back to previous page
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}