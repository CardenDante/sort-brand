// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function ImpactPage() {
//   return (
//     <main className="overflow-hidden">
//       <Hero />
//       <ImpactGrid />
//       <CTA />
//     </main>
//   );
// }

// /* -------------------- HERO -------------------- */
// function Hero() {
//   return (
//     <section className="relative py-28 md:py-36 text-center bg-gradient-to-b from-[#FFF5C3] via-[#FFFDF5] to-white overflow-hidden">
//       <div className="absolute inset-0 -z-10 bg-[#FDD353]/10" />
//       <div className="max-w-4xl mx-auto px-6">
//         <h1
//           className="text-4xl md:text-6xl font-extrabold leading-tight"
//           style={{
//             background: "linear-gradient(90deg, #1976D2 0%, #FFC107 100%)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//           }}
//         >
//           Areas of Impact
//         </h1>
//         <p className="mt-6 text-gray-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
//           We empower children to grow spiritually, mentally, and socially —
//           equipping them to build brighter, more resilient futures.
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

// /* -------------------- IMPACT GRID -------------------- */
// function ImpactGrid() {
//   const impacts = [
//     {
//       slug: "spiritual-life",
//       title: "Spiritual Life",
//       color: "#4CAF50",
//       description:
//         "We help children grow in faith through the Word of God, guiding them toward lasting hope and strong moral foundations.",
//     },
//     {
//       slug: "mindset-change",
//       title: "Mindset Change",
//       color: "#1976D2",
//       description:
//         "We teach children to think boldly and creatively, nurturing confidence and resilience that transform challenges into opportunity.",
//     },
//     {
//       slug: "education-empowerment",
//       title: "Education Empowerment",
//       color: "#FFC107",
//       description:
//         "We provide access to schooling, mentorship, and skill development — turning lost potential into bright, empowered futures.",
//     },
//     {
//       slug: "mental-health-awareness",
//       title: "Mental Health Awareness",
//       color: "#4CAF50",
//       description:
//         "Through counseling, storytelling, and emotional learning, we promote healing and mental well-being in every child.",
//     },
//     {
//       slug: "mind-recreation",
//       title: "Mind Recreation",
//       color: "#1976D2",
//       description:
//         "We foster creativity through play, art, and nature, helping children rediscover joy and learn through experience.",
//     },
//     {
//       slug: "marathons-empowerment",
//       title: "Marathons Empowerment",
//       color: "#FFC107",
//       description:
//         "We unite communities through marathons that promote health, raise awareness, and fund transformative child programs.",
//     },
//   ];

//   return (
//     <section className="relative bg-white py-24">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid md:grid-cols-2 gap-16">
//           {impacts.map((impact, i) => (
//             <div
//               key={impact.title}
//               className={`group relative grid md:grid-cols-2 gap-8 items-center ${
//                 i % 2 === 1 ? "md:flex-row-reverse" : ""
//               }`}
//             >
//               {/* Image placeholder with accent block */}
//               <div className="relative">
//                 <div
//                   className="absolute -inset-3 rounded-3xl -z-10 opacity-20"
//                   style={{ backgroundColor: impact.color }}
//                 />
//                 <div className="w-full aspect-[4/3] bg-gray-200 rounded-2xl shadow-sm grid place-items-center text-gray-500 font-medium transition-transform duration-300 group-hover:-translate-y-2">
//                   Placeholder 600×450
//                 </div>
//               </div>

//               {/* Text Content */}
//               <div>
//                 <h3
//                   className="text-3xl font-extrabold mb-3"
//                   style={{ color: impact.color }}
//                 >
//                   {impact.title}
//                 </h3>
//                 <p className="text-gray-700 leading-relaxed mb-4">
//                   {impact.description}
//                 </p>
//                 <Link
//                   href={`/impact/${impact.slug}`}
//                   className="inline-block text-sm font-semibold text-sortbloom-blue hover:text-sortbloom-green transition"
//                 >
//                   Learn More →
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* -------------------- CTA -------------------- */
// function CTA() {
//   return (
//     <section className="py-24 bg-[#FFFDF5] text-center">
//       <div className="max-w-4xl mx-auto px-6 bg-white shadow-lg rounded-2xl py-12 border border-gray-100">
//         <h2 className="text-3xl md:text-4xl font-extrabold text-sortbloom-green mb-4">
//           Ready to Be Part of the Change?
//         </h2>
//         <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
//           Join us in transforming lives — partner, volunteer, or support one of
//           our programs. Together, we can create opportunities that make children
//           bloom.
//         </p>
//         <a
//           href="/join"
//           className="inline-block bg-sortbloom-blue hover:bg-sortbloom-green text-white font-semibold py-3 px-8 rounded-full transition"
//         >
//           Get Involved
//         </a>
//       </div>
//     </section>
//   );
// }
