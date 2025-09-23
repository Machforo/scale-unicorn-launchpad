import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Users, Target, CheckCircle } from "lucide-react";
import WorkshopRegistrationForm from "@/components/WorkshopRegistrationForm";
import anssavJainImage from "@/assets/ansshav-jain.png";

const UnicornStrategy = () => {
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
            Strategy to Become a Unicorn
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            The ultimate masterclass on building billion-dollar companies. Learn the insider strategies used by unicorn founders and investors.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center text-sm text-muted-foreground mb-2"><Clock className="h-4 w-4 mr-2"/>Duration</div>
            <div className="text-foreground font-semibold">4 Days</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center text-sm text-muted-foreground mb-2"><Users className="h-4 w-4 mr-2"/>Facilitator</div>
            <div className="text-foreground font-semibold">Mr Jain</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center text-sm text-muted-foreground mb-2"><Target className="h-4 w-4 mr-2"/>Focus</div>
            <div className="text-foreground font-semibold">Unicorn building strategies</div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Meet Your Facilitator</h2>
          <div className="bg-card border border-border rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center">
            <img 
              src={anssavJainImage} 
              alt="Mr Jain" 
              className="w-32 h-32 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-bold mb-2">Mr Jain</h3>
              <p className="text-muted-foreground">Unicorn strategy expert and seasoned entrepreneur with extensive experience in scaling startups to billion-dollar valuations.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Workshop Outcomes</h2>
          <ul className="space-y-3">
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2"/>Unicorn business model design</li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2"/>Investor attraction and pitch perfection</li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2"/>Scaling culture and team building</li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2"/>Market disruption strategies</li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2"/>Exit strategy planning</li>
          </ul>
        </section>

        <section className="text-center">
          <Button size="lg" onClick={handleRegister}>Register Now</Button>
        </section>
      </div>

      {showRegistrationForm && (
        <WorkshopRegistrationForm
          workshopTitle="Strategy to Become a Unicorn"
          onClose={() => setShowRegistrationForm(false)}
        />
      )}
    </div>
  );
};

export default UnicornStrategy;