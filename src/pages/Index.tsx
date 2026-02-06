import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import BlogSection from "@/components/BlogSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero: Trust + Primary CTA */}
      <HeroSection />
      {/* About: Authority + Readiness to Pay */}
      <AboutSection />
      {/* Services: Direct Sales with Problem/Outcome/Action */}
      <ServicesSection />
      {/* Results: Social Proof & Measurable Outcomes */}
      <ResultsSection />
      {/* Testimonials: Trust Building */}
      <TestimonialsSection />
      {/* Blog: Lead Generation */}
      <BlogSection />
      {/* Products: Low-friction Entry Points */}
      <ProductsSection />
      {/* Booking: Core Conversion Hub */}
      <BookingSection />
      {/* Contact: Alternative Path */}
      <ContactSection />
      {/* Footer: Final CTA */}
      <Footer />
    </div>
  );
};

export default Index;
