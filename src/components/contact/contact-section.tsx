"use client";

import { Button, Input, Textarea, Label } from "@/components/ui";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/core/lib/utils";

export default function ContactSection() {
  const [status, setStatus] = useState<{
    type: "success" | "error" | "loading" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    setStatus({
      type: "loading",
      message: "Sending your message...",
    });

    // Simulate a brief delay then show success
    setTimeout(() => {
      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      form.reset();
    }, 1500);
  };

  return (
    <section
      className="bg-background py-32 transition-colors duration-500"
      id="contact-section"
    >
      <div className="mx-auto max-w-[1248px] px-5">
        <div className="bg-card rounded-[2rem] overflow-hidden shadow-3xl flex flex-col lg:flex-row border border-border transition-colors duration-500">
          {/* Left Panel */}
          <div className="lg:w-2/5 p-10 lg:p-20 bg-brand-blue text-white relative overflow-hidden flex flex-col justify-between min-h-[500px]">
            <div className="absolute top-0 right-0 pointer-events-none opacity-20">
              <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
                <circle
                  cx="400"
                  cy="0"
                  r="300"
                  stroke="white"
                  strokeWidth="1"
                />
                <circle
                  cx="400"
                  cy="0"
                  r="250"
                  stroke="white"
                  strokeWidth="1"
                  strokeDasharray="10 10"
                />
                <circle
                  cx="400"
                  cy="0"
                  r="200"
                  stroke="white"
                  strokeWidth="1"
                />
              </svg>
            </div>

            <div className="relative z-10">
              <span className="text-brand-lime font-bold tracking-widest uppercase text-xs mb-6 block">
                Contact Us
              </span>
              <h3 className="text-4xl lg:text-5xl font-bold font-serif leading-tight mb-8">
                Build a Stronger, <br />
                <span className="text-brand-lime">Secure Foundation</span>
              </h3>
              <p className="text-lg opacity-80 leading-relaxed mb-10 max-w-[320px]">
                Build a stronger, smarter, and more secure IT foundation with
                Savvtek Services. Connect with us and embark on a transformational
                journey!
              </p>
            </div>

            <div className="relative z-10 space-y-8">
              <div className="flex gap-5 items-center">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-lime border border-white/10">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-60">
                    Call Us
                  </p>
                  <a
                    href="tel:+971506582200"
                    className="text-lg font-bold hover:text-brand-lime transition-colors"
                  >
                    +971 50 658 2200
                  </a>
                </div>
              </div>

              <div className="flex gap-5 items-center">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-lime border border-white/10">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-60">
                    Email Us
                  </p>
                  <a
                    href="mailto:info@savvtek.com"
                    className="text-lg font-bold hover:text-brand-lime transition-colors"
                  >
                    info@savvtek.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel (Form) */}
          <div className="lg:w-3/5 p-10 lg:p-20 bg-card">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    First Name
                  </Label>
                  <Input
                    name="vorname"
                    className="bg-muted/50 border-border text-foreground rounded-2xl h-auto p-4 focus-visible:ring-brand-blue"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Last Name
                  </Label>
                  <Input
                    name="nachname"
                    className="bg-muted/50 border-border text-foreground rounded-2xl h-auto p-4 focus-visible:ring-brand-blue"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    name="mail"
                    className="bg-muted/50 border-border text-foreground rounded-2xl h-auto p-4 focus-visible:ring-brand-blue"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Subject
                  </Label>
                  <div className="relative">
                    <select
                      name="wie"
                      className="w-full bg-muted/50 border border-border text-foreground p-4 rounded-2xl focus:outline-none focus:border-brand-blue transition-all appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="Demo">Request a Demo</option>
                      <option value="Information">General Inquiry</option>
                      <option value="Support">Support</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                      <ArrowRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  How can we help?
                </Label>
                <Textarea
                  name="nachricht"
                  rows={4}
                  className="bg-muted/50 border-border text-foreground p-6 rounded-3xl focus-visible:ring-brand-blue resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
                <p className="text-xs text-muted-foreground max-w-[300px]">
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
                </p>
                <Button
                  type="submit"
                  className="btn-lime h-auto group disabled:opacity-50"
                  disabled={status.type === "loading"}
                >
                  {status.type === "loading" ? "Sending..." : "Send Message"}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                </Button>
              </div>

              {status.type && status.type !== "loading" && (
                <div
                  className={cn(
                    "p-6 rounded-2xl text-center font-bold text-sm animate-in fade-in slide-in-from-bottom-2 duration-300",
                    status.type === "success"
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : "bg-red-500/10 text-red-400 border border-red-500/20",
                  )}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
