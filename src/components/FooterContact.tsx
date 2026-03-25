"use client";

import { usePathname } from "next/navigation";
import ContactSection from "@/components/ContactSection";

export default function FooterContact() {
  const pathname = usePathname();
  
  // Hide global contact section on the dedicated contact/career page
  if (pathname === "/contact" || pathname.endsWith("/contact") || pathname === "/career" || pathname.endsWith("/career")) {
    return null;
  }

  return <ContactSection />;
}
