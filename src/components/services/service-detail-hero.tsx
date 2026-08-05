'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsap } from '@/core/hooks/use-gsap';
import { Service } from '@/core/types';

gsap.registerPlugin(ScrollTrigger);

interface ServiceDetailHeroProps {
  service: Service;
}

export default function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.from('.detail-hero-badge', {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(1.7)',
    })
      .from(
        '.detail-hero-title',
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.3'
      )
      .from(
        '.detail-hero-desc',
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out',
        },
        '-=0.5'
      );
  }, containerRef);

  return (
    <section ref={containerRef} className="relative pt-40 pb-24 lg:pt-56 lg:pb-40 bg-transparent overflow-hidden transition-colors duration-500">
      <div className="mx-auto max-w-[1248px] px-5 relative z-10">
        <div className="max-w-[800px]">
          <div className="detail-hero-badge inline-flex items-center gap-3 bg-muted/50 backdrop-blur-xl border border-border px-5 py-2.5 rounded-full mb-10">
            <span className="w-2 h-2 bg-brand-lime rounded-full"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-lime dark:text-brand-lime">
              Our Expertise
            </span>
          </div>

          <h1 className="detail-hero-title text-4xl lg:text-7xl font-bold font-serif leading-[1.1] text-foreground mb-8">
            {service.heroHeadline || service.title}
          </h1>

          <p className="detail-hero-desc text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed max-w-[720px]">
            {service.heroSubhead || service.description}
          </p>
        </div>
      </div>

      {/* Decorative floating icon/shape */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 hidden lg:block float-item">
        <div className="w-64 h-64 bg-brand-lime/10 dark:bg-brand-lime/20 rounded-[2rem] rotate-45 flex items-center justify-center backdrop-blur-3xl border border-border transition-colors duration-500">
          <div className="w-32 h-32 bg-brand-lime/20 rounded-full blur-xl animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

