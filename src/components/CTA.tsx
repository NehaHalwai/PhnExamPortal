// src/components/CTA.tsx
"use client";
import Button from "./Button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-pink-300 opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -right-16 w-80 h-80 bg-blue-300 opacity-25 rounded-full blur-3xl animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto text-center px-6 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Ready to Unlock Your Child's Potential?
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto">
          Register now and take the first step towards prestigious scholarships,
          certifications, and amazing prizes!
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link href="/register">
            <Button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-md hover:shadow-lg transition">
              Register Now
            </Button>
          </Link>
          <Link href="/sample-papers">
            <Button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-md hover:shadow-lg transition">
              Download Sample Papers
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
