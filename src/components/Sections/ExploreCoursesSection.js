"use client";

import CourseCard from "@/components/CourseCard";
import courses from "@/data/courses";
import { Button } from "@/components/ui/button";
import LineDivider from "@/components/LineDivider";

const ExploreCoursesSection = () => {
    const featuredCourses = courses.slice(0, 3);

    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <LineDivider text="Explore Our Courses" highlightedText=">>" />
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
