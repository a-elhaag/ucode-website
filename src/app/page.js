"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Sections/Home/Hero";
import InstructorSection from "@/components/Sections/Home/InstructorSection";
import ContactSection from "@/components/Sections/Home/ContactSection";
import TestimonialsSection from "@/components/Sections/Home/TestimonialsSection";
import ExploreCoursesSection from "@/components/Sections/Home/ExploreCoursesSection";
import FAQSection from "@/components/Sections/Home/FAQSection";

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <TestimonialsSection />
      </motion.div>

      {/* Explore Courses Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <ExploreCoursesSection />
      </motion.div>

      {/* Instructor Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <InstructorSection />
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <FAQSection />
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <ContactSection />
      </motion.div>
    </>
  );
}
