import { Code, Cpu, Cloud, Smartphone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";

const DigitalEngineering = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-12 pt-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Digital Engineering
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Technology solutions and digital transformation services for modern startups and enterprises.
          </p>
        </div>

        {/* Hero Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <Code className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">100+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <Cpu className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">50+</div>
            <div className="text-sm text-muted-foreground">AI Solutions</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <Cloud className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <Smartphone className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Technology Solutions</h2>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">Digital Transformation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Complete digital transformation services to modernize your business processes 
                  and technology infrastructure.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">Custom Software Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bespoke software solutions tailored to your specific business requirements 
                  and scalability needs.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">AI & Machine Learning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Advanced AI and ML solutions to automate processes and gain 
                  competitive advantages through data-driven insights.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Technical Expertise</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Cloud Architecture</h4>
                  <p className="text-muted-foreground text-sm">Scalable cloud solutions on AWS, Azure, and Google Cloud</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Mobile Development</h4>
                  <p className="text-muted-foreground text-sm">Native and cross-platform mobile applications</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Web Applications</h4>
                  <p className="text-muted-foreground text-sm">Modern, responsive web applications and PWAs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">DevOps & Automation</h4>
                  <p className="text-muted-foreground text-sm">CI/CD pipelines and infrastructure automation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Data Engineering</h4>
                  <p className="text-muted-foreground text-sm">Big data processing and analytics platforms</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
              <Code className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Frontend</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>React, Vue.js, Angular</div>
                <div>React Native, Flutter</div>
                <div>TypeScript, JavaScript</div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
              <Cpu className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Backend</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Node.js, Python, Java</div>
                <div>Microservices Architecture</div>
                <div>API Development & Integration</div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
              <Cloud className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Infrastructure</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>AWS, Azure, Google Cloud</div>
                <div>Docker, Kubernetes</div>
                <div>MongoDB, PostgreSQL</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-card border border-border rounded-lg p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Build the Future?</h2>
          <p className="text-muted-foreground mb-6">Schedule a consultation to discuss your digital engineering needs.</p>
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

export default DigitalEngineering;