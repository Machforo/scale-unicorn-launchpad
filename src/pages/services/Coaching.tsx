import { useState } from "react";
import Header from "@/components/Header";
import ConsultationForm from "@/components/ConsultationForm";

const Coaching = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  return (
    <>
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-12 pt-24">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Coaching</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Personalized mentorship to accelerate your journey with systems thinking, execution discipline, and founder-first strategies.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <article className="bg-card border border-border rounded-lg p-6 shadow-card">
            <h2 className="text-xl font-semibold text-foreground mb-4">What you get</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>One-on-one strategy sessions</li>
              <li>Business model and PMF guidance</li>
              <li>Go-to-market planning</li>
              <li>Accountability and execution playbooks</li>
            </ul>
          </article>
          <article className="bg-card border border-border rounded-lg p-6 shadow-card">
            <h2 className="text-xl font-semibold text-foreground mb-4">Outcomes</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>Clarity on priorities and next steps</li>
              <li>Measurable progress every week</li>
              <li>Smart Growth without dilution</li>
              <li>Founder wellbeing and resilience</li>
            </ul>
          </article>
        </section>

        <section className="bg-card border border-border rounded-lg p-6 shadow-card">
          <h2 className="text-2xl font-bold text-foreground mb-4">Contact us</h2>
          <p className="text-muted-foreground mb-6">Schedule a consultation to see if coaching is the right fit.</p>
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

export default Coaching;
