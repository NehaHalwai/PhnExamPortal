"use client";
import { motion } from "framer-motion";
import {
  UserCircleIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";

const steps = [
  { title: "Register & Login - PHN Exam", icon: UserCircleIcon },
  { title: "Attempt Level 1 Exam", icon: AcademicCapIcon },
  { title: "Attempt Level 2 Exam", icon: CheckCircleIcon },
  { title: "Win & Claim International Tour", icon: TrophyIcon },
];

export default function Timeline() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-50 via-indigo-50 to-pink-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#1A2B4C]">
          Exam Journey Timeline
        </h2>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex-1 flex flex-col items-center relative"
            >
              {/* Circular icon */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 shadow-lg mb-4">
                <step.icon className="w-10 h-10 text-white" />
              </div>

              {/* Step title */}
              <h3 className="text-xl md:text-2xl font-semibold text-[#1A2B4C] max-w-xs">
                {step.title}
              </h3>

              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 right-[-50%] w-1/2 h-1 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-full z-0" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile vertical connectors */}
        <div className="md:hidden flex flex-col items-center mt-12">
          {steps.slice(0, -1).map((_, i) => (
            <div
              key={i}
              className="w-1 h-12 bg-gradient-to-b from-blue-300 via-purple-300 to-pink-300 rounded-full my-4"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
