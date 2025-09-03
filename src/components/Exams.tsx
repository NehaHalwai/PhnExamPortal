"use client";
import { motion } from "framer-motion";

const trustFeatures = [
  {
    title: "Data Protection",
    description:
      "Your personal information is encrypted and stored securely with bank-level security protocols.",
  },
  {
    title: "Secure Payments",
    description:
      "All transactions are processed through trusted payment gateways with SSL encryption.",
  },
  {
    title: "Transparent Process",
    description:
      "Complete transparency in exam conduct, evaluation, and result declaration process.",
  },
  {
    title: "No Hidden Costs",
    description:
      "Registration fee of ₹299 includes everything. No additional charges or obligations.",
  },
  {
    title: "Verified Credentials",
    description:
      "All certificates and prizes are verified and backed by educational institutions.",
  },
  {
    title: "Parent Dashboard",
    description:
      "Parents get real-time updates and access to their child's progress and results.",
  },
];

export default function Trust() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-50 via-indigo-50 to-pink-50">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Your Trust is Our Priority
        </h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto text-lg">
          We understand parents' concerns about their child's safety and data
          security. Here's how we ensure complete transparency and protection.
        </p>

        {/* Trust Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {trustFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-3xl shadow-md p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition-transform"
            >
              {/* Number Circle */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl font-bold mb-4">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* IIT Certificate Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: trustFeatures.length * 0.15 }}
          className="flex flex-col md:flex-row items-center justify-center gap-12"
        >
          {/* Certificate Image */}
          <div className="w-full md:w-96 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/assets/iit-patna-certificate.jpg" // Path is relative to public
              alt="IIT Patna Certificate"
              className="w-full h-auto object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Text Description */}
          <div className="max-w-md text-left">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Professional Academic Certification
            </h3>
            <p className="text-gray-700 mb-4">
              Every participant receives a verified IIT certificate upon
              completion of Level 1 exams. Level 2 achievers get advanced
              certification recognized across educational institutions.
            </p>
            <ul className="text-gray-700 space-y-2 list-disc list-inside">
              <li>
                100% Money Back Guarantee if exam is cancelled due to our fault.
              </li>
              <li>No hidden charges. Registration fee includes everything.</li>
              <li>Parent Dashboard for real-time tracking.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
