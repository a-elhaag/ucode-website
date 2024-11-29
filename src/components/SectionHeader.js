"use client";

import { motion } from "framer-motion";

const SectionHeader = ({ title, subtitle, highlightedText = "//", className = "" }) => {
    return (
        <div className={`text-center py-8 ${className}`}>
            {/* Heading */}
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <span className="text-orange-500">{highlightedText} </span>
                {title}
            </motion.h2>

            {/* Subtitle */}
            {subtitle && (
                <motion.p
                    className="text-sm md:text-base text-gray-600 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    {subtitle}
                </motion.p>
            )}

            {/* Divider */}
            <motion.div
                className="relative py-4"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ transformOrigin: "center" }}
            >
                <div className="h-[2px] bg-gray-300 w-full"></div>
            </motion.div>
        </div>
    );
};

export default SectionHeader;
