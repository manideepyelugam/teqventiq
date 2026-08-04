import React from 'react';
import { HEALTHCARE_CONTENT } from '@/core/constants';

export default function HealthcareHero() {
  const { title, subtitle, tagline, badges, whoWeAre } = HEALTHCARE_CONTENT;

  return (
    <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 bg-transparent overflow-hidden transition-colors duration-500">

      <div className="mx-auto max-w-[1248px] px-5 relative z-10">
        <div className="max-w-[900px] reveal">
          <div className="inline-flex items-center gap-3 bg-muted/50 backdrop-blur-xl border border-border px-5 py-2.5 rounded-full mb-10">
            <span className="w-2 h-2 bg-brand-lime rounded-full"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-lime">
              Healthcare Focus
            </span>
          </div>

          <h1 className="text-4xl lg:text-7xl font-bold font-serif leading-[1.1] text-foreground mb-4">
            {title}
          </h1>
          <h2 className="text-xl lg:text-3xl font-medium text-brand-lime mb-8 font-serif">
            {subtitle}
          </h2>

          <p className="text-lg lg:text-xl text-muted-foreground font-medium leading-relaxed max-w-[700px] mb-12">
            {tagline}
          </p>

          {/* Badges list */}
          <div className="flex flex-wrap gap-3 mb-16">
            {badges.map((badge, i) => (
              <span key={i} className="text-xs font-bold uppercase tracking-wider text-muted-foreground border border-border px-4 py-2 rounded-full bg-muted/30">
                {badge}
              </span>
            ))}
          </div>

          {/* Who We Are Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border/40">
            {whoWeAre.stats.map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-card border border-border flex flex-col justify-between">
                <span className="text-3xl lg:text-4xl font-bold text-brand-lime mb-2 font-serif">{stat.value}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating shape */}
      <div className="absolute top-1/2 right-[8%] -translate-y-1/2 hidden lg:block float-item">
        <div className="w-72 h-72 bg-brand-lime/10 dark:bg-brand-lime/15 rounded-[2rem] rotate-45 flex items-center justify-center backdrop-blur-3xl border border-border transition-colors duration-500">
          <div className="w-36 h-36 bg-brand-blue/20 rounded-full blur-xl animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
