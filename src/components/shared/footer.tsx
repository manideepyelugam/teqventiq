"use client";

import React from "react";
import Link from "next/link";
import { COMPANY_INFO, SERVICES, INDUSTRIES } from "@/core/constants";

const Logo = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-[180px] h-[40px]" />;
  }

  return (
    <>
      <img
        src="/logo.png"
        alt="Teqventiq Logo"
        width="180"
        height="auto"
        className="logo-light max-w-full h-auto"
      />
      <img
        src="/logo-dark.png"
        alt="Teqventiq Logo"
        width="180"
        height="auto"
        className="logo-dark max-w-full h-auto"
      />
    </>
  );
};

export default function Footer() {
  return (
    <footer className="pt-8 pb-16 lg:pb-24 transition-colors duration-500 relative overflow-visible">
      <div className="dot-grid-overlay" />
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-[1248px] px-5 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
          
          {/* Brand & Address Column */}
          <div className="max-w-[420px]">
            <Link
              href="/"
              className="inline-block transition-transform hover:scale-105 group"
            >
              <Logo />
            </Link>
            <p className="text-base text-muted-foreground leading-relaxed mt-6">
              Where Technology Meets Business Intelligence. Teqventiq designs and delivers secure, scalable, and modern technology ecosystems.
            </p>

            <div className="mt-8 space-y-3 text-sm text-muted-foreground border-l-2 border-brand-lime/40 pl-4">
              <p className="font-bold text-foreground">{COMPANY_INFO.name}</p>
              <p>{COMPANY_INFO.address.line1}, {COMPANY_INFO.address.line2}</p>
              <p>{COMPANY_INFO.address.area}</p>
              <p>{COMPANY_INFO.address.cityStateZip}</p>
            </div>

            <div className="mt-8 flex flex-col gap-2 text-sm">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-brand-lime font-bold hover:underline"
              >
                {COMPANY_INFO.email}
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="text-foreground hover:text-brand-lime transition-colors font-medium"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-24">
            <div>
              <h4 className="text-foreground font-bold mb-8 text-lg tracking-tight">
                Services
              </h4>
              <ul className="flex flex-col gap-4">
                {SERVICES.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-muted-foreground hover:text-brand-lime transition-colors text-sm"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-foreground font-bold mb-8 text-lg tracking-tight">
                Industries
              </h4>
              <ul className="flex flex-col gap-4">
                {INDUSTRIES.map((industry) => (
                  <li key={industry.slug}>
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="text-muted-foreground hover:text-brand-lime transition-colors text-sm"
                    >
                      {industry.title.split(" (")[0]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-foreground font-bold mb-8 text-lg tracking-tight">
                About Us
              </h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    href="/about#mission"
                    className="text-muted-foreground hover:text-brand-lime transition-colors text-sm"
                  >
                    Mission
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about#vision"
                    className="text-muted-foreground hover:text-brand-lime transition-colors text-sm"
                  >
                    Vision
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about#five-pillars"
                    className="text-muted-foreground hover:text-brand-lime transition-colors text-sm"
                  >
                    Five Pillars
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about#strengths"
                    className="text-muted-foreground hover:text-brand-lime transition-colors text-sm"
                  >
                    Strengths
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground font-medium">
            © {new Date().getFullYear()} TEQVENTIQ SERVICES PRIVATE LIMITED. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <span className="w-2 h-2 bg-brand-lime rounded-full animate-pulse" />
            <span>DELHI HQ · INDIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
