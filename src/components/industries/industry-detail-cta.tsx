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
    <section ref={containerRef} className="py-32 px-5 bg-transparent transition-colors duration-500">
      <div className="mx-auto max-w-[1248px]">
        <div className="detail-cta-box bg-gradient-to-br from-brand-lime/15 via-muted to-brand-blue/10 rounded-[2rem] p-12 lg:p-20 relative overflow-hidden border border-border shadow-2xl">
          <div className="relative z-10 text-center">
            <span className="detail-cta-item text-brand-lime font-bold tracking-widest uppercase text-xs mb-6 block">Ready to Get Started?</span>
            <h2 className="detail-cta-item text-4xl lg:text-6xl font-bold text-foreground mb-8 font-serif">
              Let&apos;s build your <span className="text-brand-lime">{industry.title.split(' — ')[0]}</span> technology roadmap
            </h2>
            <p className="detail-cta-item text-xl text-muted-foreground mb-12 max-w-[600px] mx-auto leading-relaxed">
              {industry.ctaText ?? 'Our sector specialists are ready to conduct a tailored discovery workshop and assessment for your organisation.'}
            </p>
            <div className="detail-cta-item flex flex-wrap gap-4 justify-center">
              <Button asChild className="btn-primary text-lg h-auto px-12 py-6 rounded-full group">
                <Link href="/contact">
                  Request a Discovery Workshop
                  <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Button>
              <Button asChild className="btn-outline text-lg h-auto px-10 py-6 rounded-full">
                <Link href="/industries">
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

