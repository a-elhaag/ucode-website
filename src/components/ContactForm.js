"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import socialMediaLinks from "@/data/socialMediaLinks";

export default function ContactForm() {
    const [state, handleSubmit] = useForm("your-formspree-id");

    if (state.succeeded) {
        return (
            <div className="text-center p-10 bg-[#F3F4F6] min-h-screen flex items-center justify-center">
                <div
                    className="bg-white p-8 shadow-lg max-w-lg"
                    style={{ borderRadius: "30px" }}
                >
                    <h2 className="text-3xl font-bold text-blue-600">Thank You!</h2>
                    <p className="mt-2 text-lg text-gray-600">
                        We have received your message. We will get back to you shortly.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="p-10 bg-[#F3F4F6] min-h-screen flex items-center justify-center">
            <div
                className="bg-white p-8 shadow-lg max-w-lg w-full"
                style={{ borderRadius: "30px" }}
            >
                <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
                    Contact Us
                </h1>
                <p className="text-center text-sm text-gray-500 mb-4">
                    Email us at:{" "}
                    <a
                        href="mailto:contact@ucode.live"
                        className="text-orange-500 underline hover:text-blue-600"
                    >
                        contact@ucode.live
                    </a>
                </p>
                <p className="text-center text-sm text-gray-500 mb-6">
                    Reach us on WhatsApp:{" "}
                    <a
                        href={socialMediaLinks.whatsapp || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 underline hover:text-blue-600"
                    >
                        Chat Now
                    </a>
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    {/* Email Field */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    {/* Message Field */}
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Message
                        </label>
                        <Textarea
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="Enter your message"
                            required
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        variant="blue_orange"
                        size="lg"
                        disabled={state.submitting}
                        className="w-full"
                        style={{ borderRadius: "30px" }}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
}
