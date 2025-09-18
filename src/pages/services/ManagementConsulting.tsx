import { Target, BarChart, Users, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";

const ManagementConsulting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-12 pt-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Management Consulting
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            McKinsey-style consulting for startups with proven business methodologies and frameworks.
          </p>
        </div>

        {/* Hero Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <Target className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">10+</div>
            <div className="text-sm text-muted-foreground">Proven Methodologies</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <BarChart className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">500+</div>
            <div className="text-sm text-muted-foreground">Startups Consulted</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <Users className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">93%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <Lightbulb className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">24 Months</div>
            <div className="text-sm text-muted-foreground">Avg. Growth Timeline</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Methodologies</h2>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">Blue Ocean Strategy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create uncontested market spaces and make competition irrelevant by focusing 
                  on value innovation and new market creation.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">Crossing the Chasm</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Navigate the critical gap between early adopters and mainstream markets 
                  with proven strategies for technology startups.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">5-Stage/5-Gate Framework</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Systematic approach to product development and market entry with 
                  built-in checkpoints and risk mitigation strategies.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Service Areas</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Business Strategy Development</h4>
                  <p className="text-muted-foreground text-sm">Comprehensive strategic planning and market positioning</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Operational Excellence</h4>
                  <p className="text-muted-foreground text-sm">Process optimization and operational efficiency improvements</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Performance Optimization</h4>
                  <p className="text-muted-foreground text-sm">KPI development and performance measurement systems</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Systems Implementation</h4>
                  <p className="text-muted-foreground text-sm">Technology and process system design and implementation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Change Management</h4>
                  <p className="text-muted-foreground text-sm">Organizational transformation and culture development</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Methodologies Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">10 Proven Business Methodologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              "Blue Ocean Strategy",
              "Crossing the Chasm", 
              "5-Stage/5-Gate",
              "Good to Great",
              "Maxi-Marketing",
              "SAFe Framework",
              "Six Sigma",
              "Lean Startup",
              "Design Thinking",
              "Bhagavad Gita Wisdom"
            ].map((methodology, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-4 text-center shadow-card hover:shadow-elegant transition-shadow">
                <div className="text-sm font-medium text-foreground">{methodology}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-card border border-border rounded-lg p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Transform Your Business Strategy?</h2>
          <p className="text-muted-foreground mb-6">Schedule a consultation to discuss your management consulting needs.</p>
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

export default ManagementConsulting;