import { Target, Globe } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { number: "$1M", label: "Possible valuation in 4 weeks" },
    { number: "360°", label: "Complete services available" },
    { number: "7", label: "Incubator partnerships including IIM Calcutta" },
    { number: "₹7.5Cr", label: "Corpus already committed" }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            About Idea2Unicorn
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Building the McKinsey of Startups - Creating unicorn blueprints in 15 days with 360° services, 
            proven methodologies, and zero-dilution growth strategies.
          </p>
        </div>


        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-card border border-border rounded-lg p-8 shadow-card">
            <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
              <Target className="h-5 w-5 text-primary mr-2" />
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To solve every problem of your business holistically — from vision to systems, from sales to funding — 
              so you can systematically design your unicorn with structured mentorship, proven frameworks, and global networks.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 shadow-card">
            <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
              <Globe className="h-5 w-5 text-primary mr-2" />
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Transform 1 billion lives, 1 million businesses, and create 100 unicorns with $1B investment, 
              adding $5T to India's GDP through our proprietary #DesignYourUnicorn (DYU) framework.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;