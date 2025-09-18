import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import LeadershipTeam from "@/components/LeadershipTeam";
import FounderJourneySection from "@/components/FounderJourneySection";
import SandippMethodology from "@/components/SandippMethodology";
import WorkshopsSection from "@/components/WorkshopsSection";
import GrowthStrategiesSection from "@/components/GrowthStrategiesSection";
import LatestUpdatesSection from "@/components/LatestUpdatesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  useEffect(() => {
    const state = (location.state as any) || {};
    if (state?.scrollTo) {
      const id = state.scrollTo as string;
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <LeadershipTeam />
        <FounderJourneySection />
        <SandippMethodology />
        <WorkshopsSection />
        <GrowthStrategiesSection />
        <LatestUpdatesSection />
        <ContactSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
