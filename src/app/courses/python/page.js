"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import LineDivider from "@/components/LineDivider";
import courses from "@/data/courses";
import socialMediaLinks from "@/data/socialMediaLinks";

// Course-Specific Data
const course = courses.find((c) => c.id === "python");
const monthlyPrice = course.price;
const discountedPrice = course.price * course.duration * 0.9;

const whyChooseUs = [
    {
        title: "Live Online Sessions",
        description: "All sessions are conducted live online, offering real-time interaction with instructors.",
        icon: "🎥",
    },
    {
        title: "Recorded Sessions Available",
        description: "Never miss a session! All live classes are recorded and accessible anytime.",
        icon: "🎞️",
    },
    {
        title: "Expert Instructors",
        description: "Learn from industry experts with hands-on experience in coding.",
        icon: "🏆",
    },
];

const quickFacts = [
    {
        icon: "⏳", // Example icon, replace with a proper React icon
        title: "Duration",
        description: "4 months (16 weeks) with flexible scheduling options.",
    },
    {
        icon: "📋", // Example icon, replace with a proper React icon
        title: "Prerequisites",
        description: "No prior coding experience is required to get started.",
    },
];

const curriculum = [
    { topic: "Introduction to Programming", description: "Understand the basics of programming and why Python is powerful." },
    { topic: "Basic Syntax and Structure", description: "Learn how to write and organize Python code effectively." },
    { topic: "Variables and Data Types", description: "Explore different data types and how to store data in variables." },
    { topic: "Input and Output Functions", description: "Understand how to interact with users through inputs and outputs." },
    { topic: "Operators and Expressions", description: "Learn to manipulate data using Python operators and expressions." },
    { topic: "Control Flow", description: "Master decision-making and loops for executing code conditions." },
    { topic: "Functions and Recursion", description: "Learn to write reusable code blocks and solve problems recursively." },
    { topic: "Object-Oriented Programming (OOP)", description: "Build complex programs with classes, objects, and OOP principles." },
    { topic: "Mini Projects", description: "Apply your knowledge in small, practical projects." },
    { topic: "Final Project", description: "Combine everything you’ve learned into a capstone project." },
];

const testimonials = [
    { id: 1, name: "John Doe", feedback: "This course was a game-changer for my career!", photo: "/assets/testimonialsPhotos/john.jpg" },
    { id: 2, name: "Jane Smith", feedback: "The instructors were amazing and very supportive.", photo: "/assets/testimonialsPhotos/jane.jpg" },
    { id: 3, name: "Ali Khan", feedback: "I loved the projects; they helped me apply my knowledge.", photo: "/assets/testimonialsPhotos/ali.jpg" },
];



const CoursePage = () => {
    const whatsappLink = socialMediaLinks.whatsapp;
    const [activeTopic, setActiveTopic] = useState(null);

    const toggleTopic = (index) => {
        setActiveTopic(activeTopic === index ? null : index);
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="text-center bg-blue-600 text-white py-16 px-6">
                <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "monospace" }}>
                    {course.name}
                </h1>
                <p className="text-lg mb-8">{course.description}</p>
                <div className="space-x-4">
                    <Button variant="orange_yellow" size="lg" asChild>
                        <a href={course.enroll}>Enroll</a>
                    </Button>
                    <Button variant="yellow_orange" size="lg" asChild>
                        <a href={whatsappLink}>Contact Us on WhatsApp</a>
                    </Button>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <LineDivider text="Why Choose Us?" highlightedText="::" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                        {whyChooseUs.map((item, index) => (
                            <motion.div
                                key={index}
                                className="p-6 bg-blue-600 text-white rounded-[30px] shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="text-4xl mb-4 text-center">{item.icon}</div>
                                <h3 className="text-lg font-bold text-center">{item.title}</h3>
                                <p className="text-sm mt-2 text-center">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Course Overview */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <LineDivider text="Quick Facts" highlightedText="::" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                        {quickFacts.map((item, index) => (
                            <motion.div
                                key={index}
                                className="p-6 bg-orange-500 text-white rounded-[30px] shadow-md transition-transform transform hover:scale-105 hover:bg-orange-600"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="text-4xl mb-4 text-center">{item.icon}</div>
                                <h3 className="text-lg font-bold text-center">{item.title}</h3>
                                <p className="text-sm mt-2 text-center whitespace-pre-line">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Curriculum Section */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center text-orange-500 mb-10">Educational program</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {curriculum.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`p-4 bg-white border-2 rounded-[30px] shadow-md cursor-pointer transform transition group ${activeTopic === index
                                ? "border-orange-500 shadow-lg scale-105"
                                : "border-gray-300 hover:shadow-md hover:border-blue-500"
                                }`}
                            onClick={() => toggleTopic(index)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold text-blue-600">{item.topic}</h3>
                                <motion.span
                                    className="text-gray-500 text-lg"
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: activeTopic === index ? 90 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    ▶
                                </motion.span>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={
                                    activeTopic === index
                                        ? { opacity: 1, height: "auto" }
                                        : { opacity: 0, height: 0 }
                                }
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }} // Smooth transition
                                className="overflow-hidden mt-4"
                            >
                                <p className="text-gray-600">{item.description}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Button variant="orange_blue" size="lg" asChild>
                        <a href={course.enroll}>Enroll Now</a>
                    </Button>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-16 bg-gray-100 text-center">
                <h2 className="text-3xl font-bold text-blue-600 mb-6">Affordable Learning Options</h2>
                <p className="text-lg mb-8">Flexible payment plans to suit your needs. Start your journey today!</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <motion.div
                        className="p-6 bg-blue-600 text-white rounded-[30px] shadow-md transform transition group hover:scale-105 hover:bg-blue-700"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition">
                            Monthly Payment
                        </h3>
                        <p className="text-sm mt-2">EGP {monthlyPrice} per Level</p>
                    </motion.div>
                    <motion.div
                        className="p-6 bg-orange-500 text-white rounded-[30px] shadow-md transform transition group hover:scale-105 hover:bg-orange-600"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-lg font-bold text-white group-hover:text-white transition">
                            Full Payment
                        </h3>
                        <p className="text-sm mt-2">EGP {discountedPrice} (10% Off)</p>
                    </motion.div>
                </div>
            </section>

            {/* Certificate Section */}
            <section className="py-16 bg-blue-600 text-white text-center">
                <LineDivider text="Earn a Certificate" highlightedText="#" />
                <p className="text-lg mb-8">
                    Receive a <span className="text-orange-500 font-bold">certificate</span> upon completing the full course.
                </p>
                <Button variant="orange_yellow" size="lg" asChild>
                    <a href={course.enroll}>Enroll and Get Certified</a>
                </Button>
            </section>

            {/* Testimonials Section */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">What Our Students Say</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map(({ id, name, feedback, photo }) => (
                        <motion.div
                            key={id}
                            className="p-12 m-4 border-2 shadow-md cursor-pointer transition-transform transform border-blue-600 hover:bg-[#F3F4F6] hover:scale-105 hover:shadow-orange-500 hover:border-orange-500"
                            style={{ borderRadius: "30px" }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
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
                        </motion.div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default CoursePage;
