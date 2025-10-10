import { Network, Globe, DollarSign, MapPin, Smartphone, Users, TrendingUp, Target, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const GrowthStrategies = () => {
  const navigate = useNavigate();

  const strategies = [
    {
      icon: Network,
      title: "Zero-Investment Franchise Model",
      description: "Build a network of channel partners without upfront costs. Revenue-sharing model that scales organically across markets.",
      features: [
        "No franchise fees required",
        "Revenue-sharing partnerships",
        "Proven business systems",
        "Complete operational support"
      ]
    },
    {
      icon: MapPin,
      title: "Pan-India Channel Partner Network",
      description: "Strategic expansion across major cities with local entrepreneurs who understand regional markets and customer needs.",
      features: [
        "City-wise market penetration",
        "Local market expertise",
        "Scalable partnership model",
        "Regional customization"
      ]
    },
    {
      icon: DollarSign,
      title: "Smart Capital Deployment",
      description: "Achieve growth without heavy upfront investment. Our model optimizes capital efficiency through strategic partnerships.",
      features: [
        "Minimal capital requirements",
        "Asset-light expansion",
        "Shared investment model",
        "Quick ROI timeline"
      ]
    },
    {
      icon: Smartphone,
      title: "Digital-First Distribution",
      description: "Leverage technology to create scalable distribution networks. Perfect blend of digital reach and local presence.",
      features: [
        "Technology-enabled operations",
        "Real-time performance tracking",
        "Digital marketing support",
        "Automated processes"
      ]
    },
    {
      icon: Users,
      title: "Community-Based Growth",
      description: "Build loyal customer communities through local partnerships. Authentic engagement drives sustainable growth.",
      features: [
        "Local brand ambassadors",
        "Community engagement programs",
        "Word-of-mouth marketing",
        "Customer loyalty systems"
      ]
    },
    {
      icon: Globe,
      title: "Multi-City Scaling Strategy",
      description: "Systematic approach to expanding across multiple cities simultaneously while maintaining quality and brand consistency.",
      features: [
        "Parallel market entry",
        "Standardized operations",
        "Quality control systems",
        "Centralized support"
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Rapid Expansion",
      description: "Scale to 50+ cities in 24 months without massive capital deployment"
    },
    {
      icon: DollarSign,
      title: "Zero Equity Dilution",
      description: "Grow your business while maintaining 100% ownership and control"
    },
    {
      icon: Target,
      title: "Market Leadership",
      description: "Establish dominant position in your sector through strategic partnerships"
    },
    {
      icon: Zap,
      title: "Fast ROI",
      description: "Start generating returns from new markets within 3-6 months"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 lg:px-6 py-12">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Growth Strategies for Indian Market
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Revolutionary franchise and channel partner models designed specifically for the Indian market. 
              Scale rapidly without heavy investment or equity dilution.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-primary"
                onClick={() => navigate('/#contact')}
              >
                Schedule Strategy Session
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/workshops')}
              >
                Explore Workshops
              </Button>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-elegant transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Growth Strategies */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Growth Models
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Proven strategies that have helped hundreds of businesses scale across India
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {strategies.map((strategy, index) => (
                <Card key={index} className="border-border bg-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <strategy.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{strategy.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {strategy.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {strategy.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Success Metrics */}
          <Card className="border-border bg-gradient-to-r from-primary/10 to-accent/10 max-w-6xl mx-auto mb-16">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Proven Track Record</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <p className="text-muted-foreground">Businesses Scaled</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <p className="text-muted-foreground">Cities Covered</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">93%</div>
                  <p className="text-muted-foreground">Success Rate</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">₹250Cr+</div>
                  <p className="text-muted-foreground">Revenue Generated</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="border-border bg-gradient-to-br from-primary/5 to-primary/10 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Ready to Scale Your Business?</CardTitle>
              <CardDescription className="text-center text-base mt-2">
                Let's discuss how our growth strategies can help you expand without diluting equity
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="btn-primary"
                  onClick={() => navigate('/#contact')}
                >
                  Schedule Free Consultation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/workshops/franchising-mastery')}
                >
                  Join Franchising Workshop
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GrowthStrategies;
