"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Facebook, Twitter, Mail, Phone, HeartHandshake } from "lucide-react";

export default function SortBloomHeader() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/foundation" },
    { name: "About Us", href: "/abouts" },
    { name: "Areas of Impact", href: "/impact" },
    { name: "Join Us", href: "/join" },
  ];

  return (
    <header className="relative w-full z-50">
      {/* === Top Contact Bar === */}
      <div className="hidden md:flex justify-between items-center bg-sortbloom-blue text-white text-sm px-8 py-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-sortbloom-gold" /> +254 742 906 505
          </span>
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-sortbloom-gold" /> info@sortbloom.org
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="#" className="hover:text-sortbloom-gold">
            <Facebook className="w-4 h-4" />
          </Link>
          <Link href="#" className="hover:text-sortbloom-gold">
            <Twitter className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* === Main Navbar === */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">
          {/* Logo */}
          <Link href="/foundation" className="flex items-center text-black text-2xl font-extrabold tracking-tight mb-4">
                <HeartHandshake className="w-8 h-8 mr-2 text-sortbloom-gold"/>
                SortBloom
            </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-800 font-semibold hover:text-sortbloom-green transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/donate"
              className="bg-sortbloom-gold hover:bg-sortbloom-blue text-white font-semibold px-5 py-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white border-t border-gray-200 animate-fadeIn">
            <div className="flex flex-col space-y-4 px-6 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-800 font-bold hover:text-sortbloom-green transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/donate"
                onClick={() => setOpen(false)}
                className="bg-sortbloom-gold hover:bg-sortbloom-blue text-white font-semibold px-5 py-2 rounded-full shadow-md text-center"
              >
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
