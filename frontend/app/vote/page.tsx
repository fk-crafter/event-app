"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function VotePage() {
  const params = useSearchParams();
  const [event, setEvent] = useState<any>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [votedGuests, setVotedGuests] = useState<string[]>([]);

  const user = params.get("user") || "guest";

  useEffect(() => {
    const raw = params.get("data");
    if (!raw) return;

    try {
      const decoded = JSON.parse(decodeURIComponent(raw));
      setEvent(decoded);
    } catch (err) {
      console.error("Invalid data");
    }
  }, [params]);

  const handleVote = () => {
    if (!selectedOption || !event) return;
    if (!votedGuests.includes(user)) {
      setVotedGuests([...votedGuests, user]);
    }
  };

  if (!event) {
    return <p className="text-center mt-20">Loading event data...</p>;
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="md:col-span-2 space-y-6">
        <h1 className="text-2xl font-bold mb-2">{event.eventName}</h1>
        <p className="text-muted-foreground text-sm mb-4">
          Hi {user}, choose your favorite option 👇
        </p>

        <div className="space-y-4">
          {event.options.map((opt: any, i: number) => (
            <div
              key={i}
              onClick={() => setSelectedOption(opt.name)}
              className={cn(
                "border rounded-lg px-4 py-3 cursor-pointer hover:bg-accent transition",
                selectedOption === opt.name && "border-primary bg-muted"
              )}
            >
              <p className="font-medium">{opt.name}</p>
              <p className="text-sm text-muted-foreground">
                {opt.price ? `$${opt.price}` : "Free"}
              </p>
            </div>
          ))}
        </div>

        <Button
          className="mt-4"
          onClick={handleVote}
          disabled={!selectedOption || votedGuests.includes(user)}
        >
          {votedGuests.includes(user) ? "Vote submitted" : "Submit vote"}
        </Button>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Who's voted?</h2>
        <ul className="space-y-2 text-sm">
          {event.guests.map((g: string, i: number) => (
            <li key={i} className="flex items-center justify-between">
              <span>{g}</span>
              <span
                className={cn(
                  "text-xs px-2 py-1 rounded-full",
                  votedGuests.includes(g)
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-200 text-gray-500"
                )}
              >
                {votedGuests.includes(g) ? "Voted" : "Pending"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
