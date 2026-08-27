'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsap } from '@/core/hooks/use-gsap';
import { Button } from '@/components/ui';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

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

    if (orbRef.current) {
      gsap.to(orbRef.current, {
        scale: 1.4,
        opacity: 0.25,
        duration: 1.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }
  }, containerRef);

  return (
    <div className="mt-12 sm:mt-24 px-4 sm:px-5" ref={containerRef}>
      <div className="cta-card mx-auto max-w-[1280px] bg-card border border-border/60 rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-md backdrop-blur-md">
        <div className="relative z-10">
          <h2 className="cta-item text-2xl sm:text-4xl lg:text-5xl font-bold font-serif text-foreground tracking-tight mb-4 sm:mb-6">
            Not sure what you need?
          </h2>
          <p className="cta-item text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-[580px] mx-auto leading-relaxed">
            Our technology consultants can help you map out a strategy that aligns with your business objectives.
          </p>
          <div className="cta-item inline-block w-full sm:w-auto">
            <Button asChild className="btn-primary group w-full sm:w-auto">
              <Link href="/contact" className="justify-center">
                Consult With Us
                <ArrowUpRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Background decorative item */}
        <div
          ref={orbRef}
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"
        ></div>
      </div>
    </div>
  );
}

