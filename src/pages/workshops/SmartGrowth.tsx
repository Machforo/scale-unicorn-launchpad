import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Users, Target, CheckCircle } from "lucide-react";
import WorkshopRegistrationForm from "@/components/WorkshopRegistrationForm";
import samKunduImage from "@/assets/sam-kundu-new.jpg";

const SmartGrowth = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const handleRegister = () => {
    setShowRegistrationForm(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 pt-24">
        <Link to="/workshops">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Workshops
          </Button>
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
            Smart Growth Without Diluting Equity
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            Revolutionary growth methodologies that preserve founder equity while achieving exponential scale. Perfect for startups ready to dominate their market, after operational services/product offerings.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center text-sm text-muted-foreground mb-2"><Clock className="h-4 w-4 mr-2"/>Duration</div>
            <div className="text-foreground font-semibold">3 Days</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center text-sm text-muted-foreground mb-2"><Users className="h-4 w-4 mr-2"/>Facilitator</div>
            <div className="text-foreground font-semibold">Sam Kundu</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center text-sm text-muted-foreground mb-2"><Target className="h-4 w-4 mr-2"/>Focus</div>
            <div className="text-foreground font-semibold">Equity-preserving growth strategies</div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Meet Your Facilitator</h2>
          <div className="bg-card border border-border rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center">
            <img 
              src={samKunduImage} 
              alt="Sam Kundu" 
              className="w-32 h-32 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-bold mb-2">Sam Kundu</h3>
              <p className="text-muted-foreground">Expert in bootstrapped scaling and equity preservation strategies. Has helped 100+ startups achieve growth without external dilution.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Workshop Outcomes</h2>
          <ul className="space-y-3">
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2"/>Proprietary growth hacking techniques</li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2"/>Bootstrap scaling strategies</li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2"/>Revenue multiplication without external funding</li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2"/>Operational efficiency optimization</li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2"/>Market expansion frameworks</li>
          </ul>
        </section>

        <section className="text-center">
          <Button size="lg" onClick={handleRegister}>Register Now</Button>
        </section>
      </div>

      {showRegistrationForm && (
        <WorkshopRegistrationForm
          workshopTitle="Smart Growth Without Diluting Equity"
          onClose={() => setShowRegistrationForm(false)}
        />
      )}
    </div>
  );
};

export default SmartGrowth;