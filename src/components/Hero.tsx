"use client";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Link from "next/link";
import Button from "./Button";
import heroAnimation from "../assets/hero-animation.json";

export default function Hero() {
  const stats = [
    { number: "50+", label: "Prizes" },
    { number: "25+", label: "Countries" },
    { number: "45", label: "Days Left" },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50"
    >
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          {/* Headline */}
          <h1
            className="text-4xl md:text-5xl font-extrabold leading-snug text-gray-900"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Unlock your child’s potential with{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              prestigious scholarships
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
            Start with a free foundation exam, earn IIT certifications, and
            advance to compete for international tours, cash prizes, and
            coaching scholarships.
          </p>

          {/* CTA Row */}
          <div className="mt-8 flex flex-wrap md:flex-nowrap gap-4">
            <Link href="/register">
              <Button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md hover:shadow-lg transition">
                Register for FREE
              </Button>
            </Link>
            <Link href="/sample-papers">
              <Button className="px-6 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 font-medium shadow-sm hover:bg-gray-50 transition">
                Download Sample Papers
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right Animation */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="w-[340px] md:w-[500px]">
            <Lottie animationData={heroAnimation} loop />
          </div>
        </motion.div>
      </div>

      {/* Decorative pastel blobs */}
      <div className="absolute -bottom-20 -left-16 w-56 h-56 bg-pink-200 opacity-25 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -top-24 -right-16 w-72 h-72 bg-blue-200 opacity-20 rounded-full blur-3xl animate-pulse" />
    </section>
  );
}
