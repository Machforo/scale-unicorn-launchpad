import { TrendingUp, Users, Target, ArrowRight, BarChart3, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import ConsultationForm from "@/components/ConsultationForm";

const ForInvestors = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-5xl mx-auto">
              <h1 className="text-6xl font-bold text-foreground mb-6">
                LET'S TAP INTO TOMORROW'S
                <span className="text-primary block">BILLION-DOLLAR BUSINESSES</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                At Idea2Unicorn, we Identify, Validate, and Scale Startups for exponential returns
              </p>
              <Button 
                onClick={() => setShowConsultationForm(true)}
                className="btn-primary text-lg px-8 py-4"
              >
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-foreground text-center mb-16">Our Investment Process</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Identify</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We scout and identify high-potential startups with disruptive technologies and scalable business models across key growth markets.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Validate</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our expert team conducts thorough market validation, business model assessment, and growth potential analysis using proven frameworks.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Scale</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We provide hands-on mentoring, strategic guidance, and access to our extensive network to scale startups into market leaders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Invest */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Why Invest With Us?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Proven track record of identifying and scaling high-growth ventures
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-card border border-border rounded-xl p-8 text-center shadow-card">
                <div className="text-4xl font-bold text-primary mb-2">15x</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Growth in Key Markets</h3>
                <p className="text-muted-foreground">Average portfolio company growth rate in target sectors</p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-8 text-center shadow-card">
                <div className="text-4xl font-bold text-primary mb-2">40%</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Compounding Annual Growth Rate</h3>
                <p className="text-muted-foreground">Consistent returns across our investment portfolio</p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-8 text-center shadow-card">
                <div className="text-4xl font-bold text-primary mb-2">$1M+</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Possible Valuation in 4 Weeks</h3>
                <p className="text-muted-foreground">Rapid value creation through our proven methodologies</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Leadership */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Trusted Experts & Leadership</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                We are a team of founders, mental health advocates, tech innovators, and financial strategists. Each of us has walked the path of transformation.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Partner With Us To:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <TrendingUp className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">Multiply your returns with high-growth startups across emerging sectors</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">Back ventures shaping the future of global markets and industries</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">Access curated deal flow with pre-validated business models</span>
                    </li>
                    <li className="flex items-start">
                      <Rocket className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">Leverage our expertise in scaling startups to unicorn status</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-card border border-border rounded-lg p-8 shadow-card">
                    <h4 className="text-xl font-semibold text-foreground mb-4">Ready to Invest?</h4>
                    <p className="text-muted-foreground mb-6">
                      Join our exclusive investor network and gain access to tomorrow's billion-dollar businesses.
                    </p>
                    <Button 
                      onClick={() => setShowConsultationForm(true)}
                      className="btn-primary w-full"
                    >
                      Schedule Investment Discussion
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="bg-card border border-border rounded-xl p-8 text-center shadow-card max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">Get Started Today</h3>
              <p className="text-muted-foreground mb-6">
                Connect with our investment team to explore opportunities in our curated startup portfolio.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Contact Information</h4>
                  <p className="text-muted-foreground">sandipp@idea2unicorn.ai</p>
                  <p className="text-muted-foreground">www.idea2unicorn.ai</p>
                </div>
                <Button 
                  onClick={() => setShowConsultationForm(true)}
                  className="btn-primary"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Consultation Form Modal */}
      {showConsultationForm && (
        <ConsultationForm onClose={() => setShowConsultationForm(false)} />
      )}
    </div>
  );
};

export default ForInvestors;