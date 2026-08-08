'use client';

import { useRef } from 'react';
import { useGsap } from '@/core/hooks/use-gsap';
import { gsap } from 'gsap';
import { MissionVisionSection, AboutContent } from "@/components/about";
import { StackedCardSection } from "@/components/home";
import { WHY_CHOOSE_US } from "@/core/constants";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    // Floating background shapes
    gsap.to(".float-shape", {
      y: "random(-40, 40)",
      x: "random(-20, 20)",
      duration: "random(4, 7)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, containerRef);

  return (
    <div className="relative bg-background bg-dot-grid transition-colors duration-500 min-h-screen" ref={containerRef}>
      {/* Ambient gradient mesh */}
      <div className="absolute inset-x-0 top-0 h-screen pointer-events-none z-0">
        <div className="gradient-mesh-hero">
          <div className="blob-1 float-shape" />
          <div className="blob-2 float-shape" />
          <div className="blob-3 float-shape" />
          <div className="blob-4 float-shape" />
        </div>
      </div>

      <main className="pt-20">
        {/* Simple Hero Section for About Page */}
        <section className="py-20 lg:py-32 bg-transparent relative overflow-hidden">
          <div className="mx-auto max-w-[1248px] px-5 relative z-10 text-center">
            <span className="text-brand-lime font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Company Profile</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-foreground tracking-tight mb-6 max-w-[900px] mx-auto leading-tight">
              Empowering High-Performance <span className="text-brand-lime">Businesses & Governments</span>
            </h1>
          </div>
        </section>

        <AboutContent />

        {/* Why Choose Teqventiq — Stacked Card Flip */}
        <StackedCardSection
          id="why-choose-us"
          cards={WHY_CHOOSE_US}
          header={
            <div key="why-choose-us-header" className="mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="max-w-[700px]">
                <span className="text-brand-lime font-bold tracking-widest uppercase text-xs mb-3 sm:mb-4 block">The Teqventiq Advantage</span>
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-serif text-foreground leading-[1.1] tracking-tight">
                  Why Choose <br />
                  <span className="text-muted-foreground">Teqventiq?</span>
                </h2>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground max-w-[460px] leading-relaxed">
                Teqventiq specializes in managing and transforming complex technology and IT infrastructure environments into stable, scalable solutions.
              </p>
            </div>
          }
        />

        <MissionVisionSection />
      </main>
    </div>
  );
}
