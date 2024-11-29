"use client";

import InstructorCard from "@/components/InstructorCard";
import instructors from "@/data/instructors";
import LineDivider from "@/components/LineDivider";

const InstructorSection = () => {
    const topInstructor = instructors.find((instructor) => instructor.isTopMonthly);

    return (
        <section className="py-16 bg-[#004AAD] text-white relative">
            <div className="container mx-auto px-6">
                <LineDivider text="Monthly Top Instructor" highlightedText="##" />
                <div className="flex justify-center items-center">
                    {topInstructor ? (
                        <div className="relative group max-w-md w-full">
                            <div className="absolute bg-yellow-400 w-full h-full rounded-[30px] transform translate-y-4 translate-x-2 transition group-hover:translate-y-2 group-hover:translate-x-1"></div>
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
