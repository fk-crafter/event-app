import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MockupPreview } from "@/components/MockupPreview";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <MockupPreview />
    </div>
  );
}
