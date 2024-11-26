"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const CourseCard = ({ id, name, description, price, icon, route, enroll }) => {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(route)} // Navigate to course page
            className="p-8 m-4 border rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 hover:shadow-yellow-400 hover:border-yellow-400"
        >
            <div className="w-16 h-16 mx-auto mb-3 overflow-hidden rounded-full border-2 border-gray-300">
                <Image
                    src={icon}
                    alt={`${name} icon`}
                    width={64}
                    height={64}
                    className="object-cover"
                />
            </div>
            <h2 className="text-lg font-bold text-center">{name}</h2>
            <p className="text-sm text-gray-600 mt-1 text-center">{description}</p>
            <p className="text-base font-semibold text-center mt-2">{price}</p>
            <div className="text-center mt-2">
                <Button
                    as="a"
                    href={enroll} // Navigate to the enroll link
                    target="_blank" // Open in a new tab
                    rel="noopener noreferrer" // Security for external links
                    variant="blue_orange"
                    size="sm"
                    onClick={(e) => e.stopPropagation()} // Prevent card click
                >
                    Enroll Now
                </Button>
            </div>
        </div>
    );
};

export default CourseCard;
