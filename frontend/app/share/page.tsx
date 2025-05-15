"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ShareEventPage() {
  const params = useSearchParams();
  const [event, setEvent] = useState<any>(null);

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

  if (!event) {
    return <p className="text-center mt-20">Loading event data...</p>;
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-16 space-y-8">
      <h1 className="text-2xl font-bold">Share your event</h1>

      <div>
        <h2 className="text-lg font-semibold mb-2">{event.eventName}</h2>
        <ul className="text-sm text-muted-foreground">
          {event.options.map((opt: any, i: number) => (
            <li key={i}>
              {opt.name} — {opt.price ? `$${opt.price}` : "Free"}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Guest links</h2>
        <ul className="space-y-2">
          {event.guests.map((guest: string, i: number) => (
            <li key={i}>
              <code className="text-sm bg-muted px-2 py-1 rounded">
                {`/vote?data=${encodeURIComponent(
                  JSON.stringify({ ...event, guest })
                )}`}
              </code>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
