import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DigitalLibrarySection from "@/components/DigitalLibrarySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onAboutClick={() => setIsAboutOpen(true)} />

      {/* Hero: Full-screen intro with typing animation */}
      <HeroSection />

      {/* About: Focus mode modal */}
      <AboutSection isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />

      {/* Services: Simplified service cards */}
      <ServicesSection />

      {/* Digital Library: LinkedIn Posts + Books + Free Lead Magnet */}
      <DigitalLibrarySection />

      {/* Contact: Contact info with CTAs */}
      <ContactSection />

      {/* Footer: Copyright and links */}
      <Footer />
    </div>
  );
};

export default Index;
