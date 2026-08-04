"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/core/lib/utils";
import { SERVICES, INDUSTRIES } from "@/core/constants";

const Logo = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-[180px] h-[40px]" />; // Placeholder
  }

  return (
    <>
      <img
        src="/logo.png"
        alt="Savvtek Services Logo"
        width="180"
        height="auto"
        className="logo-light max-w-full h-auto"
      />
      <img
        src="/logo-dark.png"
        alt="Savvtek Services Logo"
        width="180"
        height="auto"
        className="logo-dark max-w-full h-auto"
      />
    </>
  );
};

export default function Footer() {
  return (
    <footer className="pt-8 pb-16 lg:pb-24 transition-colors duration-500 relative overflow-visible" >
      {/* Dot field texture */}
      <div className="dot-grid-overlay" />
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-[1248px] px-5 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
          <div className="max-w-[400px]">
            <Link
              href="/"
              className="inline-block transition-transform hover:scale-105 group"
            >
              <Logo />
            </Link>
            <p className="text-base text-muted-foreground leading-relaxed mt-8">
              Where Technology Meets Business Intelligence. Empowering organizations
              with secure, scalable, and modern technology solutions.
            </p>
            <div className="mt-10 flex flex-col gap-4">
              <a
                href="mailto:info@savvtek.com"
                className="text-brand-lime font-bold hover:underline"
              >
                info@savvtek.com
              </a>
              <a
                href="tel:+971506582200"
                className="text-foreground hover:text-brand-lime transition-colors"
              >
                +971 50 658 2200
              </a>
            </div>
          </div>

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
                      className="text-muted-foreground hover:text-brand-lime transition-colors"
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
                      className="text-muted-foreground hover:text-brand-lime transition-colors"
                    >
                      {industry.title.split(" — ")[0]}
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
                    className="text-muted-foreground hover:text-brand-lime transition-colors"
                  >
                    Mission
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about#vision"
                    className="text-muted-foreground hover:text-brand-lime transition-colors"
                  >
                    Vision
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about#strengths"
                    className="text-muted-foreground hover:text-brand-lime transition-colors"
                  >
                    Strengths
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about#core-values"
                    className="text-muted-foreground hover:text-brand-lime transition-colors"
                  >
                    Core Values
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-muted-foreground font-medium">
            © {new Date().getFullYear()} Savvtek Services Pvt. Ltd. All rights
            reserved.
          </p>
         {/*  <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-brand-lime rounded-full animate-pulse"></span>
            <p className="text-sm text-muted-foreground font-bold tracking-widest uppercase">
              Secure by Design
            </p>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
