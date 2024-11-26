import CourseCard from "@/components/CourseCard";
import courses from "@/data/courses";

const CoursesPage = () => {
    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
                Our <span className="text-orange-500">Courses</span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                ))}
            </div>
        </div>
    );
};

export default CoursesPage;
