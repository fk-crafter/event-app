import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MockupPreview } from "@/components/MockupPreview";
import { FeaturesSection } from "@/components/Features";
import { PlanningSection } from "@/components/PlanningSection";
import { CardTransition } from "@/components/CardTransition";
import { HowItWorksSection } from "@/components/HowItWorksSection";

export default function Home() {
  return (
    <div className="relative ">
      <Header />
      <Hero />
      <MockupPreview />
      <CardTransition />
      <FeaturesSection />
      {/* <PlanningSection /> */}
      <HowItWorksSection />
      <div className="h-[150vh]" />
    </div>
  );
}
