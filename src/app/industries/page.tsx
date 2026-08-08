'use client';

import { useRef } from 'react';
import { INDUSTRIES } from '@/core/constants';
import { useGsap } from '@/core/hooks/use-gsap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IndustryHero, IndustryCard, IndustryCTA } from '@/components/industries';

gsap.registerPlugin(ScrollTrigger);

export default function IndustriesListPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    // Continuous subtle floating background shapes
    gsap.to('.float-shape', {
      y: 'random(-40, 40)',
      x: 'random(-20, 20)',
      duration: 'random(4, 7)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Scroll-driven subtle vertical movement for ambient gradient blobs
    gsap.to('.gradient-mesh-hero', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }, containerRef);

  return (
    <div className="relative bg-background bg-dot-grid min-h-screen transition-colors duration-500" ref={containerRef}>
      {/* Ambient gradient mesh — covers the top viewport area, no footer bleed */}
      <div className="absolute inset-x-0 top-0 h-screen pointer-events-none z-0">
        <div className="gradient-mesh-hero">
          <div className="blob-1 float-shape" />
          <div className="blob-2 float-shape" />
          <div className="blob-3 float-shape" />
          <div className="blob-4 float-shape" />
        </div>
      </div>

      <div className="pt-32 lg:pt-48 pb-32">
        <div className="mx-auto max-w-[1248px] px-5 relative z-10">
          <IndustryHero />

          {/* Industries Grid — Bento Layout with ScrollTrigger per Card */}
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8">
            {INDUSTRIES.map((industry, index) => (
              <IndustryCard key={industry.slug} industry={industry} index={index} />
            ))}
          </div>
        </div>

        <IndustryCTA />
      </div>
    </div>
  );
}

