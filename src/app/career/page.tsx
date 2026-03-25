"use client";

import React from "react";
import CareerHero from "./_sections/CareerHero";
import CareerPerks from "./_sections/CareerPerks";
import CareerContactSection from "./_sections/CareerContactSection";

export default function CareerPage() {
  return (
    <main className="min-h-screen">
      <CareerHero />
      <CareerPerks />
      <CareerContactSection />
      
      {/* 
        Future Sections can be added here:
        - Open Positions
        - Hiring Process
        - Employee Testimonials (using ReviewsSection?)
      */}
    </main>
  );
}
