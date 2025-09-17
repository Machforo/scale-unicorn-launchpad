import { useState } from "react";
import Header from "@/components/Header";
import ConsultationForm from "@/components/ConsultationForm";

const Telecom = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  return (
    <>
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-12 pt-24">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Telecom</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Next-generation communication technologies and connectivity solutions.
          </p>
        </header>

        <section className="bg-card border border-border rounded-lg p-6 shadow-card mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-4">Focus areas</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>5G applications</li>
            <li>IoT connectivity</li>
            <li>Network infrastructure</li>
            <li>Communication platforms</li>
          </ul>
        </section>

        <section className="bg-card border border-border rounded-lg p-6 shadow-card">
          <h2 className="text-2xl font-bold text-foreground mb-4">Contact us</h2>
          <p className="text-muted-foreground mb-6">Share your requirements and we'll get back to you.</p>
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

export default Telecom;
