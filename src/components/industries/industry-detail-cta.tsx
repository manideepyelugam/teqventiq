'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsap } from '@/core/hooks/use-gsap';
import { Button } from '@/components/ui';
import { Industry } from '@/core/types';

gsap.registerPlugin(ScrollTrigger);

interface IndustryDetailCTAProps {
  industry: Industry;
}

export default function IndustryDetailCTA({ industry }: IndustryDetailCTAProps) {
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
      containerRef.current.querySelector('.detail-cta-box'),
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
    <section ref={containerRef} className="py-16 sm:py-24 px-4 sm:px-5 bg-transparent">
      <div className="mx-auto max-w-[1280px]">
        <div className="detail-cta-box bg-card border border-border/60 rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-16 relative overflow-hidden shadow-md backdrop-blur-md">
          <div className="relative z-10 text-center">
            <span className="detail-cta-item text-brand-blue font-bold tracking-wider uppercase text-xs mb-3 sm:mb-4 block">Ready to Get Started?</span>
            <h2 className="detail-cta-item text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 font-serif tracking-tight">
              Let&apos;s build your <span className="bg-gradient-to-r from-brand-blue to-blue-600 bg-clip-text text-transparent">{industry.title.split(' — ')[0]}</span> technology roadmap
            </h2>
            <p className="detail-cta-item text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-[580px] mx-auto leading-relaxed">
              {industry.ctaText ?? 'Our sector specialists are ready to conduct a tailored discovery workshop and assessment for your organisation.'}
            </p>
            <div className="detail-cta-item flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto">
              <Button asChild className="btn-primary group w-full sm:w-auto">
                <Link href="/contact" className="justify-center">
                  Request a Discovery Workshop
                  <ArrowUpRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
              <Button asChild className="btn-outline w-full sm:w-auto">
                <Link href="/industries" className="justify-center">
                  View All Industries
                </Link>
              </Button>
            </div>
          </div>

          {/* Decorative blobs */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-lime opacity-10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-brand-blue opacity-5 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}

