// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-white mb-4">PHN Exam Portal</h3>
          <p>
            Providing seamless online exams and scholarships for students across
            India.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-white mb-4">Links</h3>
          <ul>
            <li>
              <a href="/exams" className="hover:text-white transition">
                Exams
              </a>
            </li>
            <li>
              <a href="/register" className="hover:text-white transition">
                Register
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-white transition">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white mb-4">Contact</h3>
          <p>Email: support@phnportal.com</p>
          <p>Phone: +91 12345 67890</p>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PHN Exam Portal — All rights reserved
      </div>
    </footer>
  );
}
