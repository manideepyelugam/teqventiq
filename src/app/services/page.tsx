'use client';

import { useRef } from 'react';
import { SERVICES } from '@/core/constants';
import { useGsap } from '@/core/hooks/use-gsap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ServiceHero, ServiceCard, ServiceCTA } from '@/components/services';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesListPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const coreServices = SERVICES;

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
    <div className="relative bg-muted bg-dot-grid transition-colors duration-500 min-h-screen" ref={containerRef}>
      {/* Ambient gradient mesh — covers top viewport area, responsive parallax */}
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
          <ServiceHero />

          {/* Services Grid - Bento Layout with ScrollTrigger fadeInUp per Card */}
          <div className="grid md:grid-cols-3 lg:grid-cols-12 gap-8">
            {coreServices.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>

        <ServiceCTA />
      </div>
    </div>
  );
}



