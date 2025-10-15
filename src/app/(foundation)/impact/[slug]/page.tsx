"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

// Data source for each impact area
const IMPACT_DETAILS: Record<
  string,
  { title: string; color: string; description: string; longText: string }
> = {
  "spiritual-life": {
    title: "Spiritual Life",
    color: "#4CAF50",
    description:
      "We guide children to build a strong spiritual foundation through faith in Jesus Christ.",
    longText: `As God is our Creator and Provider, we teach children about salvation through Jesus Christ — 
    helping them understand His sacrifice, grace, and love. Through spiritual mentorship, 
    we nurture faith, joy, and character, empowering children to live meaningful lives of purpose and hope.`,
  },
  "mindset-change": {
    title: "Mindset Change",
    color: "#1976D2",
    description:
      "We shape positive and resilient thinking that inspires growth and transformation.",
    longText: `We help children develop strong and visionary mindsets — the foundation of progress. 
    Inspired by real-world examples like South Korea’s transformation through collective mindset change, 
    we train children to think creatively, take initiative, and face challenges with courage.`,
  },
  "education-empowerment": {
    title: "Education Empowerment",
    color: "#FFC107",
    description:
      "We provide access to education and mentorship for lifelong transformation.",
    longText: `SortBloom believes education is the foundation for lasting change. 
    We support children by covering school fees, offering tutoring, mentorship, and 
    introducing digital and vocational training programs such as computer literacy, tailoring, 
    and creative skills — turning potential into opportunity.`,
  },
  "mental-health-awareness": {
    title: "Mental Health Awareness",
    color: "#4CAF50",
    description:
      "We prioritize emotional well-being as a key pillar of empowerment.",
    longText: `We address emotional trauma, stress, and self-esteem challenges among children 
    through counseling, art therapy, and safe expression. By training caregivers and schools 
    to recognize signs of distress, we create supportive, compassionate environments.`,
  },
  "mind-recreation": {
    title: "Mind Recreation",
    color: "#1976D2",
    description:
      "We encourage creativity, play, and discovery through art, games, and exploration.",
    longText: `Recreation nourishes the mind and soul. We organize creative arts, music, sports, 
    and outdoor experiences that strengthen teamwork, discipline, and self-confidence. 
    Through play and imagination, children rediscover joy and healing.`,
  },
  "marathons-empowerment": {
    title: "Marathons Empowerment",
    color: "#FFC107",
    description:
      "We unite communities through impactful, purpose-driven marathons.",
    longText: `Our marathons are more than races — they’re community movements that raise funds, 
    promote unity, and inspire health. Each step supports education, nutrition, and mental wellness 
    programs for children in need.`,
  },
};

export default function ImpactDetailPage() {
  const { slug } = useParams();
  const impact = IMPACT_DETAILS[slug as string];

  if (!impact) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-3xl font-bold text-gray-700">Impact Area Not Found</h2>
        <p className="text-gray-500 mt-2">Please return to the main impact page.</p>
        <a
          href="/impact"
          className="inline-block mt-6 bg-sortbloom-blue hover:bg-sortbloom-green text-white font-semibold py-3 px-8 rounded-full transition"
        >
          Back to Areas of Impact
        </a>
      </div>
    );
  }

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-24 text-center"
        style={{ backgroundColor: "#FFFDF5" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            style={{
              background: `linear-gradient(90deg, ${impact.color} 0%, #FFC107 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {impact.title}
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-800 max-w-2xl mx-auto leading-relaxed">
            {impact.description}
          </p>
        </div>
      </section>

      {/* Image + Description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full aspect-[4/3] bg-gray-200 rounded-2xl grid place-items-center text-gray-500 font-medium">
              Placeholder 600×450
            </div>
          </div>

          <div>
            <h2
              className="text-3xl md:text-4xl font-extrabold mb-4"
              style={{ color: impact.color }}
            >
              {impact.title}
            </h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {impact.longText}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FFFDF5] text-center">
        <div className="max-w-3xl mx-auto px-4 bg-white shadow-lg rounded-2xl py-12 border border-gray-100">
          <h2 className="text-3xl font-extrabold text-sortbloom-green mb-4">
            Support This Program
          </h2>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Join hands with SortBloom Foundation to expand this initiative and
            impact more children through mentorship, support, and education.
          </p>
          <a
            href="/foundation/donate"
            className="inline-block bg-sortbloom-blue hover:bg-sortbloom-green text-white font-semibold py-3 px-8 rounded-full transition"
          >
            Donate Now
          </a>
        </div>
      </section>
    </main>
  );
}
