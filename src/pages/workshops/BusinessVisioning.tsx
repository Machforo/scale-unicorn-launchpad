import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Users, Target, CheckCircle, MessageCircle } from "lucide-react";
import WorkshopRegistrationForm from "@/components/WorkshopRegistrationForm";

const BusinessVisioning = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const handleRegister = () => {
    setShowRegistrationForm(true);
  };

  const whatsappGroup = "https://lnkd.in/gUAY4hNa";

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 pt-24">
        <Link to="/workshops">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Workshops
          </Button>
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
            Business Visioning – Idea2Unicorn
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            Our proprietary 5-step visual method to craft a clear, actionable business vision across every sphere of life.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center text-sm text-muted-foreground mb-2"><Clock className="h-4 w-4 mr-2"/>Duration</div>
            <div className="text-foreground font-semibold">Two cohort lectures + Three 1:1 sessions</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center text-sm text-muted-foreground mb-2"><Users className="h-4 w-4 mr-2"/>Group Size</div>
            <div className="text-foreground font-semibold">Small cohorts with personalized 1:1 guidance</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center text-sm text-muted-foreground mb-2"><Target className="h-4 w-4 mr-2"/>Focus</div>
            <div className="text-foreground font-semibold">Clarity, validation, and actionable next steps</div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Join the Workshop</h2>
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
            <div>
              <p className="text-muted-foreground mb-2">Participate via our WhatsApp group</p>
              <a href={whatsappGroup} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary underline">
                <MessageCircle className="h-4 w-4 mr-2"/>Join WhatsApp Group
              </a>
            </div>
            <Button size="lg" onClick={handleRegister}>Register Now</Button>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Fee Structure</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">India</h3>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>Two cohort lectures – ₹504.00</li>
                <li>Three one-to-one sessions – ₹2,502.00</li>
                <li className="text-foreground font-medium">Total – ₹2,790.00</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">USA & Other Countries</h3>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>Two cohort lectures – $25.00</li>
                <li>Three one-to-one sessions – included</li>
                <li className="text-foreground font-medium">Total – $225.00</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Workshop Topics</h2>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Core Foundations</h3>
              <ul className="space-y-2">
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"/>Purpose of life of entrepreneurs</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"/>Purpose of enterprise</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"/>Motivating entrepreneurs for the purpose</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"/>9 pillars of Success</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"/>The wheel of life</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">5-Step Process</h3>
              <ul className="space-y-2">
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"/>Idea - Conceptualize your vision</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"/>Planning - Strategic roadmap development</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"/>MVP1 - Build your minimum viable product</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"/>Launch - Market entry strategies</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"/>Global Launch - Scale internationally</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Law of Attraction & Manifestation</h3>
              <ul className="space-y-2">
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"/>Why law of attraction not working for you?</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"/>How to make law of attraction work for you</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"/>Through purification and past life karma cleansing</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"/>Importance of charity/tithing: Karmic investment and paying off karmic debts</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"/>How to visualize and achieve your dream</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"/>Pathway to achieving unicorn status</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Vision Enhancement Method</h3>
              <ul className="space-y-2">
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"/>Visualize your vision using What, When, Where, Why & How</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"/>Feedback to enhance your vision by 2–5x across Health, Wealth, Career, Venture, Charity, Convocation, etc.</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"/>Ensure the enterprise and other life dimensions are crystal clear</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"/>Share your vision to get clarity on what you will get and what you will not</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"/>Sandipp will guide you with steps to overcome obstructions to your Business Vision</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center">
          <Button size="lg" onClick={handleRegister}>Register Now</Button>
          <div className="mt-4 text-sm text-muted-foreground">
            Or join the WhatsApp group: <a href={whatsappGroup} target="_blank" rel="noopener noreferrer" className="underline text-primary">{whatsappGroup}</a>
          </div>
        </section>
      </div>

      {showRegistrationForm && (
        <WorkshopRegistrationForm
          workshopTitle="Business Visioning - Idea2Unicorn"
          onClose={() => setShowRegistrationForm(false)}
        />
      )}
    </div>
  );
};

export default BusinessVisioning;