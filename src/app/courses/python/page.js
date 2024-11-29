"use client";

import CurriculumSection from "@/components/Sections/CousrePage/CurriculumSection";
import pythonCurriculum from "@/data/curriculum/python";

const PythonCoursePage = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-blue-600 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold">Python Programming</h1>
                    <p className="text-lg mt-4">
                        Learn Python from scratch and build your first projects. This course is perfect for beginners and those looking to sharpen their skills.
                    </p>
                </div>
            </div>

            {/* Curriculum Section */}
            <CurriculumSection curriculum={pythonCurriculum} />
        </div>
    );
};

export default PythonCoursePage;
