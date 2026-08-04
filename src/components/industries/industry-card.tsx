'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsap } from '@/core/hooks/use-gsap';
import { Industry } from '@/core/types';
import { cn } from '@/core/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface IndustryCardProps {
  industry: Industry;
  index: number;
}

export default function IndustryCard({ industry, index }: IndustryCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  useGsap(() => {
    if (!cardRef.current) return;

    // fadeInUp scroll entrance animation for IndustryCard
    gsap.fromTo(
      cardRef.current,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: (index % 2) * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, cardRef);

  return (
    <Link
      ref={cardRef}
      href={`/industries/${industry.slug}`}
      className={cn(
        "group relative rounded-[2rem] overflow-hidden transition-all duration-700 h-[500px] lg:h-[550px] border border-border bg-card",
        index === 0 ? "lg:col-span-8" :
        index === 1 ? "lg:col-span-4" :
        index % 3 === 0 ? "lg:col-span-4" :
        "lg:col-span-4"
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 rounded-[2rem] overflow-hidden">
        <img
          src={industry.image}
          alt={industry.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-50 group-hover:opacity-100 grayscale group-hover:grayscale-0"
        />
        {/* Always-on gradient — covers bottom half for base readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20"></div>
        {/* Hover scrim — additional darkness on hover */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>

      {/* Content Layer */}
      <div className="relative h-full p-10 flex flex-col z-10 justify-between">
        <div>
          <div className="flex items-end justify-end mb-10 w-full">
            <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white/70 group-hover:border-brand-lime group-hover:text-brand-lime transition-all duration-500 backdrop-blur-md">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </div>

          <h3 className={cn(
            "font-bold text-white mb-6 tracking-tight leading-[1.05] text-3xl",
            index === 0 ? " lg:text-8xl" : " lg:text-4xl"
          )}>
            {industry.title.split(' — ')[0]}
          </h3>

          <p className="text-white/70 text-lg lg:text-xl leading-relaxed max-w-[500px] group-hover:text-white/90 transition-colors duration-500">
            {industry.description}
          </p>
        </div>

        <div className="mt-auto pt-3">
          <ul className="flex flex-wrap gap-3 overflow-hidden max-h-[48px] group-hover:max-h-[300px] transition-all duration-700 ease-in-out">
            {industry.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/60 border border-white/20 px-4 py-2 rounded-full group-hover:text-brand-lime group-hover:border-brand-blue/50 transition-all bg-white/5 backdrop-blur-sm">
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex items-center gap-4 text-brand-lime font-bold uppercase tracking-[0.25em] text-[10px]">
            <span className="w-10 h-[1px] bg-brand-lime/20 group-hover:w-24 transition-all duration-700"></span>
            <span>Explore Industry</span>
          </div>
        </div>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 bg-brand-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
    </Link>
  );
}

