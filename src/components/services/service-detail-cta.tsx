'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsap } from '@/core/hooks/use-gsap';
import { Button } from '@/components/ui';
import { Service } from '@/core/types';

gsap.registerPlugin(ScrollTrigger);

interface ServiceDetailCTAProps {
  service: Service;
}

export default function ServiceDetailCTA({ service }: ServiceDetailCTAProps) {
  const containerRef = useRef<HTMLElement>(null);

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
      containerRef.current.querySelector('.detail-cta-card'),
      {
        scale: 0.92,
        y: 60,
        opacity: 0,
      },
      {
        scale: 1,
        y: 0,
        opacity: 1,
        duration: 0.85,
        ease: 'power3.out',
      }
    ).from(
      containerRef.current.querySelectorAll('.detail-cta-item'),
      {
        y: 25,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: 'power2.out',
      },
      '-=0.4'
    );
  }, containerRef);

  return (
    <section ref={containerRef} className="pb-16 sm:pb-24 px-4 sm:px-5 bg-transparent">
      <div className="detail-cta-card mx-auto max-w-[1280px] bg-card border border-border/60 rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-md backdrop-blur-md">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-transparent to-transparent opacity-50"></div>
        <div className="relative z-10">
          <h2 className="detail-cta-item text-2xl sm:text-4xl lg:text-5xl font-bold font-serif text-foreground tracking-tight mb-4 sm:mb-6">
            Ready to modernize?
          </h2>
          <p className="detail-cta-item text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-[580px] mx-auto leading-relaxed">
            Schedule a consultation with our experts and discover how{' '}
            {service.title} can transform your operations.
          </p>
          <div className="detail-cta-item inline-block w-full sm:w-auto">
            <Button
              asChild
              className="btn-primary group w-full sm:w-auto"
            >
              <Link href="/contact">
                Talk to an Expert
                <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

