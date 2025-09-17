import { useState } from "react";
import Header from "@/components/Header";
import IncubationForm from "@/components/IncubationForm";

const Incubation = () => {
  const [showIncubationForm, setShowIncubationForm] = useState(false);

  return (
    <>
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-12 pt-24">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Incubation</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            End-to-end startup support: product, revenue, partnerships, and scale with zero-dilution strategies.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <article className="bg-card border border-border rounded-lg p-6 shadow-card">
            <h2 className="text-xl font-semibold text-foreground mb-4">Program pillars</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>360° operational support</li>
              <li>Channel partnerships and franchising</li>
              <li>Growth playbooks across domains</li>
              <li>Investor readiness without equity loss</li>
            </ul>
          </article>
          <article className="bg-card border border-border rounded-lg p-6 shadow-card">
            <h2 className="text-xl font-semibold text-foreground mb-4">Who should apply</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>Early to growth-stage founders</li>
              <li>Clear market thesis and traction potential</li>
              <li>Founder-first mindset and long-term vision</li>
            </ul>
          </article>
        </section>

        <section className="bg-card border border-border rounded-lg p-6 shadow-card">
          <h2 className="text-2xl font-bold text-foreground mb-4">Apply for Incubation</h2>
          <p className="text-muted-foreground mb-6">Tell us about your startup and goals.</p>
          <button 
            onClick={() => setShowIncubationForm(true)}
            className="btn-primary"
          >
            Apply for Incubation
          </button>
        </section>
      </div>
    </div>
    
    {showIncubationForm && (
      <IncubationForm onClose={() => setShowIncubationForm(false)} />
    )}
    </>
  );
};

export default Incubation;
