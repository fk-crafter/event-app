import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MockupPreview } from "@/components/MockupPreview";
import { BoldStatementSection } from "@/components/BoldStatementSection";
import { CardTransition } from "@/components/CardTransition";
import { FeaturesSection } from "@/components/Features";
import { PlanningSection } from "@/components/PlanningSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { BuiltForSection } from "@/components/BuiltForSection";
import { CollaborativeSection } from "@/components/CollaborativeSection";

export default function Home() {
  return (
    <div className="relative ">
      <Header />
      <Hero />
      <MockupPreview />
      <BoldStatementSection />
      <CardTransition />
      <FeaturesSection />
      {/* <PlanningSection /> */}
      <HowItWorksSection />
      <BuiltForSection />
      <CollaborativeSection />
      <div className="h-[150vh]" />
    </div>
  );
}
