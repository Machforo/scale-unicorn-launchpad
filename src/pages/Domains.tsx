import { useEffect } from "react";
import { GraduationCap, Building, CreditCard, Phone, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Domains = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const domains = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "EdTech innovations and learning platforms that democratize quality education across India.",
      focus: [
        "Online learning platforms",
        "Skill development programs", 
        "Educational content creation",
        "Student engagement tools"
      ]
    },
    {
      icon: Building,
      title: "Real Estate",
      description: "PropTech solutions and real estate investment strategies for sustainable growth.",
      focus: [
        "Property management platforms",
        "Investment analytics tools",
        "Real estate marketplaces", 
        "Smart building technologies"
      ]
    },
    {
      icon: CreditCard,
      title: "BFSI/Fintech",
      description: "Financial services innovation focusing on inclusion and digital transformation.",
      focus: [
        "Digital payment solutions",
        "Lending platforms",
        "Insurance technology",
        "Wealth management tools"
      ]
    },
    {
      icon: Phone,
      title: "Telecom",
      description: "Next-generation communication technologies and connectivity solutions.",
      focus: [
        "5G applications",
        "IoT connectivity",
        "Network infrastructure",
        "Communication platforms"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Retail",
      description: "E-commerce and retail technology solutions for modern consumer experiences.",
      focus: [
        "Omnichannel platforms",
        "Supply chain optimization",
        "Customer experience tools",
        "Inventory management"
      ]
    }
  ];

  const pathFor = (title: string) => {
    switch (title) {
      case "Education":
        return "/domains/education";
      case "Real Estate":
        return "/domains/real-estate";
      case "BFSI/Fintech":
        return "/domains/bfsi-fintech";
      case "Telecom":
        return "/domains/telecom";
      case "Retail":
        return "/domains/retail";
      default:
        return "/domains";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-12 pt-24">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Industry Domains
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Specialized expertise across key industries driving India's digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <Link to={pathFor(domain.title)} key={index} className="bg-card border border-border rounded-lg p-8 shadow-card hover:shadow-elegant transition-shadow duration-200 block">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[hsl(var(--dark-orange))] rounded-lg flex items-center justify-center mr-4">
                  <domain.icon className="h-6 w-6 text-[hsl(var(--dark-orange-foreground))]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{domain.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {domain.description}
              </p>
              
              <div>
                <h4 className="text-sm font-medium text-foreground mb-3">Key Focus Areas:</h4>
                <ul className="space-y-2">
                  {domain.focus.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Domains;