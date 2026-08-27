'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGsap } from '@/core/hooks/use-gsap';
import { Button } from '@/components/ui';
import {
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Server,
  Cpu,
  Network,
  Monitor,
  Laptop,
  Landmark,
  Factory,
  Utensils,
  Building,
  GraduationCap,
  Building2,
  Radio,
} from 'lucide-react';
import Link from 'next/link';

/* ─── DATA ──────────────────────────────────────────── */

const SERVICES = [
  { id: 'cybersecurity', title: 'Cybersecurity', icon: ShieldCheck, color: '#2563eb', link: '/services/cybersecurity' },
  { id: 'datacentre', title: 'Datacentre', icon: Server, color: '#10b981', link: '/services/datacentre' },
  { id: 'networking', title: 'Networking', icon: Network, color: '#6366f1', link: '/services/networking' },
  { id: 'data-ai', title: 'Data & AI', icon: Cpu, color: '#f59e0b', link: '/services/data-ai' },
  { id: 'managed-support', title: 'Managed IT', icon: Monitor, color: '#a855f7', link: '/services/managed-support' },
];

const INDUSTRIES = [
  { id: 'it-ites', title: 'IT / ITES', icon: Laptop, color: '#3b82f6', link: '/industries/it-ites' },
  { id: 'bfsi', title: 'BFSI', icon: Landmark, color: '#10b981', link: '/industries/bfsi' },
  { id: 'manufacturing', title: 'Manufacturing', icon: Factory, color: '#f97316', link: '/industries/manufacturing' },
  { id: 'food-industry', title: 'Food Industry', icon: Utensils, color: '#eab308', link: '/industries/food-industry' },
  { id: 'real-estate', title: 'Real Estate', icon: Building, color: '#ec4899', link: '/industries/real-estate' },
  { id: 'education', title: 'Education', icon: GraduationCap, color: '#8b5cf6', link: '/industries/education' },
  { id: 'psu-government', title: 'PSU & Govt', icon: Building2, color: '#06b6d4', link: '/industries/psu-government' },
];

/* ─── COMPONENT ─────────────────────────────────────── */

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    gsap.from('.hero-enter', {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.14,
    });

    gsap.to('.status-pulse', {
      scale: 1.4,
      opacity: 0,
      duration: 2,
      repeat: -1,
      ease: 'power2.out',
    });
  }, containerRef);

  // Orbit speed config
  const INNER_SPEED = 60;  // seconds per full revolution
  const OUTER_SPEED = 90;  // seconds per full revolution

  return (
    <section
      id="hero-section"
      ref={containerRef}
      className="relative overflow-hidden min-h-screen flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 text-foreground transition-colors duration-500"
    >
      {/* Delhi Cityscape Background */}
      <div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-15 dark:opacity-25 mix-blend-luminosity"
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 85%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 85%)',
        }}
      >
        <img
          src="/images/delhi_skyline_hero.webp"
          alt="Delhi Tech Infrastructure"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Ambient gradient mesh */}
      <div
        className="gradient-mesh-hero"
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 90%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 90%)',
        }}
      >
        <div className="blob-1" />
        <div className="blob-2" />
      </div>

      <div className="dot-grid-overlay" />

      <div className="w-full mx-auto max-w-[1280px] px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* ── LEFT: Text ─────────────────────────────────── */}
          <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="hero-enter inline-flex items-center gap-2.5 bg-brand-blue/10 border border-brand-blue/25 px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full mb-4 sm:mb-6 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
                <span className="status-pulse absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
                <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-brand-blue" />
              </span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand-blue">
                Teqventiq Services
              </span>
            </div>

            <h1 className="hero-enter text-3xl sm:text-5xl lg:text-6xl font-bold font-serif leading-[1.12] sm:leading-[1.08] tracking-tight text-foreground mb-4 sm:mb-6">
              Where Technology <br />
              <span className="bg-gradient-to-r from-brand-blue via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Meets Business Intelligence
              </span>
            </h1>

            <p className="hero-enter text-sm sm:text-base lg:text-lg text-muted-foreground font-sans max-w-[500px] mb-6 sm:mb-8 leading-relaxed">
              Empowering organizations with secure, scalable, and modern enterprise technology ecosystems.
            </p>

            <div className="hero-enter flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <Button asChild className="btn-primary group w-full sm:w-auto">
                <a href="#contact-section">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="outline" className="btn-outline group w-full sm:w-auto">
                <a href="#features">
                  Our Impact
                  <ChevronDown className="w-4.5 h-4.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>
            </div>
          </div>

          {/* ── RIGHT: Orbit Ecosystem ────────────────────── */}
          <div className="lg:col-span-7 hero-enter flex justify-center lg:justify-end w-full overflow-visible py-4">
            <div className="hero-orbit-container relative mx-auto select-none">
              {/* ── Orbit Ring Tracks (visual guides) ── */}
              {/* Inner ring */}
              <div
                className="absolute rounded-full border border-brand-blue/15 dark:border-brand-blue/25 pointer-events-none"
                style={{
                  width: 'calc(var(--inner-radius) * 2)',
                  height: 'calc(var(--inner-radius) * 2)',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  animation: 'orbit-pulse-ring 5s ease-in-out infinite',
                }}
              />
              {/* Outer ring */}
              <div
                className="absolute rounded-full border border-indigo-500/10 dark:border-indigo-500/20 pointer-events-none"
                style={{
                  width: 'calc(var(--outer-radius) * 2)',
                  height: 'calc(var(--outer-radius) * 2)',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  animation: 'orbit-pulse-ring 7s ease-in-out infinite 1s',
                }}
              />

              {/* ── CENTER HUB: Teqventiq Logo ────────── */}
              <div
                className="absolute z-20"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div
                  className="rounded-full bg-card/95 border-2 border-brand-blue/40 flex flex-col items-center justify-center p-2 sm:p-3 relative backdrop-blur-2xl transition-all duration-300"
                  style={{
                    width: 'var(--hub-size)',
                    height: 'var(--hub-size)',
                    animation: 'orbit-node-glow 4s ease-in-out infinite',
                  }}
                >
                  {/* Ping ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-brand-blue/30 animate-ping pointer-events-none" />
                  <img
                    src="/images/teqventiq logo/teqventiq light.webp"
                    alt="Teqventiq"
                    className="logo-light max-w-[52px] sm:max-w-[68px] lg:max-w-[82px] h-auto object-contain"
                  />
                  <img
                    src="/images/teqventiq logo/teqventiq dark.webp"
                    alt="Teqventiq"
                    className="logo-dark max-w-[52px] sm:max-w-[68px] lg:max-w-[82px] h-auto object-contain"
                  />
                </div>
              </div>

              {/* ── INNER ORBIT: Services (orbit clockwise, 100% upright) ── */}
              <div className="absolute inset-0 z-30 pointer-events-none">
                {SERVICES.map((svc, i) => {
                  const angle = (360 / SERVICES.length) * i;
                  const Icon = svc.icon;
                  return (
                    <Link
                      key={svc.id}
                      href={svc.link}
                      className="absolute group/node pointer-events-auto cursor-pointer z-40 hover:[animation-play-state:paused]"
                      style={{
                        top: '50%',
                        left: '50%',
                        marginTop: 'calc(-1 * var(--inner-node-size) / 2)',
                        marginLeft: 'calc(-1 * var(--inner-node-size) / 2)',
                        animation: `orbit-revolve-cw ${INNER_SPEED}s linear infinite`,
                        // @ts-expect-error custom CSS variables for keyframe orbit
                        '--start-angle': `${angle}deg`,
                        '--orbit-radius': `var(--inner-radius)`,
                      }}
                    >
                      <div className="relative">
                        <div
                          className="rounded-xl sm:rounded-2xl bg-card/95 border-2 shadow-lg backdrop-blur-xl flex items-center justify-center transition-all duration-300 group-hover/node:scale-125 group-hover/node:shadow-2xl"
                          style={{
                            width: 'var(--inner-node-size)',
                            height: 'var(--inner-node-size)',
                            borderColor: svc.color,
                            color: svc.color,
                          }}
                        >
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                        </div>
                        {/* Tooltip */}
                        <div className="absolute top-full mt-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-card/95 border border-border/80 shadow-md backdrop-blur-md opacity-0 scale-90 group-hover/node:opacity-100 group-hover/node:scale-100 transition-all duration-200 pointer-events-none z-50">
                          <span className="text-[9px] sm:text-[10px] font-bold text-foreground block leading-none">
                            {svc.title}
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* ── OUTER ORBIT: Industries (orbit counter-clockwise, 100% upright) ── */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                {INDUSTRIES.map((ind, i) => {
                  const angle = (360 / INDUSTRIES.length) * i;
                  const Icon = ind.icon;
                  return (
                    <Link
                      key={ind.id}
                      href={ind.link}
                      className="absolute group/node pointer-events-auto cursor-pointer z-40 hover:[animation-play-state:paused]"
                      style={{
                        top: '50%',
                        left: '50%',
                        marginTop: 'calc(-1 * var(--outer-node-size) / 2)',
                        marginLeft: 'calc(-1 * var(--outer-node-size) / 2)',
                        animation: `orbit-revolve-ccw ${OUTER_SPEED}s linear infinite`,
                        // @ts-expect-error custom CSS variables for keyframe orbit
                        '--start-angle': `${angle}deg`,
                        '--orbit-radius': `var(--outer-radius)`,
                      }}
                    >
                      <div className="relative">
                        <div
                          className="rounded-lg sm:rounded-xl bg-card/95 border-2 shadow-md backdrop-blur-xl flex items-center justify-center transition-all duration-300 group-hover/node:scale-125 group-hover/node:shadow-2xl"
                          style={{
                            width: 'var(--outer-node-size)',
                            height: 'var(--outer-node-size)',
                            borderColor: ind.color,
                            color: ind.color,
                          }}
                        >
                          <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />
                        </div>
                        {/* Tooltip */}
                        <div className="absolute top-full mt-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-1.5 sm:px-2 py-0.5 rounded-lg bg-card/95 border border-border/80 shadow-md backdrop-blur-md opacity-0 scale-90 group-hover/node:opacity-100 group-hover/node:scale-100 transition-all duration-200 pointer-events-none z-50">
                          <span className="text-[8px] sm:text-[9px] font-bold text-foreground block leading-none">
                            {ind.title}
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

