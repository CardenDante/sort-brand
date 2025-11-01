// "use client";
// import { useState } from "react";

// import Image from "next/image";
// import {
//   GraduationCap,
//   HeartHandshake,
//   Users,
//   HandHeart,
// } from "lucide-react";

// export default function DonatePage() {
//   return (
//     <main className="overflow-hidden">
//       <Hero />
//       <DonationImpactAreas />
//       <DonationForm />
//     </main>
//   );
// }

// /* -------------------- HERO -------------------- */
// function Hero() {
//   return (
//     <section className="relative py-28 md:py-36 text-center bg-[#FFFDF5] overflow-hidden">
//       {/* Map background */}
//       <div className="absolute inset-0 -z-10">
//         <Image
//           src="/map-bg.png"
//           alt="Background Map"
//           fill
//           className="object-cover opacity-20"
//         />
//       </div>

//       {/* Light overlay */}
//       <div className="absolute inset-0 bg-white/70 -z-0" />

//       <div className="relative max-w-4xl mx-auto px-6">
//         <h1
//           className="text-4xl md:text-6xl font-extrabold leading-tight"
//           style={{
//             background: "linear-gradient(90deg, #1976D2 0%, #FFC107 100%)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//           }}
//         >
//           Donate to Support a Child’s Future
//         </h1>
//         <p className="mt-6 text-gray-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
//           Your donation helps provide education, mentorship, and care for
//           vulnerable children — empowering them to bloom into confident,
//           capable individuals.
//         </p>
//       </div>

//       {/* Curve divider */}
//       <div className="absolute bottom-0 left-0 right-0">
//         <svg
//           viewBox="0 0 1440 120"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-full text-white"
//         >
//           <path
//             fill="currentColor"
//             d="M0,64L48,58.7C96,53,192,43,288,64C384,85,480,139,576,144C672,149,768,107,864,96C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96V120H0Z"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// }

// /* -------------------- PURPOSE BLOCKS -------------------- */
// function DonationImpactAreas() {
//   const purposes = [
//     {
//       title: "Education Support",
//       desc: "Your gift helps children stay in school with tuition, uniforms, and essential learning materials.",
//       icon: <GraduationCap className="w-10 h-10 text-[#1976D2]" />,
//       color: "#1976D2",
//     },
//     {
//       title: "Nutrition & Care",
//       desc: "You help provide daily meals, healthcare, and emotional support to vulnerable children.",
//       icon: <HeartHandshake className="w-10 h-10 text-[#4CAF50]" />,
//       color: "#4CAF50",
//     },
//     {
//       title: "Mentorship & Growth",
//       desc: "You empower children through mentoring, vocational training, and faith-based guidance.",
//       icon: <Users className="w-10 h-10 text-[#FFC107]" />,
//       color: "#FFC107",
//     },
//   ];

//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <h2 className="text-3xl md:text-4xl font-extrabold text-sortbloom-blue mb-10">
//           Where Your Gift Makes a Difference
//         </h2>

//         <div className="grid md:grid-cols-3 gap-10">
//           {purposes.map((item) => (
//             <div
//               key={item.title}
//               className="bg-[#FFFDF5] rounded-2xl shadow-md hover:shadow-lg border border-gray-100 p-8 transition"
//             >
//               <div className="flex justify-center mb-4">{item.icon}</div>
//               <h3
//                 className="text-xl font-bold mb-3"
//                 style={{ color: item.color }}
//               >
//                 {item.title}
//               </h3>
//               <p className="text-gray-700 text-sm leading-relaxed">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* -------------------- DONATION FORM -------------------- */


// export function DonationForm() {
//   const [form, setForm] = useState({ name: "", email: "", phone: "", amount: "", message: "" });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!form.name || !form.phone || !form.amount) return alert("Please fill required fields");
//     setLoading(true);

//     try {
//       const res = await fetch("/api/donations", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name: form.name,
//           phone: form.phone,
//           amount: Number(form.amount),
//           message: form.message,
//         }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         alert("STK push sent! Check your phone to complete the payment.");
//         setForm({ name: "", email: "", phone: "", amount: "", message: "" });
//       } else {
//         alert(data.error || "Payment initiation failed.");
//       }
//     } catch (err) {
//       alert("Network error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="py-24 bg-[#FFFDF5]">
//       <div id="donate-form" className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
//         {/* Form Side */}
//         <div className="bg-white shadow-lg rounded-2xl p-10 border border-gray-100">
//           <h2 className="text-3xl font-extrabold text-sortbloom-green mb-4 text-center">
//             Make a Donation
//           </h2>
//           <p className="text-gray-700 mb-8 text-center">
//             Every contribution makes a difference. Fill in your details below to support our mission.
//           </p>

//           <form onSubmit={handleSubmit} className="grid gap-5 text-left">
//             <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-sortbloom-blue" />
//             <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address (optional)" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-sortbloom-blue" />
//             <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone (07XXXXXXXX)" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-sortbloom-blue" />
//             <input name="amount" value={form.amount} onChange={handleChange} placeholder="Donation Amount (KSh)" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-sortbloom-blue" />
//             <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Message (optional)" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-sortbloom-blue" />
//             <button type="submit" disabled={loading} className={`bg-sortbloom-blue hover:bg-sortbloom-green text-white font-semibold py-3 px-8 rounded-full transition flex items-center justify-center gap-2 mx-auto ${loading ? "opacity-70" : ""}`}>
//               <HandHeart className="w-5 h-5" />
//               {loading ? "Processing..." : "Donate with Mpesa"}
//             </button>
//           </form>

//           <div className="flex items-center justify-center gap-6 mt-8 flex-wrap">
//             <Image src="/images/payments/visa.png" alt="Visa" width={50} height={30} className="opacity-80" />
//             <Image src="/images/payments/mastercard.png" alt="Mastercard" width={50} height={30} className="opacity-80" />
//             <Image src="/images/payments/gpay.png" alt="Google Pay" width={50} height={30} className="opacity-80" />
//             <Image src="/images/payments/mpesa.png" alt="Mpesa" width={70} height={35} className="opacity-100" />
//           </div>

//           <p className="text-xs text-gray-600 mt-4 text-center">
//             Currently, donations are processed securely via <b>Mpesa</b>.<br />
//             Other payment methods will be enabled soon.
//           </p>
//         </div>

//         {/* Placeholder Image Side */}
//         <div className="relative">
//           <div className="w-full aspect-[4/3] bg-gray-200 rounded-2xl grid place-items-center text-gray-500 font-medium">
//             Placeholder 600×450
//           </div>
//           <div className="absolute -inset-3 bg-sortbloom-blue/10 rounded-3xl -z-10" />
//         </div>
//       </div>
//     </section>
//   );
// }

