import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Target, Users, CheckCircle, Monitor, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationFormModal from "@/components/ConsultationFormModal";

const ITServices = () => {
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
            IT Services Sector
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Transform your IT services business with our specialized strategies for digital transformation, offshore delivery excellence, and global market expansion.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Global Market</h3>
            <p className="text-muted-foreground">Indian IT services market worth $200+ billion globally</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <Target className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Client Satisfaction</h3>
            <p className="text-muted-foreground">98% client retention rate for our IT service partners</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <Monitor className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Digital Projects</h3>
            <p className="text-muted-foreground">500+ successful digital transformation projects</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our IT Services Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Offshore Delivery Excellence</h4>
                  <p className="text-muted-foreground">Build world-class offshore development centers with standardized processes and quality metrics.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Cloud Migration Services</h4>
                  <p className="text-muted-foreground">Design and execute cloud transformation strategies for enterprise clients.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">DevOps & Automation</h4>
                  <p className="text-muted-foreground">Implement CI/CD pipelines, infrastructure automation, and monitoring solutions.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Cybersecurity Solutions</h4>
                  <p className="text-muted-foreground">Develop comprehensive security frameworks and compliance management systems.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">AI/ML Implementation</h4>
                  <p className="text-muted-foreground">Integrate artificial intelligence and machine learning capabilities into enterprise systems.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Global Client Acquisition</h4>
                  <p className="text-muted-foreground">Build sales pipelines and partnerships for international market expansion.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-muted/20 border border-border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">Mid-size IT Services Company</h4>
              <p className="text-muted-foreground mb-4">Scaled from 200 to 2,000 employees with our growth framework</p>
              <div className="text-2xl font-bold text-primary">10x Growth</div>
            </div>
            <div className="bg-muted/20 border border-border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">Digital Transformation Startup</h4>
              <p className="text-muted-foreground mb-4">Achieved $10M revenue within 2 years of inception</p>
              <div className="text-2xl font-bold text-primary">$10M Revenue</div>
            </div>
            <div className="bg-muted/20 border border-border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">Cloud Solutions Provider</h4>
              <p className="text-muted-foreground mb-4">Expanded to serve 50+ Fortune 500 companies globally</p>
              <div className="text-2xl font-bold text-primary">50+ F500 Clients</div>
            </div>
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 border border-primary/20">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Scale Your IT Services Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get specialized consultation on building world-class IT services capabilities and global market expansion.
          </p>
          <Button 
            size="lg" 
            className="btn-primary"
            onClick={() => setShowConsultationForm(true)}
          >
            Book IT Services Consultation
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

export default ITServices;