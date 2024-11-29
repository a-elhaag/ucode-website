"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const CurriculumSection = ({ curriculum, imageMap = {} }) => {
    const [activeLevel, setActiveLevel] = useState(null);

    const toggleLevel = (index) => {
        if (curriculum[index]?.modules?.length > 0) {
            setActiveLevel(activeLevel === index ? null : index); // Toggle open/close
        }
    };

    return (
        <section className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
                Curriculum
            </h2>
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Section: Levels */}
                <div className="flex-1 space-y-6">
                    {curriculum.map((level, index) => (
                        <motion.div
                            key={index}
                            className={`relative p-4 bg-white border-2 rounded-[20px] shadow-md transition-transform transform hover:scale-105 cursor-pointer ${activeLevel === index
                                ? "border-yellow-400 shadow-lg hover:shadow-yellow-500"
                                : "border-gray-300 hover:shadow-lg hover:shadow-gray-300"
                                }`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            onClick={() => toggleLevel(index)}
                        >
                            {/* Level Title */}
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-bold text-blue-600">
                                    Level: {level.level}
                                </h3>
                                {level.modules?.length > 0 && (
                                    <motion.div
                                        initial={{ rotate: 0 }}
                                        animate={{
                                            rotate: activeLevel === index ? 180 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <span className="text-gray-400 text-lg">
                                            ⬇
                                        </span>
                                    </motion.div>
                                )}
                            </div>

                            {/* Expanded Content */}
                            <motion.div
                                initial={activeLevel === index ? { opacity: 0, height: 0 } : {}}
                                animate={activeLevel === index ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="overflow-hidden mt-4"
                            >
                                {level.modules?.length > 0 && level.modules.map((module, moduleIndex) => (
                                    <div
                                        key={moduleIndex}
                                        className="mb-4 bg-gray-100 p-4 rounded-[15px] shadow-inner"
                                    >
                                        <h4 className="text-orange-500 font-semibold mb-2">
                                            {module.moduleTitle}
                                        </h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            {module.lessons.map((lesson, lessonIndex) => (
                                                <li
                                                    key={lessonIndex}
                                                    className="text-sm"
                                                >
                                                    {lesson}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Right Section: Dynamic Content */}
                <div className="flex-1 hidden lg:flex items-center justify-center">
                    {activeLevel !== null && imageMap[activeLevel] ? (
                        <motion.img
                            src={imageMap[activeLevel]}
                            alt={`Level ${curriculum[activeLevel].level} Illustration`}
                            className="rounded-3xl shadow-lg max-w-full h-auto"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                    ) : (
                        <div className="text-center text-gray-400">
                            <p>Select a level to view more details</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CurriculumSection;
