"use client";

import aboutUs from "@/data/aboutUs";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import { Button } from "@/components/ui/button";
import LineDivider from "@/components/dividers/LineDivider"; // Divider style as heading

const AboutUsPage = () => {
    return (
        <section
            className="py-16"
            style={{ backgroundColor: "#F3F4F6" }} // Solid gray background
        >
            <div className="container mx-auto px-6">
                {/* Divider as Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <LineDivider text="About Us" highlightedText="//" />
                </motion.div>

                {/* Description */}
                <div className="space-y-8 text-lg leading-relaxed mt-12">
                    {aboutUs.description.map((paragraph, index) => (
                        <motion.p
                            key={index}
                            className="text-gray-700 text-center"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            {paragraph}
                        </motion.p>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    className="text-center mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <p className="text-sm text-gray-600 mb-4">{aboutUs.contactCTA}</p>
                    <Button
                        as="a"
                        href="/contact"
                        variant="blue_orange"
                        size="lg"
                        className="shadow-lg hover:shadow-xl"
                    >
                        Contact Us
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUsPage;
