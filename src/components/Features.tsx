// src/components/Features.tsx
"use client";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  DocumentCheckIcon,
  MapIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const eligibilityFeatures = [
  {
    title: "Academic Level",
    desc: "Students currently enrolled in grades 6-12 in any recognized school.",
    icon: AcademicCapIcon,
  },
  {
    title: "Documents Required",
    desc: "Valid school ID, recent photograph, and parent/guardian consent.",
    icon: DocumentCheckIcon,
  },
  {
    title: "Exam Centers",
    desc: "Authorized offline exam centers across major cities in India for secure exam conduct.",
    icon: MapIcon,
  },
  {
    title: "Age Limit",
    desc: "Age should correspond to the grade level (11-18 years typically).",
    icon: ClockIcon,
  },
];

const examLevels = [
  {
    level: "Level 1 - Basic",
    price: "FREE",
    duration: "120 mins",
    description:
      "Foundation exam for all participants. IIT Certification guaranteed.",
    targetGrades: "Grade 6-12",
    questions: "100 MCQs",
    subjects: "Math, Science, English, General Knowledge",
    eligibility: "Open to all students",
    format: "Offline exam at authorized centers with OMR sheets",
  },
  {
    level: "Level 2 - Advanced",
    price: "₹1,000",
    duration: "150 mins",
    description:
      "Advanced exam for Level 1 qualified students. Compete for major prizes.",
    targetGrades: "Grade 6-12",
    questions: "120 MCQs",
    subjects: "Physics, Chemistry, Math, English, Advanced Aptitude",
    eligibility: "Only for Level 1 qualified students",
    format: "Offline exam at authorized centers with OMR sheets",
  },
];

const examCenters = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Chandigarh",
  "Bhopal",
  "Indore",
  "Nagpur",
  "Kochi",
  "and many more",
];

export default function Features() {
  const [openLevel, setOpenLevel] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#F4F6F8]">
      <div className="container mx-auto px-6 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 text-[#1A2B4C]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Eligibility & Exam Pattern
        </h2>

        {/* Eligibility Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {eligibilityFeatures.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all flex flex-col items-center"
            >
              <f.icon className="w-12 h-12 text-[#6C63FF] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Exam Levels Collapsible Cards */}
        <div className="max-w-5xl mx-auto mb-16">
          {examLevels.map((level, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white rounded-3xl shadow-md mb-6 cursor-pointer overflow-hidden"
            >
              <div
                className="flex justify-between items-center p-6 hover:bg-blue-50 transition"
                onClick={() => setOpenLevel(openLevel === i ? null : i)}
              >
                <h3 className="text-xl font-semibold text-[#1A2B4C]">
                  {level.level}
                </h3>
                <span className="text-lg font-bold text-[#6C63FF]">
                  {level.price}
                </span>
              </div>
              {openLevel === i && (
                <div className="px-6 pb-6 text-left text-gray-700 space-y-2">
                  <p>
                    <strong>Duration:</strong> {level.duration}
                  </p>
                  <p>
                    <strong>Description:</strong> {level.description}
                  </p>
                  <p>
                    <strong>Target Grades:</strong> {level.targetGrades}
                  </p>
                  <p>
                    <strong>Questions:</strong> {level.questions}
                  </p>
                  <p>
                    <strong>Subjects:</strong> {level.subjects}
                  </p>
                  <p>
                    <strong>Eligibility:</strong> {level.eligibility}
                  </p>
                  <p>
                    <strong>Exam Format:</strong> {level.format}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Exam Centers */}
        <div className="bg-white rounded-3xl shadow-md p-8 max-w-5xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2B4C]">
            Exam Centers Available
          </h3>
          <p className="text-gray-600 mb-2">
            Authorized offline examination centers in 50+ cities across India:
          </p>
          <div className="flex flex-wrap gap-4 mt-2 justify-center">
            {examCenters.map((center, i) => (
              <span
                key={i}
                className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
              >
                {center}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
