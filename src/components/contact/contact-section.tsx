"use client";

import { Button, Input, Textarea, Label } from "@/components/ui";
import { Phone, Mail, ArrowRight, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import { cn } from "@/core/lib/utils";
import { submitContactForm } from "@/core/services";
import { TurnstileCaptcha, type TurnstileInstance } from "@/components/shared";

export default function ContactSection() {
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef<TurnstileInstance>(null);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "loading" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const firstName = (formData.get("firstName") as string) || "";
    const lastName = (formData.get("lastName") as string) || "";
    const email = (formData.get("email") as string) || "";
    const topic = (formData.get("topic") as string) || "General";
    const message = (formData.get("message") as string) || "";

    setStatus({
      type: "loading",
      message: "Sending your message...",
    });

    const response = await submitContactForm({
      firstName,
      lastName,
      email,
      topic,
      message,
      formType: "Contact Section",
      turnstileToken,
    });

    if (response.success) {
      setStatus({
        type: "success",
        message: response.message || "Thank you! Your message has been sent successfully.",
      });
      form.reset();
      setTurnstileToken("");
      turnstileRef.current?.reset();
    } else {
      setStatus({
        type: "error",
        message: response.error || "Failed to send message. Please try again.",
      });
      turnstileRef.current?.reset();
      setTurnstileToken("");
    }
  };


  return (
    <section
      className="bg-background py-14 sm:py-20 lg:py-24"
      id="contact-section"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="bg-card rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg flex flex-col lg:flex-row border border-border/60 backdrop-blur-md">
          {/* Left Panel */}
          <div className="lg:w-2/5 p-6 sm:p-10 lg:p-16 bg-brand-blue text-white relative overflow-hidden flex flex-col justify-between min-h-[360px] lg:min-h-[480px]">
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
              <span className="text-blue-200 font-bold tracking-wider uppercase text-xs mb-3 sm:mb-4 block">
                Contact Us
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif leading-tight mb-4 sm:mb-8">
                Build a Stronger, <br />
                <span className="text-brand-lime">Secure Foundation</span>
              </h3>
              <p className="text-sm sm:text-base lg:text-lg opacity-80 leading-relaxed mb-6 sm:mb-10 max-w-[320px]">
                Build a stronger, smarter, and more secure IT foundation with
                Teqventiq Services. Connect with us and embark on a transformational
                journey!
              </p>
            </div>

            <div className="relative z-10 space-y-5 sm:space-y-8">
              <div className="flex gap-4 sm:gap-5 items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center text-brand-lime border border-white/10 shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-60">
                    Call Us
                  </p>
                  <a
                    href="tel:+919818669400"
                    className="text-base sm:text-lg font-bold hover:text-brand-lime transition-colors"
                  >
                    +91 98186 69400
                  </a>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-5 items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center text-brand-lime border border-white/10 shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-60">
                    Email Us
                  </p>
                  <a
                    href="mailto:info@teqventiq.com"
                    className="text-base sm:text-lg font-bold hover:text-brand-lime transition-colors"
                  >
                    info@teqventiq.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel (Form) */}
          <div className="lg:w-3/5 p-6 sm:p-10 lg:p-20 bg-card">
            <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                <div className="space-y-2 sm:space-y-3">
                  <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    First Name
                  </Label>
                  <Input
                    name="firstName"
                    className="bg-muted/50 border-border text-foreground rounded-xl sm:rounded-2xl h-auto p-3.5 sm:p-4 focus-visible:ring-brand-blue"
                    required
                  />
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Last Name
                  </Label>
                  <Input
                    name="lastName"
                    className="bg-muted/50 border-border text-foreground rounded-xl sm:rounded-2xl h-auto p-3.5 sm:p-4 focus-visible:ring-brand-blue"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                <div className="space-y-2 sm:space-y-3">
                  <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    className="bg-muted/50 border-border text-foreground rounded-xl sm:rounded-2xl h-auto p-3.5 sm:p-4 focus-visible:ring-brand-blue"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Subject
                  </Label>
                  <div className="relative">
                    <select
                      name="topic"
                      className="w-full bg-muted/50 border border-border text-foreground p-3.5 sm:p-4 rounded-xl sm:rounded-2xl focus:outline-none focus:border-brand-blue transition-all appearance-none cursor-pointer text-sm sm:text-base"
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

              <div className="space-y-2 sm:space-y-3">
                <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  How can we help?
                </Label>
                <Textarea
                  name="message"
                  rows={4}
                  className="bg-muted/50 border-border text-foreground p-4 sm:p-6 rounded-2xl sm:rounded-3xl focus-visible:ring-brand-blue resize-none min-h-[100px]"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <TurnstileCaptcha
                ref={turnstileRef}
                onSuccess={setTurnstileToken}
                onExpire={() => setTurnstileToken("")}
                className="justify-start sm:justify-start"
              />

              <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-8 pt-2 sm:pt-4">
                <p className="text-xs text-muted-foreground text-center sm:text-left max-w-[300px]">
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
                </p>
                <Button
                  type="submit"
                  className="btn-lime h-auto py-3.5 px-6 group disabled:opacity-50 flex items-center justify-center gap-2 w-full sm:w-auto"
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
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                    </>
                  )}
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
