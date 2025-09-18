import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsMediaSection from "@/components/NewsMediaSection";

const NewsMedia = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <NewsMediaSection />
      </main>
      <Footer />
    </div>
  );
};

export default NewsMedia;