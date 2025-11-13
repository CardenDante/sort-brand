"use client";

import Image from "next/image";
import Link from "next/link";

export default function ImpactPage() {
  return (
    <main className="overflow-hidden">
      <ImpactGrid />
      <CTA />
    </main>
  );
}

/* -------------------- IMPACT GRID -------------------- */
function ImpactGrid() {
  const impacts = [
    {
      slug: "spiritual-life",
      title: "Spiritual Life",
      color: "#4CAF50",
    },
    {
      slug: "mindset-change",
      title: "Mindset Change",
      color: "#1976D2",
    },
    {
      slug: "education-empowerment",
      title: "Education Empowerment",
      color: "#FFC107",
    },
    {
      slug: "mental-health-awareness",
      title: "Mental Health Awareness",
      color: "#4CAF50",
    },
    {
      slug: "mind-recreation",
      title: "Mind Recreation",
      color: "#1976D2",
    },
    {
      slug: "marathons-empowerment",
      title: "Marathons Empowerment",
      color: "#FFC107",
    },
  ];

  return (
    <section className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impacts.map((impact) => (
            <div
              key={impact.title}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image placeholder with accent */}
              <div className="relative">
                <div
                  className="absolute -inset-2 rounded-2xl -z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundColor: impact.color }}
                />
                <div className="w-full aspect-[4/3] bg-gray-200 grid place-items-center text-gray-500 font-medium">
                  Placeholder 400×300
                </div>
              </div>

              {/* Title and Link */}
              <div className="p-6">
                <h3
                  className="text-2xl font-extrabold mb-4"
                  style={{ color: impact.color }}
                >
                  {impact.title}
                </h3>
                <Link
                  href={`/impact/${impact.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-sortbloom-blue hover:text-sortbloom-green transition"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- CTA -------------------- */
function CTA() {
  return (
    <section className="py-24 bg-[#FFFDF5] text-center">
      <div className="max-w-4xl mx-auto px-6 bg-white shadow-lg rounded-2xl py-12 border border-gray-100">
        <h2 className="text-3xl md:text-4xl font-extrabold text-sortbloom-green mb-4">
          Join Us in Making a Difference
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
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