'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsap } from '@/core/hooks/use-gsap';
import { Compass, PenTool, Rocket, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Discovery & Alignment',
    description: 'We analyze your current ecosystem, business goals, and security bottlenecks to blueprint a tailored strategy.',
    icon: Compass,
  },
  {
    step: '02',
    title: 'Architecture & Design',
    description: 'Engineering robust, scalable, and resilient technical solutions backed by modern enterprise standards.',
    icon: PenTool,
  },
  {
    step: '03',
    title: 'Deployment & Integration',
    description: 'Seamless execution and zero-downtime deployment with agile milestones and automated CI/CD pipelines.',
    icon: Rocket,
  },
  {
    step: '04',
    title: 'Optimization & Support',
    description: '24/7 proactive monitoring, intelligent automation, and ongoing optimization to ensure peak performance.',
    icon: ShieldCheck,
  },
];

export default function ServiceWorkflow() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    if (!containerRef.current) return;

    // Heading animation
    gsap.fromTo(
      containerRef.current.querySelector('.workflow-header'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Cards staggered fadeInUp animation
    const cards = containerRef.current.querySelectorAll('.workflow-card');
    gsap.fromTo(
      cards,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 78%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, containerRef);

  return (
    <section ref={containerRef} className="mt-36 px-5 relative z-10">
      <div className="mx-auto max-w-[1248px]">
        {/* Section Header */}
        <div className="workflow-header text-center mb-16 max-w-[700px] mx-auto">
          <div className="inline-flex items-center gap-3 bg-muted/50 backdrop-blur-xl border border-border px-5 py-2.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-brand-lime rounded-full" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-lime dark:text-brand-lime">
              Our Process
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold font-serif text-foreground mb-6">
            This is Our <span className="text-brand-lime">Workflow</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From initial consultation to full enterprise deployment, we follow a disciplined, transparent framework designed for maximum efficiency.
          </p>
        </div>

        {/* Workflow Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WORKFLOW_STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="workflow-card group relative bg-card/80 backdrop-blur-md border border-border/60 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold tracking-wider text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">
                      STEP {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-foreground group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand-blue transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom decorative accent */}
                <div className="mt-8 pt-4 border-t border-border/40 flex items-center justify-between text-[10px] uppercase font-bold tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                  <span>Phase {index + 1}</span>
                  <span className="w-8 h-[1px] bg-brand-lime/40 group-hover:w-16 transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
