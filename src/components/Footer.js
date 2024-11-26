"use client";

import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn, FaMedium, FaYoutube, FaTiktok, FaTwitter, FaTelegramPlane } from "react-icons/fa";
import socialMediaLinks from "../data/socialMediaLinks";

const Footer = () => {
    const icons = {
        facebook: <FaFacebookF />,
        instagram: <FaInstagram />,
        whatsapp: <FaWhatsapp />,
        linkedin: <FaLinkedinIn />,
        medium: <FaMedium />,
        youtube: <FaYoutube />,
        tiktok: <FaTiktok />,
        x: <FaTwitter />, // X is represented by Twitter icon
        telegram: <FaTelegramPlane />,
    };

    return (
        <footer className="bg-[#004AAD] text-white py-6">
            <div className="container mx-auto px-4 text-center">
                {/* All Rights Reserved */}
                <p className="text-sm mb-4">&copy; 2024 U-Code. All rights reserved.</p>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-6">
                    {Object.keys(socialMediaLinks).map((key) => {
                        const link = socialMediaLinks[key];
                        return (
                            link && (
                                <a
                                    key={key}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-orange-500 transition"
                                    aria-label={key}
                                >
                                    {icons[key]}
                                </a>
                            )
                        );
                    })}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
