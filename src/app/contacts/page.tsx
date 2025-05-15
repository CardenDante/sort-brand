import ContactBanner from '@/components/contacts/ContactBanner';
import ContactForm from '@/components/contacts/ContactForm';
import ContactInfo from '@/components/contacts/ContactInfo';
import ContactMap from '@/components/contacts/ContactMap';

export default function ContactPage() {
  return (
    <main>
      {/* Contact Banner */}
      <ContactBanner
        title="Contact Us"
        subtitle="Get in touch with our team to discuss how we can help sort your brand."
        backgroundImage="/images/contact-us-banner.jpg"
      />
      
      {/* Contact Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form Column */}
            <ContactForm />
            
            {/* Contact Info Column */}
            <ContactInfo />
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <ContactMap />
    </main>
  );
}