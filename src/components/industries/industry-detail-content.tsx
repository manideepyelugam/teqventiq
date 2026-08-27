'use client';

import { useRef } from 'react';
import { Check, ShieldCheck, AlertCircle, ArrowRight, CheckCircle2, Building2 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsap } from '@/core/hooks/use-gsap';
import { Industry } from '@/core/types';
import { Card, CardContent, Button } from '@/components/ui';

gsap.registerPlugin(ScrollTrigger);

interface IndustryDetailContentProps {
  industry: Industry;
}

export default function IndustryDetailContent({ industry }: IndustryDetailContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    if (!containerRef.current) return;

    const sections = containerRef.current.querySelectorAll('.detail-sec');
    sections.forEach((sec) => {
      gsap.fromTo(
        sec,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sec,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, containerRef);

  return (
    <div ref={containerRef} className="space-y-20 lg:space-y-28 py-12 pb-24 transition-colors duration-500">
      
      {/* 1. Context & Image */}
      <section className="detail-sec mx-auto max-w-[1248px] px-5">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-brand-lime font-bold tracking-widest uppercase text-xs block">
              Industry Context
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold font-serif text-foreground leading-tight">
              {industry.headline || industry.title}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {industry.context || industry.details || industry.description}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-[2.5rem] overflow-hidden border border-border/30 shadow-2xl aspect-[4/3] bg-muted/20">
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Challenges We Address */}
      {!!industry.challenges?.length && (
        <section className="detail-sec mx-auto max-w-[1248px] px-4 sm:px-5">
          <div className="mb-8 sm:mb-12">
            <span className="text-brand-lime font-bold tracking-widest uppercase text-xs block mb-2 sm:mb-3">
              Operational Realities
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-foreground">
              Key Challenges We Address
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {industry.challenges.map((ch, idx) => (
              <Card key={idx} className="rounded-xl sm:rounded-2xl border border-border/60 bg-card/80 backdrop-blur-md p-5 sm:p-8 transition-all duration-300 hover:border-brand-blue/40 hover:shadow-md">
                <CardContent className="p-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 font-bold mb-3 sm:mb-4">
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold font-serif text-foreground mb-2 sm:mb-3">
                    {ch.title}
                  </h4>
                  <p className="text-muted-foreground text-xs sm:text-sm sm:text-base leading-relaxed">
                    {ch.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* 3. How We Help */}
      {industry.howWeHelp && (
        <section className="detail-sec mx-auto max-w-[1280px] px-4 sm:px-5">
          <div className="rounded-2xl sm:rounded-3xl bg-card border border-border/60 p-5 sm:p-10 lg:p-14 shadow-sm backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-brand-blue shrink-0" />
              <h3 className="text-xl sm:text-2xl sm:text-3xl font-bold font-serif text-foreground">
                How Teqventiq Helps
              </h3>
            </div>
            <p className="text-sm sm:text-base sm:text-xl text-foreground/90 leading-relaxed font-sans">
              {industry.howWeHelp}
            </p>

            {/* Features tags */}
            {!!industry.features?.length && (
              <div className="mt-6 sm:mt-10 pt-6 sm:pt-8 border-t border-border/30 flex flex-wrap gap-2 sm:gap-3">
                {industry.features.map((feat, fIdx) => (
                  <span key={fIdx} className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-brand-lime/10 border border-brand-lime/20 text-brand-lime text-[11px] sm:text-xs font-bold">
                    ✓ {feat}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* 4. Outcomes Checklist & CTA */}
      {!!industry.outcomes?.length && (
        <section className="detail-sec mx-auto max-w-[1248px] px-4 sm:px-5">
          <div className="rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] bg-gradient-to-br from-brand-lime/10 via-card to-card border border-brand-lime/30 p-5 sm:p-10 lg:p-16 overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                <span className="text-brand-lime font-bold tracking-widest uppercase text-xs block">
                  Proven Impact
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-foreground">
                  Expected Business Outcomes
                </h3>
                <div className="space-y-3 sm:space-y-4 pt-2">
                  {industry.outcomes.map((out, oIdx) => (
                    <div key={oIdx} className="flex items-start gap-2.5 sm:gap-3 min-w-0">
                      <div className="w-5 h-5 rounded-full bg-brand-lime/20 flex items-center justify-center text-brand-lime flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-foreground text-xs sm:text-sm md:text-base font-medium leading-relaxed break-words min-w-0 flex-1">
                        {out}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 text-center lg:text-right pt-2 lg:pt-0 w-full">
                <Button asChild className="btn-lime h-auto text-sm sm:text-base py-3.5 sm:py-4 px-5 sm:px-8 group shadow-xl w-full sm:w-auto max-w-full">
                  <a href="#contact-section" className="inline-flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto">
                    <span className="text-center">Talk to an Industry Specialist</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 shrink-0" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
