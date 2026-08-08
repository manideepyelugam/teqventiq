'use client';

import { CLIENTS_BY_VERTICAL } from '@/core/constants';
import { useRef, useEffect, useState } from 'react';
import { Building2, ShieldCheck } from 'lucide-react';

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

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 overflow-visible relative transition-colors duration-500"
      id="clients-section"
    >
      <div 
        className="gradient-mesh-section"
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
        }}
      >
        <div className="blob-a" />
        <div className="blob-b" />
      </div>
      <div className="dot-grid-overlay" />
      
      <div
        className="mx-auto max-w-[1248px] px-4 sm:px-6 lg:px-8 relative z-10"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-brand-blue font-bold tracking-wider uppercase text-xs mb-3 block">
            Client Footprint
          </span>
          <h3 className="text-3xl lg:text-5xl font-bold font-serif text-foreground tracking-tight mb-6">
            Trusted by <span className="bg-gradient-to-r from-brand-blue to-blue-600 bg-clip-text text-transparent">Industry Leaders</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-[640px] mx-auto leading-relaxed">
            Delivering mission-critical technology solutions across key regional enterprise verticals.
          </p>
        </div>

        {/* Industry Vertical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CLIENTS_BY_VERTICAL.map((item, idx) => (
            <div
              key={idx}
              className="bg-card/80 backdrop-blur-md rounded-2xl p-6 border border-border/60 hover:border-brand-blue/40 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-foreground text-base font-serif">
                    {item.vertical}
                  </h4>
                </div>
                <div className="space-y-2">
                  {item.clients.map((client, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" />
                      <span>{client.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-border/20 flex items-center justify-between text-[11px] text-muted-foreground font-mono">
                <span>VERIFIED PARTNER</span>
                <span className="text-brand-lime font-bold">2026 ACTIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
