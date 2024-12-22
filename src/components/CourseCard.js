"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const CourseCard = ({ id, name, description, price, icon, route, enroll, discount, activePromo }) => {
    const router = useRouter();
    const discountedPrice = price - (price * discount / 100);

    return (
        <div
            onClick={() => router.push(route)}
            className="p-6 m-4 border-2 shadow-md cursor-pointer transition-transform transform border-blue-600 hover:bg-[#F3F4F6] hover:scale-105 hover:shadow-yellow-500 hover:border-yellow-500 flex flex-col justify-between"
            style={{
                borderRadius: "30px",
                width: "280px",
                height: "400px",
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
                <div className="flex flex-col items-center space-y-1">
                    {discount > 0 && (
                        <div className="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded-full">
                            {activePromo}: {discount}% OFF
                        </div>
                    )}
                    <div className="flex items-center gap-2 justify-center">
                        <span className={`text-base ${discount > 0 ? 'line-through text-gray-400' : 'font-semibold text-yellow-500'}`}>
                            EGP {price}
                        </span>
                        {discount > 0 && (
                            <span className="text-lg font-bold text-yellow-500">
                                EGP {discountedPrice.toFixed(0)}
                            </span>
                        )}
                        <span className="text-sm text-gray-500">per Level</span>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <Button
                        asChild
                        variant="blue_yellow"
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
