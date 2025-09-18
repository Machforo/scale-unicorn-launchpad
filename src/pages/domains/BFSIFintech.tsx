import { useState } from "react";
import Header from "@/components/Header";
import ConsultationForm from "@/components/ConsultationForm";

const BFSIFintech = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  return (
    <>
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-12 pt-24">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">BFSI / Fintech</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Financial services innovation focusing on digital transformation, inclusion, and next-generation banking solutions.
          </p>
        </header>

        {/* Key Market Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">₹5T</div>
            <div className="text-sm text-muted-foreground">Indian Fintech Market by 2025</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">400M+</div>
            <div className="text-sm text-muted-foreground">Digital Payment Users</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">87%</div>
            <div className="text-sm text-muted-foreground">Financial Inclusion Target</div>
          </div>
        </div>

        {/* Innovation Focus Areas */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Fintech Innovation Areas</h2>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-4 shadow-card">
                <h3 className="font-semibold text-foreground mb-2">Digital Payment Solutions</h3>
                <p className="text-muted-foreground text-sm">UPI, wallets, CBDC, cross-border payments, and blockchain-based payment systems.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 shadow-card">
                <h3 className="font-semibold text-foreground mb-2">Lending Platforms</h3>
                <p className="text-muted-foreground text-sm">P2P lending, BNPL, SME financing, and AI-powered credit scoring solutions.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 shadow-card">
                <h3 className="font-semibold text-foreground mb-2">Insurance Technology</h3>
                <p className="text-muted-foreground text-sm">Parametric insurance, micro-insurance, embedded insurance, and claims automation.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 shadow-card">
                <h3 className="font-semibold text-foreground mb-2">Wealth Management Tools</h3>
                <p className="text-muted-foreground text-sm">Robo-advisors, goal-based investing, alternative investments, and financial planning platforms.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Technology Enablers</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">AI/ML Risk Assessment</h4>
                  <p className="text-muted-foreground text-sm">Advanced algorithms for fraud detection and credit risk evaluation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Blockchain Infrastructure</h4>
                  <p className="text-muted-foreground text-sm">DeFi protocols, smart contracts, and distributed ledger solutions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Open Banking APIs</h4>
                  <p className="text-muted-foreground text-sm">Account aggregation, consent management, and financial data analytics</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">RegTech Solutions</h4>
                  <p className="text-muted-foreground text-sm">Automated compliance, KYC/AML, and regulatory reporting systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Segments */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Key Market Segments</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 shadow-card text-center">
              <h3 className="font-bold text-foreground mb-3">Digital Banking</h3>
              <p className="text-muted-foreground text-sm mb-4">Neo-banks, digital-only banking services, and customer experience platforms.</p>
              <div className="text-primary font-semibold">₹800B opportunity</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-card text-center">
              <h3 className="font-bold text-foreground mb-3">InsurTech</h3>
              <p className="text-muted-foreground text-sm mb-4">Digital insurance distribution, claims processing, and risk assessment platforms.</p>
              <div className="text-primary font-semibold">₹350B opportunity</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-card text-center">
              <h3 className="font-bold text-foreground mb-3">WealthTech</h3>
              <p className="text-muted-foreground text-sm mb-4">Investment platforms, portfolio management, and financial advisory services.</p>
              <div className="text-primary font-semibold">₹450B opportunity</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-card text-center">
              <h3 className="font-bold text-foreground mb-3">Crypto/DeFi</h3>
              <p className="text-muted-foreground text-sm mb-4">Cryptocurrency exchanges, DeFi protocols, and blockchain financial services.</p>
              <div className="text-primary font-semibold">₹200B opportunity</div>
            </div>
          </div>
        </div>

        <section className="bg-card border border-border rounded-lg p-6 shadow-card">
          <h2 className="text-2xl font-bold text-foreground mb-4">Lead Financial Innovation</h2>
          <p className="text-muted-foreground mb-6">Partner with us to build the next generation of financial services. Let's discuss your fintech vision.</p>
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

export default BFSIFintech;
