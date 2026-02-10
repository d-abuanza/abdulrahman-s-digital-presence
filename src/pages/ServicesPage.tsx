import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-16 lg:pt-24 min-h-[calc(100vh-6rem)]">
        <ServicesSection />
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
