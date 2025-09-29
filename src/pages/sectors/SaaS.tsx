import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Target, Users, CheckCircle, Cloud, Code } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationFormModal from "@/components/ConsultationFormModal";

const SaaS = () => {
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
            Software as a Service (SaaS)
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Build scalable SaaS products with our proven methodologies for product development, customer acquisition, and sustainable recurring revenue growth.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <Cloud className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Market Growth</h3>
            <p className="text-muted-foreground">Indian SaaS market to reach $50 billion by 2025</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <Target className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Success Rate</h3>
            <p className="text-muted-foreground">90% of our SaaS clients achieve product-market fit</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <Code className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Products Launched</h3>
            <p className="text-muted-foreground">100+ successful SaaS products launched</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our SaaS Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Product-Market Fit Strategy</h4>
                  <p className="text-muted-foreground">Identify target markets, validate product concepts, and optimize feature sets for market demand.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Subscription Model Optimization</h4>
                  <p className="text-muted-foreground">Design pricing strategies, reduce churn, and maximize customer lifetime value.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Scalable Architecture Design</h4>
                  <p className="text-muted-foreground">Build cloud-native applications that scale from hundreds to millions of users.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Customer Success Programs</h4>
                  <p className="text-muted-foreground">Implement onboarding, support, and retention strategies for sustained growth.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Global Market Expansion</h4>
                  <p className="text-muted-foreground">Scale internationally with localization, compliance, and go-to-market strategies.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">AI/ML Integration</h4>
                  <p className="text-muted-foreground">Leverage artificial intelligence to enhance product capabilities and user experience.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-muted/20 border border-border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">HR Management Platform</h4>
              <p className="text-muted-foreground mb-4">Scaled from 0 to 10,000+ customers with our growth methodology</p>
              <div className="text-2xl font-bold text-primary">10K+ Customers</div>
            </div>
            <div className="bg-muted/20 border border-border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">EdTech SaaS Solution</h4>
              <p className="text-muted-foreground mb-4">Achieved $5M ARR within 18 months of launch</p>
              <div className="text-2xl font-bold text-primary">$5M ARR</div>
            </div>
            <div className="bg-muted/20 border border-border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">Marketing Automation Tool</h4>
              <p className="text-muted-foreground mb-4">Expanded to 15 countries with localized product offerings</p>
              <div className="text-2xl font-bold text-primary">15 Countries</div>
            </div>
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 border border-primary/20">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Scale Your SaaS Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get expert guidance on building and scaling your SaaS product for sustainable growth and market leadership.
          </p>
          <Button 
            size="lg" 
            className="btn-primary"
            onClick={() => setShowConsultationForm(true)}
          >
            Book SaaS Consultation
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

export default SaaS;