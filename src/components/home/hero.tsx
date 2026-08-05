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
  CheckCircle2, 
} from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    // Text entrance
    gsap.from('.hero-enter', {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.14,
    });

    // Floating animation for the Tech Dashboard card on the right
    gsap.to('.hero-dashboard-card', {
      y: -10,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Pulse animation for status indicator
    gsap.to('.status-pulse', {
      scale: 1.4,
      opacity: 0,
      duration: 2,
      repeat: -1,
      ease: 'power2.out',
    });
  }, containerRef);

  return (
    <section
      id="hero-section"
      ref={containerRef}
      className="relative overflow-visible min-h-screen flex items-center pt-28 pb-16 lg:pt-32 lg:pb-20 text-foreground transition-colors duration-500"
    >
      {/* Delhi Cityscape Hero Background Visual */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-15 dark:opacity-25 mix-blend-luminosity">
        <img
          src="/images/delhi_skyline_hero.png"
          alt="Delhi Tech Infrastructure"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      {/* Ambient gradient mesh */}
      <div className="gradient-mesh-hero">
        <div className="blob-1" />
        <div className="blob-2" />
        <div className="blob-3" />
        <div className="blob-4" />
      </div>
      {/* Dot grid texture */}
      <div className="dot-grid-overlay" />

      <div className="w-full mx-auto max-w-[1280px] px-5 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── LEFT: Text Content ────────────────────────────────── */}
          <div className="lg:col-span-6">
            <div className="hero-enter inline-flex items-center gap-2.5 bg-brand-blue/10 border border-brand-blue/25 px-4 py-1.5 rounded-full mb-6 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="status-pulse absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-blue"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                Teqventiq Services
              </span>
            </div>

            <h1 className="hero-enter text-4xl sm:text-5xl lg:text-6xl font-bold font-serif leading-[1.08] tracking-tight text-foreground mb-6">
              Where Technology <br />
              <span className="bg-gradient-to-r from-brand-blue via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Meets Business Intelligence
              </span>
            </h1>

            <p className="hero-enter text-base sm:text-lg text-muted-foreground font-sans max-w-[500px] mb-8 leading-relaxed">
              Empowering organizations with secure, scalable, and modern enterprise technology ecosystems.
            </p>

            <div className="hero-enter flex flex-wrap items-center gap-4">
              <Button asChild className="btn-primary group">
                <a href="#contact-section">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="btn-outline group"
              >
                <a href="#features">
                  Our Impact
                  <ChevronDown className="w-4.5 h-4.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>
            </div>
          </div>

          {/* ── RIGHT: Unique Enterprise Tech Showcase Dashboard ──── */}
          <div className="lg:col-span-6 hero-enter flex justify-center lg:justify-end">
            <div className="hero-dashboard-card relative w-full max-w-[560px] rounded-3xl bg-card/85 backdrop-blur-xl border border-border/80 shadow-2xl p-6 sm:p-8 overflow-visible">
              
              {/* Background Glow inside Card */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

              {/* Card Header Bar */}
              <div className="flex items-center justify-between pb-6 border-b border-border/40">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 relative">
                    <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground block">
                      Enterprise Ecosystem
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      Live Telemetry • Delhi HQ
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[11px] font-bold uppercase tracking-wider">
                    ISO 27001
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold uppercase tracking-wider">
                    Zero Trust
                  </span>
                </div>
              </div>

              {/* 2x2 Capabilities Matrix */}
              <div className="grid grid-cols-2 gap-3.5 my-6">
                
                {/* 1. Cybersecurity */}
                <Link 
                  href="/services/cybersecurity"
                  className="group/item p-4 rounded-2xl bg-muted/40 border border-border/50 hover:border-brand-blue/40 hover:bg-card transition-all duration-300 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-3 group-hover/item:scale-110 transition-transform">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1 group-hover/item:text-brand-blue transition-colors">
                    Cybersecurity
                  </h3>
                  <p className="text-[12px] text-muted-foreground leading-tight">
                    NGFW & Zero Trust Defense
                  </p>
                </Link>

                {/* 2. Datacentre & Cloud */}
                <Link 
                  href="/services/datacentre"
                  className="group/item p-4 rounded-2xl bg-muted/40 border border-border/50 hover:border-brand-blue/40 hover:bg-card transition-all duration-300 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-3 group-hover/item:scale-110 transition-transform">
                    <Server className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1 group-hover/item:text-brand-blue transition-colors">
                    Datacentre & Cloud
                  </h3>
                  <p className="text-[12px] text-muted-foreground leading-tight">
                    High-Uptime Servers & DR
                  </p>
                </Link>

                {/* 3. Networking */}
                <Link 
                  href="/services/networking"
                  className="group/item p-4 rounded-2xl bg-muted/40 border border-border/50 hover:border-brand-blue/40 hover:bg-card transition-all duration-300 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-3 group-hover/item:scale-110 transition-transform">
                    <Network className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1 group-hover/item:text-brand-blue transition-colors">
                    Networking
                  </h3>
                  <p className="text-[12px] text-muted-foreground leading-tight">
                    SD-WAN & Active Fiber
                  </p>
                </Link>

                {/* 4. Data & AI */}
                <Link 
                  href="/services/data-ai"
                  className="group/item p-4 rounded-2xl bg-muted/40 border border-border/50 hover:border-brand-blue/40 hover:bg-card transition-all duration-300 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-3 group-hover/item:scale-110 transition-transform">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1 group-hover/item:text-brand-blue transition-colors">
                    Data & AI
                  </h3>
                  <p className="text-[12px] text-muted-foreground leading-tight">
                    Analytics & Automation
                  </p>
                </Link>

              </div>

              {/* Bottom Real-Time SLA Metrics Strip */}
              <div className="pt-5 border-t border-border/40 grid grid-cols-3 gap-3 text-center">
                <div className="p-2.5 rounded-xl bg-background/60 border border-border/40">
                  <span className="text-xs text-muted-foreground block mb-0.5">Uptime SLA</span>
                  <span className="text-base font-bold text-brand-blue">99.99%</span>
                </div>
                <div className="p-2.5 rounded-xl bg-background/60 border border-border/40">
                  <span className="text-xs text-muted-foreground block mb-0.5">Response</span>
                  <span className="text-base font-bold text-foreground">&lt; 10ms</span>
                </div>
                <div className="p-2.5 rounded-xl bg-background/60 border border-border/40">
                  <span className="text-xs text-muted-foreground block mb-0.5">Support</span>
                  <span className="text-base font-bold text-emerald-500">24/7/365</span>
                </div>
              </div>

              {/* Floating Security Badge Pill */}
              <div className="absolute -bottom-5 -left-4 sm:left-6 bg-card border border-brand-blue/30 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-xl">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-500">
                  <CheckCircle2 className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-foreground block leading-none mb-0.5">
                    Proactive Threat Defense
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    Active Defense Engine Operational
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
