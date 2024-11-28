"use client";

import Image from "next/image";

const InstructorCard = ({ name, description, image }) => {
    return (
        <div
            className="p-6 m-4 bg-white border-2 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-orange-500"
            style={{
                borderRadius: "20px", // Slightly rounded corners
                borderColor: "#004aad", // Blue border
                maxWidth: "300px", // Control card width
                margin: "auto", // Center the card
            }}
        >
            <div
                className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-4"
                style={{
                    borderColor: "#004aad", // Blue border for the image
                }}
            >
                <Image
                    src={image}
                    alt={`${name}'s picture`}
                    width={96}
                    height={96}
                    className="object-cover"
                />
            </div>
            <h3 className="text-lg font-bold text-center text-blue-600">{name}</h3>
            <p className="text-sm text-gray-600 mt-2 text-center">{description}</p>
        </div>
    );
};

export default InstructorCard;
