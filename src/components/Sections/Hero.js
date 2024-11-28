"use client";

import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <section
            className="text-center bg-cover bg-center bg-no-repeat p-10 relative h-screen"
            style={{ backgroundImage: "url('/hero-bg.svg')" }} // Update with your background image path
        >
            {/* Overlay Shade */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
                {/* Hero Text */}
                <h1 className="text-4xl font-bold text-white">
                    U<span className="text-orange-500">-</span>Code
                    <span className="text-orange-500">;</span> We Fix
                </h1>
                <p className="mt-4 text-lg text-gray-200">
                    Where your journey in coding and innovation begins.
                </p>
                {/* Call-to-Action Button */}
                <div className="mt-6">
                    <Button variant="blue_orange" size="lg" asChild>
                        <a href="/courses">Explore Courses</a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
