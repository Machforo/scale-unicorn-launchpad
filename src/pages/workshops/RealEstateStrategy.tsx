import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Users, Target, CheckCircle } from "lucide-react";
import WorkshopRegistrationForm from "@/components/WorkshopRegistrationForm";
import satyavirYadavImage from "@/assets/satyavir-yadav-new.jpg";

const RealEstateStrategy = () => {
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
            Real Estate Compounded Growth Strategy
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            Master the art of real estate investment with compound growth principles. Build generational wealth through strategic property investments.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center text-sm text-muted-foreground mb-2"><Clock className="h-4 w-4 mr-2"/>Duration</div>
            <div className="text-foreground font-semibold">2 Days</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center text-sm text-muted-foreground mb-2"><Users className="h-4 w-4 mr-2"/>Facilitator</div>
            <div className="text-foreground font-semibold">Mr Satyavir Yadav</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center text-sm text-muted-foreground mb-2"><Target className="h-4 w-4 mr-2"/>Focus</div>
            <div className="text-foreground font-semibold">Real estate investment mastery</div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Meet Your Facilitator</h2>
          <div className="bg-card border border-border rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center">
            <img 
              src={satyavirYadavImage} 
              alt="Mr Satyavir Yadav" 
              className="w-32 h-32 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-bold mb-2">Mr Satyavir Yadav</h3>
              <p className="text-muted-foreground">Real estate investment expert with over 20 years of experience in property development and wealth creation through strategic real estate investments.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Workshop Outcomes</h2>
          <ul className="space-y-3">
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2"/>Market analysis and opportunity identification</li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2"/>Financing strategies and leverage optimization</li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2"/>Portfolio diversification techniques</li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2"/>Risk management in real estate</li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2"/>Passive income generation methods</li>
          </ul>
        </section>

        <section className="text-center">
          <Button size="lg" onClick={handleRegister}>Register Now</Button>
        </section>
      </div>

      {showRegistrationForm && (
        <WorkshopRegistrationForm
          workshopTitle="Real Estate Compounded Growth Strategy"
          onClose={() => setShowRegistrationForm(false)}
        />
      )}
    </div>
  );
};

export default RealEstateStrategy;