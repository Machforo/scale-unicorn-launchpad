import { Lightbulb, TrendingUp, Users, Target, ArrowRight, Award, Rocket, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import ConsultationForm from "@/components/ConsultationForm";

const ForStartups = () => {
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
                Turn Your Vision Into 
                <span className="text-primary block">A Successful Venture</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Your Idea deserves more than just potential. Let's shape it, fund it, and scale it.
              </p>
              <Button 
                onClick={() => setShowConsultationForm(true)}
                className="btn-primary text-lg px-8 py-4"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Our Promise */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Promise to Founders</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A structured path that takes concepts to thriving ventures with comprehensive support and guidance
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Idea</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transform your innovative concepts into viable business opportunities with proven frameworks.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Validation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Validate your business model through market research, customer discovery, and prototype testing.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Growth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Scale your startup with strategic guidance, market expansion plans, and operational excellence.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Scale</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Access funding opportunities, investor networks, and resources to reach unicorn status.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">What Makes Us Different?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A robust network that opens doors to investors and partners
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Proven Methodology</h3>
                    <p className="text-muted-foreground">10-book framework combining business best practices from industry leaders and proven strategies.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Expert Mentorship</h3>
                    <p className="text-muted-foreground">Direct access to successful entrepreneurs, industry experts, and IIM-A MBA mentors.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Comprehensive Support</h3>
                    <p className="text-muted-foreground">End-to-end support from ideation to scaling, including technical, marketing, and funding guidance.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Investor Network</h3>
                    <p className="text-muted-foreground">Direct connections to angel investors, VCs, and funding opportunities across multiple stages.</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 shadow-card">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Ready to Transform Your Idea?</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-primary mr-3" />
                    <span className="text-muted-foreground">Personal guidance from experienced founders</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary mr-3" />
                    <span className="text-muted-foreground">Access to founder community and peer network</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="h-5 w-5 text-primary mr-3" />
                    <span className="text-muted-foreground">Structured approach to business development</span>
                  </div>
                </div>
                <Button 
                  onClick={() => setShowConsultationForm(true)}
                  className="btn-primary w-full"
                >
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Success Stories</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real results from founders who transformed their ideas with our support
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-card border border-border rounded-xl p-8 text-center shadow-card">
                <div className="text-4xl font-bold text-primary mb-2">300+</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Startups Guided, Funded, and Growing</h3>
                <p className="text-muted-foreground">Successfully mentored startups across various industries and growth stages</p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-8 text-center shadow-card">
                <div className="text-4xl font-bold text-primary mb-2">₹250+</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Crores Raised in Early-Stage Funding</h3>
                <p className="text-muted-foreground">Total funding secured by our portfolio companies in their growth journey</p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-8 text-center shadow-card">
                <div className="text-4xl font-bold text-primary mb-2">70%+</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Startups Hit Sustainable Growth in 12 Months</h3>
                <p className="text-muted-foreground">High success rate in achieving sustainable growth and profitability</p>
              </div>
            </div>

            <div className="text-center">
              <Button 
                onClick={() => setShowConsultationForm(true)}
                className="btn-primary text-lg px-8 py-3"
              >
                Join Our Success Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="bg-card border border-border rounded-xl p-8 text-center shadow-card max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Take the first step towards transforming your idea into a successful venture.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Contact Information</h4>
                  <p className="text-muted-foreground">Email: sandipp@idea2unicorn.ai</p>
                  <p className="text-muted-foreground">Website: www.idea2unicorn.ai</p>
                </div>
                <Button 
                  onClick={() => setShowConsultationForm(true)}
                  className="btn-primary"
                >
                  Start Your Journey Today
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

export default ForStartups;