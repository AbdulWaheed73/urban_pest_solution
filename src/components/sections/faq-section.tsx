import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { faqs } from "@/data/faqs";

export function FAQSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-off-white relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-forest/10 to-transparent" />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Curious about how we tackle pests or what eco-friendly solutions we offer? Find answers below."
        />
        <Accordion className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl border border-forest/10 bg-white px-6 overflow-hidden hover:border-forest/20 transition-colors data-open:border-forest/30 data-open:shadow-md data-open:shadow-forest/5"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-charcoal hover:text-forest py-5 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-mid leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
