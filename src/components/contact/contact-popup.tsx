"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Input,
  Label,
  Textarea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  X,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { useGsap } from "@/core/hooks/use-gsap";
import { gsap } from "gsap";

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "loading" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // 1. Intercept contact link clicks globally & handle direct parameter trigger
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      // Intercept normal left-clicks only
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
        return;

      let target = e.target as HTMLElement | null;
      while (target && target.tagName !== "A") {
        target = target.parentElement;
      }

      if (target) {
        const href = target.getAttribute("href");
        if (href === "/contact" || href === "#contact-section") {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(true);
        }
      }
    };

    window.addEventListener("click", handleGlobalClick, { capture: true });

    // Handle query parameter trigger (?contact=true) on initial load
    const params = new URLSearchParams(window.location.search);
    if (params.get("contact") === "true") {
      setIsOpen(true);
    }

    return () => {
      window.removeEventListener("click", handleGlobalClick, { capture: true });
    };
  }, []);

  // 2. Lock scroll & handle Escape key when open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // 3. GSAP Entrance Animation
  useGsap(() => {
    if (!isOpen) return;

    // Reset styles before animating
    gsap.set(overlayRef.current, { opacity: 0 });
    gsap.set(modalRef.current, { scale: 0.9, y: 30, opacity: 0 });

    const tl = gsap.timeline();
    tl.to(overlayRef.current, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    }).to(
      modalRef.current,
      {
        scale: 1,
        y: 0,
        opacity: 1,
        duration: 0.45,
        ease: "back.out(1.1)",
      },
      "-=0.15",
    );
  }, containerRef);

  // 4. GSAP Exit Animation
  const handleClose = () => {
    if (!overlayRef.current || !modalRef.current) {
      setIsOpen(false);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setIsOpen(false);
        setStatus({ type: null, message: "" });
      },
    });

    tl.to(modalRef.current, {
      scale: 0.95,
      y: 20,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
    }).to(
      overlayRef.current,
      {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      },
      "-=0.15",
    );
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      handleClose();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    setStatus({
      type: "loading",
      message: "Sending your message...",
    });

    // Simulate form submission delay
    setTimeout(() => {
      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      form.reset();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-hidden"
    >
      {/* Background Overlay — soft dreamy pastel gradient */}
      <div
        ref={overlayRef}
        onClick={handleOverlayClick}
        className="absolute inset-0 backdrop-blur-2xl transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 15% 20%, rgba(255,200,170,0.55) 0%, transparent 60%), " +
            "radial-gradient(ellipse 70% 60% at 85% 75%, rgba(180,210,255,0.5) 0%, transparent 60%), " +
            "radial-gradient(ellipse 60% 50% at 50% 10%, rgba(230,240,255,0.45) 0%, transparent 55%), " +
            "radial-gradient(ellipse 55% 45% at 70% 30%, rgba(255,230,220,0.35) 0%, transparent 50%), " +
            "rgba(255, 255, 255, 0.75)",
        }}
      />

      {/* Main Modal Card Container */}
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl bg-card border border-border shadow-3xl rounded-[2rem] overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] transition-colors duration-500 z-10"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-6 top-6 w-10 h-10 rounded-full bg-muted/40 hover:bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300 z-20 group"
          aria-label="Close contact form"
        >
          <X className="w-5 h-5 transition-transform group-hover:rotate-90 duration-300" />
        </button>

        {/* Left Column: Brand Section (Gradients & Details) */}
        <div className="hidden md:flex md:w-[40%] p-8 md:p-10 text-white flex-col justify-between relative overflow-hidden shrink-0" style={{ background: "linear-gradient(145deg, #1a3a6e 0%, #1e50a2 40%, #0e2a52 100%)" }}>
          {/* Decorative SVG Halo */}
          <div className="absolute top-0 right-0 pointer-events-none opacity-20">
            <svg width="250" height="250" viewBox="0 0 300 300" fill="none">
              <circle cx="300" cy="0" r="220" stroke="white" strokeWidth="1" />
              <circle
                cx="300"
                cy="0"
                r="170"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="8 8"
              />
              <circle cx="300" cy="0" r="120" stroke="white" strokeWidth="1" />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-lime-vibrant rounded-full animate-pulse" />
              <span className="text-[9px] font-bold uppercase tracking-wider text-brand-lime-vibrant">
                Connect Instantly
              </span>
            </div>
            <h3 className="text-3xl font-bold font-serif leading-tight text-white mb-4">
              Let's Build the <br />
              <span className="text-brand-lime-vibrant font-semibold">
                Future Together
              </span>
            </h3>
            <p className="text-sm opacity-80 leading-relaxed max-w-[280px]">
              Secure, scalable, and modern IT solutions customized for your
              organization's needs.
            </p>
          </div>

          {/* Quick Contact Info */}
          <div className="relative z-10 space-y-6 mt-8 md:mt-0">
            <div className="flex gap-4 items-center group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-lime-vibrant border border-white/10 group-hover:scale-105 transition-transform duration-300">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider opacity-60">
                  Call Us
                </p>
                <a
                  href="tel:+971506582200"
                  className="text-sm font-bold hover:text-brand-lime-vibrant transition-colors"
                >
                  +971 50 658 2200
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-center group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-lime-vibrant border border-white/10 group-hover:scale-105 transition-transform duration-300">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider opacity-60">
                  Email Us
                </p>
                <a
                  href="mailto:info@savvtek.com"
                  className="text-sm font-bold hover:text-brand-lime-vibrant transition-colors"
                >
                  info@savvtek.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-center group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-lime-vibrant border border-white/10 group-hover:scale-105 transition-transform duration-300">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider opacity-60">
                  Location
                </p>
                <p className="text-sm font-bold opacity-90">
                 2312 B2B Tower, Business Bay, Dubai
                </p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
         {/*  <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center gap-3 opacity-75">
            <ShieldCheck className="w-5 h-5 text-brand-lime-vibrant" />
            <span className="text-[11px] font-bold uppercase tracking-widest">
              Secure by Design
            </span>
          </div> */}
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full md:w-[60%] p-6 sm:p-8 md:p-10 flex flex-col justify-between flex-1 min-h-0 overflow-y-auto">
          <div className="pr-8 md:pr-0">
            <span className="text-brand-blue dark:text-brand-lime text-xs font-bold uppercase tracking-widest mb-2 block">
              Send us a Message
            </span>
            <h4 className="text-2xl font-bold font-serif mb-6 text-foreground">
              Request a Consultation
            </h4>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">
                    First Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    name="firstName"
                    type="text"
                    required
                    className="bg-muted/50 border-border text-foreground rounded-xl h-auto py-3 px-4 focus-visible:ring-brand-blue"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">
                    Last Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    name="lastName"
                    type="text"
                    required
                    className="bg-muted/50 border-border text-foreground rounded-xl h-auto py-3 px-4 focus-visible:ring-brand-blue"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  name="email"
                  type="email"
                  required
                  className="bg-muted/50 border-border text-foreground rounded-xl h-auto py-3 px-4 focus-visible:ring-brand-blue"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">
                  Select Service / Topic <span className="text-red-500">*</span>
                </Label>
                <Select required name="topic">
                  <SelectTrigger className="w-full bg-muted/50 border-border rounded-xl h-auto py-3 px-4 text-foreground focus:ring-0 focus:ring-offset-0 focus:border-brand-blue transition-colors">
                    <SelectValue placeholder="What are you interested in?" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border text-foreground rounded-xl z-[200]">
                    <SelectItem value="Cybersecurity">
                      Cybersecurity Solutions
                    </SelectItem>
                    <SelectItem value="Cloud">Cloud Infrastructure</SelectItem>
                    <SelectItem value="ManagedIT">
                      Managed IT Services
                    </SelectItem>
                    <SelectItem value="CustomDev">
                      Custom Software / AI
                    </SelectItem>
                    <SelectItem value="General">General Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">
                  Message <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  name="message"
                  rows={3}
                  required
                  className="bg-muted/50 border-border text-foreground rounded-2xl py-3 px-4 focus-visible:ring-brand-blue resize-none min-h-[90px]"
                  placeholder="Tell us about your project/requirements..."
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <p className="text-[10px] text-muted-foreground max-w-[260px] text-center sm:text-left leading-relaxed">
                  By submitting this form, you agree to our privacy policy and
                  terms.
                </p>
                <Button
                  type="submit"
                 className="btn-lime h-auto group flex gap-2 items-center"
                  disabled={status.type === "loading"}
                >
                  <span>
                    {status.type === "loading" ? "Sending..." : "Send Message"}
                  </span>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              {status.type === "success" && (
                <div className="p-4 rounded-xl bg-green-500/10 text-green-500 border border-green-500/20 text-center font-bold text-xs animate-in fade-in slide-in-from-bottom-2 duration-300 mt-2">
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
