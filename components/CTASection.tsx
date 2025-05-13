"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative w-full py-32 px-4 flex items-center justify-center bg-background overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30 blur-xl pointer-events-none bg-[url('/icons-pattern.svg')] bg-center bg-cover" />

      <div className="relative z-10 max-w-xl w-full bg-background/70 backdrop-blur-md border border-border rounded-2xl p-10 text-center shadow-xl">
        <div className="flex items-center justify-center mb-6">
          <Mail className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Join the Togeda beta
        </h2>
        <p className="text-muted-foreground mb-6">
          Be among the first to experience stress-free group planning. Reserve
          your spot in the private beta today.
        </p>
        <Button className="text-base cursor-pointer px-6 py-4">
          Request beta access
        </Button>
      </div>
    </section>
  );
}
