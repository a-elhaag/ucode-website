import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import courses from "../../data/courses";

const getRandomPosition = () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
});

const BackgroundIcon = ({ course, size }) => {
    const position = getRandomPosition();
    return (
        <motion.div
            className={`absolute w-${size} h-${size}`}
            style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
                transform: 'translate(-50%, -50%)'
            }}
            animate={{
                y: [0, 10, 0],
                rotate: [0, 5, -5, 0]
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
            }}
        >
            <Image
                src={course.icon}
                alt={course.name}
                width={size * 4}
                height={size * 4}
                className="object-contain"
            />
        </motion.div>
    );
};

const EnrollSection = () => {
    return (
        <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-20">
                {courses.map((course, index) => (
                    <BackgroundIcon
                        key={course.id}
                        course={course}
                        size={20 + Math.floor(Math.random() * 20)}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-orange-500 to-yellow-400 text-transparent bg-clip-text">
                        Level Up Your Coding Journey!
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        🚀 New courses and levels are now available! Master everything from Python to Web Development
                        with our expanded curriculum.
                    </p>

                    <div className="space-y-4">
                        <Link href="/courses">
                            <Button
                                variant="blue_orange"
                                size="lg"
                                className="text-lg px-12 py-6"
                            >
                                Explore New Courses 🎯
                            </Button>
                        </Link>

                        <p className="text-sm text-gray-500 mt-4">
                            Limited spots available. Enroll now to secure your place!
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default EnrollSection;
