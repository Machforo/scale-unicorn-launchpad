import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Users, Target, CheckCircle } from "lucide-react";
import WorkshopRegistrationForm from "@/components/WorkshopRegistrationForm";

const CrossingTheChasm = () => {
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
            Crossing the Chasm Strategy
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            Navigate the critical transition from early adopters to mainstream market. Learn proven strategies to scale your startup across the innovation chasm.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center text-sm text-muted-foreground mb-2"><Clock className="h-4 w-4 mr-2"/>Duration</div>
            <div className="text-foreground font-semibold">1 Day</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center text-sm text-muted-foreground mb-2"><Users className="h-4 w-4 mr-2"/>Facilitator</div>
            <div className="text-foreground font-semibold">Sandipp Vijj</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center text-sm text-muted-foreground mb-2"><Target className="h-4 w-4 mr-2"/>Focus</div>
            <div className="text-foreground font-semibold">Market transition and scaling strategies</div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Workshop Outcomes</h2>
          <ul className="space-y-3">
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2"/>Market segmentation and targeting mastery</li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2"/>Product positioning for mainstream adoption</li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2"/>Customer acquisition strategy optimization</li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2"/>Risk mitigation during scaling phases</li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2"/>Revenue model refinement</li>
          </ul>
        </section>

        <section className="text-center">
          <Button size="lg" onClick={handleRegister}>Register Now</Button>
        </section>
      </div>

      {showRegistrationForm && (
        <WorkshopRegistrationForm
          workshopTitle="Crossing the Chasm Strategy"
          onClose={() => setShowRegistrationForm(false)}
        />
      )}
    </div>
  );
};

export default CrossingTheChasm;