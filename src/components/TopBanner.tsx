import Link from 'next/link';
import { SOCIAL_LINKS, WHATSAPP_LINK, EMAIL_LINK } from '@/lib/social';

const TopBanner = () => {
  return (
    <div className="bg-black text-white py-3 text-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
        {/* Row 1: Social Icons (centered on mobile, left on desktop) */}
        <div className="flex justify-center md:justify-start space-x-4">
          {SOCIAL_LINKS.map(({ Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-[#D4AF34] transition-colors duration-300"
            >
              <Icon />
            </Link>
          ))}
          <Link
            href={WHATSAPP_LINK.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={WHATSAPP_LINK.label}
            className="hover:text-[#D4AF34] transition-colors duration-300"
          >
            <WHATSAPP_LINK.Icon />
          </Link>
          <Link
            href={EMAIL_LINK.href}
            aria-label={EMAIL_LINK.label}
            className="hover:text-[#D4AF34] transition-colors duration-300"
          >
            <EMAIL_LINK.Icon />
          </Link>
        </div>

        {/* Row 2: Appointment Link (centered on mobile, center on desktop) */}
        <div className="text-center md:flex-grow md:text-center">
          <Link href="/booking" className="font-medium hover:text-[#D4AF34] transition-colors duration-300">
            Book An Appointment
          </Link>
        </div>

        {/* Row 3: Placeholder for layout balance (right on desktop only) */}
        <div className="hidden md:block w-[100px]"></div>
      </div>
    </div>
  );
};

export default TopBanner;
