import InstructorCard from "@/components/InstructorCard";
import instructors from "@/data/instructors";

export default function InstructorsPage() {
    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Our Instructors</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {instructors.map((instructor) => (
                    <InstructorCard key={instructor.id} {...instructor} />
                ))}
            </div>
        </div>
    );
}
