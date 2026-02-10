import Navbar from "@/components/Navbar";
import DigitalLibrarySection from "@/components/DigitalLibrarySection";
import Footer from "@/components/Footer";

const LibraryPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-16 lg:pt-24 min-h-[calc(100vh-6rem)]">
        <DigitalLibrarySection />
      </main>

      <Footer />
    </div>
  );
};

export default LibraryPage;
