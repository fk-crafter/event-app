import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
        Plan your hangouts effortlessly
      </h1>
      <p className="text-muted-foreground max-w-md mb-6">
        Suggest multiple options (cinema, paintball, etc.), invite your friends,
        and let them vote. Simple, fast, no sign-up required.
      </p>
      <Link href="/create">
        <Button className="cursor-pointer">Create an event</Button>
      </Link>
    </section>
  );
}
