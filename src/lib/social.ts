// lib/social.ts
// Single source of truth for Sortbrands social + contact links.
// Update a URL here and it changes everywhere it is rendered.

import type { IconType } from "react-icons";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export type SocialLink = {
  Icon: IconType;
  href: string;
  label: string;
};

export const WHATSAPP_NUMBER = "+254742906505";
export const CONTACT_EMAIL = "Sortbrandske@gmail.com";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    Icon: FaFacebookF,
    href: "https://www.facebook.com/Sortbrands/",
    label: "Facebook",
  },
  {
    Icon: FaInstagram,
    href: "https://www.instagram.com/sortbrands/",
    label: "Instagram",
  },
  {
    Icon: FaXTwitter,
    href: "https://x.com/sortbrandske",
    label: "X",
  },
  {
    Icon: FaTiktok,
    href: "https://www.tiktok.com/@sortbrands",
    label: "TikTok",
  },
  {
    Icon: FaYoutube,
    href: "https://www.youtube.com/@Sortbrands",
    label: "YouTube",
  },
  {
    Icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/sortbrands-group/",
    label: "LinkedIn",
  },
];

export const WHATSAPP_LINK: SocialLink = {
  Icon: FaWhatsapp,
  href: `https://wa.me/${WHATSAPP_NUMBER}`,
  label: "WhatsApp",
};

export const EMAIL_LINK: SocialLink = {
  Icon: FaEnvelope,
  href: `mailto:${CONTACT_EMAIL}`,
  label: "Email",
};
