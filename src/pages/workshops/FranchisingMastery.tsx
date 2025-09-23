import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Users, Target, Award, CheckCircle, Calendar, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import WorkshopRegistrationForm from "@/components/WorkshopRegistrationForm";
import samKunduImage from "@/assets/sam-kundu-new.jpg";

const FranchisingMastery = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const handleRegister = () => {
    setShowRegistrationForm(true);
  };

  const handleContact = () => {
    window.location.href = "mailto:support@idea2unicorn.ai?subject=Franchising Mastery Workshop Inquiry";
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
              Franchising Mastery Workshop
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn from the 'Franchising King' how to build scalable franchise models and expand globally
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
              <p className="text-muted-foreground">Limited to 20</p>
            </div>
            <div className="bg-card p-6 rounded-lg border text-center">
              <Target className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Focus</h3>
              <p className="text-muted-foreground">Franchise Systems</p>
            </div>
          </div>

          {/* Purpose */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-bold text-center mb-6">Purpose of the Workshop</h2>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Master the art of franchising to scale your business exponentially. Learn proven systems, 
              legal frameworks, and operational strategies to build successful franchise networks.
            </p>
          </div>

          {/* Workshop Structure */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Workshop Design</h2>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                  Session 1: Franchise Model Foundation
                </h3>
                <p className="text-muted-foreground">Understanding franchise fundamentals, business model validation, and market analysis for franchising success.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                  Session 2: Systems & Operations
                </h3>
                <p className="text-muted-foreground">Developing standardized systems, operations manual, and quality control processes for consistent franchise performance.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                  Session 3: Legal Framework & Compliance
                </h3>
                <p className="text-muted-foreground">Franchise agreements, legal compliance, intellectual property protection, and regulatory requirements.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-3">4</span>
                  Session 4: Franchisee Support & Growth
                </h3>
                <p className="text-muted-foreground">Training programs, ongoing support systems, performance monitoring, and expansion strategies.</p>
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
                <h3 className="text-2xl font-semibold mb-4">Sam Kundu - "The Franchising King"</h3>
                <p className="text-muted-foreground mb-4">
                  With over 15 years of experience in building and managing franchise networks, Sam has helped 
                  numerous businesses scale through franchising. Known as the "Franchising King," he has 
                  developed franchise systems across multiple industries.
                </p>
                <p className="text-muted-foreground">
                  His expertise covers everything from franchise model development to legal compliance and 
                  franchisee support systems, making him the go-to expert for franchise expansion.
                </p>
              </div>
              <div className="text-center">
                <img 
                  src={samKunduImage} 
                  alt="Sam Kundu" 
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
                  <p>Complete franchise business model blueprint</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p>Standardized operations and training systems</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p>Legal framework and compliance guidelines</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p>Franchisee recruitment and selection process</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p>Performance monitoring and quality control systems</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p>Ongoing support and mentorship from Sam Kundu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration */}
          <div className="bg-card p-8 rounded-xl border text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Master Franchising?</h2>
            <p className="text-muted-foreground mb-6">
              Join this exclusive workshop and learn to scale your business through franchising
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
          workshopTitle="Franchising Mastery Workshop"
          onClose={() => setShowRegistrationForm(false)}
        />
      )}
    </div>
  );
};

export default FranchisingMastery;