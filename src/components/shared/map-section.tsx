'use client';

import { cn } from "@/core/lib/utils";
import { useGsap } from "@/core/hooks/use-gsap";
import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';

export default function MapSection() {
  const [activeTracker, setActiveTracker] = useState('first');
  const sectionRef = useRef<HTMLDivElement>(null);

  const trackers = [
    { id: 'first', label: 'Dubai HQ', region: 'Middle East', top: '38%', left: '58%' },
    { id: 'second', label: 'Frankfurt', region: 'Europe', top: '32%', left: '48%' },
    { id: 'third', label: 'Singapore', region: 'APAC', top: '55%', left: '78%' },
    { id: 'fourth', label: 'New York', region: 'North America', top: '35%', left: '25%' },
    { id: 'fifth', label: 'London', region: 'Europe', top: '30%', left: '45%' }
  ];

  useGsap(() => {
    gsap.from(".map-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });
  }, sectionRef);

  return (
    <section 
      ref={sectionRef}
      className="bg-background py-16 sm:py-32 lg:py-48 overflow-hidden relative transition-colors duration-500" 
      id="map-section"
    >
      {/* High-tech Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, var(--color-brand-blue) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      {/* Atmosphere Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--color-brand-blue)_0%,_transparent_60%)] opacity-5 pointer-events-none"></div>

      <div className="mx-auto max-w-[1248px] px-4 sm:px-5 relative z-10">
        <div className="text-center mb-12 sm:mb-24 max-w-[800px] mx-auto">
          <span className="map-text text-brand-lime font-bold tracking-[0.3em] uppercase text-xs mb-4 sm:mb-6 block">Global Presence</span>
          <h3 className="map-text text-3xl sm:text-5xl lg:text-7xl font-bold font-serif text-foreground mb-4 sm:mb-8 tracking-tight">
            Strategic <br />
            <span className="text-brand-blue">Global Operations</span>
          </h3>
          <p className="map-text text-base sm:text-xl text-muted-foreground leading-relaxed font-normal">
            With a distributed network of secure nodes, we ensure high-availability and low-latency support for modern enterprises worldwide.
          </p>
        </div>

        <div className="relative w-full max-w-[1200px] mx-auto group">
          {/* Map Base */}
          <div className="relative">
            <img 
              src="/images/full-map.webp" 
              alt="World Map" 
              className="w-full h-auto object-contain opacity-40 filter grayscale transition-all duration-1000 group-hover:opacity-60 dark:brightness-200" 
            />
            
            {/* Connection Lines (Optional Decorative) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 1000 500">
               <path d="M580 190 Q 530 150 480 160" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="2 2" className="text-brand-blue" />
               <path d="M580 190 Q 680 230 780 275" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="2 2" className="text-brand-blue" />
               <path d="M580 190 Q 415 185 250 175" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="2 2" className="text-brand-blue" />
            </svg>
          </div>
          
          {trackers.map((tracker) => (
            <div 
              key={tracker.id}
              className="absolute transition-all duration-500 cursor-pointer group/dot"
              style={{
                top: tracker.top,
                left: tracker.left,
              }}
              onClick={() => setActiveTracker(tracker.id)}
            >
              {/* Ping Animation Layers */}
              <div className="relative flex items-center justify-center">
                 <div className={cn(
                    "w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 z-10",
                    activeTracker === tracker.id ? "bg-brand-lime scale-150 shadow-[0_0_20px_rgba(215,232,102,0.5)]" : "bg-brand-blue"
                 )}></div>
                 
                 <div className={cn(
                    "absolute w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-current animate-ping opacity-20",
                    activeTracker === tracker.id ? "text-brand-lime" : "text-brand-blue"
                 )}></div>
                 <div className={cn(
                    "absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-current animate-pulse opacity-10",
                    activeTracker === tracker.id ? "text-brand-lime" : "text-brand-blue"
                 )}></div>
              </div>
              
              {/* High-tech Tooltip */}
              <div className={cn(
                "absolute bottom-full left-1/2 -translate-x-1/2 mb-4 sm:mb-6 transition-all duration-500 z-20",
                activeTracker === tracker.id ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-90 pointer-events-none"
              )}>
                <div className="bg-card/95 backdrop-blur-xl border border-border shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-3.5 sm:p-5 rounded-2xl min-w-[160px] sm:min-w-[200px]">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="text-[10px] sm:text-xs font-bold text-brand-lime tracking-widest uppercase">{tracker.region}</span>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse"></div>
                  </div>
                  <h6 className="text-foreground text-sm sm:text-lg font-bold mb-0.5 sm:mb-1">{tracker.label}</h6>
                  <p className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-widest border-t border-border/50 pt-1.5 sm:pt-2 mt-1.5 sm:mt-2">Operational Status: Optimal</p>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-card rotate-45 border-r border-b border-border"></div>
                </div>
              </div>

              {/* Label below dot (always visible but subtle) */}
              <div className={cn(
                "absolute top-full left-1/2 -translate-x-1/2 mt-2 sm:mt-3 transition-opacity duration-300",
                activeTracker === tracker.id ? "opacity-0" : "opacity-60 group-hover/dot:opacity-100"
              )}>
                 <span className="text-[9px] sm:text-[10px] text-foreground font-bold uppercase tracking-tighter whitespace-nowrap">{tracker.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Stats Footer */}
        <div className="mt-16 sm:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 border-t border-border/50 pt-8 sm:pt-16">
           {[
             { label: 'Uptime', value: '99.9%' },
             { label: 'Latency', value: '<20ms' },
             { label: 'Nodes', value: '25+' },
             { label: 'Support', value: '24/7' }
           ].map((stat, i) => (
             <div key={i} className="text-center group">
               <div className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1 sm:mb-2 group-hover:text-brand-blue transition-colors">{stat.label}</div>
               <div className="text-2xl sm:text-3xl font-serif font-bold text-foreground tracking-tighter">{stat.value}</div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
