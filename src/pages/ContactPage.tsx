import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-16 lg:pt-24 min-h-[calc(100vh-6rem)]">
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
