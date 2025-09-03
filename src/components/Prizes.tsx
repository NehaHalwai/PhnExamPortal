// src/components/Prizes.tsx
"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import trophyAnimation from "../assets/prizes.json"; // Trophy/confetti animation
import cashAnimation from "../assets/cash.json"; // Cash animation
import certificateAnimation from "../assets/certificate.json"; // IIT certificate animation

interface Prize {
  type: "grand" | "lottie";
  title: string;
  description: string;
  amount: string;
  image?: string;
  animation?: any;
}

const prizes: Prize[] = [
  {
    type: "grand",
    title: "Grand Prize: International Tour",
    description:
      "All-expenses-paid trip to USA, UK, Japan, Australia & Singapore",
    amount: "₹2,50,000",
    image: "/assets/internationaltour.jpg",
  },
  {
    type: "lottie",
    title: "2nd-5th Prize: Cash Awards",
    description: "Cash prizes from ₹5 Lakh to ₹2 Lakh",
    amount: "₹1,00,000",
    animation: cashAnimation,
  },
  {
    type: "lottie",
    title: "6th-25th Prize: IIT Certification + Cash",
    description: "Prestigious IIT certificates & cash prizes ₹50K - ₹2 Lakh",
    amount: "₹1,00,000",
    animation: certificateAnimation,
  },
  {
    type: "lottie",
    title: "26th-100th Prize: Academic Scholarships",
    description: "Scholarship vouchers for top coaching institutes",
    amount: "₹50,000",
    animation: certificateAnimation,
  },
];

export default function Prizes() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-50 via-indigo-50 to-pink-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1A2B4C]">
          Amazing Rewards & Scholarships
        </h2>

        {/* Grand Prize Row */}
        {prizes
          .filter((p) => p.type === "grand")
          .map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="w-full bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform p-6 mb-10 flex flex-col md:flex-row items-center gap-6 overflow-hidden"
            >
              {/* Image */}
              <div className="w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex-1 text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#1A2B4C]">
                  {p.title}
                </h3>
                <p className="text-gray-600 mb-4">{p.description}</p>
                <p className="text-3xl md:text-4xl font-bold text-[#6C63FF]">
                  {p.amount}
                </p>
              </div>
            </motion.div>
          ))}

        {/* Other Prizes Row */}
        <div className="grid md:grid-cols-3 gap-10">
          {prizes
            .filter((p) => p.type === "lottie")
            .map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform p-6 flex flex-col items-center relative overflow-hidden"
              >
                {/* Decorative gradient circle */}
                <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 opacity-40 animate-pulse"></div>

                <div className="relative w-36 h-36 mb-4">
                  <Lottie
                    animationData={p.animation}
                    loop
                    className="w-full h-full"
                  />
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#1A2B4C] z-10">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-4 text-center z-10">
                  {p.description}
                </p>
                <p className="text-2xl md:text-3xl font-bold text-[#6C63FF] z-10">
                  {p.amount}
                </p>
              </motion.div>
            ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: prizes.length * 0.2 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="/register"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition transform"
          >
            Register Now & Win Prizes
          </a>
        </motion.div>
      </div>
    </section>
  );
}
