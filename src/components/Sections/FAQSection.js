"use client";

import { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import faqData from "@/data/faq";

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null); // Track the active question

    // Toggle the active question
    const toggleActiveIndex = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Close if already open
    };

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-blue-600 text-center mb-8">
                    Frequently Asked <span className="text-orange-500">Questions</span>
                </h2>

                {/* FAQ Accordion */}
                <Accordion type="single" collapsible>
                    {faqData.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`faq-${index}`}
                            className={`mb-4 border rounded-[30px] transition-colors ${activeIndex === index ? "border-orange-500" : "border-gray-300"
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
                                <AccordionContent className="text-gray-600 mt-2 p-4">
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
