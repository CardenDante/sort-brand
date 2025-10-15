// src/app/solutions/training/page.tsx

import AboutBanner from '@/components/about/AboutBanner';
import { FaChalkboardTeacher, FaUsers, FaBriefcase, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const trainingHighlights = [
  {
    title: 'Digital Marketing Mastery',
    description: 'Learn SEO, social media, email marketing, and paid ads to boost your online presence.',
    icon: <FaChalkboardTeacher className="text-[#D4AF34] text-4xl" />,
  },
  {
    title: 'Brand Strategy Workshops',
    description: 'Develop a clear and compelling brand identity aligned with your business goals.',
    icon: <FaBriefcase className="text-[#D4AF34] text-4xl" />,
  },
  {
    title: 'Team Upskilling Sessions',
    description: 'Train your in-house team with practical, hands-on sessions delivered by industry experts.',
    icon: <FaUsers className="text-[#D4AF34] text-4xl" />,
  }
];

export default function TrainingPage() {
  return (
    <main>
      {/* Page Banner */}
      <AboutBanner
        title="Training & Workshops"
        subtitle="Professional programs to upskill your team in marketing, branding, and modern business practices."
        backgroundImage="/images/solutions/team-building.jpg"
        breadcrumbs={[
          { label: 'Home', url: '/' },
          { label: 'Solutions', url: '/solutions' },
          { label: 'Training & Workshops' }
        ]}
      />
      {/* Intro Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Elevate your team with <span className="text-[#D4AF34]">skill-oriented training</span>
            </h2>
            <p className="text-gray-700 text-lg">
              Our workshops and training sessions are tailored to equip your team with practical skills in digital marketing,
              brand strategy, and customer engagement for real-world impact.
            </p>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/solutions/Why Choose Our Workshops.jpg"
                alt="Training session"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Why Choose Our Workshops?</h2>
              <p className="text-gray-700 mb-6">
                We understand that a skilled team is a competitive edge. Our interactive training approach ensures knowledge retention,
                while our up-to-date curriculum guarantees relevance in today's fast-paced digital environment.
              </p>
              <p className="text-gray-700 mb-8">
                Whether you're a startup, SME, or corporate enterprise, we have tailored modules that suit your business needs and growth stage.
              </p>
              <Link
                href="/contacts"
                className="inline-flex items-center bg-[#D4AF34] hover:bg-black text-black hover:text-white px-6 py-3 rounded-full font-bold transition-colors duration-300"
              >
                Enroll Your Team <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Training Areas <span className="text-[#D4AF34]">We Cover</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Explore our core training modules designed to deliver immediate value for your organization:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingHighlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <div className="mb-4 flex justify-center">{highlight.icon}</div>
                <h3 className="text-xl font-bold text-center mb-3">{highlight.title}</h3>
                <p className="text-gray-700 text-center">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
