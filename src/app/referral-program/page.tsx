// src/app/referral-program/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gift, Users, DollarSign, CheckCircle2, Star, Handshake, Trophy, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Referral Program | Sortbrands",
  description: "Earn rewards by referring clients to Sortbrands. Join our referral program and get rewarded for spreading the word about our exceptional branding services.",
};

export default function ReferralProgramPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/careers/Careers Background photo  - Sortbrands Group.jpeg"
            alt="Referral Program"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-[#D4AF34]/20 p-4 rounded-full">
                <Gift className="w-12 h-12 text-[#D4AF34]" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Earn Rewards by <span className="text-[#D4AF34]">Referring</span> Clients
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Share the Sortbrands experience with your network and earn attractive commissions 
              for every successful referral. It's a win-win for everyone!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#how-it-works"
                className="inline-flex items-center bg-[#D4AF34] hover:bg-white text-black px-8 py-4 rounded-full font-bold transition-colors duration-300 shadow-lg"
              >
                Learn How It Works <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="#join-program"
                className="inline-flex items-center border-2 border-white hover:bg-white text-white hover:text-black px-8 py-4 rounded-full font-bold transition-colors duration-300"
              >
                Join Program <Users className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Join Our <span className="text-[#D4AF34]">Referral Program</span>?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our referral program is designed to reward you generously for connecting us with 
              businesses that need exceptional branding and marketing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="text-center group hover:transform hover:scale-105 transition-transform duration-300">
              <div className="bg-[#D4AF34]/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#D4AF34]/20 transition-colors">
                <DollarSign className="text-[#D4AF34] w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Attractive Commissions</h3>
              <p className="text-gray-600">
                Earn up to 15% commission on the total project value for every successful referral. 
                The more you refer, the more you earn.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="text-center group hover:transform hover:scale-105 transition-transform duration-300">
              <div className="bg-[#D4AF34]/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#D4AF34]/20 transition-colors">
                <Handshake className="text-[#D4AF34] w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">No Commitment Required</h3>
              <p className="text-gray-600">
                Join our program with zero obligations. Refer clients at your own pace and 
                earn rewards without any binding commitments.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="text-center group hover:transform hover:scale-105 transition-transform duration-300">
              <div className="bg-[#D4AF34]/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#D4AF34]/20 transition-colors">
                <Trophy className="text-[#D4AF34] w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bonus Rewards</h3>
              <p className="text-gray-600">
                Top referrers get exclusive bonuses, special recognition, and early access 
                to our new services and programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How Our <span className="text-[#D4AF34]">Referral Program</span> Works
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Getting started is simple. Follow these easy steps to start earning commissions today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="bg-[#D4AF34] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Join Program</h3>
              <p className="text-gray-600">
                Sign up for our referral program by filling out our simple registration form.
              </p>
              {/* Connector Arrow (hidden on mobile) */}
              <div className="hidden md:block absolute top-8 -right-4 text-[#D4AF34]">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="bg-[#D4AF34] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Refer Clients</h3>
              <p className="text-gray-600">
                Share Sortbrands with businesses in your network who need branding services.
              </p>
              {/* Connector Arrow (hidden on mobile) */}
              <div className="hidden md:block absolute top-8 -right-4 text-[#D4AF34]">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center relative">
              <div className="bg-[#D4AF34] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Client Converts</h3>
              <p className="text-gray-600">
                We work with your referred client to deliver exceptional branding solutions.
              </p>
              {/* Connector Arrow (hidden on mobile) */}
              <div className="hidden md:block absolute top-8 -right-4 text-[#D4AF34]">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-[#D4AF34] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Earn Commission</h3>
              <p className="text-gray-600">
                Receive your commission payment within 30 days of project completion.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Program Section */}
      <section id="join-program" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start <span className="text-[#D4AF34]">Earning</span>?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Join our referral program today and start earning commissions by connecting us with businesses 
              that need exceptional branding and marketing services.
            </p>

            {/* Contact Form or Email */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Get Started Today</h3>
                  <p className="text-gray-600 mb-6">
                    Send us an email with your details and we'll get you set up in our referral program 
                    within 24 hours. Include your name, business/profession, and why you'd like to join.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>✓ Quick approval process</p>
                    <p>✓ Dedicated referral support</p>
                    <p>✓ Marketing materials provided</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-[#D4AF34]/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <Gift className="text-[#D4AF34] w-10 h-10" />
                  </div>
                  <Link
                    href="mailto:Sortbrandske@gmail.com?subject=Referral Program Application&body=Hi, I'd like to join the Sortbrands referral program. Here are my details:%0A%0AName:%0ABusiness/Profession:%0AWhy I'd like to join:%0A%0AThank you!"
                    className="inline-flex items-center bg-[#D4AF34] hover:bg-black text-black hover:text-white px-8 py-4 rounded-full font-bold transition-colors duration-300 shadow-lg transform hover:scale-105"
                  >
                    Join Program Now <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <p className="text-sm text-gray-500 mt-3">or email us at Sortbrandske@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked <span className="text-[#D4AF34]">Questions</span>
              </h2>
            </div>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">How and when do I get paid?</h3>
                <p className="text-gray-600">
                  Commissions are paid within 30 days after project completion and client payment. 
                  We offer multiple payment methods including bank transfer, PayPal, and mobile money.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Is there a limit to how many clients I can refer?</h3>
                <p className="text-gray-600">
                  No limits! The more quality referrals you make, the more you earn. We encourage 
                  all our referral partners to share Sortbrands with as many suitable businesses as possible.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">What if my referred client doesn't convert?</h3>
                <p className="text-gray-600">
                  You only earn commissions on successful conversions. However, we track all your referrals 
                  and provide feedback to help you understand what types of clients are most likely to convert.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Do you provide marketing materials?</h3>
                <p className="text-gray-600">
                  Yes! Once you join, we'll provide you with branded materials, case studies, and talking 
                  points to help you effectively present Sortbrands to potential clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}