import { ArrowLeft, Users, TrendingUp, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Coaching",
      description: "One-on-one mentorship with industry veterans who have built and scaled successful companies.",
      features: [
        "Personal mentorship sessions",
        "Strategic business guidance",
        "Market validation support",
        "Growth strategy development"
      ]
    },
    {
      icon: TrendingUp,
      title: "Incubation",
      description: "Comprehensive startup incubation program with full operational support and growth methodologies.",
      features: [
        "360° startup support",
        "Franchise model implementation",
        "Channel partnership strategies",
        "Smart growth without dilution"
      ]
    },
    {
      icon: BookOpen,
      title: "Workshops",
      description: "Expert-led workshops covering all aspects of startup growth and personal development.",
      features: [
        "Dream Life Workshop",
        "Crossing the Chasm Strategy",
        "Smart Growth methodologies",
        "Real Estate & Unicorn strategies"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center mb-8">
          <Link to="/">
            <Button variant="ghost" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions to accelerate your startup journey from idea to unicorn
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-8 shadow-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;