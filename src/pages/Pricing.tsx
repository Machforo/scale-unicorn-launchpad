import { useState } from "react";
import { Check, DollarSign, IndianRupee } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  const services = [
    {
      category: "Idea & Concept Development",
      items: [
        {
          name: "Idea Evaluation",
          priceINR: 200,
          priceUSD: 3,
          description: "Comprehensive analysis of your startup idea's viability and market potential"
        },
        {
          name: "Concept Evaluation",
          priceINR: 2500,
          priceUSD: 30,
          description: "In-depth evaluation of your business concept with detailed feedback"
        },
        {
          name: "Proof of Concept Development",
          priceINR: 15000,
          priceUSD: 180,
          description: "Complete POC development with technical feasibility analysis"
        }
      ]
    },
    {
      category: "Funding Solutions",
      items: [
        {
          name: "Pitch Deck Creation",
          priceINR: 25000,
          priceUSD: 300,
          description: "Professional investor-ready pitch deck with compelling storytelling"
        },
        {
          name: "Business Plan",
          priceINR: 50000,
          priceUSD: 600,
          priceRange: "50,000 - 75,000",
          priceRangeUSD: "600 - 900",
          description: "Comprehensive business plan with financial projections and market analysis"
        },
        {
          name: "Interview Preparation",
          priceINR: 3000,
          priceUSD: 36,
          description: "Per session investor interview preparation and coaching",
          perSession: true
        }
      ]
    },
    {
      category: "Workshops & Training",
      items: [
        {
          name: "Crossing the Chasm Workshop",
          priceINR: 30000,
          priceUSD: 360,
          description: "2-day intensive workshop on market crossing strategies (Online)",
          duration: "2 days"
        },
        {
          name: "Design Your Unicorn",
          priceINR: 30000,
          priceUSD: 360,
          description: "Comprehensive unicorn strategy development workshop"
        },
        {
          name: "Dream Life Workshop",
          priceINR: 3500,
          priceUSD: 42,
          description: "4-hour transformational workshop for entrepreneurs",
          duration: "4 hours"
        },
        {
          name: "Franchising Workshop",
          priceINR: 60000,
          priceUSD: 720,
          description: "3-day comprehensive franchising mastery program",
          duration: "3 days"
        }
      ]
    },
    {
      category: "Consulting Services",
      items: [
        {
          name: "General Consultation",
          priceINR: 3000,
          priceUSD: 36,
          description: "Per hour consultation with our experts",
          perHour: true
        }
      ]
    }
  ];

  const packages = [
    {
      name: "Complete Package",
      discount: "10%",
      description: "All services bundled together with significant savings",
      features: [
        "All idea to funding services",
        "Priority support",
        "Dedicated account manager",
        "Extended support period"
      ]
    },
    {
      name: "Hand Holding to Funding",
      discount: "2%",
      description: "End-to-end support from concept to funding",
      features: [
        "Complete funding process support",
        "Investor introductions",
        "Pitch refinement",
        "Negotiation support"
      ]
    },
    {
      name: "Idea to VC Funding",
      discount: "5%",
      description: "Complete journey from idea to venture capital funding",
      features: [
        "Comprehensive development",
        "VC network access",
        "Strategic positioning",
        "Due diligence support"
      ]
    }
  ];

  const formatPrice = (priceINR: number, priceUSD: number, priceRange?: string, priceRangeUSD?: string) => {
    if (currency === 'INR') {
      return priceRange ? `₹${priceRange}` : `₹${priceINR.toLocaleString()}`;
    } else {
      return priceRangeUSD ? `$${priceRangeUSD}` : `$${priceUSD.toLocaleString()}`;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-12 pt-24">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Plans & Pricing
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Transparent pricing for all our services. Choose what works best for your startup journey.
          </p>
          
          {/* Currency Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <Button
              variant={currency === 'INR' ? 'default' : 'outline'}
              onClick={() => setCurrency('INR')}
              className="flex items-center gap-2"
            >
              <IndianRupee className="h-4 w-4" />
              Indian Rupees
            </Button>
            <Button
              variant={currency === 'USD' ? 'default' : 'outline'}
              onClick={() => setCurrency('USD')}
              className="flex items-center gap-2"
            >
              <DollarSign className="h-4 w-4" />
              US Dollars
            </Button>
          </div>
        </div>

        {/* Individual Services */}
        <div className="space-y-12 mb-16">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {category.category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className="relative">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{service.name}</CardTitle>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">
                            {formatPrice(service.priceINR, service.priceUSD, service.priceRange, service.priceRangeUSD)}
                          </div>
                          {(service.perSession || service.perHour) && (
                            <div className="text-sm text-muted-foreground">
                              {service.perSession ? 'per session' : 'per hour'}
                            </div>
                          )}
                          {service.duration && (
                            <Badge variant="secondary" className="mt-1">
                              {service.duration}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Package Deals */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Package Deals & Discounts
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="relative border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    {pkg.discount} OFF
                  </Badge>
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-xl text-center">{pkg.name}</CardTitle>
                  <p className="text-sm text-muted-foreground text-center">
                    {pkg.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6"
                    onClick={() => setShowConsultationForm(true)}
                  >
                    Contact for Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Note */}
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Custom Solutions Available
          </h3>
          <p className="text-muted-foreground mb-6">
            Need a tailored solution for your specific requirements? We offer custom packages 
            designed to meet your unique business needs and budget.
          </p>
          <Button 
            size="lg" 
            onClick={() => setShowConsultationForm(true)}
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
      <Footer />
      
      {showConsultationForm && (
        <ConsultationForm onClose={() => setShowConsultationForm(false)} />
      )}
    </div>
  );
};

export default Pricing;