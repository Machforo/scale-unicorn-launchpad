import { useState } from "react";
import Header from "@/components/Header";
import ConsultationForm from "@/components/ConsultationForm";

const Retail = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  return (
    <>
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-12 pt-24">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Retail Technology</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            E-commerce platforms, retail technology solutions, and omnichannel experiences for modern consumer engagement.
          </p>
        </header>

        {/* Key Market Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">₹7T</div>
            <div className="text-sm text-muted-foreground">Indian Retail Market by 2026</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">350M+</div>
            <div className="text-sm text-muted-foreground">Online Shoppers in India</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">25%</div>
            <div className="text-sm text-muted-foreground">Annual E-commerce Growth</div>
          </div>
        </div>

        {/* E-commerce & Retail Focus */}
        <section className="bg-card border border-border rounded-lg p-8 shadow-card">
          <h2 className="text-2xl font-bold text-foreground mb-6">E-commerce Solutions</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Platform Development</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Multi-vendor marketplaces</li>
                <li>• B2B e-commerce platforms</li>
                <li>• Mobile commerce apps</li>
                <li>• Social commerce integration</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Growth Strategies</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Omnichannel retail strategy</li>
                <li>• Customer acquisition & retention</li>
                <li>• Supply chain optimization</li>
                <li>• Digital marketing automation</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <h4 className="font-semibold text-foreground mb-2">Key E-commerce Metrics</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-xl font-bold text-primary">$150B+</div>
                <div className="text-sm text-muted-foreground">India E-commerce Market</div>
              </div>
              <div>
                <div className="text-xl font-bold text-primary">400M+</div>
                <div className="text-sm text-muted-foreground">Digital Shoppers</div>
              </div>
              <div>
                <div className="text-xl font-bold text-primary">30%</div>
                <div className="text-sm text-muted-foreground">YoY Growth Rate</div>
              </div>
              <div>
                <div className="text-xl font-bold text-primary">45%</div>
                <div className="text-sm text-muted-foreground">Mobile Commerce Share</div>
              </div>
            </div>
          </div>
        </section>
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Retail Innovation Areas</h2>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-4 shadow-card">
                <h3 className="font-semibold text-foreground mb-2">Omnichannel Platforms</h3>
                <p className="text-muted-foreground text-sm">Seamless integration across online, mobile, and physical store experiences with unified customer journeys.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 shadow-card">
                <h3 className="font-semibold text-foreground mb-2">Supply Chain Optimization</h3>
                <p className="text-muted-foreground text-sm">AI-powered demand forecasting, inventory management, and last-mile delivery optimization.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 shadow-card">
                <h3 className="font-semibold text-foreground mb-2">Customer Experience Tools</h3>
                <p className="text-muted-foreground text-sm">Personalization engines, chatbots, AR/VR try-ons, and social commerce integrations.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 shadow-card">
                <h3 className="font-semibold text-foreground mb-2">Inventory Management</h3>
                <p className="text-muted-foreground text-sm">Real-time tracking, automated reordering, and smart warehouse management systems.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Technology Enablers</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">AI-Powered Personalization</h4>
                  <p className="text-muted-foreground text-sm">Machine learning for product recommendations and dynamic pricing</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Computer Vision & AR</h4>
                  <p className="text-muted-foreground text-sm">Visual search, virtual try-ons, and automated checkout systems</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Voice Commerce</h4>
                  <p className="text-muted-foreground text-sm">Voice assistants and conversational commerce platforms</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Blockchain Supply Chain</h4>
                  <p className="text-muted-foreground text-sm">Product authenticity, traceability, and transparent supply chains</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Retail Segments */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Key Retail Segments</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 shadow-card text-center">
              <h3 className="font-bold text-foreground mb-3">Fashion & Lifestyle</h3>
              <p className="text-muted-foreground text-sm mb-4">Digital fashion platforms, virtual styling, and sustainable fashion solutions.</p>
              <div className="text-primary font-semibold">₹1.8T opportunity</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-card text-center">
              <h3 className="font-bold text-foreground mb-3">Grocery & FMCG</h3>
              <p className="text-muted-foreground text-sm mb-4">Quick commerce, subscription services, and fresh produce delivery platforms.</p>
              <div className="text-primary font-semibold">₹2.2T opportunity</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-card text-center">
              <h3 className="font-bold text-foreground mb-3">Electronics & Gadgets</h3>
              <p className="text-muted-foreground text-sm mb-4">Tech marketplaces, product comparison tools, and warranty management systems.</p>
              <div className="text-primary font-semibold">₹1.5T opportunity</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-card text-center">
              <h3 className="font-bold text-foreground mb-3">Home & Furniture</h3>
              <p className="text-muted-foreground text-sm mb-4">AR-based home design, furniture customization, and interior design platforms.</p>
              <div className="text-primary font-semibold">₹900B opportunity</div>
            </div>
          </div>
        </div>

        <section className="bg-card border border-border rounded-lg p-6 shadow-card">
          <h2 className="text-2xl font-bold text-foreground mb-4">Transform Retail Experiences</h2>
          <p className="text-muted-foreground mb-6">Partner with us to build next-generation retail solutions. Let's discuss your commerce vision and requirements.</p>
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

export default Retail;
