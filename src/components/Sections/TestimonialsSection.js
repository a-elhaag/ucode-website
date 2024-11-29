"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import testimonials from "@/data/testimonials";
import LineDivider from "@/components/dividers/LineDivider";

const TestimonialsSection = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleModal = () => setModalOpen(!modalOpen);

    const renderTestimonials = (data) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map(({ id, name, feedback, photo }) => (
                <motion.div
                    key={id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: id * 0.1 }}
                >
                    <Card
                        className="p-12 m-4 border-2 shadow-md cursor-pointer transform border-blue-600 hover:scale-105 hover:shadow-yellow-400 hover:border-yellow-400"
                        style={{ borderRadius: "30px" }}
                    >
                        <div className="flex flex-col items-center text-center">
                            <img
                                src={photo}
                                alt={`${name}'s photo`}
                                className="w-20 h-20 rounded-full border-4 border-blue-600 object-cover mb-4"
                            />
                            <h3 className="text-lg font-semibold text-blue-600">{name}</h3>
                            <p className="text-sm text-gray-600 mt-2">{feedback}</p>
                        </div>
                    </Card>
                </motion.div>
            ))}
        </div>
    );

    return (
        <section className="py-16 bg-[#004AAD] text-white relative">
            <div className="container mx-auto px-4 sm:px-8 lg:px-16 bg-white rounded-3xl py-12 shadow-lg" style={{ borderRadius: "30px" }}>
                <LineDivider text="What Our Students Say" highlightedText="//" />
                {renderTestimonials(isMobile ? testimonials.slice(0, 1) : testimonials.slice(0, 3))}
                {(isMobile || testimonials.length > 3) && (
                    <motion.div className="text-center mt-8">
                        <button
                            onClick={toggleModal}
                            className="px-6 py-2 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all"
                        >
                            View More
                        </button>
                    </motion.div>
                )}
            </div>
            <AnimatePresence>
                {modalOpen && (
                    <motion.div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
                        <motion.div
                            className="relative bg-white rounded-3xl p-6 max-w-4xl w-full mx-6 sm:mx-12 lg:mx-16 overflow-y-auto max-h-screen"
                            initial={{ y: 50 }}
                            animate={{ y: 0 }}
                            exit={{ y: 50 }}
                            style={{ borderRadius: "30px" }}
                        >
                            <button
                                onClick={toggleModal}
                                className="absolute top-4 right-4 text-gray-600 text-2xl font-bold hover:text-black transition"
                            >
                                ✕
                            </button>
                            <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
                                What Our Students Say
                            </h2>
                            {renderTestimonials(testimonials)}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default TestimonialsSection;
