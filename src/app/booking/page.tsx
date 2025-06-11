'use client';

import AboutBanner from '@/components/about/AboutBanner';

export default function BookingPage() {
  return (
    <main>
      {/* Banner */}
      <AboutBanner
        title="Book Your Consultation"
        subtitle="Schedule a free consultation with our expert team to discuss your marketing and branding needs."
        backgroundImage="/images/Contact background  - Sortbrands Group.jpeg"
        breadcrumbs={[
          { label: 'Home', url: '/' },
          { label: 'Book Consultation' },
        ]}
      />

      {/* Embedded Calendar Only */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Schedule Your <span className="text-[#D4AF34]">Free Consultation</span>
              </h2>
              <p className="text-gray-600">
                Book your appointment directly using our live calendar below. Available slots are updated in real time.
              </p>
            </div>

            <div
              className="relative overflow-hidden rounded-lg border border-gray-200 shadow-sm"
              style={{ height: '650px' }}
            >
              <iframe
                src="https://calendar.app.google/TREjhPrrXS4WTLTy9"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                title="Google Booking Calendar"
              ></iframe>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Powered by Google Calendar — A Google Meet link will be sent upon booking confirmation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
