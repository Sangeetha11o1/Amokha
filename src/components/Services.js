import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaBrain, FaHeartbeat, FaGraduationCap, FaHandsHelping } from "react-icons/fa";

export default function Services() {
  return (
    <main className="bg-gradient-to-b from-green-50 to-green-100 min-h-screen py-10 px-4 md:px-10 lg:px-20">
      <section className="mb-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-green-800 mb-4"
        >
          🌿 Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-700 max-w-3xl mx-auto"
        >
          We offer comprehensive Skill Development Programs, Competitive Exam Coaching, Wellness Courses, and Career Guidance — designed and delivered by a dedicated team of experts from various medical and wellness backgrounds.
        </motion.p>
      </section>

      {/* Section 1 */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-lg shadow-md p-8 mb-10"
      >
        <h2 className="text-3xl font-bold text-green-700 mb-4 flex items-center">
          <FaBrain className="mr-2 text-green-500" /> Skill Development & Certificate Courses
        </h2>
        <ul className="list-none space-y-2 text-gray-700">
          {[
            "Panchakarma & Ayurvedic Treatment Protocols",
            "Nutrition & Dermanutrition",
            "Cosmetology & Trichology (Ayurveda + Modern)",
            "Psychology & Counseling",
            "AI Tools for Clinical Practice",
            "Product Making (Basic to Advanced)",
            "Clinical Case Studies & Practice Setup",
            "Research Methodology",
            "All topic-based classes under one roof"
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" /> {item}
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Section 2 */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-lg shadow-md p-8 mb-10"
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-4 flex items-center">
          <FaGraduationCap className="mr-2 text-blue-500" /> AIAPGET & Competitive Exam Coaching
        </h2>
        <ul className="list-none space-y-2 text-gray-700">
          {[
            "AIAPGET | UPSC | PSC | NET | JRF (Ayurveda)",
            "Live + Recorded Classes",
            "Mock Tests & Daily MCQs",
            "Subject-Wise Expert Guidance",
            "Personalized Mentoring & Exam Strategies"
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <FaCheckCircle className="text-blue-500 mr-2" /> {item}
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Section 3 */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-lg shadow-md p-8 mb-10"
      >
        <h2 className="text-3xl font-bold text-purple-700 mb-4 flex items-center">
          <FaHeartbeat className="mr-2 text-purple-500" /> Wellness Courses for Everyone
        </h2>
        <ul className="list-none space-y-2 text-gray-700">
          {[
            "Meditation & Pranayama",
            "Yoga for Stress Relief",
            "Face Yoga & Natural Skincare",
            "Sound Healing & Deep Relaxation",
            "Ayurvedic Home Remedies",
            "Detox & Dinacharya",
            "Color, Music & Aroma Therapy",
            "Weekly Happiness & Mental Wellness Sessions"
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <FaCheckCircle className="text-purple-500 mr-2" /> {item}
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Section 4 */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-lg shadow-md p-8 mb-10"
      >
        <h2 className="text-3xl font-bold text-pink-700 mb-4 flex items-center">
          <FaHandsHelping className="mr-2 text-pink-500" /> Career Guidance
        </h2>
        <h3 className="text-xl font-semibold text-pink-600 mb-2">For Students</h3>
        <ul className="list-none space-y-2 text-gray-700 mb-6">
          {[
            "Career Guidance after 12th (All Streams – Medical & Non-Medical)",
            "Field Selection Support (AYUSH, BDS, MBBS, Nursing, Paramedical etc.)",
            "Personality Development & Communication Skills",
            "Interview Preparation & Public Speaking",
            "Study Techniques & Goal Setting"
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <FaCheckCircle className="text-pink-500 mr-2" /> {item}
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold text-pink-600 mb-2">For AYUSH & BDS Doctors</h3>
        <ul className="list-none space-y-2 text-gray-700">
          {[
            "Personalized career planning and specialization guidance",
            "Clinical practice setup and digital tools training",
            "Opportunities in India and abroad",
            "Guidance for higher studies, licensing exams, and alternative career paths"
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <FaCheckCircle className="text-pink-500 mr-2" /> {item}
            </li>
          ))}
        </ul>
      </motion.section>
    </main>
  );
}
