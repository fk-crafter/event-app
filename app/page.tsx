import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MockupPreview } from "@/components/MockupPreview";
import { FeaturesSection } from "@/components/Features";
import { PlanningSection } from "@/components/PlanningSection";
import { CardTransition } from "@/components/CardTransition";

export default function Home() {
  return (
    <div className="relative ">
      <Header />
      <Hero />
      <MockupPreview />
      <CardTransition />
      <FeaturesSection />
      {/* <PlanningSection /> */}
      <div className="h-[150vh]" />
    </div>
  );
}
