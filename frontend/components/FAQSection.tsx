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
              Yes! You’ll see who voted, declined, or didn’t respond — no
              guesswork.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>How do I create an event?</AccordionTrigger>
            <AccordionContent>
              Just pick a few activity options, set a deadline, and share the
              link — it takes less than a minute.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Is it really free?</AccordionTrigger>
            <AccordionContent>
              Yes, Togeda has a free plan with all the basics. Advanced features
              will be part of upcoming paid plans.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              What happens after everyone votes?
            </AccordionTrigger>
            <AccordionContent>
              Togeda picks the best option automatically based on votes. No
              debate needed.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>Can I add a cost per option?</AccordionTrigger>
            <AccordionContent>
              Yes, you can add pricing info so friends can compare and decide
              based on budget.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>Does it work on mobile?</AccordionTrigger>
            <AccordionContent>
              Absolutely — Togeda works seamlessly on phones, tablets, and
              desktop.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
