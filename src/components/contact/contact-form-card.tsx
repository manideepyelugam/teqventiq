
'use client';

import { useState, useRef } from 'react';
import { Button, Input, Label, Textarea, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui';
import { Send, Loader2 } from 'lucide-react';
import { submitContactForm } from '@/core/services';
import { TurnstileCaptcha, type TurnstileInstance } from '@/components/shared';

export default function ContactFormCard() {
  const [topic, setTopic] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileRef = useRef<TurnstileInstance>(null);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | 'loading' | null, message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const fullName = (formData.get('fullName') as string) || '';
    const nameParts = fullName.trim().split(' ');
    const firstName = nameParts[0] || 'Guest';
    const lastName = nameParts.slice(1).join(' ') || '-';
    const email = (formData.get('email') as string) || '';
    const message = (formData.get('message') as string) || '';
    const selectedTopic = topic || 'Inquiry';

    setStatus({
      type: 'loading',
      message: 'Sending your message...'
    });

    const response = await submitContactForm({
      firstName,
      lastName,
      email,
      topic: selectedTopic,
      message,
      formType: 'Contact Form Card',
      turnstileToken,
    });

    if (response.success) {
      setStatus({
        type: 'success',
        message: response.message || 'Thank you! Your message has been sent successfully.',
      });
      form.reset();
      setTopic('');
      setTurnstileToken('');
      turnstileRef.current?.reset();
    } else {
      setStatus({
        type: 'error',
        message: response.error || 'Failed to send message. Please try again.',
      });
      turnstileRef.current?.reset();
      setTurnstileToken('');
    }
  };

  return (
    <div className="reveal">
      <div className="bg-card backdrop-blur-2xl border border-border p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-[40px] shadow-2xl transition-colors duration-500">
        <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2">
              <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name <span className="text-red-500">*</span></Label>
              <Input
                name="fullName"
                type="text"
                required
                className="bg-muted/50 border-border rounded-xl sm:rounded-2xl h-auto py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base focus:border-brand-lime"
              />
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address <span className="text-red-500">*</span></Label>
              <Input
                name="email"
                type="email"
                required
                className="bg-muted/50 border-border rounded-xl sm:rounded-2xl h-auto py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base focus:border-brand-lime"
              />
            </div>
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Subject <span className="text-red-500">*</span></Label>
            <Select value={topic} onValueChange={setTopic} required>
              <SelectTrigger className="w-full bg-muted/50 border-border rounded-xl sm:rounded-2xl h-auto py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base text-foreground focus:ring-0 focus:ring-offset-0 focus:border-brand-lime transition-colors">
                <SelectValue placeholder="Select a topic" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border text-foreground rounded-2xl">
                <SelectItem value="Inquiry">General Inquiry</SelectItem>
                <SelectItem value="Cloud">Cloud Solutions</SelectItem>
                <SelectItem value="Cyber">Cybersecurity</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Message <span className="text-red-500">*</span></Label>
            <Textarea
              name="message"
              rows={5}
              required
              className="bg-muted/50 border-border rounded-xl sm:rounded-2xl py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base focus:border-brand-lime resize-none min-h-[120px] sm:min-h-[150px]"
            />
          </div>

          <TurnstileCaptcha
            ref={turnstileRef}
            onSuccess={setTurnstileToken}
            onExpire={() => setTurnstileToken('')}
          />

          <Button
            type="submit"
            className="w-full btn-lime py-4 sm:py-6 text-base sm:text-lg group flex items-center justify-center gap-3 disabled:opacity-50"
            disabled={status.type === 'loading'}
          >
            {status.type === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>

          {status.type === 'success' && (
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-green-500/10 text-green-400 border border-green-500/20 text-center font-bold text-sm animate-in fade-in slide-in-from-bottom-2">
              {status.message}
            </div>
          )}

          {status.type === 'error' && (
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-red-500/10 text-red-400 border border-red-500/20 text-center font-bold text-sm animate-in fade-in slide-in-from-bottom-2">
              {status.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

