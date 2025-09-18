import { Compass, Target, BarChart, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";

const BusinessStrategy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-12 pt-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Business Strategy
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive business strategy consulting using 10 proven methodologies including Blue Ocean Strategy.
          </p>
        </div>

        {/* Hero Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <Compass className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">10</div>
            <div className="text-sm text-muted-foreground">Proven Methodologies</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <Target className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">500+</div>
            <div className="text-sm text-muted-foreground">Strategies Developed</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <BarChart className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">95%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <Lightbulb className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">18 Months</div>
            <div className="text-sm text-muted-foreground">Avg. Implementation</div>
          </div>
        </div>

        {/* Strategic Frameworks */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Strategic Frameworks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-6 shadow-card">
              <h3 className="text-xl font-semibold text-foreground mb-4">Blue Ocean Strategy</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Create uncontested market spaces by making competition irrelevant through value innovation.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Value Innovation Framework</li>
                <li>• Four Actions Framework</li>
                <li>• Strategy Canvas Development</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-card">
              <h3 className="text-xl font-semibold text-foreground mb-4">Strategic Planning</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Systematic approach to defining direction and making decisions on resource allocation.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Vision & Mission Development</li>
                <li>• SWOT Analysis</li>
                <li>• Strategic Goal Setting</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-card">
              <h3 className="text-xl font-semibold text-foreground mb-4">Market Positioning</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Define how your brand occupies a distinct position in the minds of target customers.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Competitive Analysis</li>
                <li>• Value Proposition Design</li>
                <li>• Brand Differentiation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Core Services</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Strategic Planning</h4>
                  <p className="text-muted-foreground text-sm">Comprehensive strategic planning and roadmap development</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Market Positioning</h4>
                  <p className="text-muted-foreground text-sm">Strategic market positioning and competitive differentiation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Competitive Analysis</h4>
                  <p className="text-muted-foreground text-sm">Deep market analysis and competitive landscape assessment</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Growth Roadmapping</h4>
                  <p className="text-muted-foreground text-sm">Strategic growth planning and milestone definition</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Methodology Highlights</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Blue Ocean Strategy",
                "Good to Great", 
                "Crossing the Chasm",
                "Design Thinking",
                "Lean Canvas",
                "OKR Framework",
                "BCG Matrix",
                "Porter's Five Forces"
              ].map((method, index) => (
                <div key={index} className="bg-primary/10 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium text-foreground">{method}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-card border border-border rounded-lg p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Develop Your Strategy?</h2>
          <p className="text-muted-foreground mb-6">Schedule a consultation to discuss your business strategy needs.</p>
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

export default BusinessStrategy;