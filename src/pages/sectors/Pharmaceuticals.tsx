import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Target, Users, CheckCircle, Shield, Microscope } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationFormModal from "@/components/ConsultationFormModal";

const Pharmaceuticals = () => {
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
            Pharmaceuticals Sector
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Navigate the complex pharmaceutical landscape with expert guidance on regulatory compliance, R&D optimization, and market expansion strategies for sustainable growth.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Market Size</h3>
            <p className="text-muted-foreground">Indian pharma market valued at $50 billion, growing at 13% CAGR</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Compliance Rate</h3>
            <p className="text-muted-foreground">100% regulatory compliance achieved for our pharma clients</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <Microscope className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">R&D Innovation</h3>
            <p className="text-muted-foreground">50+ successful drug development projects guided</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Pharmaceutical Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Regulatory Affairs Management</h4>
                  <p className="text-muted-foreground">Navigate FDA, CDSCO, and international regulatory requirements with expert guidance.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Clinical Trial Optimization</h4>
                  <p className="text-muted-foreground">Streamline clinical research processes and ensure compliance with international standards.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Manufacturing Excellence</h4>
                  <p className="text-muted-foreground">Implement GMP standards, quality systems, and operational efficiency improvements.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Market Access Strategy</h4>
                  <p className="text-muted-foreground">Develop go-to-market strategies for new drug launches and market penetration.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">IP Portfolio Management</h4>
                  <p className="text-muted-foreground">Protect intellectual property and build robust patent portfolios for competitive advantage.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Digital Health Integration</h4>
                  <p className="text-muted-foreground">Leverage digital technologies for drug development, patient engagement, and market access.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-muted/20 border border-border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">Generic Drug Manufacturer</h4>
              <p className="text-muted-foreground mb-4">Achieved FDA approval for 15 ANDAs within 24 months using our regulatory strategy</p>
              <div className="text-2xl font-bold text-primary">15 Approvals</div>
            </div>
            <div className="bg-muted/20 border border-border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">Biotech Startup</h4>
              <p className="text-muted-foreground mb-4">Secured $25M Series A funding for novel therapeutics development</p>
              <div className="text-2xl font-bold text-primary">$25M Funding</div>
            </div>
            <div className="bg-muted/20 border border-border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">Contract Research Organization</h4>
              <p className="text-muted-foreground mb-4">Expanded to 5 countries with standardized clinical trial processes</p>
              <div className="text-2xl font-bold text-primary">5 Countries</div>
            </div>
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 border border-primary/20">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Advance Your Pharmaceutical Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get specialized consultation on navigating regulatory challenges and scaling your pharmaceutical operations.
          </p>
          <Button 
            size="lg" 
            className="btn-primary"
            onClick={() => setShowConsultationForm(true)}
          >
            Book Pharma Consultation
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

export default Pharmaceuticals;