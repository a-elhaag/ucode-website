"use client";

import { motion } from "framer-motion"; // Animations
import CourseCard from "@/components/CourseCard";
import courses from "@/data/courses";
import LineDivider from "@/components/LineDivider"; // Custom Divider

const CoursesPage = () => {
    return (
        <div className="py-16" style={{ backgroundColor: "#F3F4F6" }}>
            <div className="container mx-auto px-4">
                {/* Section Heading with Animated Divider */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <LineDivider text="Our Courses" highlightedText=">>" />
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
                    {courses.map((course, index) => (
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
                            {/* Glowing Shadow on Hover */}
                            <div className="absolute inset-0 bg-orange-200 opacity-0 rounded-[30px] blur-lg transition group-hover:opacity-50 group-hover:scale-105"></div>
                            <CourseCard {...course} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action for More Courses */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <button
                        className="px-6 py-3 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all text-lg"
                        onClick={() => window.location.href = "/courses"}
                    >
                        Explore All Courses
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default CoursesPage;
