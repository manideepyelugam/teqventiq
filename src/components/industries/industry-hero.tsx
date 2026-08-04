
'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsap } from '@/core/hooks/use-gsap';

gsap.registerPlugin(ScrollTrigger);

export default function IndustryHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.from('.hero-badge', {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(1.7)',
    })
      .from(
        '.hero-title',
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.3'
      )
      .from(
        '.hero-desc',
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
    <div className="max-w-[800px] mb-24" ref={containerRef}>
      <div className="hero-badge inline-flex items-center gap-3 bg-muted/50 backdrop-blur-xl border border-border px-5 py-2.5 rounded-full mb-8 transition-colors duration-500">
        <span className="w-2 h-2 bg-brand-lime rounded-full"></span>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-lime dark:text-brand-lime">
          Industries We Serve
        </span>
      </div>

      <h1 className="hero-title text-4xl lg:text-8xl font-bold font-serif leading-[1.1] text-foreground mb-10">
        Built for Every <br />
        <span className="text-brand-lime">Industry</span>
      </h1>

      <p className="hero-desc text-base lg:text-2xl text-muted-foreground font-medium leading-relaxed max-w-[650px]">
        We deliver tailored IT, infrastructure, and cybersecurity solutions across diverse sectors — each engineered to address the unique compliance, operational, and digital transformation demands of your industry.
      </p>
    </div>
  );
}

