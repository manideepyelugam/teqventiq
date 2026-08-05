import React from 'react';
import { HEALTHCARE_CONTENT } from '@/core/constants';
import * as Icons from 'lucide-react';
import { Card, CardContent } from '@/components/ui';

export default function HealthcareFocus() {
  const { focusTitle, focusIntro, focusAreas, focusFooter, whyChooseUs } = HEALTHCARE_CONTENT;

  return (
    <section className="py-24 lg:py-32 bg-transparent transition-colors duration-500">
      <div className="mx-auto max-w-[1248px] px-5">
        
        {/* ── Purpose Built Grid ── */}
        <div className="mb-28 reveal">
          <div className="mb-16 max-w-[800px]">
            <span className="text-brand-lime font-bold tracking-widest uppercase text-xs mb-6 block">Industry Focus</span>
            <h2 className="text-3xl lg:text-5xl font-bold font-serif text-foreground leading-tight mb-6">
              {focusTitle}
            </h2>
            <p className="text-lg text-muted-foreground">
              {focusIntro}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {focusAreas.map((area, i) => {
              const IconComponent = (Icons as any)[area.icon] || Icons.HelpCircle;

              return (
                <div
                  key={i}
                  className="flex gap-5 items-center p-6 rounded-2xl border border-border bg-background hover:border-brand-lime/30 hover:bg-brand-lime/5 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-lime/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-lime/20 transition-colors">
                    <IconComponent className="w-5 h-5 text-brand-lime" />
                  </div>
                  <span className="text-foreground/90 font-bold text-sm leading-snug">{area.name}</span>
                </div>
              );
            })}
          </div>

          <p className="text-sm text-muted-foreground text-center border-t border-border/40 pt-8 italic font-serif">
            {focusFooter}
          </p>
        </div>

        {/* ── Why Healthcare Choose Us ── */}
        <div className="reveal">
          <div className="mb-16 text-center">
            <span className="text-brand-lime font-bold tracking-widest uppercase text-xs mb-4 block">Why Teqventiq</span>
            <h2 className="text-3xl lg:text-5xl font-bold font-serif text-foreground">Why Healthcare Providers Choose Us</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, i) => (
              <Card key={i} className="rounded-[2rem] border border-border bg-background p-10 hover:border-brand-lime/25 transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-foreground mb-4 font-serif group-hover:text-brand-lime ">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
