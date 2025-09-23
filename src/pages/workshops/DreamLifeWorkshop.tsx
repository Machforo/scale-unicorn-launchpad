import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Users, Target, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PaymentModal from "@/components/PaymentModal";

const DreamLifeWorkshop = () => {
  const { toast } = useToast();
  const [showPayment, setShowPayment] = useState(false);

  const handleRegister = () => {
    toast({
      title: "Registration",
      description: "Opening payment options…",
    });
    setShowPayment(true);
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
            Dream Life Workshop
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            Transform your vision into reality with our comprehensive dream activation program. Master emotional freedom tools and create a clear roadmap for your ideal life.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center text-sm text-muted-foreground mb-2"><Clock className="h-4 w-4 mr-2"/>Duration</div>
            <div className="text-foreground font-semibold">2 Days</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center text-sm text-muted-foreground mb-2"><Users className="h-4 w-4 mr-2"/>Facilitator</div>
            <div className="text-foreground font-semibold">Sandipp Vijj</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center text-sm text-muted-foreground mb-2"><Target className="h-4 w-4 mr-2"/>Focus</div>
            <div className="text-foreground font-semibold">Life transformation and vision activation</div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Workshop Outcomes</h2>
          <ul className="space-y-3">
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2"/>93% participants achieve clarity about life direction</li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2"/>Vision activation and goal-setting mastery</li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2"/>Emotional freedom and breakthrough techniques</li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2"/>Health optimization and self-image enhancement</li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2"/>Relationship rewiring strategies</li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2"/>Wealth creation rituals and mindset shifts</li>
          </ul>
        </section>

        <section className="text-center">
          <Button size="lg" onClick={handleRegister}>Register Now</Button>
        </section>
      </div>

      <PaymentModal isOpen={showPayment} onClose={() => setShowPayment(false)} workshopTitle="Dream Life Workshop" servicePriceINR={15000} servicePriceUSD={200} />
    </div>
  );
};

export default DreamLifeWorkshop;