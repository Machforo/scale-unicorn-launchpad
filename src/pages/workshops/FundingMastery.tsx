import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Users, Target, Award, CheckCircle, Calendar, CreditCard, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import WorkshopRegistrationForm from "@/components/WorkshopRegistrationForm";
import sandippVijjImg from "@/assets/sandipp-vijj.png";


const FundingMastery = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const handleRegister = () => {
    setShowRegistrationForm(true);
  };

  const handleContact = () => {
    window.location.href = "mailto:support@idea2unicorn.ai?subject=Funding Mastery Workshop Inquiry";
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
              Funding Mastery Workshop
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master the art of raising capital and securing funding for your startup
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
              <p className="text-muted-foreground">Limited to 15</p>
            </div>
            <div className="bg-card p-6 rounded-lg border text-center">
              <Target className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Focus</h3>
              <p className="text-muted-foreground">Funding Strategy</p>
            </div>
          </div>

          {/* Purpose */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-bold text-center mb-6">Purpose of the Workshop</h2>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Learn the systematic approach to securing funding for your startup. From preparing your pitch deck 
              to negotiating with investors, master every aspect of the funding journey.
            </p>
          </div>

          {/* Workshop Structure */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Workshop Design</h2>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                  Session 1: Funding Landscape & Strategy
                </h3>
                <p className="text-muted-foreground">Understanding different funding options, creating funding timeline, and identifying the right investors for your startup stage.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                  Session 2: Pitch Deck Mastery
                </h3>
                <p className="text-muted-foreground">Creating compelling pitch decks that tell your story, showcase your vision, and demonstrate market opportunity.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                  Session 3: Investor Relations & Negotiations
                </h3>
                <p className="text-muted-foreground">Building relationships with investors, understanding term sheets, and mastering the art of negotiation.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-3">4</span>
                  Session 4: Due Diligence & Closing
                </h3>
                <p className="text-muted-foreground">Preparing for due diligence, legal considerations, and successfully closing funding rounds.</p>
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
                <h3 className="text-2xl font-semibold mb-4">Sandipp Vijj</h3>
                <p className="text-muted-foreground mb-4">
                  With over two decades of experience in venture capital and startup funding, Sandipp has helped 
                  numerous startups secure over $500M in funding. His systematic approach to funding strategy 
                  has been refined through years of working with both startups and investors.
                </p>
                <p className="text-muted-foreground">
                  He brings real-world experience from both sides of the funding table, having been an entrepreneur 
                  who raised capital and an investor who evaluates deals.
                </p>
              </div>
              <div className="text-center">
                <img 
                  src={sandippVijjImg} 
                  alt="Sandipp Vijj" 
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
                  <p>Comprehensive funding strategy tailored to your startup stage</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p>Professional pitch deck template and presentation skills</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p>Access to investor network and warm introductions</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p>Understanding of term sheets and negotiation tactics</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p>Due diligence checklist and legal preparation guide</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p>Ongoing mentorship and funding support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration */}
          <div className="bg-card p-8 rounded-xl border text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Master Funding?</h2>
            <p className="text-muted-foreground mb-6">
              Join this exclusive workshop and take your funding strategy to the next level
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
          workshopTitle="Funding Mastery Workshop"
          onClose={() => setShowRegistrationForm(false)}
        />
      )}
    </div>
  );
};

export default FundingMastery;