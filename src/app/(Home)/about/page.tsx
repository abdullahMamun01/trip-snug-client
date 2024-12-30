import Mission from "@/components/about/Mission";
import React from "react";
import Service from "./Service";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <div
        className="relative h-[300px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2070")',
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-black/40">
          <div className="mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              About Trip Snug
            </h1>
            <p className="max-w-2xl text-xl text-white/90">
              Your trusted partner in creating unforgettable travel experiences
              since 2023
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto space-y-10 px-4 py-16">
        <Mission />
        <Service />
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold">
              Ready to Start Your Journey?
            </h2>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
              Join thousands of satisfied travelers who have found their perfect
              stay through Trip Snug
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground">
              <Link href="/hotels">Browse Hotels</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
