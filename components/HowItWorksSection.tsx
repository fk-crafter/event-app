"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

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
      onUpdate: (self) => {
        const progress = self.progress;
        const newIndex = Math.round(progress * (steps.length - 1));
        setActiveStep(newIndex);
      },
    });

    // Animate vertical progress line
    gsap.to(".progress-line", {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${steps.length * 100}vh`,
        scrub: true,
      },
    });

    // Animate circles
    gsap.utils.toArray<HTMLDivElement>(".step-circle").forEach((circle, i) => {
      gsap.fromTo(
        circle,
        { scale: 1, backgroundColor: "#e4e4e7", color: "#a1a1aa" }, // muted
        {
          scale: 1.2,
          backgroundColor: "#6366f1", // primary
          color: "#ffffff",
          scrollTrigger: {
            trigger: section,
            start: `${i * 100}vh top`,
            end: `${(i + 1) * 100}vh top`,
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-background h-[300vh] overflow-hidden"
    >
      <div className="h-screen flex max-w-6xl mx-auto px-6 items-center justify-between gap-12">
        {/* Left timeline */}
        <div className="w-1/3 relative flex flex-col gap-12">
          {/* Vertical progress line */}
          <div className="absolute left-[11px] top-0 h-full w-[2px] bg-border">
            <div className="progress-line w-full bg-primary h-0 origin-top" />
          </div>

          {steps.map((step, index) => (
            <div key={index} className="pl-8 relative">
              <div
                className={`step-circle absolute left-[-2px] top-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold`}
              >
                {index + 1}
              </div>
              <h3
                className={`text-lg font-semibold mb-1 transition-opacity duration-300 ${
                  index === activeStep ? "opacity-100" : "opacity-40"
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`text-sm transition-opacity duration-300 text-muted-foreground ${
                  index === activeStep ? "opacity-100" : "opacity-50"
                }`}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right dynamic image */}
        <div className="w-2/3 h-[400px] bg-muted rounded-xl flex items-center justify-center p-6">
          <Image
            src={steps[activeStep].image}
            alt="Step"
            width={500}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
