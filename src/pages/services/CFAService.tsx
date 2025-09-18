import { TrendingUp, DollarSign, BarChart, PieChart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";

const CFAService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-12 pt-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            CFA Service
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Financial analysis and investment advisory services with certified financial analysts.
          </p>
        </div>

        {/* Hero Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">CFA</div>
            <div className="text-sm text-muted-foreground">Certified Analysts</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <DollarSign className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">₹100Cr+</div>
            <div className="text-sm text-muted-foreground">Assets Analyzed</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <BarChart className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">200+</div>
            <div className="text-sm text-muted-foreground">Financial Models</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <PieChart className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">15+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Financial Services</h2>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">Financial Modeling</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive financial models for valuation, forecasting, and strategic 
                  decision-making using industry-standard methodologies.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">Investment Analysis</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In-depth investment analysis including due diligence, market research, 
                  and risk-return assessment for informed investment decisions.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">Portfolio Management</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Strategic portfolio construction and management services aligned with 
                  risk tolerance and investment objectives.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Expertise Areas</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Valuation Services</h4>
                  <p className="text-muted-foreground text-sm">DCF, comparable company analysis, and precedent transactions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Risk Assessment</h4>
                  <p className="text-muted-foreground text-sm">Comprehensive risk analysis and mitigation strategies</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Market Analysis</h4>
                  <p className="text-muted-foreground text-sm">Sector analysis and market trend identification</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Financial Planning</h4>
                  <p className="text-muted-foreground text-sm">Strategic financial planning and capital allocation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Due Diligence</h4>
                  <p className="text-muted-foreground text-sm">Comprehensive financial and commercial due diligence</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CFA Advantage */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Why Choose CFA Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Global Standards</h3>
              <p className="text-muted-foreground">CFA Institute's rigorous ethical and professional standards</p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Technical Expertise</h3>
              <p className="text-muted-foreground">Advanced financial analysis and investment management skills</p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <PieChart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Ethical Excellence</h3>
              <p className="text-muted-foreground">Commitment to highest ethical and professional conduct</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-card border border-border rounded-lg p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold text-foreground mb-4">Advance Your Financial Career</h2>
          <p className="text-muted-foreground mb-6">Schedule a consultation to discuss our CFA services and programs.</p>
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

export default CFAService;