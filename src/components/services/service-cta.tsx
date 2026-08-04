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
    <div className="mt-32 px-5" ref={containerRef}>
      <div className="cta-card mx-auto max-w-[1248px] bg-gradient-to-br from-brand-blue/20 to-muted rounded-[2rem] p-12 lg:p-20 text-center relative overflow-hidden border border-border shadow-2xl transition-colors duration-500">
        <div className="relative z-10">
          <h2 className="cta-item text-4xl lg:text-6xl font-bold text-foreground mb-8">
            Not sure what you need?
          </h2>
          <p className="cta-item text-xl text-muted-foreground mb-12 max-w-[600px] mx-auto leading-relaxed">
            Our technology consultants can help you map out a strategy that aligns with your business objectives.
          </p>
          <div className="cta-item inline-block">
            <Button asChild className="btn-primary text-lg h-auto px-12 py-6 rounded-full group">
              <Link href="/contact">
                Consult With Us
                <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Background decorative item */}
        <div
          ref={orbRef}
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-blue opacity-10 rounded-full blur-3xl pointer-events-none"
        ></div>
      </div>
    </div>
  );
}

