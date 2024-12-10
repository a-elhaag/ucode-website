"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const CourseCard = ({ id, name, description, price, icon, route, enroll }) => {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(route)} // Navigate to course page
            className="p-6 m-4 border-2 shadow-md cursor-pointer transition-transform transform border-blue-600 hover:bg-[#F3F4F6] hover:scale-105 hover:shadow-orange-500 hover:border-orange-500 flex flex-col justify-between"
            style={{
                borderRadius: "30px",
                width: "280px", // Fixed width
                height: "400px", // Fixed height
            }}
        >
            <div>
                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-3 overflow-hidden rounded-full border-2 border-blue-600">
                    <Image
                        src={icon}
                        alt={`${name} icon`}
                        width={84}
                        height={84}
                        className="object-cover"
                    />
                </div>
                {/* Course Name */}
                <h2 className="text-lg font-bold text-center text-blue-600">{name}</h2>
            </div>
            <div>
                {/* Course Description */}
                <div className="flex justify-center">
                    <p className="text-sm text-[#737373] mt-1 text-center">
                        {description}
                    </p>
                </div>
            </div>

            {/* Price and Button */}
            <div className="mt-4">
                <p className="text-base font-semibold text-center text-orange-500">
                    EGP {price} per Level
                </p>
                <div className="text-center mt-4">
                    <Button
                        asChild
                        variant="blue_orange"
                        size="sm"
                        onClick={(e) => e.stopPropagation()} // Prevent card click
                    >
                        <a
                            href={enroll} // Navigate to the enroll link
                            target="_blank" // Open in a new tab
                            rel="noopener noreferrer" // Security for external links
                        >
                            Enroll Now
                        </a>
                    </Button>
                </div>
            </div>
        </div >
    );
};

export default CourseCard;
