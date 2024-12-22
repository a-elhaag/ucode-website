"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import LineDivider from "@/components/LineDivider";
import courses from "@/data/courses";
import socialMediaLinks from "@/data/socialMediaLinks";

// Course-Specific Data
const course = courses.find((c) => c.id === "web-development");
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
        description: "16 hours per level, totaling 48 hours across all levels.",
    },
    {
        icon: "📋", // Example icon, replace with a proper React icon
        title: "Prerequisites",
        description: "No prior coding experience is required to get started.",
    },
];

const curriculum = [
    {
        topic: "HTML & CSS Fundamentals",
        description: "Learn the building blocks of web development with HTML and CSS. Create structured and visually appealing web pages."
    },
    {
        topic: "Introduction to HTML",
        description: "Tags, elements, and attributes."
    },
    {
        topic: "Building Web Structures",
        description: "Headings, paragraphs, lists, and more."
    },
    {
        topic: "Styling with CSS",
        description: "Selectors, properties, and values."
    },
    {
        topic: "Responsive Design",
        description: "Media queries and flexbox."
    },
    {
        topic: "CSS Grid",
        description: "Master advanced layouts for modern web designs."
    },
    {
        topic: "Mini Project: Personal Portfolio",
        description: "Apply your HTML and CSS knowledge to create a portfolio page."
    },
    {
        topic: "JavaScript Basics",
        description: "Dive into JavaScript, the programming language of the web. Add interactivity and functionality to your web pages."
    },
    {
        topic: "Introduction to JavaScript",
        description: "Variables, data types, and operators."
    },
    {
        topic: "Control Flow",
        description: "Conditional statements and loops."
    },
    {
        topic: "DOM Manipulation",
        description: "Selecting and modifying HTML elements."
    },
    {
        topic: "Event Handling",
        description: "Respond to user actions like clicks and keypresses."
    },
    {
        topic: "Basic Animations",
        description: "Creating dynamic effects using JavaScript."
    },
    {
        topic: "Mini Project: To-Do List App",
        description: "Develop an interactive to-do list app using JavaScript."
    },
    {
        topic: "Advanced JavaScript & React",
        description: "Master advanced JavaScript concepts and build modern web applications with React."
    },
    {
        topic: "Advanced JavaScript Features",
        description: "ES6+ features like arrow functions, destructuring, and modules."
    },
    {
        topic: "APIs and Fetch",
        description: "Connect your app to external data sources."
    },
    {
        topic: "Introduction to React",
        description: "Learn components, JSX, and props."
    },
    {
        topic: "State Management",
        description: "Manage application data with useState and useEffect."
    },
    {
        topic: "Styling in React",
        description: "CSS Modules and styled-components."
    },
    {
        topic: "React Router",
        description: "Build multi-page applications."
    },
    {
        topic: "Final Project: Web App",
        description: "Build a fully functional, responsive web app."
    }
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
                <div className="space-y-4 md:space-x-4 md:space-y-0 flex flex-col md:flex-row items-center justify-center">
                    <Button variant="yellow_yellow" size="lg" asChild>
                        <a href={course.enroll}>Enroll</a>
                    </Button>
                    <Button variant="yellow_yellow" size="lg" asChild>
                        <a href={whatsappLink}>Contact Us on WhatsApp</a>
                    </Button>
                </div>
            </section>
            {/* Pricing Section */}
            <section className="py-16 bg-gray-100 text-center">
                <LineDivider text="Affordable Learning Options" highlightedText="//" />
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
                        className="p-6 bg-yellow-500 text-white rounded-[30px] shadow-md transform transition group hover:scale-105 hover:bg-yellow-600"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-lg font-bold text-white group-hover:text-white transition">
                            Full Payment
                        </h3>
                        <p className="text-sm mt-2">EGP {discountedPrice} (10% Off)</p>
                    </motion.div>
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
                                className="p-6 bg-yellow-500 text-white rounded-[30px] shadow-md transition-transform transform hover:scale-105 hover:bg-yellow-600"
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
                <h2 className="text-3xl font-bold text-center text-yellow-500 mb-10">Educational program</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {curriculum.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`p-4 bg-white border-2 rounded-[30px] shadow-md cursor-pointer transform transition group ${activeTopic === index
                                ? "border-yellow-500 shadow-lg scale-105"
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
                    <Button variant="yellow_blue" size="lg" asChild>
                        <a href={course.enroll}>Enroll Now</a>
                    </Button>
                </div>
            </section>


            {/* Certificate Section */}
            <section className="py-16 bg-blue-600 text-white text-center">
                <LineDivider text="Earn a Certificate" highlightedText="#" />
                <p className="text-lg mb-8">
                    Receive a <span className="font-bold">certificate</span> upon completing the full course.
                </p>
                <Button variant="yellow_yellow" size="lg" asChild>
                    <a href={course.enroll}>Enroll and Get Certified</a>
                </Button>
            </section>

            {/* Testimonials Section */}
            {/* <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">What Our Students Say</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map(({ id, name, feedback, photo }) => (
                        <motion.div
                            key={id}
                            className="p-12 m-4 border-2 shadow-md cursor-pointer transition-transform transform border-blue-600 hover:bg-[#F3F4F6] hover:scale-105 hover:shadow-yellow-500 hover:border-yellow-500"
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
            </section> */}

        </div>
    );
};

export default CoursePage;
