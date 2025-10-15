"use client";

import Image from "next/image";
import { HandHeart, Users, Gift, HelpingHand } from "lucide-react";
import { useState } from "react";

export default function JoinUsPage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <JoinOptions />
      <JoinForm />
    </main>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  return (
    <section className="relative py-28 md:py-36 text-center bg-gradient-to-b from-[#FFF5C3] via-[#FFFDF5] to-white overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[#FDD353]/10" />
      <div className="max-w-4xl mx-auto px-6">
        <h1
          className="text-4xl md:text-6xl font-extrabold leading-tight"
          style={{
            background: "linear-gradient(90deg, #1976D2 0%, #FFC107 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Join Us
        </h1>
        <p className="mt-6 text-gray-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Together, we can shape a brighter future for vulnerable children.  
          Become part of our mission — sponsor, partner, donate, or volunteer.
        </p>
      </div>

      {/* Curve divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full text-white"
        >
          <path
            fill="currentColor"
            d="M0,64L48,58.7C96,53,192,43,288,64C384,85,480,139,576,144C672,149,768,107,864,96C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96V120H0Z"
          />
        </svg>
      </div>
    </section>
  );
}

/* -------------------- JOIN OPTIONS -------------------- */
function JoinOptions() {
  const roles = [
    {
      title: "Sponsor",
      desc: "Provide direct support to a child’s education, mentorship, or nutrition program. Every contribution changes a story.",
      color: "#4CAF50",
      icon: <HandHeart className="w-10 h-10 text-[#4CAF50]" />,
    },
    {
      title: "Partner",
      desc: "Collaborate with us as an organization, school, or business to scale community programs and reach more children.",
      color: "#1976D2",
      icon: <Users className="w-10 h-10 text-[#1976D2]" />,
    },
    {
      title: "Donor",
      desc: "Contribute to SortBloom’s general fund to help sustain and expand our impact initiatives across Kenya and beyond.",
      color: "#FFC107",
      icon: <Gift className="w-10 h-10 text-[#FFC107]" />,
    },
    {
      title: "Volunteer",
      desc: "Join our field teams, mentors, or event organizers. Your skills and time can help transform children’s lives.",
      color: "#4CAF50",
      icon: <HelpingHand className="w-10 h-10 text-[#4CAF50]" />,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-sortbloom-blue mb-10">
          How Would You Like to Join Us?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {roles.map((role) => (
            <div
              key={role.title}
              className="group bg-[#FFFDF5] rounded-2xl shadow-md hover:shadow-lg border border-gray-100 p-8 transition"
            >
              <div className="flex flex-col items-center justify-center mb-4">
                <div className="mb-3">{role.icon}</div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: role.color }}
                >
                  {role.title}
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {role.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- JOIN FORM -------------------- */
function JoinForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    join_type: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Thank you for joining SortBloom! We'll contact you soon.");
        setForm({ name: "", email: "", join_type: "", message: "" });
      } else {
        alert(`⚠️ ${data.error || "Something went wrong. Try again."}`);
      }
    } catch (error) {
      alert("❌ Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-24 bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Form Side */}
        <div className="bg-white shadow-lg rounded-2xl p-10 border border-gray-100">
          <h2 className="text-3xl font-extrabold text-sortbloom-green mb-4 text-center">
            Become Part of SortBloom Foundation
          </h2>
          <p className="text-gray-700 mb-8 text-center">
            Fill out the form to express your interest. Our team will reach out
            with more details.
          </p>

          <form onSubmit={handleSubmit} className="grid gap-5 text-left">
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1 block">
                Full Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-sortbloom-blue"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1 block">
                Email Address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-sortbloom-blue"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1 block">
                How would you like to join?
              </label>
              <select
                value={form.join_type}
                onChange={(e) => setForm({ ...form, join_type: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-sortbloom-blue"
              >
                <option value="">Select an option</option>
                <option value="Sponsor">Sponsor</option>
                <option value="Partner">Partner</option>
                <option value="Donor">Donor</option>
                <option value="Volunteer">Volunteer</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1 block">
                Message (optional)
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-sortbloom-blue"
              ></textarea>
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={loading}
                className={`${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-sortbloom-blue hover:bg-sortbloom-green"
                } text-white font-semibold py-3 px-8 rounded-full transition`}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>

        {/* Image Side */}
        <div className="relative">
          <div className="w-full aspect-[4/3] bg-gray-200 rounded-2xl grid place-items-center text-gray-500 font-medium">
            Placeholder 600×450
          </div>
          <div className="absolute -inset-3 bg-sortbloom-blue/10 rounded-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}

