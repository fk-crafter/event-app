import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MockupPreview } from "@/components/MockupPreview";
import { FeaturesSection } from "@/components/Features";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <MockupPreview />
      <FeaturesSection />
    </div>
  );
}
