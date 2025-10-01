import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import VisionImpactGoals from "@/components/VisionImpactGoals";
import PurposeOfCommunity from "@/components/PurposeOfCommunity";
import LeadershipTeam from "@/components/LeadershipTeam";
import FounderJourneySection from "@/components/FounderJourneySection";
import SandippMethodology from "@/components/SandippMethodology";
import AwardsSection from "@/components/AwardsSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <AboutSection />
        <VisionImpactGoals />
        <PurposeOfCommunity />
        <FounderJourneySection />
        <SandippMethodology />
        <LeadershipTeam />
        <AwardsSection />
      </div>
      <Footer />
    </div>
  );
};

export default About;
