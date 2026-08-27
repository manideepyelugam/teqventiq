'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGsap } from '@/core/hooks/use-gsap';
import Image from 'next/image';
import Link from 'next/link';

// ─── Industry Node Data ──────────────────────────────────────────────────────

interface IndustryNode {
  id: string;
  label: string;
  slug?: string;
  color: string;
  ringColor: string;
  icon: React.ReactNode;
}

const HealthcareIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);
const BankingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);
const EducationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);
const OilGasIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);
const EnterpriseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M3 21h18M9 21V7l7-4v18M3 7l6-4" /><path d="M13 21V11h4v10" />
  </svg>
);
const RetailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);
const GovtIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <line x1="3" y1="22" x2="21" y2="22" /><line x1="6" y1="18" x2="6" y2="11" /><line x1="10" y1="18" x2="10" y2="11" /><line x1="14" y1="18" x2="14" y2="11" /><line x1="18" y1="18" x2="18" y2="11" /><polygon points="12 2 20 7 4 7" />
  </svg>
);
const RealEstateIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const ManufacturingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M22 12h-2M4 12H2M19.07 19.07l-1.41-1.41M4.93 19.07l1.41-1.41M12 22v-2M12 4V2" />
  </svg>
);

const INDUSTRIES: IndustryNode[] = [
  { id: 'education',     label: 'Education',          slug: 'education',         color: '#34d399', ringColor: '#34d39966', icon: <EducationIcon /> },
  { id: 'healthcare',    label: 'Healthcare',        slug: 'healthcare',        color: '#22d3ee', ringColor: '#22d3ee66', icon: <HealthcareIcon /> },
  { id: 'banking',       label: 'Banking & Finance',  slug: 'bfsi',              color: '#818cf8', ringColor: '#818cf866', icon: <BankingIcon /> },
  { id: 'oil-gas',       label: 'Oil & Gas',          slug: 'oil-gas',           color: '#fb923c', ringColor: '#fb923c66', icon: <OilGasIcon /> },
  { id: 'enterprise',    label: 'Enterprises',        color: '#a78bfa', ringColor: '#a78bfa66', icon: <EnterpriseIcon /> },
  { id: 'retail',        label: 'Retail & E-Comm',    color: '#f472b6', ringColor: '#f472b666', icon: <RetailIcon /> },
  { id: 'government',    label: 'Government',         color: '#facc15', ringColor: '#facc1566', icon: <GovtIcon /> },
  { id: 'real-estate',   label: 'Real Estate',        color: '#4ade80', ringColor: '#4ade8066', icon: <RealEstateIcon /> },
  { id: 'manufacturing', label: 'Manufacturing',      color: '#f87171', ringColor: '#f8717166', icon: <ManufacturingIcon /> },
];

// ─── Ring Configuration ───────────────────────────────────────────────────────

interface Ring {
  radius: number;
  duration: number;
  clockwise: boolean;
  nodeIndices: number[];
}

const RINGS: Ring[] = [
  { radius: 120, duration: 20, clockwise: true,  nodeIndices: [0, 1, 2] },
  { radius: 185, duration: 34, clockwise: false, nodeIndices: [3, 4, 5] },
  { radius: 250, duration: 50, clockwise: true,  nodeIndices: [6, 7, 8] },
];

const CENTER = 290; // SVG center coordinate
const SVG_SIZE = 580;

// ─── Component ────────────────────────────────────────────────────────────────

export default function SolarSystemSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    // Entrance animations
    gsap.from('.solar-label', {
      opacity: 0,
      y: 30,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
    });

    // Center logo glow pulse
    gsap.to('.solar-center-glow', {
      scale: 1.3,
      opacity: 0.2,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Center logo float
    gsap.to('.solar-center-wrap', {
      y: -10,
      duration: 3.8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Ring rotations
    RINGS.forEach((ring, i) => {
      gsap.to(`.solar-orbit-${i}`, {
        rotation: ring.clockwise ? 360 : -360,
        duration: ring.duration,
        repeat: -1,
        ease: 'none',
        transformOrigin: `${CENTER}px ${CENTER}px`,
      });
      // Counter-rotate nodes so icons stay upright
      gsap.to(`.solar-counter-${i}`, {
        rotation: ring.clockwise ? -360 : 360,
        duration: ring.duration,
        repeat: -1,
        ease: 'none',
      });
    });
  }, containerRef);

  return (
    <section
      id="industries-orbit"
      ref={containerRef}
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ background: 'linear-gradient(135deg, #070714 0%, #0a0a24 50%, #0c0820 100%)' }}
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #2567e8 0%, transparent 70%)' }} />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #818cf8 0%, transparent 70%)' }} />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="mx-auto max-w-[1248px] px-5 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-4 items-center">

          {/* ── Left: Text Content ─────────────────────────── */}
          <div className="order-2 lg:order-1">
            <span className="solar-label block text-xs font-bold uppercase tracking-wider mb-3 text-brand-blue">
              Industries We Serve
            </span>
            <h2 className="solar-label text-4xl lg:text-5xl xl:text-6xl font-bold font-serif leading-[1.08] tracking-tight mb-6 text-white">
              Built for Every{' '}
              <span className="bg-gradient-to-r from-brand-blue via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Industry
              </span>
            </h2>
            <p className="solar-label text-base lg:text-lg leading-relaxed mb-8 max-w-[480px] text-slate-300">
              From IT/ITES to BFSI, manufacturing to government — Teqventiq Services delivers
              sector-specific technology, cybersecurity, and intelligence solutions engineered for
              the demands of each vertical.
            </p>

            {/* Industry chips */}
            <div className="solar-label flex flex-wrap gap-2.5">
              {INDUSTRIES.map((ind) => (
                <Link
                  key={ind.id}
                  href={ind.slug ? `/industries/${ind.slug}` : "/industries"}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide transition-all duration-300 hover:scale-105"
                  style={{
                    border: `1px solid ${ind.color}40`,
                    background: `${ind.color}14`,
                    color: ind.color,
                  }}
                >
                  <span style={{ width: 14, height: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {ind.icon}
                  </span>
                  {ind.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="solar-label mt-10">
              <a
                href="/industries"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:gap-4"
                style={{ color: '#2567e8' }}
              >
                Explore All Industries
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Right: Solar System ────────────────────────── */}
          <div className="order-1 lg:order-2 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px] aspect-square select-none">

              {/* SVG Orbital Orrery */}
              <svg
                viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
                className="w-full h-full"
                aria-hidden="true"
              >
                <defs>
                  {/* Center blue glow filter */}
                  <filter id="glow-blue" x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  {/* Node glow */}
                  <filter id="glow-node" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  {/* Radial center gradient */}
                  <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#2567e8" stopOpacity="0.07" />
                    <stop offset="100%" stopColor="#2567e8" stopOpacity="0" />
                  </radialGradient>
                  {/* Gradient per industry node (created programmatically per color) */}
                  {INDUSTRIES.map((ind) => (
                    <radialGradient key={`grad-${ind.id}`} id={`node-grad-${ind.id}`} cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor={ind.color} stopOpacity="0.25" />
                      <stop offset="100%" stopColor={ind.color} stopOpacity="0.06" />
                    </radialGradient>
                  ))}
                </defs>

                {/* Soft radial background fill */}
                <circle cx={CENTER} cy={CENTER} r={270} fill="url(#bgGrad)" />

                {/* ── Dashed orbit paths ── */}
                {RINGS.map((ring, i) => (
                  <circle
                    key={`orbit-path-${i}`}
                    cx={CENTER}
                    cy={CENTER}
                    r={ring.radius}
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="0.6"
                    strokeOpacity="0.08"
                    strokeDasharray="4 10"
                  />
                ))}

                {/* ── Rotating ring groups ── */}
                {RINGS.map((ring, ringIdx) => {
                  const count = ring.nodeIndices.length;
                  return (
                    <g
                      key={`orbit-group-${ringIdx}`}
                      className={`solar-orbit-${ringIdx}`}
                      style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
                    >
                      {ring.nodeIndices.map((industryIdx, posIdx) => {
                        const ind = INDUSTRIES[industryIdx];
                        const angleDeg = (posIdx / count) * 360;
                        const angleRad = (angleDeg * Math.PI) / 180;
                        const cx = CENTER + ring.radius * Math.cos(angleRad);
                        const cy = CENTER + ring.radius * Math.sin(angleRad);
                        const r = 24;

                        return (
                          <Link key={`node-${ind.id}`} href={ind.slug ? `/industries/${ind.slug}` : "/industries"}>
                            <g
                              className={`solar-counter-${ringIdx}`}
                              style={{ transformOrigin: `${cx}px ${cy}px`, cursor: 'pointer' }}
                            >
                              {/* Outer glow ring */}
                              <circle cx={cx} cy={cy} r={r + 8} fill={`url(#node-grad-${ind.id})`} />
                              {/* Main node circle */}
                              <circle
                                cx={cx}
                                cy={cy}
                                r={r}
                                fill="#0c0c20"
                                stroke={ind.color}
                                strokeWidth="1.5"
                                filter="url(#glow-node)"
                              />
                              {/* Icon via foreignObject */}
                              <foreignObject
                                x={cx - 10}
                                y={cy - 10}
                                width="20"
                                height="20"
                                style={{ color: ind.color, overflow: 'visible' }}
                              >
                                <div
                                  style={{
                                    width: 20,
                                    height: 20,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  }}
                                >
                                  {ind.icon}
                                </div>
                              </foreignObject>
                              {/* Label text below node */}
                              <text
                                x={cx}
                                y={cy + r + 14}
                                textAnchor="middle"
                                fill={ind.color}
                                fontSize="8"
                                fontWeight="700"
                                letterSpacing="0.08em"
                                opacity="0.85"
                                style={{ pointerEvents: 'none' }}
                              >
                                {ind.label.toUpperCase()}
                              </text>
                            </g>
                          </Link>
                        );
                      })}
                    </g>
                  );
                })}

                {/* ── Center backdrop glow ── */}
                <circle
                  cx={CENTER}
                  cy={CENTER}
                  r={58}
                  fill="#2567e8"
                  fillOpacity="0.12"
                  filter="url(#glow-blue)"
                  className="solar-center-glow"
                />
                <circle
                  cx={CENTER}
                  cy={CENTER}
                  r={46}
                  fill="#050514"
                  stroke="#2567e8"
                  strokeWidth="1.5"
                  strokeOpacity="0.6"
                />
              </svg>

              {/* ── Center Logo (HTML overlay for crisp rendering) ── */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className="solar-center-wrap flex items-center justify-center w-[5.5rem] h-[5.5rem] rounded-full"
                  style={{
                    background: 'rgba(5,5,20,0.95)',
                    boxShadow: '0 0 40px rgba(37,103,232,0.4), inset 0 0 20px rgba(37,103,232,0.08)',
                  }}
                >
                  <Image
                    src="/logo.webp"
                    alt="Teqventiq Services"
                    width={52}
                    height={52}
                    className="w-12 h-12 object-contain brightness-0 invert"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom gradient blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.02))' }} />
    </section>
  );
}
