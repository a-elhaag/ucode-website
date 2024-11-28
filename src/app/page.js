import Hero from "@/components/Sections/Hero";
import InstructorSection from "@/components/Sections/InstructorSection";
import ContactSection from "@/components/Sections/ContactSection";
import TestimonialsSection from "@/components/Sections/TestimonialsSection";
import ExploreCoursesSection from "@/components/Sections/ExploreCoursesSection";
import FAQSection from "@/components/Sections/FAQSection";


export default function Page() {
  return (
    <>
      <Hero />
      <TestimonialsSection />
      <ExploreCoursesSection />
      <InstructorSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
