'use client'
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import React from "react";

export default function ContactPage() {
  return (
    <div>
      <div
        className="relative h-[300px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=2070")',
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-black/40">
          <div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
              Contact Us
            </h1>
            <p className="max-w-2xl text-lg text-white/90">
              Need assistance with your booking? Our dedicated support team is
              here to help make your travel experience exceptional.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-16">
        <ContactInfo />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Get in Touch
            </h2>
            <p className="mb-6 text-gray-600">
              Whether you need help with bookings, have questions about our
              services, or want to provide feedback, we are here to assist you
              every step of the way.
            </p>
            <div className="rounded-xl bg-blue-50 p-6">
              <h3 className="mb-2 font-semibold text-blue-900">
                Why Choose Trip Snug?
              </h3>
              <ul className="space-y-3 text-blue-800">
                <li>✓ 24/7 Customer Support</li>
                <li>✓ Best Price Guarantee</li>
                <li>✓ Secure Booking Process</li>
                <li>✓ Free Cancellation Options</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
