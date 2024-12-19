"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false); // Track dropdown visibility

    return (
        <header className="flex items-center justify-between py-4 px-6 bg-gray-100 shadow-md relative">
            {/* Logo */}
            <div className="flex items-center">
                <Link href="/">
                    <Image
                        src="/Logo-Transparent.png"
                        alt="U-Code Logo"
                        width={120}
                        height={80}
                        className="h-auto"
                    />
                </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10">
                <Link
                    href="/"
                    className="text-blue-600 hover:text-orange-500 transition-colors"
                >
                    Home
                </Link>
                <Link
                    href="/about"
                    className="text-blue-600 hover:text-orange-500 transition-colors"
                >
                    About Us
                </Link>
                <Link
                    href="/courses"
                    className="text-blue-600 hover:text-orange-500 transition-colors"
                >
                    Courses
                </Link>
                <Link
                    href="/contact"
                    className="text-blue-600 hover:text-orange-500 transition-colors"
                >
                    Contact Us
                </Link>
                <Link
                    href="/referral"
                    className="text-blue-600 hover:text-orange-500 transition-colors"
                >
                    Referral Program
                </Link>

                <Link
                    href="/my-courses"
                    className="text-blue-600 hover:text-orange-500 transition-colors"
                >
                    My Courses
                </Link>
            </nav>


            {/* Mobile Section */}
            <div className="flex items-center space-x-4 md:hidden">
                {/* Hamburger Menu */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="p-2 text-blue-600 rounded-md focus:outline-none"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute right-0 top-16 bg-white rounded-lg shadow-lg w-48 z-50">
                    <Link
                        href="/"
                        className="block px-4 py-2 text-blue-600 hover:text-orange-500 hover:bg-gray-100 transition-colors"
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="block px-4 py-2 text-blue-600 hover:text-orange-500 hover:bg-gray-100 transition-colors"
                        onClick={() => setMenuOpen(false)}
                    >
                        About Us
                    </Link>
                    <Link
                        href="/courses"
                        className="block px-4 py-2 text-blue-600 hover:text-orange-500 hover:bg-gray-100 transition-colors"
                        onClick={() => setMenuOpen(false)}
                    >
                        Courses
                    </Link>
                    <Link
                        href="/contact"
                        className="block px-4 py-2 text-blue-600 hover:text-orange-500 hover:bg-gray-100 transition-colors"
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact Us
                    </Link>                    <Link
                        href="/referral"
                        className="block px-4 py-2 text-blue-600 hover:text-orange-500 hover:bg-gray-100 transition-colors"
                        onClick={() => setMenuOpen(false)}
                    >
                        Referral Program
                    </Link>

                    <Link
                        href="/my-courses"
                        className="block px-4 py-2 text-blue-600 hover:text-orange-500 hover:bg-gray-100 transition-colors"
                        onClick={() => setMenuOpen(false)}
                    >
                        My Courses
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
