import { FileText, Shield, Search, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";

const Patent = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-12 pt-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Patent Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Intellectual property protection and patent filing services for innovative startups and technologies.
          </p>
        </div>

        {/* Hero Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <FileText className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">500+</div>
            <div className="text-sm text-muted-foreground">Patents Filed</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">95%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <Search className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">1000+</div>
            <div className="text-sm text-muted-foreground">Prior Art Searches</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <Award className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">10+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Patent Services</h2>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">Patent Filing Assistance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  End-to-end patent filing support including application preparation, 
                  prosecution, and maintenance across multiple jurisdictions.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">IP Strategy Consulting</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Strategic intellectual property planning to maximize protection 
                  and commercial value of your innovations.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">Prior Art Research</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive prior art searches and patentability analysis 
                  to strengthen your patent applications.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Specialized Services</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Patent Drafting</h4>
                  <p className="text-muted-foreground text-sm">Professional patent application drafting and claim construction</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Patent Prosecution</h4>
                  <p className="text-muted-foreground text-sm">Patent office proceedings and examiner communications</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">IP Portfolio Management</h4>
                  <p className="text-muted-foreground text-sm">Strategic management of intellectual property portfolios</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Freedom to Operate</h4>
                  <p className="text-muted-foreground text-sm">FTO analysis and infringement risk assessment</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Patent Analytics</h4>
                  <p className="text-muted-foreground text-sm">Patent landscape analysis and competitive intelligence</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Patent Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Patent Filing Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Invention Disclosure</h3>
              <p className="text-muted-foreground text-sm">Document and assess your innovation for patentability</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Prior Art Search</h3>
              <p className="text-muted-foreground text-sm">Comprehensive search to identify existing technologies</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Application Drafting</h3>
              <p className="text-muted-foreground text-sm">Professional preparation of patent application</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Filing & Prosecution</h3>
              <p className="text-muted-foreground text-sm">File application and manage patent office proceedings</p>
            </div>
          </div>
        </div>

        {/* Technology Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Technology Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Software & AI",
              "Biotechnology", 
              "Medical Devices",
              "Electronics",
              "Mechanical",
              "Chemical",
              "Telecommunications",
              "Clean Technology"
            ].map((tech, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-4 text-center shadow-card hover:shadow-elegant transition-shadow">
                <div className="text-sm font-medium text-foreground">{tech}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <ConsultationForm onClose={() => {}} />
      </div>
      <Footer />
    </div>
  );
};

export default Patent;