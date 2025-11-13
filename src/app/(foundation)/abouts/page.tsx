"use client";

import Image from "next/image";
import { HandHeart, Users, Smile, Sun } from "lucide-react";

export default function AboutUsPage() {
  return (
    <main className="overflow-hidden">
      <WhoWeAre />
      <MissionVision />
      <CoreValues />
      <Approach />
      <CTA />
    </main>
  );
}

/* -------------------- WHO WE ARE -------------------- */
function WhoWeAre() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Image placeholder */}
        <div className="relative">
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 grid place-items-center text-gray-500 font-medium">
            Placeholder 600×450
          </div>
        </div>

        {/* Text content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-sortbloom-blue mb-4">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed">
            SortBloom Child Foundation is a community-driven nonprofit dedicated
            to identifying, supporting, and empowering vulnerable and
            underserved children across Kenya and beyond.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We believe that every child is a seed of potential. "Sort" represents
            our mission to assess and understand each child's unique needs, while
            "Bloom" symbolizes the growth that follows when those needs are met
            with care, compassion, and opportunity.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------- MISSION & VISION -------------------- */
function MissionVision() {
  return (
    <section className="py-20 bg-[#FFFDF5]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-sortbloom-blue mb-10">
          Our Vision & Mission
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-8 text-left border border-gray-100">
            <h3 className="text-2xl font-bold text-sortbloom-green mb-3">
              Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              A world where every child — no matter their circumstances — has
              the opportunity to bloom into their fullest potential.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 text-left border border-gray-100">
            <h3 className="text-2xl font-bold text-sortbloom-blue mb-3">
              Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To identify vulnerable children, understand their individual
              needs, and connect them to life-changing support systems,
              empowering them to bloom into their full potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- CORE VALUES -------------------- */
function CoreValues() {
  const values = [
    { title: "Compassion", desc: "We lead with empathy and care for every child's story." },
    { title: "Dignity", desc: "We respect the worth of every individual, regardless of background." },
    { title: "Integrity", desc: "We are transparent, accountable, and driven by purpose." },
    { title: "Community", desc: "We believe real change happens when we work together." },
    { title: "Action", desc: "We move from intention to impact, one child at a time." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-sortbloom-green mb-10">
          Our Core Values
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 text-left"
            >
              <h3 className="text-lg font-bold text-sortbloom-blue mb-2">
                {v.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- APPROACH -------------------- */
function Approach() {
  const steps = [
    {
      title: "Identify",
      icon: <HandHeart className="w-10 h-10 text-sortbloom-green mx-auto" />,
      desc: "We work with communities to locate children in need.",
    },
    {
      title: "Sort",
      icon: <Users className="w-10 h-10 text-sortbloom-gold mx-auto" />,
      desc: "We assess and categorize their needs carefully.",
    },
    {
      title: "Support",
      icon: <Smile className="w-10 h-10 text-sortbloom-blue mx-auto" />,
      desc: "We provide or connect them to tailored resources and programs.",
    },
    {
      title: "Empower",
      icon: <Sun className="w-10 h-10 text-sortbloom-green mx-auto" />,
      desc: "We mentor, follow up, and help them grow into confident individuals.",
    },
  ];

  return (
    <section className="py-20 bg-[#FFFDF5]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-sortbloom-blue mb-10">
          Our Approach
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
            >
              {s.icon}
              <h3 className="mt-4 text-lg font-bold text-sortbloom-green">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
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