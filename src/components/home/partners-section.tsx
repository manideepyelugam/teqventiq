'use client';

import { PARTNERS } from '@/core/constants';
import { CompanyLogo } from '@/components/shared';
import { useRef, useEffect, useState } from 'react';

export default function PartnersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Distribute vendor logos across 2 rows so Ruckus and CommScope are in different rows and categories are balanced
  const row1Logos = PARTNERS.filter((_, index) => index % 2 === 0);
  const row2Logos = PARTNERS.filter((_, index) => index % 2 !== 0);

  // Double items for seamless marquee loop
  const marqueeRow1 = [...row1Logos, ...row1Logos];
  const marqueeRow2 = [...row2Logos, ...row2Logos];

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 overflow-hidden relative transition-colors duration-500"
      id="partners-section"
    >
      <div className="gradient-mesh-section">
        <div className="blob-a" />
        <div className="blob-b" />
      </div>
      <div className="dot-grid-overlay" />
      
      <div
        className="mx-auto max-w-[1248px] px-4 sm:px-6 lg:px-8 relative z-10 mb-10 lg:mb-12"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <div className="text-center">
          <span className="text-brand-lime font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Technology Partnerships
          </span>
          <h3 className="text-3xl lg:text-5xl font-bold font-serif text-foreground tracking-tight mb-6">
            Powered by <span className="text-brand-lime">Global Leaders</span>
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground max-w-[640px] mx-auto leading-relaxed">
            Engineered with top-tier global OEMs across networking, security, data center, AI, and enterprise hardware.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div 
        className="relative py-4 md:py-6 overflow-hidden"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.8s ease 0.2s',
        }}
      >
        {/* Edge gradient fades for smooth mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Row 1 — scrolls left */}
        <div 
          className="flex w-max animate-marquee-left will-change-transform hover:[animation-play-state:paused] items-center mb-6 md:mb-8"
          style={{ animationDuration: `${marqueeRow1.length * 2.5}s` }}
        >
          {marqueeRow1.map((partner, index) => (
            <div
              key={`row1-${partner.id || partner.name}-${index}`}
              className="flex-shrink-0 mx-3 md:mx-4"
            >
              <div className="bg-white rounded-2xl px-6 py-4 w-44 md:w-56 h-24 md:h-28 flex items-center justify-center shadow-sm border border-slate-200/80 dark:border-white/10 hover:scale-105 hover:shadow-md transition-all duration-300 group">
                <CompanyLogo
                  src={partner.image}
                  domain={partner.domain}
                  name={partner.name}
                  className="w-full h-full opacity-90 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 — scrolls right */}
        <div 
          className="flex w-max animate-marquee-right will-change-transform hover:[animation-play-state:paused] items-center"
          style={{ animationDuration: `${marqueeRow2.length * 2.5}s` }}
        >
          {marqueeRow2.map((partner, index) => (
            <div
              key={`row2-${partner.id || partner.name}-${index}`}
              className="flex-shrink-0 mx-3 md:mx-4"
            >
              <div className="bg-white rounded-2xl px-6 py-4 w-44 md:w-56 h-24 md:h-28 flex items-center justify-center shadow-sm border border-slate-200/80 dark:border-white/10 hover:scale-105 hover:shadow-md transition-all duration-300 group">
                <CompanyLogo
                  src={partner.image}
                  domain={partner.domain}
                  name={partner.name}
                  className="w-full h-full opacity-90 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

