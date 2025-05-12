"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section className="w-full py-24 px-4 bg-background text-center">
      <p className="text-sm text-primary font-semibold mb-2 tracking-tight">
        Need help?
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
        Frequently Asked Questions
      </h2>
      <p className="text-muted-foreground text-lg mb-12">
        Still have questions? Reach out on X or through the contact form.
      </p>

      <div className="max-w-2xl mx-auto text-left">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Togeda?</AccordionTrigger>
            <AccordionContent>
              Togeda is a tool to easily plan group activities by letting
              friends vote on options. No sign-up, no confusion — just fast,
              clear decisions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Does everyone need an account?</AccordionTrigger>
            <AccordionContent>
              Nope. Only the organizer needs Togeda. Friends can vote directly
              via a shared link.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Can I track who voted?</AccordionTrigger>
            <AccordionContent>
              Yes! Togeda gives you a full response list so you know who’s in
              and who’s out — no guessing.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
