"use client";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
        </div>
    );
};

export default SignInPage;
