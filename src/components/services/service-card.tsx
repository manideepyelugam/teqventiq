'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsap } from '@/core/hooks/use-gsap';
import { Service } from '@/core/types';
import { cn } from '@/core/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  useGsap(() => {
    if (!cardRef.current) return;

    // fadeInUp scroll entrance animation for original card design
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
      href={`/services/${service.slug}`}
      className={cn(
        "group relative rounded-[2rem] overflow-hidden transition-all duration-700 h-[500px] lg:h-[550px] border border-border bg-card md:col-span-1",
        index === 0 || index === 3 || index === 4 ? "lg:col-span-8" : 
        "lg:col-span-4"
      )}
    >
      {/* Background Image with Fixed Rounded Corners */}
      <div className="absolute inset-0 z-0 rounded-[2rem] overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-50 group-hover:opacity-100 group-hover:grayscale-0"
        />
        {/* Always-on gradient — covers full card for base readability */}
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
            index === 0 || index === 3 || index === 4 ? "lg:text-6xl xl:text-7xl" : "lg:text-4xl"
          )}>
            {service.title}
          </h3>
          
          <p className="text-white/70 text-lg lg:text-xl leading-relaxed max-w-[500px] group-hover:text-white/90 transition-colors duration-500">
            {service.description}
          </p>
        </div>

        <div className="mt-auto pt-3">
          <ul className="flex flex-wrap gap-3 overflow-hidden max-h-[48px] group-hover:max-h-[300px] transition-all duration-700 ease-in-out">
            {service.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/60 border border-white/20 px-4 py-2 rounded-full group-hover:text-brand-lime group-hover:border-brand-lime/50 transition-all bg-white/5 backdrop-blur-sm">
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex items-center gap-4 text-brand-lime dark:text-brand-lime font-bold uppercase tracking-[0.25em] text-[10px]">
            <span className="w-10 h-[1px] bg-brand-blue/20 dark:bg-brand-lime/20 group-hover:w-24 transition-all duration-700"></span>
            <span>Explore Detail</span>
          </div>
        </div>
      </div>
      
      {/* Hover Glow & Border Enhancement */}
      <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none group-hover:shadow-[inset_0_0_100px_rgba(37,103,232,0.05)]"></div>
    </Link>
  );
}


