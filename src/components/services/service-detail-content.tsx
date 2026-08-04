'use client';

import { useRef } from 'react';
import { Check } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsap } from '@/core/hooks/use-gsap';
import { Service } from '@/core/types';

gsap.registerPlugin(ScrollTrigger);

interface ServiceDetailContentProps {
  service: Service;
}

export default function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    if (!containerRef.current) return;

    // Text & Solutions list reveal on scroll
    gsap.from('.detail-text-col', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    // Image card entrance on scroll
    gsap.from('.detail-img-col', {
      scale: 0.92,
      y: 60,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 78%',
        toggleActions: 'play none none reverse',
      },
    });
  }, containerRef);

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-transparent transition-colors duration-500">
      <div className="mx-auto max-w-[1248px] px-5">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="detail-text-col">
            <h2 className="text-4xl lg:text-5xl font-bold mb-10 leading-tight text-foreground">
              Solving complex problems with{' '}
              <span className="text-brand-lime">
                intelligent engineering.
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              {service.detailedContent || `At Savvtek Services, we don't just provide services; we architect solutions that scale with your ambitions. Our approach to ${service.title} combines deep technical expertise with a thorough understanding of your business goals.`}
            </p>

            {!!service.solutions?.length && !!service.services?.length ? (
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Solutions Column */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2 border-b border-border/50 pb-3">
                    <span className="w-2 h-2 bg-brand-lime rounded-full" />
                    {service.solutionsTitle || 'Solutions'}
                  </h3>
                  <div className="space-y-4">
                    {service.solutions.map((item, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <div className="w-6 h-6 rounded-md bg-brand-lime/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-brand-lime" />
                        </div>
                        <span className="text-foreground/80 font-bold text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services Column */}
                {service.servicesTitle && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2 border-b border-border/50 pb-3">
                      <span className="w-2 h-2 bg-brand-lime rounded-full" />
                      {service.servicesTitle}
                    </h3>
                    <div className="space-y-4">
                      {service.services.map((item, idx) => (
                        <div key={idx} className="flex gap-3 items-start">
                          <div className="w-6 h-6 rounded-md bg-brand-lime/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 text-brand-lime" />
                          </div>
                          <span className="text-foreground/80 font-bold text-sm leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2 border-b border-border/50 pb-3">
                  <span className="w-2 h-2 bg-brand-lime rounded-full" />
                  {service.solutionsTitle || service.services}
                </h3>
                <div className="space-y-4">
                  {service.features.map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-md bg-brand-lime/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-brand-lime" />
                      </div>
                      <span className="text-foreground/80 font-bold text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {service.footerText && (
              <p className="mt-10 text-sm sm:text-base text-muted-foreground pt-6 font-medium italic leading-relaxed">
                {service.footerText}
              </p>
            )}
          </div>

          <div className="detail-img-col relative">
            <div className="rounded-[2rem] overflow-hidden shadow-3xl aspect-[4/5] border border-border bg-muted/20">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 opacity-90 dark:opacity-70"
              />
            </div>
            {/* Floating highlight */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-lime rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

