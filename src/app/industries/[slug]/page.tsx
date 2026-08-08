"use client";

import { useRef } from "react";
import { useParams, notFound } from "next/navigation";
import { INDUSTRIES } from "@/core/constants";
import { useGsap } from "@/core/hooks/use-gsap";
import { gsap } from "gsap";

import {
  IndustryDetailHero,
  IndustryDetailContent,
  IndustryDetailCTA,
} from "@/components/industries";

import {
  HealthcareHero,
  HealthcareAbout,
  HealthcareOfferings,
  HealthcareFocus,
  HealthcareCTA,
} from "@/components/industries/healthcare";

export default function IndustryDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  const containerRef = useRef<HTMLDivElement>(null);

  if (!industry) {
    notFound();
  }

  useGsap(() => {
    // Float animation for decorative items
    gsap.to(".float-item", {
      y: "random(-20, 20)",
      duration: "random(3, 5)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Reveal animation
    gsap.from(".reveal", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
    });
  }, containerRef);

  if (slug === "healthcare") {
    return (
      <div
        className="relative bg-background bg-dot-grid transition-colors duration-500 min-h-screen"
        ref={containerRef}
      >
        {/* Ambient gradient mesh — covers the top viewport area, no footer bleed */}
        <div className="absolute inset-x-0 top-0 h-screen pointer-events-none z-0">
          <div className="gradient-mesh-hero">
            <div className="blob-1 float-item" />
            <div className="blob-2 float-item" />
            <div className="blob-3 float-item" />
            <div className="blob-4 float-item" />
          </div>
        </div>
        <HealthcareHero />
        <HealthcareAbout />
        <HealthcareOfferings />
        <HealthcareFocus />
        <HealthcareCTA />
      </div>
    );
  }

  return (
    <div
      className="relative bg-background bg-dot-grid transition-colors duration-500 min-h-screen"
      ref={containerRef}
    >
      {/* Ambient gradient mesh — covers the top viewport area, no footer bleed */}
      <div className="absolute inset-x-0 top-0 h-screen pointer-events-none z-0">
        <div className="gradient-mesh-hero">
          <div className="blob-1 float-item" />
          <div className="blob-2 float-item" />
          <div className="blob-3 float-item" />
          <div className="blob-4 float-item" />
        </div>
      </div>
      <IndustryDetailHero industry={industry} />
      <IndustryDetailContent industry={industry} />
      <IndustryDetailCTA industry={industry} />
    </div>
  );
}
