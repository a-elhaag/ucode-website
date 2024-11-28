"use client";

import CourseCard from "@/components/CourseCard"; // Assuming this component is ready
import courses from "@/data/courses"; // Data for courses
import { Button } from "@/components/ui/button";

const ExploreCoursesSection = () => {
    // Show only the first 3 featured courses
    const featuredCourses = courses.slice(0, 3);

    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
                    Explore Our <span className="text-orange-500">Courses</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredCourses.map((course) => (
                        <CourseCard key={course.id} {...course} />
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Button variant="blue_orange" size="lg" asChild>
                        <a href="/courses">Explore Courses</a>
                    </Button>

                </div>
            </div>
        </section>
    );
};

export default ExploreCoursesSection;
