import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DigitalLibrarySection from "@/components/DigitalLibrarySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-16 lg:pt-24">
        {/* Hero: Full-screen intro with typing animation */}
        <HeroSection />

        {/* About: Inline section */}
        <AboutSection />

        {/* Services: Simplified service cards */}
        <ServicesSection />

        {/* Digital Library: LinkedIn Posts + Books + Free Lead Magnet */}
        <DigitalLibrarySection />

        {/* Contact: Contact info with CTAs */}
        <ContactSection />

        {/* Footer: Copyright and links */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
