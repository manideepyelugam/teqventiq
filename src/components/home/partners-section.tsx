'use client';

import { CATEGORIZED_PARTNERS, PARTNERS } from '@/core/constants';
import { CompanyLogo } from '@/components/shared';
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/core/lib/utils';

export default function PartnersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');

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

  const categories = ['All', ...CATEGORIZED_PARTNERS.map(c => c.category)];

  const selectedPartners = activeCategory === 'All' 
    ? PARTNERS 
    : CATEGORIZED_PARTNERS.find(c => c.category === activeCategory)?.partners || [];

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 overflow-visible relative transition-colors duration-500"
      id="partners-section"
    >
      <div className="gradient-mesh-section">
        <div className="blob-a" />
        <div className="blob-b" />
      </div>
      <div className="dot-grid-overlay" />
      
      <div className="mx-auto max-w-[1248px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="text-center mb-10 lg:mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <span className="text-brand-lime font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Technology Partnerships
          </span>
          <h3 className="text-3xl lg:text-5xl font-bold font-serif text-foreground tracking-tight mb-6">
            Powered by <span className="text-brand-lime">Global Leaders</span>
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground max-w-[640px] mx-auto leading-relaxed mb-8">
            Engineered with top-tier global OEMs across networking, security, data center, AI, and enterprise hardware.
          </p>

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 border capitalize",
                  activeCategory === cat
                    ? "bg-brand-blue text-white border-brand-blue shadow-sm"
                    : "bg-card/80 backdrop-blur-md text-muted-foreground border-border/60 hover:border-brand-blue/40 hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Partners Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.2s',
          }}
        >
          {selectedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="bg-white rounded-2xl p-4 h-24 sm:h-28 flex items-center justify-center shadow-sm border border-slate-200/80 hover:scale-[1.03] hover:shadow-md hover:border-brand-blue/50 transition-all duration-300 group"
            >
              <CompanyLogo
                domain={partner.domain}
                name={partner.name}
                src={partner.image}
                className="w-full h-full opacity-90 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
