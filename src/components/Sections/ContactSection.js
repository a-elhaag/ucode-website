import ContactForm from "@/components/ContactForm";

const ContactSection = () => {
    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
                    Get in <span className="text-orange-500">Touch</span>
                </h2>
                <p className="text-center text-sm text-gray-500 mb-8">
                    We'd love to hear from you! Fill out the form below or reach out through email or WhatsApp.
                </p>
                <ContactForm />
            </div>
        </section>
    );
};

export default ContactSection;
