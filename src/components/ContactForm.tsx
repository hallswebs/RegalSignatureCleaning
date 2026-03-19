"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";

const WEB3FORMS_ACCESS_KEY = "5ff9f772-e171-4cb1-ac9a-7b2f5a981c0f";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const fileNames = Array.from(e.target.files).map(file => file.name);
      setSelectedFiles(fileNames);
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Quote Request - Regal Signature Cleaning");
    formData.append("from_name", "Regal Signature Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-gold font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto rounded-full bg-red-100 flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-navy mb-2">Something went wrong</h3>
        <p className="text-navy/60 mb-4">
          Please try again or contact us directly on WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setStatus("idle")}
            className="text-gold font-semibold hover:underline"
          >
            Try again
          </button>
          <a
            href="https://wa.me/447544886142?text=Hi%2C%20I%27d%20like%20to%20request%20a%20quote%20for%20cleaning%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-600 font-semibold hover:underline"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Message on WhatsApp
          </a>
        </div>
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
          <option value="Essential Clean">Essential Clean</option>
          <option value="Signature Clean">Signature Clean</option>
          <option value="Deep Clean">Deep Clean</option>
          <option value="Add-On Services Only">Add-On Services Only</option>
          <option value="Other / Custom">Other / Custom</option>
        </select>
      </div>

      <div>
        <label htmlFor="propertyType" className="block text-sm font-medium text-navy mb-2">
          Property Size & Type
        </label>
        <select
          id="propertyType"
          name="propertyType"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-navy bg-white"
        >
          <option value="">Select property type...</option>
          <option value="Studio Apartment">Studio Apartment</option>
          <option value="1 Bed Apartment">1 Bed Apartment</option>
          <option value="2 Bed Apartment">2 Bed Apartment</option>
          <option value="2 Bed House">2 Bed House</option>
          <option value="3 Bed House">3 Bed House</option>
          <option value="4 Bed House">4 Bed House</option>
          <option value="5 Bed House">5 Bed House</option>
          <option value="6+ Bed Property">6+ Bed Property</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="attachment" className="block text-sm font-medium text-navy mb-2">
          Photos (optional)
        </label>
        <div className="relative">
          <input
            id="attachment"
            name="attachment"
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-navy file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gold/10 file:text-navy hover:file:bg-gold/20 file:cursor-pointer"
          />
        </div>
        {selectedFiles.length > 0 && (
          <p className="text-sm text-navy/60 mt-2">
            Selected: {selectedFiles.join(', ')}
          </p>
        )}
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
