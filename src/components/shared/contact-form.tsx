"use client";

import { useState, FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const EMPTY_FORM: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(EMPTY_FORM);

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const res = await axios.post("/api/contact", data);
      return res.data;
    },
    onSuccess: () => {
      setFormData(EMPTY_FORM);
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const submitted = mutation.isSuccess;
  const sending = mutation.isPending;
  const errorMessage = mutation.isError
    ? (axios.isAxiosError(mutation.error) &&
        (mutation.error.response?.data as { error?: string } | undefined)?.error) ||
      "Failed to send message. Please try again."
    : null;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal">
            Full Name *
          </label>
          <Input
            id="name"
            required
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal">
            Email *
          </label>
          <Input
            id="email"
            type="email"
            required
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-charcoal">
            Phone
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="+92 300 000 0000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-charcoal">
            Subject *
          </label>
          <Input
            id="subject"
            required
            placeholder="How can we help?"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal">
          Message *
        </label>
        <Textarea
          id="message"
          required
          rows={5}
          placeholder="Tell us about your pest concern..."
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={sending}
        className="w-full bg-forest hover:bg-forest-dark text-white disabled:opacity-70"
      >
        <Send className="mr-2 h-4 w-4" />
        {sending ? "Sending..." : submitted ? "Message Sent!" : "Send Message"}
      </Button>
      {submitted && (
        <p className="text-sm font-medium text-forest" role="status">
          Thanks for reaching out! We&apos;ll get back to you shortly.
        </p>
      )}
      {errorMessage && (
        <p className="text-sm font-medium text-red-600" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
