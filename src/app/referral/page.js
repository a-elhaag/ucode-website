'use client';

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import LineDivider from "@/components/LineDivider";

const referralSteps = [
    {
        title: "Sign Up",
        description: "Complete our referral partner application form to get started",
        icon: "📝"
    },
    {
        title: "Share Your Link",
        description: "Get your unique referral link and share it with potential students",
        icon: "🔗"
    },
    {
        title: "Earn Rewards",
        description: "Earn up to 20% commission for each successful enrollment",
        icon: "💰"
    }
];

export default function ReferralPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                    Join Our Referral Program
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Partner with us and earn rewards while helping others start their coding journey
                </p>
                <Button variant="blue_yellow" size="lg" asChild>
                    <a href="https://forms.office.com/e/aG7je2h6Xw">Become a Partner 🚀</a>
                </Button>
            </section>

            {/* How It Works Section */}
            <section className="container mx-auto px-4 py-16 bg-gray-50 rounded-[30px]">
                <LineDivider text="How It Works" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {referralSteps.map((step, index) => (
                        <Card key={index} variant="promotional" className="transform hover:scale-105 transition-all duration-300">
                            <CardHeader className="text-center">
                                <div className="text-4xl mb-4">{step.icon}</div>
                                <h3 className="text-xl font-bold text-blue-600">{step.title}</h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-center">{step.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Benefits Section */}
            <section className="container mx-auto px-4 py-16">
                <LineDivider text="Why Partner With Us?" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {/* Card 1 */}
                    <Card variant="promotional" className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
                        <div className="flex items-center mb-4">
                            <h3 className="text-xl font-bold text-blue-600 ml-4">Competitive Commission</h3>
                        </div>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                            <li>Earn up to 20% commission per successful referral</li>
                            <li>Monthly payouts</li>
                        </ul>
                    </Card>
                    {/* Card 2 */}
                    <Card variant="promotional" className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
                        <div className="flex items-center mb-4">
                            <h3 className="text-xl font-bold text-blue-600 ml-4">Dedicated Support</h3>
                        </div>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                            <li>Marketing materials provided</li>
                            <li>Direct access to our support team</li>
                        </ul>
                    </Card>
                </div>
            </section>


            {/* CTA Section */}
            <section className="container mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
                <Button variant="blue_yellow" size="lg" asChild>
                    <a href="https://forms.office.com/e/aG7je2h6Xw">Join Now</a>
                </Button>
            </section>
        </main >
    );
}
