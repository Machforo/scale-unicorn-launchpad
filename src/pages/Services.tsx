import { Users, TrendingUp, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    },
    {
      icon: TrendingUp,
      title: "Funding",
      description: "Pre-seed, Seed & Angel Funding solutions with our committed corpus and investor network.",
      features: [
        "₹7.5 Cr committed corpus",
        "Angel investor network",
        "Pre-seed to Series A",
        "Strategic funding guidance"
      ]
    },
    {
      icon: Users,
      title: "Management Consulting",
      description: "McKinsey-style consulting for startups with proven business methodologies and frameworks.",
      features: [
        "Business strategy development",
        "Operational excellence",
        "Performance optimization",
        "Systems implementation"
      ]
    },
    {
      icon: TrendingUp,
      title: "Incubator Manager",
      description: "Professional incubator management services with tie-ups to 7+ incubators including IIM Calcutta.",
      features: [
        "Incubator partnerships",
        "Program management",
        "Startup acceleration",
        "Ecosystem development"
      ]
    },
    {
      icon: Users,
      title: "Business Strategy",
      description: "Comprehensive business strategy consulting using 10 proven methodologies including Blue Ocean Strategy.",
      features: [
        "Strategic planning",
        "Market positioning",
        "Competitive analysis",
        "Growth roadmapping"
      ]
    },
    {
      icon: TrendingUp,
      title: "Digital Engineering",
      description: "Technology solutions and digital transformation services for modern startups and enterprises.",
      features: [
        "Digital transformation",
        "Technology consulting",
        "Software development",
        "AI & automation"
      ]
    },
    {
      icon: Users,
      title: "CFA Service",
      description: "Financial analysis and investment advisory services with certified financial analysts.",
      features: [
        "Financial modeling",
        "Investment analysis",
        "Risk assessment",
        "Portfolio management"
      ]
    },
    {
      icon: BookOpen,
      title: "Patent",
      description: "Intellectual property protection and patent filing services for innovative startups and technologies.",
      features: [
        "Patent filing assistance",
        "IP strategy consulting",
        "Prior art research",
        "IP portfolio management"
      ]
    }
  ];

  const pathFor = (title: string) => {
    if (title === "Coaching") return "/services/coaching";
    if (title === "Incubation") return "/services/incubation";
    if (title === "Workshops") return "/workshops";
    return "#";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-12 pt-24">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions to accelerate your startup journey from idea to unicorn
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link to={pathFor(service.title)} key={index} className="bg-card border border-border rounded-lg p-8 shadow-card hover:shadow-elegant transition-shadow duration-200 block">
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
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;