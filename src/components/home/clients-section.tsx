'use client';

import { CLIENTS,EDUCATION_CLIENTS } from '@/core/constants';
import { CompanyLogo } from '@/components/shared';
import { useRef, useEffect, useState } from 'react';

export default function ClientsSection() {
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

  // Double items for seamless loop
  const marqueeItems = [...EDUCATION_CLIENTS, ...EDUCATION_CLIENTS];
  const marqueeItemsReversed = [...CLIENTS].reverse().concat([...CLIENTS].reverse());

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 overflow-visible relative transition-colors duration-500"
      id="clients-section"
    >
      {/* Ambient gradient mesh */}
      <div className="gradient-mesh-section">
        <div className="blob-a" />
        <div className="blob-b" />
      </div>
      {/* Dot field texture */}
      <div className="dot-grid-overlay" />
      <div
        className="mx-auto max-w-[1248px] px-4 sm:px-6 lg:px-8 relative z-10 mb-12 lg:mb-16"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <div className="text-center">
          <span className="text-brand-lime font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Our Clients
          </span>
          <h3 className="text-3xl lg:text-5xl font-bold font-serif text-foreground tracking-tight mb-6">
            Trusted by <span className="text-brand-lime">Industry Leaders</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-[600px] mx-auto leading-relaxed">
            Partnering with leading organizations across the region to deliver transformative technology solutions.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div 
        className="relative py-6 md:py-10 overflow-hidden"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.8s ease 0.2s',
        }}
      >
        {/* Edge fades */}
        {/* <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-muted to-transparent z-10 pointer-events-none"></div> */}
        {/* <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-muted to-transparent z-10 pointer-events-none"></div> */}

        {/* Row 1 — scrolls left */}
        <div 
          className="flex w-max animate-marquee-left will-change-transform hover:[animation-play-state:paused] items-center mb-6 md:mb-10"
          style={{ animationDuration: `${marqueeItems.length * 1.5}s` }}
        >
          {marqueeItems.map((client, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 mx-4 md:mx-6"
            >
              <div className="bg-white rounded-xl px-5 py-3 w-44 md:w-56 h-24 md:h-28 flex items-center justify-center shadow-sm border border-white/10 hover:scale-105 transition-transform duration-300">
                <CompanyLogo
                  src={client.src}
                  domain=""
                  name={client.name}
                  className="w-full h-full opacity-90 hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 — scrolls right */}
        <div 
          className="flex w-max animate-marquee-right will-change-transform hover:[animation-play-state:paused] items-center"
          style={{ animationDuration: `${marqueeItemsReversed.length * 1.5}s` }}
        >
          {marqueeItemsReversed.map((client, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 mx-4 md:mx-6"
            >
              <div className="bg-white rounded-xl px-5 py-3 w-44 md:w-56 h-24 md:h-28 flex items-center justify-center shadow-sm border border-white/10 hover:scale-105 transition-transform duration-300">
                <CompanyLogo
                  domain={client.domain}
                  name={client.name}
                  className="w-full h-full opacity-90 hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
