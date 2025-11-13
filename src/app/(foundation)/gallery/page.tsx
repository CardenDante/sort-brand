"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, Filter } from "lucide-react";

export default function GalleryPage() {
  return (
    <main className="overflow-hidden">
      <GalleryHeader />
      <GalleryGrid />
      <CTA />
    </main>
  );
}

/* -------------------- GALLERY HEADER -------------------- */
function GalleryHeader() {
  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex justify-center mb-4">
          <Camera className="w-12 h-12 text-sortbloom-green" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-sortbloom-blue mb-4">
          Our Gallery
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Capturing moments of hope, joy, and transformation. See the impact of 
          your support through the smiles and achievements of the children we serve.
        </p>
      </div>
    </section>
  );
}

/* -------------------- GALLERY GRID -------------------- */
function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Education", "Events", "Community", "Marathons", "Children"];

  // Empty gallery - no images yet
  const galleryItems: { id: number; category: string; title: string; aspect: string }[] = [];

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <Filter className="w-5 h-5 text-sortbloom-blue" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition ${
                activeCategory === cat
                  ? "bg-sortbloom-blue text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-sortbloom-blue hover:text-sortbloom-blue"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image Placeholder */}
              <div
                className={`w-full bg-gray-200 grid place-items-center text-gray-500 font-medium relative overflow-hidden`}
                style={{ aspectRatio: item.aspect }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sortbloom-green/20 to-sortbloom-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Placeholder Image</span>
              </div>

              {/* Image Caption */}
              <div className="p-4 bg-white">
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-sortbloom-blue font-medium">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              No Image Found
            </h3>
            <p className="text-gray-500">
              We're building our gallery. Check back soon to see photos of our impactful work with children.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

/* -------------------- CTA SECTION -------------------- */
function CTA() {
  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-3xl mx-auto px-4 bg-[#FFFDF5] shadow-lg rounded-2xl py-12 border border-gray-100">
        <h2 className="text-3xl font-extrabold text-sortbloom-green mb-4">
          Join Us in Making a Difference
        </h2>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Every act of kindness helps a child bloom. Support SortBloom
          Foundation by volunteering, partnering, or donating to create lasting
          impact.
        </p>
        <a
          href="/donate"
          className="inline-block bg-sortbloom-blue hover:bg-sortbloom-green text-white font-semibold py-3 px-8 rounded-full transition"
        >
          Donate Now
        </a>
      </div>
    </section>
  );
}