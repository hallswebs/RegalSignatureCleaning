"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission — replace with your API endpoint or service
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-navy mb-2">Message Sent!</h3>
        <p className="text-navy/60">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-navy mb-2">
            First Name *
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-navy"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-navy mb-2">
            Last Name *
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-navy"
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-navy"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-navy"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-navy mb-2">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-navy bg-white"
        >
          <option value="">Select a service...</option>
          <option value="residential-standard">Residential — Standard Cleaning</option>
          <option value="residential-premium">Residential — Premium Cleaning</option>
          <option value="residential-deep">Residential — Deep Cleaning</option>
          <option value="commercial-office">Commercial — Office Cleaning</option>
          <option value="commercial-retail">Commercial — Retail / Showroom</option>
          <option value="commercial-construction">Commercial — Post-Construction</option>
          <option value="move-in-out">Move-In / Move-Out Cleaning</option>
          <option value="other">Other / Custom</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-navy resize-none"
          placeholder="Tell us about your space and what you're looking for..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-gold w-full py-4 rounded-full text-base font-bold tracking-wide uppercase disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
