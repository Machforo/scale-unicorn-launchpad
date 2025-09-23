import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Users, Target, Award, CheckCircle, Calendar, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import WorkshopRegistrationForm from "@/components/WorkshopRegistrationForm";
import chandraPatniImage from "@/assets/chandra-patni.jpg";

const FinTechInnovation = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const handleRegister = () => {
    setShowRegistrationForm(true);
  };

  const handleContact = () => {
    window.location.href = "mailto:support@idea2unicorn.ai?subject=FinTech Innovation Workshop Inquiry";
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link to="/workshops" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Workshops
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              FinTech Innovation Workshop
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Navigate the FinTech landscape and build innovative financial solutions
            </p>
          </div>

          {/* Workshop Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card p-6 rounded-lg border text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Duration</h3>
              <p className="text-muted-foreground">4 Sessions</p>
            </div>
            <div className="bg-card p-6 rounded-lg border text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Group Size</h3>
              <p className="text-muted-foreground">Limited to 18</p>
            </div>
            <div className="bg-card p-6 rounded-lg border text-center">
              <Target className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Focus</h3>
              <p className="text-muted-foreground">FinTech Solutions</p>
            </div>
          </div>

          {/* Purpose */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-bold text-center mb-6">Purpose of the Workshop</h2>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Understand the FinTech ecosystem, regulatory landscape, and technology stack needed to build 
              innovative financial solutions that meet market demands and compliance requirements.
            </p>
          </div>

          {/* Workshop Structure */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Workshop Design</h2>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                  Session 1: FinTech Landscape & Opportunities
                </h3>
                <p className="text-muted-foreground">Understanding the FinTech ecosystem, market opportunities, customer pain points, and emerging trends in financial technology.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                  Session 2: Regulatory Framework & Compliance
                </h3>
                <p className="text-muted-foreground">Navigating financial regulations, compliance requirements, licensing processes, and building compliant financial products.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                  Session 3: Technology Stack & Architecture
                </h3>
                <p className="text-muted-foreground">Building secure, scalable FinTech platforms, API integrations, blockchain applications, and cybersecurity best practices.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-3">4</span>
                  Session 4: Go-to-Market & Scaling
                </h3>
                <p className="text-muted-foreground">Customer acquisition strategies, partnerships with financial institutions, monetization models, and scaling strategies.</p>
              </div>
            </div>
          </div>

          {/* About Instructor */}
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-8 rounded-xl mb-12">
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold">About the Instructor</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Chandra Patni</h3>
                <p className="text-muted-foreground mb-4">
                  A seasoned FinTech expert with extensive experience in building and scaling financial 
                  technology solutions. Chandra has worked with leading financial institutions and FinTech 
                  startups to develop innovative payment systems, lending platforms, and digital banking solutions.
                </p>
                <p className="text-muted-foreground">
                  His deep understanding of financial regulations, combined with technical expertise, makes him 
                  the ideal mentor for entrepreneurs looking to build successful FinTech ventures.
                </p>
              </div>
              <div className="text-center">
                <img 
                  src={chandraPatniImage} 
                  alt="Chandra Patni" 
                  className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary/20"
                />
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">What You'll Gain</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p>Comprehensive FinTech market analysis and opportunity mapping</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p>Regulatory compliance framework and licensing guidance</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p>Technical architecture blueprint for FinTech solutions</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p>Customer acquisition and partnership strategies</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p>Risk management and cybersecurity protocols</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p>Ongoing FinTech industry insights and mentorship</p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration */}
          <div className="bg-card p-8 rounded-xl border text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Innovate in FinTech?</h2>
            <p className="text-muted-foreground mb-6">
              Join this cutting-edge workshop and build the future of financial technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" onClick={handleRegister}>
                <Calendar className="mr-2 h-5 w-5" />
                Register Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8" onClick={handleContact}>
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {showRegistrationForm && (
        <WorkshopRegistrationForm
          workshopTitle="FinTech Innovation Workshop"
          onClose={() => setShowRegistrationForm(false)}
        />
      )}
    </div>
  );
};

export default FinTechInnovation;