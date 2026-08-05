import React from 'react';
import { COMPANY_INFO } from '@/core/constants';

export default function ContactInfo() {
  return (
    <div className="reveal">
      <div className="inline-flex items-center gap-3 bg-muted/50 backdrop-blur-xl border border-border px-5 py-2.5 rounded-full mb-8">
        <span className="w-2 h-2 bg-brand-lime rounded-full"></span>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue dark:text-brand-lime">Connect With Us</span>
      </div>
      
      <h1 className="text-4xl lg:text-7xl font-bold font-serif leading-tight text-foreground mb-8">
        Let's Build the <br />
        <span className="text-brand-blue">Future Together</span>
      </h1>
      
      <p className="text-base md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-[500px]">
        Have a complex challenge? Our team of engineering experts is ready to help you navigate the modern IT landscape.
      </p>

      <div className="space-y-8">
        <div className="flex items-start gap-6 group">
          <div className="w-14 h-14 rounded-2xl bg-muted border border-border flex items-center justify-center text-brand-blue dark:text-brand-lime group-hover:bg-brand-blue dark:group-hover:bg-brand-lime group-hover:text-white dark:group-hover:text-brand-dark transition-all duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </div>
          <div>
            <h4 className="text-foreground font-bold mb-1">Call Us</h4>
            <p className="text-muted-foreground">{COMPANY_INFO.phone}</p>
          </div>
        </div>

        <div className="flex items-start gap-6 group">
          <div className="w-14 h-14 rounded-2xl bg-muted border border-border flex items-center justify-center text-brand-blue dark:text-brand-lime group-hover:bg-brand-blue dark:group-hover:bg-brand-lime group-hover:text-white dark:group-hover:text-brand-dark transition-all duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </div>
          <div>
            <h4 className="text-foreground font-bold mb-1">Email Us</h4>
            <p className="text-muted-foreground">{COMPANY_INFO.email}</p>
          </div>
        </div>

        <div className="flex items-start gap-6 group">
          <div className="w-14 h-14 rounded-2xl bg-muted border border-border flex items-center justify-center text-brand-blue dark:text-brand-lime group-hover:bg-brand-blue dark:group-hover:bg-brand-lime group-hover:text-white dark:group-hover:text-brand-dark transition-all duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          </div>
          <div>
            <h4 className="text-foreground font-bold mb-1">Visit Us (Delhi Office)</h4>
            <p className="text-muted-foreground">{COMPANY_INFO.address.full}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
