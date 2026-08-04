'use client';

import { MISSION_VISION } from '@/core/constants';
import { Target, Eye } from 'lucide-react';
import { cn } from '@/core/lib/utils';
import React from 'react';



export default function MissionVisionSection() {
  return (
    <section className="py-20 lg:py-32 transition-colors duration-500 relative overflow-visible">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="mx-auto max-w-[1248px] px-5 relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-brand-lime font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Our Core Values
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-serif text-foreground tracking-tight mb-6">
            Mission & <span className="text-muted-foreground">Vision</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-[700px] mx-auto leading-relaxed">
            Guiding our journey as we empower enterprises with next-generation technology solutions and strategic innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {MISSION_VISION.map((item, index) => (
            <div 
              key={index}
              id={item.title.toLowerCase().replace('our ', '')}
              className="group relative bg-card rounded-[32px] overflow-hidden border border-border/50 hover:border-brand-blue/30 transition-all duration-500 hover:shadow-2xl"
            >
              {/* Image Header */}
              <div className="relative h-[250px] sm:h-[300px] w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> */}
                
                
              </div>

              {/* Content Content */}
              <div className="p-8 pt-4 sm:p-10 sm:pt-6">
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-foreground mb-4 sm:mb-6">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
                <p className="text-base sm:text-lg mt-4 text-muted-foreground leading-relaxed">
                  {item.text1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
