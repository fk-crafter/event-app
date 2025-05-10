"use client";

import { Briefcase, GraduationCap, Users, Smile } from "lucide-react";

const personas = [
  {
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    title: "Students",
    description:
      "Plan group hangouts, pizza nights, or quick study sessions — all without a single group chat.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-primary" />,
    title: "Teams",
    description:
      "Decide on lunch spots, happy hours or offsites without endless Slack threads.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Families",
    description:
      "Coordinate weekend plans or family dinners — even with the chaotic cousin.",
  },
  {
    icon: <Smile className="w-6 h-6 text-primary" />,
    title: "Friends",
    description:
      "Settle on movie nights, weekend activities or spontaneous outings in seconds.",
  },
];

export function BuiltForSection() {
  return (
    <section className="w-full py-24 px-4 bg-background text-center">
      <p className="text-sm text-primary font-semibold mb-2 tracking-tight">
        For every kind of group
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-foreground leading-tight">
        Togeda works for everyone
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl mx-auto text-left">
        {personas.map((item, index) => (
          <div key={index} className="flex items-start gap-4 max-w-sm">
            <div className="bg-muted p-3 rounded-full shrink-0">
              {item.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
