import { useState } from "react";
import { ArrowRight, TrendingUp, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/professional-meeting.jpg";
import WorkshopRegistrationForm from "./WorkshopRegistrationForm";
import ConsultationFormModal from "./ConsultationFormModal";
import IncubationForm from "./IncubationForm";

const Hero = () => {
  const [activeForm, setActiveForm] = useState<string | null>(null);

  return (
    <>
    <section id="home" className="min-h-screen flex items-center pt-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="hero-title">
                Idea2Unicorn
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground leading-relaxed">
                Helping Startups Scale with <span className="accent-text">Smart Growth, Zero Dilution</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Transform your startup with our proprietary growth methodologies, expert workshops, 
              and proven franchise strategies that scale businesses across India.
            </p>

            {/* CTA Buttons */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 w-full">
              <Link to="/for-investors" className="w-full">
                <Button className="btn-primary w-full h-12">
                  Investors
                </Button>
              </Link>
              <Link to="/for-startups" className="w-full">
                <Button className="btn-secondary w-full h-12">
                  Startups
                </Button>
              </Link>
              <Link to="/partner-us" className="w-full">
                <Button className="btn-primary w-full h-12">
                  Partners
                </Button>
              </Link>
              <Link to="/workshops" className="w-full">
                <Button className="btn-secondary w-full h-12">
                  Workshops
                </Button>
              </Link>
              <Link to="/resources" className="w-full">
                <Button className="btn-primary w-full h-12">
                  Students
                </Button>
              </Link>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">Smart Growth</div>
                <div className="text-sm text-muted-foreground">Zero Dilution</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Startups Helped</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">93%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-elegant">
              <img
                src={heroImage}
                alt="Idea2Unicorn - Professional startup consultation and mentoring"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Forms */}
    {activeForm === "incubation" && (
      <IncubationForm onClose={() => setActiveForm(null)} />
    )}
    {activeForm === "consultation" && (
      <ConsultationFormModal onClose={() => setActiveForm(null)} isOpen={true} />
    )}
    </>
  );
};

export default Hero;