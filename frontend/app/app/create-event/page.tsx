"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function CreateEventPage() {
  const [eventName, setEventName] = useState("");
  const [options, setOptions] = useState([
    { name: "", price: "", datetime: "" },
  ]);
  const [guests, setGuests] = useState([""]);
  const router = useRouter();

  const handleOptionChange = (index: number, field: string, value: string) => {
    const updated = [...options];
    updated[index][field as keyof (typeof options)[number]] = value;
    setOptions(updated);
  };

  const handleGuestChange = (index: number, value: string) => {
    const updated = [...guests];
    updated[index] = value;
    setGuests(updated);
  };

  const addOption = () => {
    setOptions([...options, { name: "", price: "", datetime: "" }]);
  };

  const addGuest = () => {
    setGuests([...guests, ""]);
  };

  const handleSubmit = () => {
    const event = {
      eventName,
      options,
      guests,
    };
    const encoded = encodeURIComponent(JSON.stringify(event));
    router.push(`/app/share?data=${encoded}`);
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold mb-6">Create a new event</h1>

      <div className="mb-6">
        <Label className="mb-2 block">Event name</Label>
        <Input
          placeholder="Ex: Saturday plans"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
      </div>

      <div className="mb-6 space-y-4">
        <Label className="block mb-2">Options</Label>
        {options.map((opt, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <Input
              placeholder="Option name (e.g. Bowling)"
              value={opt.name}
              onChange={(e) => handleOptionChange(i, "name", e.target.value)}
            />
            <Input
              placeholder="Price"
              type="number"
              value={opt.price}
              onChange={(e) => handleOptionChange(i, "price", e.target.value)}
            />
            <Input
              type="datetime-local"
              value={opt.datetime}
              onChange={(e) =>
                handleOptionChange(i, "datetime", e.target.value)
              }
            />
          </div>
        ))}
        <Button type="button" variant="outline" onClick={addOption}>
          + Add option
        </Button>
      </div>

      <div className="mb-6 space-y-4">
        <Label className="block mb-2">Guests</Label>
        {guests.map((guest, i) => (
          <Input
            key={i}
            placeholder="Enter guest nickname"
            value={guest}
            onChange={(e) => handleGuestChange(i, e.target.value)}
          />
        ))}
        <Button type="button" variant="outline" onClick={addGuest}>
          + Add guest
        </Button>
      </div>

      <Button onClick={handleSubmit}>Next</Button>
    </main>
  );
}
