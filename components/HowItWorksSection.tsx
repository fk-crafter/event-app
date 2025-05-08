"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Create your event",
    description: "Pick options like cinema, bowling, or paintball in seconds.",
    image: "/step1.png",
  },
  {
    title: "Share the link",
    description: "Send it to your friends — no sign-up needed.",
    image: "/step2.png",
  },
  {
    title: "Vote & decide",
    description: "Friends vote. Togeda picks the best plan automatically.",
    image: "/step3.png",
  },
];

export function HowItWorksSection() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useGSAP(() => {
    const section = sectionRef.current;

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${steps.length * 100}vh`,
      pin: true,
      scrub: true,
      snap: {
        snapTo: 1 / (steps.length - 1),
        duration: 0.3,
        ease: "power1.inOut",
      },
      onUpdate: (self) => {
        const progress = self.progress;
        const newIndex = Math.round(progress * (steps.length - 1));
        setActiveStep(newIndex);
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-background h-[300vh]">
      <div className="h-screen flex max-w-6xl mx-auto px-6 items-center justify-between gap-12">
        <div className="w-1/3 relative flex flex-col gap-12">
          <div className="absolute left-[11px] top-0 h-full w-[2px] bg-border" />

          {steps.map((step, index) => (
            <div key={index} className="pl-8 relative">
              <div
                className={`absolute left-[-2px] top-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  index === activeStep
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {index + 1}
              </div>
              <h3
                className={`text-lg font-semibold mb-1 ${
                  index === activeStep ? "text-foreground" : "text-muted"
                }`}
              >
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="w-2/3 h-[400px] bg-muted rounded-xl flex items-center justify-center p-6 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="absolute"
            >
              <Image
                src={steps[activeStep].image}
                alt="Step"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
