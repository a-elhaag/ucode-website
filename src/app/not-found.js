"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-6">
            <h1 className="text-7xl font-extrabold text-blue-600 animate-bounce">
                4<span className="text-yellow-500">0</span>4
            </h1>
            <p className="text-lg text-gray-700 mt-4">
                Oops! It seems you’re lost in the code jungle.
            </p>
            <p className="text-base text-gray-500 mb-8">
                Don't worry! Let’s guide you back home.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* Button */}
                <Button
                    as="a"
                    href="/"
                    variant="blue_yellow"
                    size="lg"
                    className="shadow-lg hover:shadow-xl transition-all"
                >
                    Go Home
                </Button>
                <Link
                    href="/contact"
                    className="text-blue-600 hover:text-yellow-500 underline-offset-4 hover:underline transition-all"
                >
                    Contact Support
                </Link>
            </div>
        </div>
    );
}
