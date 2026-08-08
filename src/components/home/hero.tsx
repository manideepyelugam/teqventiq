'use client';

import { useState, useRef } from 'react';
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
  Activity,
  Zap,
  Radio,
  Lock,
  ArrowUpRight,
  Shield,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

const ECOSYSTEM_NODES = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Zero Trust',
    shortName: 'Cybersecurity',
    badge: 'ISO 27001 • SOC 2',
    icon: ShieldCheck,
    color: 'from-blue-500 to-indigo-600',
    accentColor: 'text-brand-blue',
    bgGlow: 'bg-blue-500/10',
    borderColor: 'border-brand-blue/30',
    metrics: [
      { label: 'Threat Defense Rate', value: '99.99%' },
      { label: 'Incident SLA', value: '< 15m' },
      { label: 'Zero Trust Engine', value: 'Active' }
    ],
    features: [
      'Next-Gen Firewall (NGFW) & SASE Architecture',
      '24/7 Managed SOC & Incident Response',
      'Identity & Endpoint Protection (EDR/XDR)'
    ],
    link: '/services/cybersecurity'
  },
  {
    id: 'datacentre',
    title: 'Datacentre & Cloud Infrastructure',
    shortName: 'Cloud & Infra',
    badge: 'Tier IV SLA',
    icon: Server,
    color: 'from-emerald-500 to-teal-600',
    accentColor: 'text-emerald-500',
    bgGlow: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    metrics: [
      { label: 'Uptime SLA Target', value: '99.999%' },
      { label: 'Failover RPO/RTO', value: '< 1 min' },
      { label: 'Colocation Node', value: 'Delhi HQ' }
    ],
    features: [
      'Enterprise Server Colocation & Compute',
      'Multi-Cloud Orchestration (AWS/Azure/Private)',
      'Disaster Recovery as a Service (DRaaS)'
    ],
    link: '/services/datacentre'
  },
  {
    id: 'networking',
    title: 'SD-WAN & Active Fiber Networks',
    shortName: 'Networking',
    badge: 'Active Fiber 10G',
    icon: Network,
    color: 'from-indigo-500 to-purple-600',
    accentColor: 'text-indigo-400',
    bgGlow: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/30',
    metrics: [
      { label: 'Network Latency', value: '< 8ms' },
      { label: 'Fiber Link Speed', value: '10 Gbps+' },
      { label: 'Failover Response', value: 'Sub-Sec' }
    ],
    features: [
      'SD-WAN Multi-Branch Acceleration',
      'High-Density Managed Switch Fabrics',
      'Active-Active Fiber Links & Redundancy'
    ],
    link: '/services/networking'
  },
  {
    id: 'data-ai',
    title: 'Data Intelligence & AI Ops',
    shortName: 'Data & AI',
    badge: 'AI Ops Engine',
    icon: Cpu,
    color: 'from-amber-500 to-orange-600',
    accentColor: 'text-amber-500',
    bgGlow: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    metrics: [
      { label: 'Processing Telemetry', value: 'Real-Time' },
      { label: 'Accuracy Benchmark', value: '99.8%' },
      { label: 'Ops Efficiency Gain', value: '4.5x Rate' }
    ],
    features: [
      'Enterprise Analytics & Data Warehouse',
      'AI Predictive Maintenance & Intelligence',
      'Automated Workflow ETL & Data Pipelines'
    ],
    link: '/services/data-ai'
  }
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  useGsap(() => {
    // Text entrance animation
    gsap.from('.hero-enter', {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.14,
    });

    // Gentle float for the showcase console card
    gsap.to('.hero-dashboard-card', {
      y: -8,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Status pulse animation
    gsap.to('.status-pulse', {
      scale: 1.4,
      opacity: 0,
      duration: 2,
      repeat: -1,
      ease: 'power2.out',
    });
  }, containerRef);

  const activeNode = ECOSYSTEM_NODES[activeTab];
  const ActiveIcon = activeNode.icon;

  return (
    <section
      id="hero-section"
      ref={containerRef}
      className="relative overflow-hidden min-h-screen flex items-center pt-28 pb-20 lg:pt-32 lg:pb-24 text-foreground transition-colors duration-500"
    >
      {/* Delhi Cityscape Hero Background Visual with smooth gradient mask */}
      <div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-15 dark:opacity-25 mix-blend-luminosity"
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 85%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 85%)',
        }}
      >
        <img
          src="/images/delhi_skyline_hero.png"
          alt="Delhi Tech Infrastructure"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Ambient gradient mesh — masked at bottom for smooth page transition */}
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

          {/* ── RIGHT: Ultra-Premium Interactive Command Console ──── */}
          <div className="lg:col-span-6 hero-enter flex justify-center lg:justify-end">
            <div className="hero-dashboard-card relative w-full max-w-[580px] rounded-3xl bg-card/90 backdrop-blur-2xl border border-border/80 shadow-2xl p-5 sm:p-7 overflow-hidden group">

              {/* Top Glassmorphic Glow Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 relative">
                    <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground block leading-none mb-0.5">
                      Enterprise Command Center
                    </span>
                    <span className="text-[11px] font-mono text-muted-foreground">
                      Live Telemetry • Delhi HQ
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Activity className="w-3 h-3 animate-pulse text-emerald-500" />
                    Operational
                  </span>
                </div>
              </div>

              {/* Pillar Selector Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {ECOSYSTEM_NODES.map((node, idx) => {
                  const NodeIcon = node.icon;
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setActiveTab(idx)}
                      className={`flex items-center gap-2 p-2.5 rounded-xl border text-left transition-all duration-300 ${isActive
                          ? 'bg-brand-blue/10 border-brand-blue text-brand-blue shadow-sm'
                          : 'bg-muted/30 border-border/40 text-muted-foreground hover:bg-muted/70 hover:text-foreground'
                        }`}
                    >
                      <NodeIcon className={`w-4 h-4 shrink-0 ${isActive ? 'text-brand-blue' : 'opacity-70'}`} />
                      <span className="text-xs font-bold truncate font-sans">
                        {node.shortName}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Main Interactive Telemetry Display Box */}
              <div className={`relative rounded-2xl p-5 border ${activeNode.borderColor} bg-gradient-to-br from-background/90 via-card to-background transition-all duration-500 overflow-hidden shadow-inner`}>

                {/* Background Tech Circuit Mesh Graphic */}
                <div className="absolute right-0 top-0 w-48 h-48 opacity-10 pointer-events-none text-brand-blue">
                  <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                    <circle cx="150" cy="50" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                    <circle cx="150" cy="50" r="70" stroke="currentColor" strokeWidth="1" />
                    <line x1="0" y1="50" x2="200" y2="50" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="150" y1="0" x2="150" y2="200" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* Display Header */}
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-2xl ${activeNode.bgGlow} border ${activeNode.borderColor} flex items-center justify-center ${activeNode.accentColor}`}>
                      <ActiveIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground font-serif leading-tight">
                        {activeNode.title}
                      </h3>
                      <span className="text-[11px] font-mono text-muted-foreground">
                        Verified Enterprise Spec
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[10px] font-bold uppercase tracking-wider shrink-0">
                    {activeNode.badge}
                  </span>
                </div>

                {/* Live Metrics Grid */}
                <div className="grid grid-cols-3 gap-2.5 mb-5 relative z-10">
                  {activeNode.metrics.map((metric, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-muted/40 border border-border/50 text-center">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-0.5">
                        {metric.label}
                      </span>
                      <span className={`text-sm sm:text-base font-bold font-mono ${activeNode.accentColor}`}>
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Key Capability Bullet Points */}
                <div className="space-y-2 mb-5 relative z-10">
                  {activeNode.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs text-foreground/90">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${activeNode.accentColor}`} />
                      <span className="font-medium truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* View Details Link Action */}
                <div className="pt-3 border-t border-border/40 flex items-center justify-between relative z-10">
                  <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    Automated Deployment Ready
                  </span>
                  <Link
                    href={activeNode.link}
                    className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider ${activeNode.accentColor} hover:underline group/link`}
                  >
                    <span>Explore Spec</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </div>

              </div>

              {/* Bottom Real-Time Telemetry Bar */}
              <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-[11px] text-muted-foreground font-mono">
                <div className="flex items-center gap-2">
                  <Radio className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                  <span>SLA 99.999% • Zero Trust Active</span>
                </div>
                <span className="text-brand-blue font-bold">DELHI HQ</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
