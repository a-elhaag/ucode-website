"use client";

import { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import LineDivider from "@/components/LineDivider";
import faqData from "@/data/faq";

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleActiveIndex = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section
            className="py-16"
            style={{
                backgroundColor: "#F3F4F6",
                borderRadius: "30px",
            }}
        >
            <div className="container mx-auto px-6">
                {/* Enhanced Section Title with Divider */}
                <LineDivider
                    text="Frequently Asked Questions"
                    highlightedText=">>"
                />

                {/* Accordion */}
                <Accordion type="single" collapsible>
                    {faqData.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`faq-${index}`}
                            className={`mb-6 p-4 transition-transform transform ${activeIndex === index
                                ? "scale-105 border-yellow-500 shadow-lg"
                                : "border-gray-300 shadow-md hover:scale-102"
                                } rounded-[30px] bg-white`}
                        >
                            {/* Trigger without Arrow */}
                            <AccordionTrigger
                                className={`text-lg font-semibold p-4 transition-colors ${activeIndex === index
                                    ? "text-yellow-500"
                                    : "text-blue-600 hover:text-yellow-500"
                                    }`}
                                onClick={() => toggleActiveIndex(index)}
                            >
                                {faq.question}
                            </AccordionTrigger>

                            {/* Content with Smooth Fade-In */}
                            {activeIndex === index && (
                                <AccordionContent
                                    className="text-gray-600 mt-4 p-4"
                                    style={{
                                        animation: "fade-in 0.5s ease-in-out",
                                    }}
                                >
                                    {faq.answer}
                                </AccordionContent>
                            )}
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

            {/* Custom CSS for Fade-In Animation */}
            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
};

export default FAQSection;
