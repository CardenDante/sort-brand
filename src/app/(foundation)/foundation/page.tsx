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
   SORTBLOOM FOUNDATION — HOME PAGE (Modified)
   ========================================================== */

export default function FoundationHomePage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <CTA />
      <FAQSection />
    </main>
  );
}

/* ----------------------------------------------------------
   HERO SECTION
   Backgrounds: map-bg.png + line-element.png + Group-8.png
---------------------------------------------------------- */

export function Hero() {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDonate = async () => {
    if (!amount || Number(amount) < 1) {
      alert("Please enter a valid donation amount.");
      return;
    }

    const phone = prompt("Enter your Mpesa number (e.g. 07XXXXXXXX):");
    if (!phone) return;

    setLoading(true);
    try {
      const res = await fetch("/api/donations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Anonymous Donor",
          phone,
          amount: Number(amount),
          message: "Hero section donation",
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ STK Push sent! Check your phone to complete the payment.");
      } else {
        alert(`⚠️ ${data.error || "Failed to initiate Mpesa payment."}`);
      }
    } catch (error) {
      alert("❌ Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden pt-20 pb-28 z-0">
      {/* Background Map */}
      <div className="absolute inset-0 bg-[url('/images/map-bg.png')] bg-no-repeat bg-center bg-cover opacity-50 z-0" />

      {/* Group pattern accent */}
      <Image
        src="/images/Group-8.png"
        alt="Background pattern"
        width={300}
        height={300}
        className="absolute bottom-0 right-0 opacity-50 -z-10"
        priority
      />

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Every child Deserves a chance <br />
            <span className="text-sortbloom-gold">To Bloom</span>
          </h1>
          <p className="mt-5 text-gray-700 text-lg max-w-xl">
            Empowering vulnerable and underserved children across Kenya through
            compassion, education, mindset change, and mentorship.
          </p>
        </motion.div>

        {/* Image replacing the donation card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/images/medium-shot-smiley-african-boys.jpg"
            alt="Smiling African children"
            width={600}
            height={450}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------
   CTA SECTION (similar to About page)
---------------------------------------------------------- */
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