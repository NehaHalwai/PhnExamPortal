// src/components/FAQ.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What are the registration fees for both levels?",
    answer:
      "Level 1 (Foundation) is free. Level 2 (Advanced) requires ₹1,000 for eligible students who pass Level 1.",
  },
  {
    question: "How is the exam conducted and where can I take it?",
    answer:
      "The exam is conducted offline at authorized exam centers across major cities in India. OMR sheets are used for evaluation.",
  },
  {
    question: "How does the 2-level exam system work?",
    answer:
      "Level 1 is a free foundation exam open to all students. Only students who pass Level 1 can attempt Level 2, which is advanced and offers major prizes.",
  },
  {
    question: "What subjects are covered in each level?",
    answer:
      "Level 1: Math, Science, English, General Knowledge. Level 2: Physics, Chemistry, Math, English, Advanced Aptitude.",
  },
  {
    question: "Are the prizes really genuine? How do we verify?",
    answer:
      "All prizes are verified by the PHN Exam Portal and backed by educational institutions. Winners are announced officially.",
  },
  {
    question: "How are winners selected and when are results declared?",
    answer:
      "Winners are selected based on performance in each level. Level 1 results are declared shortly after the exam, Level 2 results follow after evaluation.",
  },
  {
    question: "How is student data protected and what about privacy?",
    answer:
      "All student data is encrypted and stored securely with bank-level security protocols. Parent dashboards ensure controlled access.",
  },
  {
    question: "What if my child cannot attend the exam on the scheduled date?",
    answer:
      "Students must attend on the scheduled exam date. Rescheduling may not be available, but contact our support for exceptional cases.",
  },
  {
    question: "What do I need to bring to the exam center?",
    answer:
      "Valid school ID, recent photograph, and parent/guardian consent are required.",
  },
  {
    question: "Is there any preparation material available?",
    answer:
      "Yes, sample papers are available for download from the portal to help students prepare.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-r from-blue-50 via-indigo-50 to-pink-50"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12 text-lg">
          Find answers to common questions about the scholarship exam process,
          prizes, security, and more.
        </p>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border rounded-2xl p-6 bg-white shadow-md hover:shadow-lg transition"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left flex justify-between items-center text-lg font-medium text-gray-900"
              >
                <span>{faq.question}</span>
                <span className="text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-gray-700 text-base leading-relaxed"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
