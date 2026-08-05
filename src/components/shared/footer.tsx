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
        src="/logo.png"
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
    <footer className="pt-12 pb-16 lg:pb-24 border-t border-border/40 bg-card/30 backdrop-blur-md relative overflow-hidden">
      <div className="dot-grid-overlay opacity-50" />
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">

          {/* Brand & Address Column */}
          <div className="max-w-[400px]">
            <Link
              href="/"
              className="inline-block transition-transform hover:scale-[1.02] group"
            >
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mt-5">
              Where Technology Meets Business Intelligence. Teqventiq designs and delivers secure, scalable, and modern technology ecosystems.
            </p>

            <div className="mt-6 space-y-2 text-xs sm:text-sm text-muted-foreground border-l-2 border-brand-blue/50 pl-4">
              <p className="font-bold text-foreground">{COMPANY_INFO.name}</p>
              <p>{COMPANY_INFO.address.line1}, {COMPANY_INFO.address.line2}</p>
              <p>{COMPANY_INFO.address.area}</p>
              <p>{COMPANY_INFO.address.cityStateZip}</p>
            </div>

            <div className="mt-6 flex flex-col gap-1.5 text-sm">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-brand-blue font-semibold hover:underline"
              >
                {COMPANY_INFO.email}
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="text-foreground/80 hover:text-brand-blue transition-colors font-medium"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-20">
            <div>
              <h4 className="text-foreground font-bold mb-5 text-base tracking-tight">
                Services
              </h4>
              <ul className="flex flex-col gap-3">
                {SERVICES.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-muted-foreground hover:text-brand-blue transition-colors text-sm"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-foreground font-bold mb-5 text-base tracking-tight">
                Industries
              </h4>
              <ul className="flex flex-col gap-3">
                {INDUSTRIES.map((industry) => (
                  <li key={industry.slug}>
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="text-muted-foreground hover:text-brand-blue transition-colors text-sm"
                    >
                      {industry.title.split(" (")[0]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-foreground font-bold mb-5 text-base tracking-tight">
                About Us
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="/about#mission"
                    className="text-muted-foreground hover:text-brand-blue transition-colors text-sm"
                  >
                    Mission
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about#vision"
                    className="text-muted-foreground hover:text-brand-blue transition-colors text-sm"
                  >
                    Vision
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about#five-pillars"
                    className="text-muted-foreground hover:text-brand-blue transition-colors text-sm"
                  >
                    Five Pillars
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about#strengths"
                    className="text-muted-foreground hover:text-brand-blue transition-colors text-sm"
                  >
                    Strengths
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground font-medium">
            © {new Date().getFullYear()} TEQVENTIQ SERVICES PRIVATE LIMITED. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span>DELHI HQ · INDIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
