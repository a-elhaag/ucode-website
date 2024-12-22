"use client";

import { motion } from "framer-motion"; // Install Framer Motion for animations
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <section
            className="text-center bg-cover bg-center bg-no-repeat p-10 relative h-screen"
            style={{ backgroundImage: "url('/hero-bg.svg')" }} // Update with your background image path
        >
            {/* Overlay Shade */}
            <div className="absolute inset-0 bg-gray bg-opacity-50 flex flex-col items-center justify-center text-center">
                {/* Hero Text with Animation */}
                <motion.h1
                    className="text-4xl font-bold text-black"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    U
                    <motion.span
                        className="text-blue-500"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        -
                    </motion.span>
                    Code
                    <motion.span
                        className="text-blue-500"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        ;
                    </motion.span>{" "}
                    We Fix
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    className="mt-4 text-lg text-black-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                >
                    Where your journey in coding and innovation begins.
                </motion.p>

                {/* Call-to-Action Button */}
                <div className="mt-6">
                    <Button variant="blue_yellow" size="lg" asChild>
                        <a href="/courses">Explore Courses</a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
