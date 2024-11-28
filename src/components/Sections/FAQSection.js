"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import faqData from "@/data/faqData";

const FAQSection = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-blue-600 text-center mb-10">
                    Frequently Asked <span className="text-orange-500">Questions</span>
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                    {faqData.map((faq) => (
                        <AccordionItem key={faq.id} value={`faq-${faq.id}`}>
                            <AccordionTrigger className="text-lg font-semibold text-blue-600">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default FAQSection;
