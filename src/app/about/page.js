"use client";

import aboutUs from "@/data/aboutUs";
import { Button } from "@/components/ui/button";

const AboutUsPage = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-6">
                {/* Title */}
                <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">
                    {aboutUs.title}
                </h1>

                {/* Description */}
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                    {aboutUs.description.map((paragraph, index) => (
                        <p key={index} className="text-center">
                            {paragraph}
                        </p>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-10">
                    <p className="text-sm text-gray-600 mb-4">{aboutUs.contactCTA}</p>
                    <Button
                        as="a"
                        href="/contact"
                        variant="blue_orange"
                        size="lg"
                        className="shadow-lg hover:shadow-xl"
                    >
                        Contact Us
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default AboutUsPage;
