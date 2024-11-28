"use client";

import InstructorCard from "@/components/InstructorCard";
import instructors from "@/data/instructors";

const InstructorSection = () => {
    // Find the top instructor for the month
    const topInstructor = instructors.find((instructor) => instructor.isTopMonthly);

    return (
        <section
            className="py-16 relative"
            style={{
                backgroundColor: "#004AAD", // Blue background
                borderRadius: "30px", // Rounded corners for the section
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Subtle shadow
            }}
        >
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-bold text-white text-center mb-10">
                    Monthly <span className="text-orange-500">Top</span> Instructor
                </h2>

                <div className="flex justify-center items-center relative">
                    {topInstructor ? (
                        <div
                            className="relative group max-w-md w-full"
                        >
                            {/* Back Card */}
                            <div
                                className="absolute bg-yellow-400 w-full h-full rounded-[30px] transform translate-y-4 translate-x-2 transition group-hover:translate-y-2 group-hover:translate-x-1"
                                style={{ zIndex: 1 }}
                            ></div>

                            {/* Top Card */}
                            <div
                                className="relative bg-white p-6 border-2 border-blue-600 rounded-[30px] shadow-md transform transition group-hover:scale-105"
                                style={{ zIndex: 2 }}
                            >
                                <InstructorCard key={topInstructor.id} {...topInstructor} />
                            </div>
                        </div>
                    ) : (
                        <p className="text-white text-center text-lg">
                            No top instructor selected for this month.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default InstructorSection;
