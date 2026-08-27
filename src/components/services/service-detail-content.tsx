'use client';

import { useRef } from 'react';
import { Check, ArrowRight, Layers, Workflow, CheckCircle2 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsap } from '@/core/hooks/use-gsap';
import { Service } from '@/core/types';
import { Button, Card, CardContent } from '@/components/ui';

gsap.registerPlugin(ScrollTrigger);

interface ServiceDetailContentProps {
  service: Service;
}

export default function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    if (!containerRef.current) return;

    gsap.from('.reveal-block', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
    });
  }, containerRef);

  return (
    <div ref={containerRef} className="space-y-20 lg:space-y-28 py-12 pb-24 bg-transparent transition-colors duration-500">
      
      {/* 1. Opening Context & Image */}
      <section className="mx-auto max-w-[1248px] px-5">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 reveal-block space-y-6">
            <span className="text-brand-lime font-bold tracking-widest uppercase text-xs block">
              Overview
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold font-serif text-foreground leading-tight">
              Architected for Uptime, Security, and <span className="text-brand-lime">Scale.</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {service.openingContext || service.detailedContent || service.description}
            </p>
            {service.platformPartner && (
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-card border border-brand-lime/30 text-xs font-bold text-foreground">
                <span className="w-2 h-2 rounded-full bg-brand-lime animate-ping" />
                Featured Platform Partner: <span className="text-brand-lime">{service.platformPartner}</span>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 reveal-block">
            <div className="relative rounded-[2.5rem] overflow-hidden border border-border/30 shadow-2xl aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] bg-muted/20">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Capability Breakdown */}
      {!!service.capabilities?.length && (
        <section className="mx-auto max-w-[1280px] px-4 sm:px-5">
          <div className="rounded-2xl sm:rounded-3xl bg-card border border-border/60 p-5 sm:p-10 lg:p-14 shadow-sm backdrop-blur-md">
            <div className="mb-8 sm:mb-12 reveal-block flex items-center gap-3">
              <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-brand-blue shrink-0" />
              <h3 className="text-2xl sm:text-4xl font-bold font-serif text-foreground">
                Capability Breakdown
              </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-4 sm:gap-8">
              {service.capabilities.map((cap, idx) => (
                <div key={idx} className="reveal-block space-y-3 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-muted/40 border border-border/40">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-blue block">
                    {cap.category}
                  </span>
                  {cap.description && (
                    <p className="text-foreground/90 text-sm sm:text-base leading-relaxed">
                      {cap.description}
                    </p>
                  )}
                  {!!cap.items?.length && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {cap.items.map((item, iIdx) => (
                        <span
                          key={iIdx}
                          className="px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium bg-background text-foreground border border-border/50"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Core Features List */}
            {!!service.features?.length && (
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-10 border-t border-border/30">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 sm:mb-6">
                  Key Technical Capabilities
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 sm:gap-3 p-3 rounded-xl bg-background/50 border border-border/20 text-xs sm:text-sm text-foreground/90 font-medium">
                      <Check className="w-4 h-4 text-brand-lime flex-shrink-0 mt-0.5" />
                      <span className="break-words min-w-0">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 4. Delivery Methodology */}
      {!!service.deliverySteps?.length && (
        <section className="mx-auto max-w-[1248px] px-4 sm:px-5">
          <div className="mb-8 sm:mb-12 reveal-block flex items-center gap-3">
            <Workflow className="w-5 h-5 sm:w-6 sm:h-6 text-brand-lime shrink-0" />
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-foreground">
              Delivery Methodology
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {service.deliverySteps.map((stepItem, idx) => (
              <div key={idx} className="reveal-block rounded-xl sm:rounded-2xl bg-card border border-border/30 p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <span className="text-xl sm:text-2xl font-bold font-mono text-brand-lime block mb-3 sm:mb-4">
                    {stepItem.step}
                  </span>
                  <h4 className="font-bold text-foreground text-sm sm:text-base mb-1.5 sm:mb-2 font-serif">
                    {stepItem.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. Business Outcomes & CTA */}
      {!!service.outcomes?.length && (
        <section className="mx-auto max-w-[1248px] px-4 sm:px-5">
          <div className="rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] bg-gradient-to-br from-brand-lime/10 via-card to-card border border-brand-lime/30 p-5 sm:p-10 lg:p-16 overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                <span className="text-brand-lime font-bold tracking-widest uppercase text-xs block">
                  Measured Value
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-foreground">
                  Business Outcomes
                </h3>
                <div className="space-y-3 sm:space-y-4 pt-2">
                  {service.outcomes.map((out, oIdx) => (
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
                    <span className="text-center">{service.ctaText || "Get Started →"}</span>
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
