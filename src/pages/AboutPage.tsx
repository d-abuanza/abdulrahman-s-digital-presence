import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* About only - fills viewport; footer appears on scroll */}
      <main className="pt-16 lg:pt-24 min-h-[calc(100vh-6rem)]">
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
