import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Users, Target, Award, CheckCircle, Calendar, CreditCard, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import WorkshopRegistrationForm from "@/components/WorkshopRegistrationForm";
import sandippVijjImg from "@/assets/sandipp-vijj.png";


const LeadershipExcellence = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const handleRegister = () => {
    setShowRegistrationForm(true);
  };

  const handleContact = () => {
    window.location.href = "mailto:support@idea2unicorn.ai?subject=Leadership Excellence Workshop Inquiry";
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
              Leadership Excellence Workshop
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Develop exceptional leadership skills and build high-performing teams
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
              <p className="text-muted-foreground">Limited to 10</p>
            </div>
            <div className="bg-card p-6 rounded-lg border text-center">
              <Target className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Focus</h3>
              <p className="text-muted-foreground">Leadership Skills</p>
            </div>
          </div>

          {/* Purpose */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-bold text-center mb-6">Purpose of the Workshop</h2>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Develop the leadership mindset, skills, and strategies needed to inspire teams, drive innovation, 
              and achieve extraordinary results in today's dynamic business environment.
            </p>
          </div>

          {/* Workshop Structure */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Workshop Design</h2>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                  Session 1: Leadership Fundamentals & Self-Awareness
                </h3>
                <p className="text-muted-foreground">Understanding leadership styles, developing self-awareness, and identifying personal leadership strengths and growth areas.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                  Session 2: Team Building & Communication
                </h3>
                <p className="text-muted-foreground">Building high-performing teams, mastering communication skills, and creating a culture of trust and collaboration.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                  Session 3: Strategic Thinking & Decision Making
                </h3>
                <p className="text-muted-foreground">Developing strategic thinking capabilities, making tough decisions, and leading through uncertainty and change.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-3">4</span>
                  Session 4: Innovation Leadership & Legacy Building
                </h3>
                <p className="text-muted-foreground">Fostering innovation, inspiring others to reach their potential, and building a lasting leadership legacy.</p>
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
                  An accomplished leader with over 20 years of experience building and leading teams across 
                  startups and enterprises. Sandipp has mentored hundreds of leaders and has a proven track 
                  record of transforming organizations through exceptional leadership development.
                </p>
                <p className="text-muted-foreground">
                  His leadership philosophy combines ancient wisdom from texts like the Bhagavad Gita with 
                  modern management practices, creating a unique and powerful approach to leadership excellence.
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
                  <p>Advanced leadership assessment and development plan</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p>Team building strategies and communication frameworks</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p>Strategic decision-making tools and methodologies</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p>Innovation leadership techniques and frameworks</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p>Personal leadership brand and legacy planning</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p>Ongoing leadership mentorship and peer network</p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration */}
          <div className="bg-card p-8 rounded-xl border text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Lead with Excellence?</h2>
            <p className="text-muted-foreground mb-6">
              Join this exclusive workshop and unlock your full leadership potential
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
          workshopTitle="Leadership Excellence Workshop"
          onClose={() => setShowRegistrationForm(false)}
        />
      )}
    </div>
  );
};

export default LeadershipExcellence;