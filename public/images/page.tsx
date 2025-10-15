"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Plus,
  Minus,
  HandHeart,
  Users,
  Smile,
  Sun,
} from "lucide-react";
import { motion } from "framer-motion";

/* ==========================================================
   SORTBLOOM FOUNDATION — HOME PAGE (Donaty Layout + Patterns)
   ========================================================== */

export default function FoundationHomePage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <ImpactPreview />
      <JoinCTA />
      <FAQSection />
      <Newsletter />
    </main>
  );
}

/* ----------------------------------------------------------
   HERO SECTION
   Backgrounds: map-bg.png + line-element.png + Group-8.png
---------------------------------------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-28">
      {/* Background Map */}
      <div className="absolute inset-0 -z-10 bg-[url('/images/map-bg.png')] bg-no-repeat bg-center bg-cover opacity-90" />


      {/* Blob accent */}
      <Image
        src="/images/Group-8.png"
        alt=""
        width={300}
        height={300}
        className="absolute bottom-0 right-0 opacity-25 -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Sorting Needs. <br />
            <span className="text-sortbloom-gold">Blooming Futures.</span>
          </h1>
          <p className="mt-5 text-gray-700 text-lg max-w-xl">
            Empowering vulnerable and underserved children across Kenya through
            compassion, education, mindset change, and mentorship.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/donate"
              className="bg-sortbloom-green hover:bg-sortbloom-blue text-white font-semibold px-6 py-3 rounded-full shadow transition"
            >
              Donate Now
            </Link>
            <Link
              href="/abouts"
              className="border border-sortbloom-green text-sortbloom-green hover:bg-sortbloom-green hover:text-white font-semibold px-6 py-3 rounded-full transition"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* Donation Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 relative"
        >
          <span className="absolute -right-3 -top-3 bg-sortbloom-green text-white px-3 py-1 rounded-full text-xs font-bold shadow">
            100% Impact
          </span>
          <h3 className="text-xl font-bold text-gray-900">
            Help Children Rise Above Poverty
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Your donation brings education, mentorship, meals, and hope to a
            child in need.
          </p>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {["KSh 500", "KSh 1,000", "KSh 2,000"].map((amt) => (
              <button
                key={amt}
                className="rounded-lg border border-gray-200 py-3 text-sm font-semibold hover:border-sortbloom-blue transition"
              >
                {amt}
              </button>
            ))}
          </div>

          <div className="mt-4">
            <label className="block text-xs text-gray-500 mb-1">
              Custom Amount
            </label>
            <input
              type="text"
              placeholder="KES 0.00"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sortbloom-blue"
            />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <button className="rounded-full bg-gray-900 text-white py-3 font-semibold">
              M-Pesa
            </button>
            <button className="rounded-full bg-gray-100 text-gray-900 py-3 font-semibold">
              Card
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------
   ABOUT SECTION
   line-element.png under heading
---------------------------------------------------------- */
function About() {
  const steps = [
    { icon: <HandHeart />, title: "Identify", color: "text-sortbloom-green" },
    { icon: <Users />, title: "Sort", color: "text-sortbloom-gold" },
    { icon: <Smile />, title: "Support", color: "text-sortbloom-blue" },
    { icon: <Sun />, title: "Empower", color: "text-sortbloom-green" },
  ];

  return (
    <section className="relative py-24 bg-white">
      <Image
        src="/images/line-element.png"
        alt=""
        width={280}
        height={100}
        className="absolute -top-6 left-4 opacity-50"
      />
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Placeholder image */}
        <div className="w-full aspect-[4/3] bg-gray-200 rounded-2xl grid place-items-center text-gray-500 font-medium">
          Placeholder 600×450
        </div>

        <div>
          <p className="uppercase tracking-wide text-xs font-semibold text-sortbloom-blue/70">
            About Us
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
            Every child deserves a chance to bloom.
          </h2>
          <p className="mt-4 text-gray-700">
            SortBloom Child Foundation identifies, supports, and empowers
            vulnerable children by understanding each child’s unique needs and
            nurturing their growth with compassion and opportunity.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {steps.map((s) => (
              <div key={s.title} className="flex flex-col items-center text-center">
                <div
                  className={`w-10 h-10 rounded-full border flex items-center justify-center ${s.color} border-current`}
                >
                  {s.icon}
                </div>
                <p className="text-sm font-semibold mt-2">{s.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------
   IMPACT PREVIEW (with subtle blob accent)
---------------------------------------------------------- */
function ImpactPreview() {
  const impacts = [
    {
      title: "Education Empowerment",
      desc: "Providing school fees, supplies, and mentorship for vulnerable children to thrive.",
    },
    {
      title: "Mental Health Awareness",
      desc: "Creating safe spaces, counseling, and emotional support for children’s well-being.",
    },
    {
      title: "Mind Recreation & Marathons",
      desc: "Fostering joy, creativity, and community unity through play, arts, and sports.",
    },
  ];

  return (
    <section className="relative py-24 bg-gray-50">
      <Image
        src="/images/Group-8.png"
        alt=""
        width={280}
        height={280}
        className="absolute left-0 top-1/4 opacity-15"
      />
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="uppercase text-xs font-semibold text-sortbloom-blue/70">
          Our Areas of Impact
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
          Empowering children to bloom in every way
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {impacts.map((i) => (
            <div
              key={i.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <div className="w-full aspect-[16/10] bg-gray-200 rounded-lg grid place-items-center text-gray-500 mb-4">
                Placeholder 400×240
              </div>
              <h3 className="font-bold text-lg">{i.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{i.desc}</p>
              <Link
                href="/impact"
                className="inline-flex items-center gap-2 text-sortbloom-green font-semibold mt-4 hover:text-sortbloom-blue"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------
   CTA SECTION (with line-element and blob)
---------------------------------------------------------- */
function JoinCTA() {
  return (
    <section className="relative py-24 bg-sortbloom-green/10 overflow-hidden">
      <Image
        src="/images/line-element.png"
        alt=""
        width={300}
        height={100}
        className="absolute top-10 right-10 opacity-40"
      />
      <Image
        src="/images/Group-8.png"
        alt=""
        width={260}
        height={260}
        className="absolute bottom-0 left-0 opacity-20"
      />

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-sortbloom-green">
            Join the Bloom Movement
          </h2>
          <p className="mt-4 text-gray-700">
            Become part of our story — sponsor a child, volunteer, or partner
            with us to bring lasting impact to communities.
          </p>
          <Link
            href="/join"
            className="mt-6 inline-flex items-center bg-sortbloom-blue hover:bg-sortbloom-gold text-white font-semibold py-3 px-8 rounded-full shadow transition"
          >
            Get Involved <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <div className="w-full aspect-[4/3] bg-gray-200 rounded-2xl grid place-items-center text-gray-500">
          Placeholder 600×450
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------
   FAQ SECTION
---------------------------------------------------------- */
function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "How will my donation be used?",
      a: "Your donations go directly toward programs that provide education, mentorship, nutrition, and mental health support for vulnerable children.",
    },
    {
      q: "How can I participate as a volunteer?",
      a: "You can join us as a volunteer in mentorship, tutoring, event coordination, or community outreach by visiting the Join Us page.",
    },
    {
      q: "Can I sponsor a specific child?",
      a: "Yes! Our sponsorship program allows you to directly support one or more children, ensuring they stay in school and receive ongoing mentorship.",
    },
    {
      q: "How can I track the impact of my contribution?",
      a: "We provide regular updates and newsletters highlighting how your support changes lives, along with photos and stories from the field.",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <Image
        src="/images/line-element.png"
        alt=""
        width={280}
        height={100}
        className="absolute -top-6 left-8 opacity-40"
      />
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="uppercase text-xs font-semibold text-sortbloom-blue/70">
          Need Help?
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          The Answers to All Your Questions
        </h2>

        <div className="mt-10 text-left space-y-4">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-gray-800"
              >
                {f.q}
                {open === i ? (
                  <Minus className="w-5 h-5 text-sortbloom-green" />
                ) : (
                  <Plus className="w-5 h-5 text-sortbloom-blue" />
                )}
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-gray-600 border-t border-gray-100">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------
   NEWSLETTER
---------------------------------------------------------- */
function Newsletter() {
  return (
    <section className="py-16 bg-sortbloom-blue text-white text-center relative overflow-hidden">
      <Image
        src="/images/Group-8.png"
        alt=""
        width={300}
        height={300}
        className="absolute -left-10 top-0 opacity-15"
      />
      <h3 className="text-2xl font-bold">Stay Updated on Our Work</h3>
      <p className="mt-2 text-sm opacity-90">
        Join our newsletter to receive impact stories and event updates.
      </p>
      <form className="mt-6 flex flex-col md:flex-row items-center justify-center gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Your Email"
          className="w-full md:w-auto flex-grow px-4 py-3 rounded-full text-gray-800 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-sortbloom-gold hover:bg-sortbloom-green text-white font-semibold px-6 py-3 rounded-full transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
