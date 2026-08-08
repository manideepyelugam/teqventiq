"use client";

import { useRef } from "react";
import { useParams, notFound } from "next/navigation";
import { SERVICES } from "@/core/constants";
import { useGsap } from "@/core/hooks/use-gsap";
import { gsap } from "gsap";

import { ServiceDetailHero, ServiceDetailContent, ServiceDetailCTA } from "@/components/services";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = SERVICES.find((s) => s.slug === slug);
  const containerRef = useRef<HTMLDivElement>(null);

  if (!service) {
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

  return (
    <div className="relative bg-background bg-dot-grid transition-colors duration-500 min-h-screen" ref={containerRef}>
      {/* Ambient gradient mesh — covers the top viewport area, no footer bleed */}
      <div className="absolute inset-x-0 top-0 h-screen pointer-events-none z-0">
        <div className="gradient-mesh-hero">
          <div className="blob-1 float-item" />
          <div className="blob-2 float-item" />
          <div className="blob-3 float-item" />
          <div className="blob-4 float-item" />
        </div>
      </div>

      <ServiceDetailHero service={service} />
      <ServiceDetailContent service={service} />
      <ServiceDetailCTA service={service} />
    </div>
  );
}
    
