// src/app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Timeline from "@/components/Timeline";
import Prizes from "@/components/Prizes";
import Exams from "@/components/Exams";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Timeline />
      <Prizes />
      <Exams />
      <CTA />
      <FAQ />
      <Footer />
    </>
  );
}
