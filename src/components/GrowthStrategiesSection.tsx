import { Network, Globe, DollarSign, MapPin, Smartphone, Users } from "lucide-react";

const GrowthStrategiesSection = () => {
  const strategies = [
    {
      icon: Network,
      title: "Zero-Investment Franchise Model",
      description: "Build a network of channel partners without upfront costs. Revenue-sharing model that scales organically across markets.",
      features: ["No franchise fees", "Revenue-based partnerships", "Scalable network effect", "Risk-free expansion"]
    },
    {
      icon: Globe,
      title: "Tiered Partner Networks",
      description: "Create multiple partnership levels from local representatives to regional distributors, each with defined roles and rewards.",
      features: ["Multi-level structure", "Clear progression path", "Regional market penetration", "Localized support"]
    },
    {
      icon: DollarSign,
      title: "Revenue-Sharing Engine",
      description: "Transparent profit-sharing model that aligns partner incentives with business growth, ensuring mutual success.",
      features: ["Performance-based rewards", "Automated calculations", "Real-time tracking", "Transparent reporting"]
    },
    {
      icon: MapPin,
      title: "Tier 2/3 Cities Focus",
      description: "Tap into underserved markets in smaller cities where competition is lower and customer loyalty is higher.",
      features: ["Lower acquisition costs", "Higher retention rates", "Local market expertise", "Cultural alignment"]
    },
    {
      icon: Smartphone,
      title: "WhatsApp & Digital Integration",
      description: "Leverage India's preferred communication channels with WhatsApp onboarding, UPI payments, and mobile-first experiences.",
      features: ["WhatsApp automation", "UPI integration", "Mobile optimization", "Social commerce"]
    },
    {
      icon: Users,
      title: "Influencer Partnership Model",
      description: "Build strategic partnerships with micro and macro influencers to drive authentic brand advocacy and customer acquisition.",
      features: ["Authentic endorsements", "Targeted audience reach", "Content collaboration", "Performance tracking"]
    }
  ];

  return (
    <section id="growth" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Growth Strategies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Revolutionary franchise and channel partner models designed specifically for the Indian market. 
            Scale rapidly without heavy investment or equity dilution.
          </p>
        </div>

        {/* Strategies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {strategies.map((strategy, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-elegant transition-shadow duration-200"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <strategy.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{strategy.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {strategy.description}
              </p>

              <div className="space-y-2">
                {strategy.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthStrategiesSection;