"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import courses from "@/data/courses";
import LineDivider from "@/components/LineDivider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Promo codes dictionary
const promoCodes = {
    "ECU50": 50,
    "EARLY20": 20
};

const CoursesPage = () => {
    const [promoCode, setPromoCode] = useState("");
    const [appliedDiscount, setAppliedDiscount] = useState(0);
    const [error, setError] = useState("");

    const handlePromoCode = () => {
        const code = promoCode.trim();
        const discount = promoCodes[Object.keys(promoCodes).find(key =>
            key.toLowerCase() === code.toLowerCase()
        )];
        if (discount) {
            setAppliedDiscount(discount);
            setError("");
        } else {
            setAppliedDiscount(0);
            setError("Invalid promo code");
        }
    };

    return (
        <div className="py-16" style={{ backgroundColor: "#F3F4F6" }}>
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <LineDivider text="Our Courses" highlightedText=">>" />

                    {/* Promo Code Input Section */}
                    <div className="flex justify-center items-center gap-4 mt-8">
                        <Input
                            type="text"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handlePromoCode()}
                            placeholder="Enter promo code"
                            className="w-48"
                        />
                        <Button onClick={handlePromoCode}>
                            Apply Code
                        </Button>
                    </div>
                    {error && (
                        <p className="text-red-500 text-center mt-2">{error}</p>
                    )}
                </motion.div>

                {/* Courses Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                staggerChildren: 0.2,
                            },
                        },
                    }}
                >
                    {courses.map((course) => (
                        <motion.div
                            key={course.id}
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1 },
                            }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-orange-200 opacity-0 rounded-[30px] blur-lg transition group-hover:opacity-50 group-hover:scale-105"></div>
                            <CourseCard
                                {...course}
                                discount={appliedDiscount}
                                activePromo={appliedDiscount > 0 ? promoCode.toUpperCase() : ""}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default CoursesPage;
