import ContactForm from "@/components/ContactForm";
import LineDivider from "@/components/dividers/LineDivider";

const ContactSection = () => {
    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <LineDivider text="Get in Touch" highlightedText="##" />
                <p className="text-center text-sm text-gray-500 mb-8">
                    We'd love to hear from you! Fill out the form below or reach out through email or WhatsApp.
                </p>
                <ContactForm />
            </div>
        </section>
    );
};

export default ContactSection;
