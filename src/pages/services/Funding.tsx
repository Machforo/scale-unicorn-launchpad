import { DollarSign, TrendingUp, Briefcase, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";

const Funding = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-12 pt-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Funding Solutions
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pre-seed, Seed & Angel Funding solutions with our committed corpus and investor network.
          </p>
        </div>

        {/* Hero Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <DollarSign className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">₹7.5 Cr</div>
            <div className="text-sm text-muted-foreground">Committed Corpus</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <Users className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">50+</div>
            <div className="text-sm text-muted-foreground">Angel Investors</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">$1M</div>
            <div className="text-sm text-muted-foreground">Possible Valuation</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <Briefcase className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">15 Days</div>
            <div className="text-sm text-muted-foreground">Unicorn Blueprint</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Funding Approach</h2>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">Pre-seed Funding</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Early-stage funding to validate your concept and build initial prototypes. 
                  We provide capital along with mentorship to establish product-market fit.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">Seed Funding</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Growth capital for startups with proven traction. Our funding comes with 
                  strategic guidance and access to our extensive network of advisors.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">Angel Network</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Connect with our curated network of angel investors who bring both capital 
                  and domain expertise to accelerate your startup's growth journey.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Funding Benefits</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Smart Growth Strategies</h4>
                  <p className="text-muted-foreground text-sm">Scale without diluting equity through our proven methodologies</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Strategic Mentorship</h4>
                  <p className="text-muted-foreground text-sm">Access to experienced entrepreneurs and industry veterans</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Network Access</h4>
                  <p className="text-muted-foreground text-sm">Connect with our ecosystem of partners, customers, and investors</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Operational Support</h4>
                  <p className="text-muted-foreground text-sm">360° support including legal, financial, and technical guidance</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Market Validation</h4>
                  <p className="text-muted-foreground text-sm">Proven frameworks to validate and scale your business model</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Funding Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Application</h3>
              <p className="text-muted-foreground text-sm">Submit your pitch deck and business plan for initial review</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Due Diligence</h3>
              <p className="text-muted-foreground text-sm">Comprehensive evaluation of your business model and market potential</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Investment Committee</h3>
              <p className="text-muted-foreground text-sm">Present to our investment committee and angel network</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Funding & Support</h3>
              <p className="text-muted-foreground text-sm">Receive funding along with ongoing mentorship and support</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-card border border-border rounded-lg p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Secure Funding?</h2>
          <p className="text-muted-foreground mb-6">Schedule a consultation to discuss your funding requirements.</p>
          <button 
            onClick={() => {
              const form = document.createElement('div');
              form.innerHTML = `
                <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onclick="this.remove()">
                  <div class="bg-card p-6 rounded-lg max-w-md w-full mx-4" onclick="event.stopPropagation()">
                    <h3 class="text-xl font-bold mb-4">Schedule Consultation</h3>
                    <p class="text-muted-foreground mb-4">Contact us at: sandipp@idea2unicorn.ai</p>
                    <button onclick="this.closest('.fixed').remove()" class="btn-primary">Close</button>
                  </div>
                </div>
              `;
              document.body.appendChild(form);
            }}
            className="btn-primary"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Funding;