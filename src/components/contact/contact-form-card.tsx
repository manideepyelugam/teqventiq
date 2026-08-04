'use client';

import { useState } from 'react';
import { Button, Input, Label, Textarea, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui';
import { Send } from 'lucide-react';
import { cn } from '@/core/lib/utils';

export default function ContactFormCard() {
  const [status, setStatus] = useState<{ type: 'success' | 'loading' | null, message: string }>({ type: null, message: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    setStatus({ 
      type: 'loading', 
      message: 'Sending your message...' 
    });

    // Simulate success without API call
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      form.reset();
    }, 1500);
  };

  return (
    <div className="reveal">
      <div className="bg-card backdrop-blur-2xl border border-border p-8 lg:p-12 rounded-[40px] shadow-2xl transition-colors duration-500">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name <span className="text-red-500">*</span></Label>
              <Input 
                type="text" 
                required
                className="bg-muted/50 border-border rounded-2xl h-auto py-4 px-6 focus:border-brand-lime"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address <span className="text-red-500">*</span></Label>
              <Input 
                type="email" 
                required
                className="bg-muted/50 border-border rounded-2xl h-auto py-4 px-6 focus:border-brand-lime"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Subject <span className="text-red-500">*</span></Label>
            <Select required>
              <SelectTrigger className="w-full bg-muted/50 border-border rounded-2xl h-auto py-4 px-6 text-foreground focus:ring-0 focus:ring-offset-0 focus:border-brand-lime transition-colors">
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

          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Message <span className="text-red-500">*</span></Label>
            <Textarea 
              rows={5}
              required
              className="bg-muted/50 border-border rounded-2xl py-4 px-6 focus:border-brand-lime resize-none min-h-[150px]"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full btn-lime py-7 text-lg group flex items-center justify-center gap-3 disabled:opacity-50"
            disabled={status.type === 'loading'}
          >
            <span>{status.type === 'loading' ? 'Sending...' : 'Send Message'}</span>
            <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>

          {status.type === 'success' && (
            <div className="p-4 rounded-2xl bg-green-500/10 text-green-400 border border-green-500/20 text-center font-bold text-sm animate-in fade-in slide-in-from-bottom-2">
              {status.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
