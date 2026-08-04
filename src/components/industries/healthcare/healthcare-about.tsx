import React from 'react';
import { HEALTHCARE_CONTENT } from '@/core/constants';
import * as Icons from 'lucide-react';
import { Card, CardContent } from '@/components/ui';

export default function HealthcareAbout() {
  const { whoWeAre, whatThisMeans } = HEALTHCARE_CONTENT;

  return (
    <section className="py-24 bg-transparent transition-colors duration-500">
      <div className="mx-auto max-w-[1248px] px-5">
        
        {/* ── Who We Are Text ── */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24 reveal">
          <div className="lg:col-span-5">
            <span className="text-brand-lime font-bold tracking-widest uppercase text-xs mb-4 block">Who We Are</span>
            <h2 className="text-3xl lg:text-5xl font-bold font-serif text-foreground leading-[1.1]">{whoWeAre.title}</h2>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-6 text-lg text-muted-foreground leading-relaxed">
            {whoWeAre.text.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

       

        {/* ── What This Means For Your Facility ── */}
        <div className="reveal">
          <div className="mb-16 text-center">
            <span className="text-brand-lime font-bold tracking-widest uppercase text-xs mb-4 block">Impact</span>
            <h2 className="text-3xl lg:text-5xl font-bold font-serif text-foreground">What This Means For Your Facility</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatThisMeans.map((item, i) => {
              // Dynamically resolve icon from Lucide
              const IconComponent = (Icons as any)[item.icon] || Icons.HelpCircle;

              return (
                <div
                  key={i}
                  className="p-8 rounded-[2rem] border border-border bg-background hover:border-brand-lime/30 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-lime/10 flex items-center justify-center mb-8 group-hover:bg-brand-lime/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-brand-lime" />
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-brand-lime text-foreground mb-4 leading-snug">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-auto">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
