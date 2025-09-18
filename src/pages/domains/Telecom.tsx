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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Telecommunications & 5G</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Next-generation communication technologies, 5G infrastructure, and connectivity solutions transforming digital India.
          </p>
        </header>

        {/* Key Market Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">₹8.2T</div>
            <div className="text-sm text-muted-foreground">India Telecom Market by 2025</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">50B</div>
            <div className="text-sm text-muted-foreground">Connected IoT Devices by 2030</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">1.2B</div>
            <div className="text-sm text-muted-foreground">Mobile Subscribers in India</div>
          </div>
        </div>

        {/* Innovation Focus Areas */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">5G & Beyond Technologies</h2>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-4 shadow-card">
                <h3 className="font-semibold text-foreground mb-2">5G Applications & Use Cases</h3>
                <p className="text-muted-foreground text-sm">Enhanced mobile broadband, ultra-reliable low latency communications, and massive machine-type communications.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 shadow-card">
                <h3 className="font-semibold text-foreground mb-2">IoT Connectivity Solutions</h3>
                <p className="text-muted-foreground text-sm">Smart cities, industrial IoT, connected vehicles, and edge computing infrastructure.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 shadow-card">
                <h3 className="font-semibold text-foreground mb-2">Network Infrastructure</h3>
                <p className="text-muted-foreground text-sm">Software-defined networks, network function virtualization, and cloud-native telecom solutions.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 shadow-card">
                <h3 className="font-semibold text-foreground mb-2">Communication Platforms</h3>
                <p className="text-muted-foreground text-sm">CPaaS, unified communications, video conferencing, and collaboration tools.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Emerging Technologies</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Edge Computing & MEC</h4>
                  <p className="text-muted-foreground text-sm">Multi-access edge computing for ultra-low latency applications</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Network Slicing</h4>
                  <p className="text-muted-foreground text-sm">Customized network segments for specific use cases and industries</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">AI-Driven Network Optimization</h4>
                  <p className="text-muted-foreground text-sm">Machine learning for predictive maintenance and traffic optimization</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Satellite Communication</h4>
                  <p className="text-muted-foreground text-sm">LEO satellites, hybrid networks, and rural connectivity solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Industry Applications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 shadow-card">
              <h3 className="font-bold text-foreground mb-3">Smart Manufacturing</h3>
              <p className="text-muted-foreground text-sm mb-4">Industry 4.0 solutions with 5G-enabled robotics, AR/VR, and real-time monitoring systems.</p>
              <div className="text-primary font-semibold">₹1.2T market opportunity</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-card">
              <h3 className="font-bold text-foreground mb-3">Healthcare & Telemedicine</h3>
              <p className="text-muted-foreground text-sm mb-4">Remote surgery, IoT medical devices, and real-time patient monitoring solutions.</p>
              <div className="text-primary font-semibold">₹800B market opportunity</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-card">
              <h3 className="font-bold text-foreground mb-3">Autonomous Transportation</h3>
              <p className="text-muted-foreground text-sm mb-4">Connected vehicles, traffic management, and intelligent transportation systems.</p>
              <div className="text-primary font-semibold">₹500B market opportunity</div>
            </div>
          </div>
        </div>

        <section className="bg-card border border-border rounded-lg p-6 shadow-card">
          <h2 className="text-2xl font-bold text-foreground mb-4">Build the Connected Future</h2>
          <p className="text-muted-foreground mb-6">Partner with us to develop next-generation telecom solutions. Let's discuss your connectivity vision.</p>
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
