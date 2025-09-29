import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Target, Users, CheckCircle, Sun, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationFormModal from "@/components/ConsultationFormModal";

const RenewableEnergy = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-12 pt-24">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
          </Button>
        </Link>

        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Renewable Energy Sector
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Lead the clean energy revolution with our expertise in renewable energy project development, financing strategies, and sustainable technology implementation.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <Sun className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Market Potential</h3>
            <p className="text-muted-foreground">India targets 500 GW renewable capacity by 2030</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <Target className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Project Success</h3>
            <p className="text-muted-foreground">95% on-time delivery rate for renewable projects</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Capacity Deployed</h3>
            <p className="text-muted-foreground">2+ GW renewable capacity successfully deployed</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Renewable Energy Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Solar & Wind Project Development</h4>
                  <p className="text-muted-foreground">End-to-end project development from site identification to commissioning and O&M.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Energy Storage Solutions</h4>
                  <p className="text-muted-foreground">Design and implement battery storage systems for grid stability and energy management.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Green Financing Strategy</h4>
                  <p className="text-muted-foreground">Structure project financing, green bonds, and sustainability-linked investments.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Smart Grid Integration</h4>
                  <p className="text-muted-foreground">Implement IoT and AI solutions for intelligent energy distribution and monitoring.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Policy & Regulatory Navigation</h4>
                  <p className="text-muted-foreground">Navigate complex regulatory frameworks and optimize policy benefits for projects.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Carbon Credit Monetization</h4>
                  <p className="text-muted-foreground">Develop carbon credit strategies and ESG frameworks for sustainable revenue streams.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-muted/20 border border-border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">Solar Power Developer</h4>
              <p className="text-muted-foreground mb-4">Developed 500 MW solar portfolio with our project management framework</p>
              <div className="text-2xl font-bold text-primary">500 MW</div>
            </div>
            <div className="bg-muted/20 border border-border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">Wind Energy Startup</h4>
              <p className="text-muted-foreground mb-4">Secured $100M project financing for offshore wind development</p>
              <div className="text-2xl font-bold text-primary">$100M Funding</div>
            </div>
            <div className="bg-muted/20 border border-border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">Energy Storage Company</h4>
              <p className="text-muted-foreground mb-4">Deployed 200 MWh battery storage across 10 states</p>
              <div className="text-2xl font-bold text-primary">200 MWh</div>
            </div>
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 border border-primary/20">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Power the Future with Renewable Energy?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get expert guidance on renewable energy project development, financing, and scaling for sustainable impact.
          </p>
          <Button 
            size="lg" 
            className="btn-primary"
            onClick={() => setShowConsultationForm(true)}
          >
            Book Energy Consultation
          </Button>
        </section>
      </div>

      {showConsultationForm && (
        <ConsultationFormModal 
          isOpen={showConsultationForm}
          onClose={() => setShowConsultationForm(false)} 
        />
      )}
      
      <Footer />
    </div>
  );
};

export default RenewableEnergy;