import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MockupPreview } from "@/components/MockupPreview";
import { CardTransition } from "@/components/CardTransition";
import { FeaturesSection } from "@/components/Features";
import { PlanningSection } from "@/components/PlanningSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { BuiltForSection } from "@/components/BuiltForSection";

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
      <BuiltForSection />
      <div className="h-[150vh]" />
    </div>
  );
}
