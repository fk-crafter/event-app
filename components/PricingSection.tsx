"use client";

import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    title: "Starter",
    price: "Free",
    features: ["Create events", "Share with a link", "Basic voting"],
    highlighted: false,
  },
  {
    title: "Pro",
    price: "$4.99/mo",
    features: ["Unlimited events", "Advanced options", "Priority support"],
    highlighted: true,
  },
  {
    title: "Team",
    price: "$9.99/mo",
    features: ["Team dashboards", "Multiple organizers", "Analytics"],
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section className="w-full py-32 px-4 bg-background text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
        Simple, transparent pricing
      </h2>
      <p className="text-muted-foreground text-lg mb-16">
        Pick the plan that fits your group — no hidden fees.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div
            key={plan.title}
            className={`relative bg-muted rounded-2xl px-6 py-10 text-left shadow-md border border-border ${
              plan.highlighted ? "md:scale-105 border-primary shadow-lg" : ""
            }`}
          >
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              {plan.title}
            </h3>
            <p className="text-2xl font-bold mb-4 text-foreground">
              {plan.price}
            </p>
            <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
              {plan.features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>
            <Button
              className="w-full"
              variant={plan.highlighted ? "default" : "outline"}
            >
              Select
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
