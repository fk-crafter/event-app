"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function CreateEventPage() {
  const [eventName, setEventName] = useState("");
  const [options, setOptions] = useState([{ name: "", price: "" }]);

  const handleOptionChange = (index: number, field: string, value: string) => {
    const updated = [...options];
    updated[index][field as keyof (typeof options)[number]] = value;
    setOptions(updated);
  };

  const addOption = () => {
    setOptions([...options, { name: "", price: "" }]);
  };

  const handleSubmit = () => {
    console.log({ eventName, options });
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold mb-6">Create a new evnt</h1>

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
          <div key={i} className="flex gap-2">
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
          </div>
        ))}
        <Button type="button" variant="outline" onClick={addOption}>
          + Add option
        </Button>
      </div>

      <Button onClick={handleSubmit}>Next</Button>
    </main>
  );
}
