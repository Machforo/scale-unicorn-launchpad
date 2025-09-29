import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Target, Users, CheckCircle, BookOpen, GraduationCap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationFormModal from "@/components/ConsultationFormModal";

const Education = () => {
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
            Education Sector
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Transform the education landscape with innovative EdTech solutions, institutional development strategies, and scalable learning platforms for the digital age.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Market Size</h3>
            <p className="text-muted-foreground">Indian EdTech market to reach $30 billion by 2025</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <Target className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Success Rate</h3>
            <p className="text-muted-foreground">88% of our EdTech clients achieve scalable growth</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Students Impacted</h3>
            <p className="text-muted-foreground">5+ million students reached through our partners</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Education Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">EdTech Platform Development</h4>
                  <p className="text-muted-foreground">Build scalable learning management systems, mobile apps, and interactive content platforms.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Institutional Digital Transformation</h4>
                  <p className="text-muted-foreground">Modernize educational institutions with digital infrastructure and smart classroom solutions.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Personalized Learning Solutions</h4>
                  <p className="text-muted-foreground">Implement AI-driven adaptive learning systems and student analytics platforms.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Corporate Training Platforms</h4>
                  <p className="text-muted-foreground">Develop enterprise learning solutions and professional development programs.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Content Monetization Strategy</h4>
                  <p className="text-muted-foreground">Build sustainable revenue models through subscriptions, courses, and certification programs.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">International Market Expansion</h4>
                  <p className="text-muted-foreground">Scale educational solutions globally with localization and partnership strategies.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-muted/20 border border-border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">Online Learning Platform</h4>
              <p className="text-muted-foreground mb-4">Scaled from 10K to 1M+ active learners in 18 months</p>
              <div className="text-2xl font-bold text-primary">1M+ Users</div>
            </div>
            <div className="bg-muted/20 border border-border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">Educational Institution Network</h4>
              <p className="text-muted-foreground mb-4">Implemented digital transformation across 500+ schools</p>
              <div className="text-2xl font-bold text-primary">500+ Schools</div>
            </div>
            <div className="bg-muted/20 border border-border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">Corporate Training Startup</h4>
              <p className="text-muted-foreground mb-4">Achieved $15M ARR with enterprise learning solutions</p>
              <div className="text-2xl font-bold text-primary">$15M ARR</div>
            </div>
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 border border-primary/20">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Transform Education with Technology?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get expert guidance on building innovative EdTech solutions and scaling your educational impact globally.
          </p>
          <Button 
            size="lg" 
            className="btn-primary"
            onClick={() => setShowConsultationForm(true)}
          >
            Book Education Consultation
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

export default Education;