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
    <section ref={containerRef} className="pb-32 px-5 bg-transparent transition-colors duration-500">
      <div className="detail-cta-card mx-auto max-w-[1248px] bg-card rounded-[2rem] p-12 lg:p-24 text-center relative overflow-hidden border border-border shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-transparent to-transparent opacity-50"></div>
        <div className="relative z-10">
          <h2 className="detail-cta-item text-4xl lg:text-6xl font-bold text-foreground mb-8">
            Ready to modernize?
          </h2>
          <p className="detail-cta-item text-xl text-muted-foreground mb-12 max-w-[600px] mx-auto">
            Schedule a consultation with our experts and discover how{' '}
            {service.title} can transform your operations.
          </p>
          <div className="detail-cta-item inline-block">
            <Button
              asChild
              className="btn-lime h-auto text-lg py-5 px-10 group"
            >
              <Link href="/contact">
                Talk to an Expert
                <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

