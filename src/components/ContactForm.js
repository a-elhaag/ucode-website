"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mdkowewj");

    if (state.succeeded) {
        return (
            <div className="text-center p-10 bg-[#F3F4F6] min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md shadow-orange-500 max-w-lg">
                    <h2 className="text-3xl font-bold text-blue-600">Thank You!</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        We have received your message. We will get back to you shortly.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="p-10 bg-[#F3F4F6] min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md shadow-orange-500 max-w-lg w-full">
                <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
                    Contact Us
                </h1>
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
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Message
                        </label>
                        <Textarea
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="Enter your message"
                            required
                            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none hover:shadow-md hover:border-blue-400 hover:ring-1 hover:ring-blue-400 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        variant="blue_orange" // Updated variant
                        size="lg"
                        disabled={state.submitting}
                        className="w-full"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
}
