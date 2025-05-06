"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { BeforeCard } from "./BeforeCard";
import { WithCard } from "./WithCard";
import { Box } from "./Box";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function CardTransition() {
  const beforeCardRef = useRef<HTMLDivElement>(null);
  const withCardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (beforeCardRef.current) {
      gsap.fromTo(
        beforeCardRef.current,
        { y: 0 },
        {
          y: 990,
          ease: "none",
          scrollTrigger: {
            trigger: "#section-wrapper",
            start: "top top",
            end: "top+=1000 top",
            scrub: true,
          },
        }
      );
    }

    if (withCardRef.current) {
      gsap.fromTo(
        withCardRef.current,
        { y: 40, opacity: 0 },
        {
          y: 330,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "#section-wrapper",
            start: "top+=1000 top",
            end: "top+=1300 top",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="section-wrapper"
      className="relative min-h-[250vh] overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full flex justify-center pt-40 z-10">
        <div ref={beforeCardRef}>
          <BeforeCard />
        </div>
      </div>

      <div className="absolute top-[1080px] w-full flex justify-center z-0">
        <div ref={withCardRef}>
          <WithCard />
        </div>
      </div>

      <div className="absolute top-[1080px] w-full flex justify-center z-20">
        <Box />
      </div>
    </section>
  );
}
