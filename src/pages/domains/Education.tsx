import { useState } from "react";
import Header from "@/components/Header";
import ConsultationForm from "@/components/ConsultationForm";

const Education = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  return (
    <>
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-12 pt-24">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Education Technology</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Revolutionary EdTech innovations and learning platforms that democratize quality education across India and beyond.
          </p>
        </header>

        {/* Key Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">500M+</div>
            <div className="text-sm text-muted-foreground">Students Reached Globally</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">85%</div>
            <div className="text-sm text-muted-foreground">Learning Outcome Improvement</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Accessible Learning</div>
          </div>
        </div>

        {/* Focus Areas */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Our EdTech Focus Areas</h2>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-4 shadow-card">
                <h3 className="font-semibold text-foreground mb-2">Online Learning Platforms</h3>
                <p className="text-muted-foreground text-sm">Comprehensive digital learning environments with interactive content and personalized pathways.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 shadow-card">
                <h3 className="font-semibold text-foreground mb-2">Skill Development Programs</h3>
                <p className="text-muted-foreground text-sm">Industry-aligned training programs for professional development and career advancement.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 shadow-card">
                <h3 className="font-semibold text-foreground mb-2">Educational Content Creation</h3>
                <p className="text-muted-foreground text-sm">AI-powered content generation and curation for diverse learning needs and preferences.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 shadow-card">
                <h3 className="font-semibold text-foreground mb-2">Student Engagement Tools</h3>
                <p className="text-muted-foreground text-sm">Gamification, AR/VR experiences, and social learning features to boost engagement.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Innovation Areas</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">AI-Powered Personalization</h4>
                  <p className="text-muted-foreground text-sm">Adaptive learning algorithms that customize content delivery</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Immersive Learning</h4>
                  <p className="text-muted-foreground text-sm">VR/AR experiences for complex subject matter visualization</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Blockchain Credentials</h4>
                  <p className="text-muted-foreground text-sm">Secure, verifiable digital certificates and micro-credentials</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Real-time Analytics</h4>
                  <p className="text-muted-foreground text-sm">Comprehensive learning analytics and progress tracking</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 shadow-card">
              <h3 className="font-bold text-foreground mb-3">K-12 Digital Platform</h3>
              <p className="text-muted-foreground text-sm mb-4">Transformed traditional classroom learning for 2M+ students across 500+ schools.</p>
              <div className="text-primary font-semibold">40% improvement in test scores</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-card">
              <h3 className="font-bold text-foreground mb-3">Professional Certification</h3>
              <p className="text-muted-foreground text-sm mb-4">Upskilled 100K+ professionals in emerging technologies and digital skills.</p>
              <div className="text-primary font-semibold">92% job placement rate</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-card">
              <h3 className="font-bold text-foreground mb-3">Rural Education Initiative</h3>
              <p className="text-muted-foreground text-sm mb-4">Brought quality education to remote areas through mobile learning solutions.</p>
              <div className="text-primary font-semibold">50K+ rural students connected</div>
            </div>
          </div>
        </div>

        <section className="bg-card border border-border rounded-lg p-6 shadow-card">
          <h2 className="text-2xl font-bold text-foreground mb-4">Partner with Us</h2>
          <p className="text-muted-foreground mb-6">Join us in revolutionizing education through technology. Let's discuss your EdTech vision and requirements.</p>
          <button 
            onClick={() => setShowConsultationForm(true)}
            className="btn-primary"
          >
            Schedule Consultation
          </button>
        </section>
      </div>
    </div>
    
    {showConsultationForm && (
      <ConsultationForm onClose={() => setShowConsultationForm(false)} />
    )}
    </>
  );
};

export default Education;
