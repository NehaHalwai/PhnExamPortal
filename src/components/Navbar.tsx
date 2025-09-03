// src/components/Navbar.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="PHN Technology" width={120} height={120} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center font-medium text-gray-900">
          <Link href="/exams" className="hover:text-blue-500 transition">
            Exams
          </Link>
          <Link href="/about" className="hover:text-blue-500 transition">
            About
          </Link>
          <Link href="/prizes" className="hover:text-blue-500 transition">
            Prizes
          </Link>
          <Link href="#faq" className="hover:text-blue-500 transition">
            FAQ
          </Link>
          <Link href="/contact" className="hover:text-blue-500 transition">
            Contact
          </Link>

          {/* CTA Buttons */}
          <Link href="/login">
            <button className="px-4 py-2 rounded-lg bg-white text-blue-600 border border-blue-500 hover:bg-blue-50 font-semibold transition">
              Login
            </button>
          </Link>
          <Link href="/register">
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md hover:shadow-lg transition">
              Register
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-700 text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white px-6 pb-4 space-y-2 border-t border-gray-100"
          >
            <Link
              href="/exams"
              className="block py-2 hover:text-blue-500 transition"
            >
              Exams
            </Link>
            <Link
              href="/about"
              className="block py-2 hover:text-blue-500 transition"
            >
              About
            </Link>
            <Link
              href="#faq"
              className="block py-2 hover:text-blue-500 transition"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="block py-2 hover:text-blue-500 transition"
            >
              Contact
            </Link>
            <Link href="/login">
              <button className="w-full px-4 py-2 rounded-lg bg-white text-blue-600 border border-blue-500 hover:bg-blue-50 font-semibold transition">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md hover:shadow-lg transition">
                Register
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
