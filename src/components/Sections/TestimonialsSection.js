"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import testimonials from "@/data/testimonials";

const TestimonialsSection = () => {
    const [isMobile, setIsMobile] = useState(false); // Track screen size
    const [modalOpen, setModalOpen] = useState(false); // Track modal visibility

    // Detect screen size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Mobile breakpoint: <768px
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleModal = () => {
        setModalOpen(!modalOpen); // Toggle modal visibility
    };

    return (
        <section
            className="py-16"
            style={{
                backgroundColor: "#004AAD",
                color: "white",
            }}
        >
            <div
                className="container mx-auto px-4 sm:px-8 lg:px-16 bg-white rounded-3xl py-12 shadow-lg"
                style={{
                    borderRadius: "30px",
                }}
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">
                    What Our <span className="text-orange-500">Students</span> Say
                </h2>

                {/* Display Testimonials */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {isMobile
                        ? testimonials.slice(0, 1).map(({ id, name, feedback, photo }) => (
                            <Card
                                key={id}
                                className="p-12 m-4 border-2 shadow-md cursor-pointer transition-transform transform border-blue-600 hover:bg-[#F3F4F6] hover:scale-105 hover:shadow-orange-500 hover:border-orange-500"
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
                        ))
                        : testimonials.slice(0, 3).map(({ id, name, feedback, photo }) => (
                            <Card
                                key={id}
                                className="p-12 m-4 border-2 shadow-md cursor-pointer transition-transform transform border-blue-600 hover:bg-[#F3F4F6] hover:scale-105 hover:shadow-orange-500 hover:border-orange-500"
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
                        ))}
                </div>

                {/* View More Button */}
                {(isMobile || testimonials.length > 3) && (
                    <div className="text-center mt-8">
                        <button
                            onClick={toggleModal}
                            className="px-6 py-2 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all"
                        >
                            View More
                        </button>
                    </div>
                )}
            </div>

            {/* Full-Screen Modal */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
                    <div
                        className="relative bg-white rounded-3xl p-6 max-w-4xl w-full mx-6 sm:mx-12 lg:mx-16 overflow-y-auto max-h-screen"
                        style={{
                            borderRadius: "30px",
                        }}
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {testimonials.map(({ id, name, feedback, photo }) => (
                                <Card
                                    key={id}
                                    className="p-12 m-4 border-2 shadow-md cursor-pointer transition-transform transform border-blue-600 hover:bg-[#F3F4F6] hover:scale-105 hover:shadow-orange-500 hover:border-orange-500"
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
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default TestimonialsSection;
