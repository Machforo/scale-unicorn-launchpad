import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Users, Target, Award, CheckCircle, Calendar, CreditCard, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import WorkshopRegistrationForm from "@/components/WorkshopRegistrationForm";
import amardeepBajpaiImg from "@/assets/amardeep-bajpai-new.jpg";
import dineshMakhijaImg from "@/assets/dinesh-makhija-new.jpg";


const DigitalTransformation = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const handleRegister = () => {
    setShowRegistrationForm(true);
  };

  const handleContact = () => {
    window.location.href = "mailto:support@idea2unicorn.ai?subject=Digital Transformation Workshop Inquiry";
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
              Digital Transformation Workshop
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your business with cutting-edge digital strategies and technologies
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
              <p className="text-muted-foreground">Limited to 12</p>
            </div>
            <div className="bg-card p-6 rounded-lg border text-center">
              <Target className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Focus</h3>
              <p className="text-muted-foreground">Digital Strategy</p>
            </div>
          </div>

          {/* Purpose */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-bold text-center mb-6">Purpose of the Workshop</h2>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Navigate the digital landscape and transform your business operations, customer experience, 
              and growth strategies using the latest technologies and digital methodologies.
            </p>
          </div>

          {/* Workshop Structure */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Workshop Design</h2>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                  Session 1: Digital Strategy Foundation
                </h3>
                <p className="text-muted-foreground">Understanding digital transformation fundamentals, assessing current digital maturity, and creating a transformation roadmap.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                  Session 2: Technology Stack & Architecture
                </h3>
                <p className="text-muted-foreground">Selecting the right technologies, building scalable architecture, and implementing cloud-first strategies.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                  Session 3: Customer Experience & Data Analytics
                </h3>
                <p className="text-muted-foreground">Redesigning customer journeys, implementing data-driven decision making, and leveraging AI/ML for insights.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-3">4</span>
                  Session 4: Implementation & Change Management
                </h3>
                <p className="text-muted-foreground">Managing organizational change, training teams, measuring success, and continuous improvement strategies.</p>
              </div>
            </div>
          </div>

          {/* About Instructors */}
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-8 rounded-xl mb-12">
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold">About the Instructors</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Amardeep Bajpai */}
              <div className="text-center">
                <img 
                  src={amardeepBajpaiImg} 
                  alt="Amardeep Bajpai" 
                  className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary/20 mb-4"
                />
                <h3 className="text-2xl font-semibold mb-4">Amardeep Bajpai</h3>
                <p className="text-muted-foreground">
                  AI and digital transformation specialist with deep expertise in implementing 
                  artificial intelligence solutions for business growth. Amardeep brings cutting-edge 
                  AI methodologies and practical insights to help organizations leverage technology 
                  for competitive advantage.
                </p>
              </div>
              
              {/* Dinesh Makhija */}
              <div className="text-center">
                <img 
                  src={dineshMakhijaImg} 
                  alt="Dinesh Makhija" 
                  className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary/20 mb-4"
                />
                <h3 className="text-2xl font-semibold mb-4">Dinesh Makhija</h3>
                <p className="text-muted-foreground">
                  Digital transformation leader with extensive experience in technology 
                  architecture and enterprise solutions. Dinesh specializes in cloud-first 
                  strategies and scalable digital infrastructure that drives business innovation 
                  and operational excellence.
                </p>
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
                  <p>Comprehensive digital transformation strategy and roadmap</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p>Technology selection framework and implementation guide</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p>Customer experience optimization methodology</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p>Data analytics and AI implementation strategies</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p>Change management toolkit and best practices</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p>Ongoing digital transformation support and mentorship</p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration */}
          <div className="bg-card p-8 rounded-xl border text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Digitally?</h2>
            <p className="text-muted-foreground mb-6">
              Join this transformative workshop and lead your organization into the digital future
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
          workshopTitle="Digital Transformation Workshop"
          onClose={() => setShowRegistrationForm(false)}
        />
      )}
    </div>
  );
};

export default DigitalTransformation;