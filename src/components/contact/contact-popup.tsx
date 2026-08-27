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
import { submitContactForm } from "@/core/services";
import { Loader2 } from "lucide-react";
import { TurnstileCaptcha, type TurnstileInstance } from "@/components/shared";

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [topic, setTopic] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef<TurnstileInstance>(null);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "loading" | null;
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const firstName = (formData.get("firstName") as string) || "";
    const lastName = (formData.get("lastName") as string) || "";
    const email = (formData.get("email") as string) || "";
    const message = (formData.get("message") as string) || "";
    const selectedTopic = topic || (formData.get("topic") as string) || "General";

    setStatus({
      type: "loading",
      message: "Sending your message...",
    });

    const response = await submitContactForm({
      firstName,
      lastName,
      email,
      topic: selectedTopic,
      message,
      formType: "Send us a Message / Request a Consultation",
      turnstileToken,
    });

    if (response.success) {
      setStatus({
        type: "success",
        message: response.message || "Thank you! Your message has been sent successfully.",
      });
      form.reset();
      setTopic("");
      setTurnstileToken("");
      turnstileRef.current?.reset();
      // Auto-dismiss popup after a brief delay so user can read confirmation
      setTimeout(() => {
        handleClose();
      }, 2500);
    } else {
      setStatus({
        type: "error",
        message: response.error || "Failed to send message. Please try again.",
      });
      turnstileRef.current?.reset();
      setTurnstileToken("");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[150] flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-hidden"
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
        className="relative w-full max-w-4xl bg-card border border-border/60 shadow-2xl rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col md:flex-row max-h-[92vh] sm:max-h-[86vh] backdrop-blur-xl z-10 my-auto"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-3.5 top-3.5 sm:right-6 sm:top-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-muted/60 hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300 z-30 group border border-border/40 shadow-sm"
          aria-label="Close contact form"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:rotate-90 duration-300" />
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
                  href="tel:+919818669400"
                  className="text-sm font-bold hover:text-brand-lime-vibrant transition-colors"
                >
                  +91 98186 69400
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
                  href="mailto:info@teqventiq.com"
                  className="text-sm font-bold hover:text-brand-lime-vibrant transition-colors"
                >
                  info@teqventiq.com
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
                <p className="text-xs font-bold opacity-90">
                  24/9 & 24/10, MCIE, Mathura Road, Badarpur, South Delhi - 110044
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full md:w-[60%] p-5 sm:p-8 md:p-10 flex flex-col justify-between flex-1 min-h-0 overflow-y-auto overscroll-contain">
          <div className="pr-6 sm:pr-0">
            <span className="text-brand-blue dark:text-brand-lime text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-1 sm:mb-2 block">
              Send us a Message
            </span>
            <h4 className="text-xl sm:text-2xl font-bold font-serif mb-4 sm:mb-6 text-foreground">
              Request a Consultation
            </h4>

            <form className="space-y-3.5 sm:space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">
                    First Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    name="firstName"
                    type="text"
                    required
                    className="bg-muted/50 border-border text-foreground rounded-xl h-auto py-2.5 sm:py-3 px-3.5 sm:px-4 text-sm focus-visible:ring-brand-blue"
                  />
                </div>
                <div className="space-y-1">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">
                    Last Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    name="lastName"
                    type="text"
                    required
                    className="bg-muted/50 border-border text-foreground rounded-xl h-auto py-2.5 sm:py-3 px-3.5 sm:px-4 text-sm focus-visible:ring-brand-blue"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  name="email"
                  type="email"
                  required
                  className="bg-muted/50 border-border text-foreground rounded-xl h-auto py-2.5 sm:py-3 px-3.5 sm:px-4 text-sm focus-visible:ring-brand-blue"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-1">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">
                  Select Service / Topic <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={topic}
                  onValueChange={setTopic}
                  name="topic"
                  required
                >
                  <SelectTrigger className="w-full bg-muted/50 border-border rounded-xl h-auto py-2.5 sm:py-3 px-3.5 sm:px-4 text-sm text-foreground focus:ring-0 focus:ring-offset-0 focus:border-brand-blue transition-colors">
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

              <div className="space-y-1">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">
                  Message <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  name="message"
                  rows={3}
                  required
                  className="bg-muted/50 border-border text-foreground rounded-xl sm:rounded-2xl py-2.5 sm:py-3 px-3.5 sm:px-4 text-sm focus-visible:ring-brand-blue resize-none min-h-[75px] sm:min-h-[90px]"
                  placeholder="Tell us about your project/requirements..."
                />
              </div>

              <TurnstileCaptcha
                ref={turnstileRef}
                onSuccess={setTurnstileToken}
                onExpire={() => setTurnstileToken("")}
                size="flexible"
                className="w-full justify-start my-2 min-h-[65px]"
              />

              <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pt-1 sm:pt-2">
                <p className="text-[10px] text-muted-foreground text-center sm:text-left leading-relaxed">
                  By submitting this form, you agree to our privacy policy and terms.
                </p>
                <Button
                  type="submit"
                  className="btn-lime h-auto py-3 sm:py-3.5 px-6 group flex gap-2 items-center justify-center disabled:opacity-50 w-full sm:w-auto shrink-0"
                  disabled={status.type === "loading"}
                >
                  {status.type === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </div>

              {status.type === "success" && (
                <div className="p-3.5 sm:p-4 rounded-xl bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 text-center font-bold text-xs animate-in fade-in slide-in-from-bottom-2 duration-300 mt-2">
                  {status.message}
                </div>
              )}

              {status.type === "error" && (
                <div className="p-3.5 sm:p-4 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 text-center font-bold text-xs animate-in fade-in slide-in-from-bottom-2 duration-300 mt-2">
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
