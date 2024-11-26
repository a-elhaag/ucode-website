"use client";
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
        </div>
    );
};

export default SignUpPage;
