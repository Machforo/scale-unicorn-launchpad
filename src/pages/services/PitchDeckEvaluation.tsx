import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PitchDeckService from "@/components/PitchDeckService";

const PitchDeckEvaluation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <PitchDeckService />
      </main>
      <Footer />
    </div>
  );
};

export default PitchDeckEvaluation;