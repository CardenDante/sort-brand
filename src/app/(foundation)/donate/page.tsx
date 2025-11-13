"use client";
import { useState } from "react";

import Image from "next/image";
import {
  GraduationCap,
  HeartHandshake,
  Users,
  HandHeart,
  Package,
  MapPin,
} from "lucide-react";

export default function DonatePage() {
  return (
    <main className="overflow-hidden">
      <DonationImpactAreas />
      <DonationForm />
      <TangibleDonations />
    </main>
  );
}

/* -------------------- PURPOSE BLOCKS -------------------- */
function DonationImpactAreas() {
  const purposes = [
    {
      title: "Education Support",
      desc: "Your gift helps children stay in school with tuition, uniforms, and essential learning materials.",
      icon: <GraduationCap className="w-10 h-10 text-[#1976D2]" />,
      color: "#1976D2",
    },
    {
      title: "Nutrition & Care",
      desc: "You help provide daily meals, healthcare, and emotional support to vulnerable children.",
      icon: <HeartHandshake className="w-10 h-10 text-[#4CAF50]" />,
      color: "#4CAF50",
    },
    {
      title: "Mentorship & Growth",
      desc: "You empower children through mentoring, vocational training, and faith-based guidance.",
      icon: <Users className="w-10 h-10 text-[#FFC107]" />,
      color: "#FFC107",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-sortbloom-blue mb-10">
          Where Your Gift Makes a Difference
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {purposes.map((item) => (
            <div
              key={item.title}
              className="bg-[#FFFDF5] rounded-2xl shadow-md hover:shadow-lg border border-gray-100 p-8 transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: item.color }}
              >
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- DONATION FORM -------------------- */
export function DonationForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", amount: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.amount) return alert("Please fill required fields");
    setLoading(true);

    try {
      const res = await fetch("/api/donations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          amount: Number(form.amount),
          message: form.message,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("STK push sent! Check your phone to complete the payment.");
        setForm({ name: "", email: "", phone: "", amount: "", message: "" });
      } else {
        alert(data.error || "Payment initiation failed.");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-[#FFFDF5]">
      <div id="donate-form" className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Form Side */}
        <div className="bg-white shadow-lg rounded-2xl p-10 border border-gray-100">
          <h2 className="text-3xl font-extrabold text-sortbloom-green mb-4 text-center">
            Make a Monetary Donation
          </h2>
          <p className="text-gray-700 mb-8 text-center">
            Every contribution makes a difference. Fill in your details below to support our mission.
          </p>

          <form onSubmit={handleSubmit} className="grid gap-5 text-left">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-sortbloom-blue" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address (optional)" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-sortbloom-blue" />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone (07XXXXXXXX)" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-sortbloom-blue" />
            <input name="amount" value={form.amount} onChange={handleChange} placeholder="Donation Amount (KSh)" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-sortbloom-blue" />
            <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Message (optional)" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-sortbloom-blue" />
            <button type="submit" disabled={loading} className={`bg-sortbloom-blue hover:bg-sortbloom-green text-white font-semibold py-3 px-8 rounded-full transition flex items-center justify-center gap-2 mx-auto ${loading ? "opacity-70" : ""}`}>
              <HandHeart className="w-5 h-5" />
              {loading ? "Processing..." : "Donate with Mpesa"}
            </button>
          </form>

          <div className="flex items-center justify-center gap-6 mt-8 flex-wrap">
            <Image src="/images/payments/visa.png" alt="Visa" width={50} height={30} className="opacity-80" />
            <Image src="/images/payments/mastercard.png" alt="Mastercard" width={50} height={30} className="opacity-80" />
            <Image src="/images/payments/gpay.png" alt="Google Pay" width={50} height={30} className="opacity-80" />
            <Image src="/images/payments/mpesa.png" alt="Mpesa" width={70} height={35} className="opacity-100" />
          </div>

          <p className="text-xs text-gray-600 mt-4 text-center">
            Currently, donations are processed securely via <b>Mpesa</b>.<br />
            Other payment methods will be enabled soon.
          </p>
        </div>

        {/* Placeholder Image Side */}
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

/* -------------------- TANGIBLE DONATIONS -------------------- */
function TangibleDonations() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Package className="w-12 h-12 text-sortbloom-green" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-sortbloom-green mb-4">
            Donate Tangible Items
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            You can also make a difference by donating physical items like clothes, 
            school supplies, books, toys, food, and other resources that directly 
            benefit the children in our programs.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Drop-off Location Map */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="bg-sortbloom-green text-white p-6">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-6 h-6" />
                <h3 className="text-xl font-bold">Drop-off Location</h3>
              </div>
              <p className="text-sm opacity-90">
                Visit us to drop off your tangible donations
              </p>
            </div>
            
            {/* Google Maps Iframe */}
            <div className="relative w-full h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8196449886685!2d36.82194631475395!3d-1.2864472359960636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d6f0b3e3c3%3A0x6f4a8a7a7e5a5a5a!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>

            <div className="p-6 bg-gray-50">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Address:</strong> SortBloom Foundation Office, Nairobi, Kenya
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM
              </p>
              <p className="text-sm text-gray-700">
                <strong>Contact:</strong> +254 742 906 505
              </p>
              <p className="text-sm text-gray-700 mt-2">
                <strong>Email:</strong> info@sortbloom.org
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center bg-[#FFFDF5] rounded-2xl p-8 border border-gray-100">
          <p className="text-gray-700 max-w-2xl mx-auto">
            Can't drop off in person? Contact us to arrange for pickup of large donations 
            or to discuss other ways you can contribute tangible items to our programs.
          </p>
          <a
            href="mailto:info@sortbloom.org"
            className="inline-block mt-4 text-sortbloom-blue hover:text-sortbloom-green font-semibold transition"
          >
            Contact Us for Pickup →
          </a>
        </div>
      </div>
    </section>
  );
}