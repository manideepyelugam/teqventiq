'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsap } from '@/core/hooks/use-gsap';
import { Button } from '@/components/ui';

gsap.registerPlugin(ScrollTrigger);

export default function IndustryCTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(
      containerRef.current.querySelector('.cta-card'),
      {
        scale: 0.92,
        y: 60,
        opacity: 0,
      },
      {
        scale: 1,
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
      }
    ).from(
      containerRef.current.querySelectorAll('.cta-item'),
      {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power2.out',
      },
      '-=0.5'
    );
  }, containerRef);

  return (
    <div className="mt-24 px-5" ref={containerRef}>
      <div className="cta-card mx-auto max-w-[1280px] bg-card border border-border/60 rounded-3xl p-10 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-md backdrop-blur-md">
        <div className="relative z-10">
          <h2 className="cta-item text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-foreground tracking-tight mb-6">Don&apos;t see your industry?</h2>
          <p className="cta-item text-base sm:text-lg text-muted-foreground mb-8 max-w-[580px] mx-auto leading-relaxed">
            We work with organisations across a wide range of sectors. Our consultants can design a tailored technology strategy for your unique operational environment.
          </p>
          <div className="cta-item inline-block">
            <Button asChild className="btn-primary group">
              <Link href="/contact">
                Talk to a Consultant
                <ArrowUpRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Background decorative item */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </div>
  );
}

