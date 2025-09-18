import { useState } from "react";
import Header from "@/components/Header";
import ConsultationForm from "@/components/ConsultationForm";

const RealEstate = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  return (
    <>
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-12 pt-24">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Real Estate Technology</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            PropTech solutions and real estate strategies for sustainable growth and market transformation.
          </p>
        </header>

        {/* Key Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">₹10T</div>
            <div className="text-sm text-muted-foreground">Indian Real Estate Market Size</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">75%</div>
            <div className="text-sm text-muted-foreground">Digitization Opportunity</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">50M+</div>
            <div className="text-sm text-muted-foreground">Properties to be Digitized</div>
          </div>
        </div>

        {/* PropTech Innovation Areas */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">PropTech Innovation Areas</h2>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-4 shadow-card">
                <h3 className="font-semibold text-foreground mb-2">Property Management Platforms</h3>
                <p className="text-muted-foreground text-sm">End-to-end digital solutions for property management, tenant relations, and maintenance operations.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 shadow-card">
                <h3 className="font-semibold text-foreground mb-2">Investment Analytics Tools</h3>
                <p className="text-muted-foreground text-sm">AI-powered analytics for property valuation, investment opportunities, and market trend analysis.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 shadow-card">
                <h3 className="font-semibold text-foreground mb-2">Real Estate Marketplaces</h3>
                <p className="text-muted-foreground text-sm">Comprehensive digital marketplaces connecting buyers, sellers, investors, and service providers.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 shadow-card">
                <h3 className="font-semibold text-foreground mb-2">Smart Building Technologies</h3>
                <p className="text-muted-foreground text-sm">IoT integration, automation systems, and sustainable building management solutions.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Technology Solutions</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Blockchain Property Records</h4>
                  <p className="text-muted-foreground text-sm">Transparent and immutable property ownership and transaction records</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Virtual Reality Tours</h4>
                  <p className="text-muted-foreground text-sm">Immersive property viewing experiences using VR/AR technology</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Fractional Ownership Platforms</h4>
                  <p className="text-muted-foreground text-sm">Digital platforms enabling fractional real estate investment and ownership</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Predictive Market Analytics</h4>
                  <p className="text-muted-foreground text-sm">Machine learning models for price prediction and market opportunity identification</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Opportunities */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Market Opportunities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 shadow-card">
              <h3 className="font-bold text-foreground mb-3">Commercial Real Estate</h3>
              <p className="text-muted-foreground text-sm mb-4">Digital transformation of office spaces, co-working solutions, and commercial property management.</p>
              <div className="text-primary font-semibold">₹2.5T market potential</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-card">
              <h3 className="font-bold text-foreground mb-3">Residential PropTech</h3>
              <p className="text-muted-foreground text-sm mb-4">Home buying/selling platforms, rental management, and smart home integration solutions.</p>
              <div className="text-primary font-semibold">₹4T market potential</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-card">
              <h3 className="font-bold text-foreground mb-3">Real Estate Finance</h3>
              <p className="text-muted-foreground text-sm mb-4">Digital lending platforms, investment platforms, and real estate-backed financial instruments.</p>
              <div className="text-primary font-semibold">₹3.5T market potential</div>
            </div>
          </div>
        </div>

        <section className="bg-card border border-border rounded-lg p-6 shadow-card">
          <h2 className="text-2xl font-bold text-foreground mb-4">Partner with PropTech Leaders</h2>
          <p className="text-muted-foreground mb-6">Transform the real estate industry with innovative technology solutions. Let's discuss your PropTech vision.</p>
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

export default RealEstate;
