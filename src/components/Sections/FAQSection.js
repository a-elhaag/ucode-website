"use client";

import { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import faqData from "@/data/faq";
import LineDivider from "@/components/dividers/LineDivider";

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleActiveIndex = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <LineDivider text="Frequently Asked Questions" highlightedText=">>" />
                <Accordion type="single" collapsible>
                    {faqData.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`faq-${index}`}
                            className={`mb-4 border rounded-[30px] transition-all ${activeIndex === index ? "border-orange-500 shadow-md" : "border-gray-300"
                                }`}
                        >
                            <AccordionTrigger
                                className={`text-lg font-semibold p-4 transition-colors ${activeIndex === index
                                    ? "text-orange-500"
                                    : "text-blue-600 hover:text-orange-500"
                                    }`}
                                onClick={() => toggleActiveIndex(index)}
                            >
                                {faq.question}
                            </AccordionTrigger>
                            {activeIndex === index && (
                                <AccordionContent
                                    className="text-gray-600 mt-2 p-4"
                                    style={{ animation: "fade-in 0.3s ease" }}
                                >
                                    {faq.answer}
                                </AccordionContent>
                            )}
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default FAQSection;
