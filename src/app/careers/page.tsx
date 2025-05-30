// src/app/careers/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Users, Zap, Star, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Sortbrands",
  description: "Join our team of passionate, creative professionals and help brands reach their full potential.",
};

export default function CareersPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/careers/Careers Background photo  - Sortbrands Group.jpeg" // Replace with your actual banner image
            alt="Sortbrands Team"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Join Our <span className="text-[#D4AF34]">Team</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            We're hiring passionate talent with the right mindset to create exceptional brand experiences
          </p>
          <Link
            href="#open-positions"
            className="inline-flex items-center bg-[#D4AF34] hover:bg-white text-black px-8 py-4 rounded-full font-bold transition-colors duration-300 shadow-lg"
          >
            View Open Positions <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Talent + Mindset = <span className="text-[#D4AF34]">Excellence</span>
            </h2>
            <p className="text-lg text-gray-700">
              At Sortbrands, we believe that exceptional results come from combining top talent with the right mindset. 
              We're not just looking for skills on a resume—we're seeking individuals who bring passion, creativity, 
              and a growth-oriented attitude to everything they do.
            </p>
          </div>

          {/* Core Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-[#D4AF34]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Zap className="text-[#D4AF34] w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Passion-Driven</h3>
              <p className="text-gray-600">
                We seek individuals who are genuinely excited about branding and marketing, 
                bringing energy and enthusiasm to every project they touch.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-[#D4AF34]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Star className="text-[#D4AF34] w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence-Focused</h3>
              <p className="text-gray-600">
                We value team members who strive for excellence in all they do, continuously 
                raising the bar and refusing to settle for "good enough."
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-[#D4AF34]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <HeartHandshake className="text-[#D4AF34] w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Collaboration-Minded</h3>
              <p className="text-gray-600">
                We believe the best results come from teamwork, and we look for individuals who 
                can collaborate effectively while bringing their unique perspective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Join <span className="text-[#D4AF34]">Sortbrands</span>?
              </h2>
              
              <p className="text-gray-700 mb-8">
                We're building a team of exceptional individuals who are passionate about creating 
                impactful brand experiences. When you join Sortbrands, you become part of a 
                collaborative, innovative environment where your talents are valued and your 
                growth is prioritized.
              </p>
              
              <div className="space-y-4">
                {[
                  "Work with diverse, high-profile clients across industries",
                  "Collaborative culture that values every team member's input",
                  "Opportunities for professional growth and skill development",
                  "Competitive compensation and benefits package",
                  "Work-life balance that respects your wellbeing",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="text-[#D4AF34] w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Team Image */}
            <div className="relative">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/careers/Why join us  - Sortbrands Group.jpeg" // Replace with your actual team image
                  alt="Sortbrands Team Culture"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              {/* Decorative gold corner */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-8 border-r-8 border-[#D4AF34] z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Open Positions Section */}
      <section id="open-positions" className="py-16 md:py-20">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Open <span className="text-[#D4AF34]">Positions</span>
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        We're not currently hiring, but we’re always excited to hear from talented individuals.
      </p>
    </div>

    {/* No positions message */}
    <div className="max-w-3xl mx-auto text-center bg-gray-50 p-10 rounded-xl border border-gray-100 shadow-sm">
      <Users className="w-12 h-12 text-[#D4AF34] mx-auto mb-4" />
      <h3 className="text-xl font-bold text-gray-900 mb-2">No Open Roles at the Moment</h3>
      <p className="text-gray-600 mb-6">
        While there are no current vacancies, feel free to introduce yourself — we’re always looking for great people to join the team when the time is right.
      </p>
      <Link
            href="mailto:Sortbrandske@gmail.com"
            className="inline-flex items-center bg-[#D4AF34] hover:bg-white text-black px-8 py-4 rounded-full font-bold transition-colors duration-300 shadow-lg"
            >
        Send Your Resume <ArrowRight className="ml-2 w-5 h-5" />
      </Link>
    </div>
  </div>
</section>
      
      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden bg-white">
        {/* Subtle geometric pattern background */}
        <div 
          className="absolute inset-0 z-0 opacity-5" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0 h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")', 
          }}
        ></div>
        
        {/* Gold decorative elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#D4AF34]/5"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#D4AF34]/5"></div>
        </div>
        
        {/* CTA Card with shadow */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-10 relative">
            {/* Gold accent corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#D4AF34] rounded-tl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#D4AF34] rounded-br-2xl"></div>
            
            <div className="text-center">
              <div className="w-16 h-1 bg-[#D4AF34] mx-auto mb-6"></div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Make an <span className="text-[#D4AF34]">Impact?</span>
              </h2>
              
              <p className="text-gray-600 text-lg mb-8">
                Join our team of creative minds and help us deliver exceptional branding solutions that make a difference.
              </p>
              
              <Link 
                href="#open-positions" 
                className="inline-flex items-center bg-[#D4AF34] hover:bg-black text-black hover:text-white font-bold px-8 py-4 rounded-full transition-colors duration-300 transform hover:scale-105 shadow-md"
              >
                Explore Opportunities <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}