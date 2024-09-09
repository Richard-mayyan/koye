import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { MinusIcon } from "lucide-react"
  
  export function AccordionFAQ() {
    return (
      <Accordion type="single" collapsible className="w-full text-xs md:text-xl">
        <AccordionItem className="" value="item-1">
          <AccordionTrigger>
            <span>Where do you ship to?</span>
          </AccordionTrigger>
          <AccordionContent>
          We currently deliver to Mainland UK and Northern Ireland. We use neutral packaging so you can be reassured that your delivery is discreet.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>When will my order arrive?</AccordionTrigger>
          <AccordionContent>
          We dispatch your order at 3pm every day (Monday - Friday). You should receive the items within 48 hours if placed before 3pm, and 72 hours if placed after 3pm!
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    )
  }
  