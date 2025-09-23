import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, CheckCircle, MessageSquare, Users, ArrowRight, ExternalLink } from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";

const PitchDeckService = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  const services = [
    {
      icon: FileText,
      title: "Pitch Deck Evaluation",
      description: "Comprehensive analysis of your startup pitch deck structure, content, and presentation"
    },
    {
      icon: CheckCircle,
      title: "Market Offering Assessment",
      description: "Detailed evaluation of your product/service offering and market positioning"
    },
    {
      icon: Users,
      title: "Funding Preparation",
      description: "Get your startup ready for funding rounds with expert guidance and preparation"
    },
    {
      icon: MessageSquare,
      title: "Community Support",
      description: "Join our WhatsApp community for ongoing support and networking opportunities"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Startup Pitch Deck Evaluation Service
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join the Idea2Unicorn.ai community and get professional evaluation of your startup's pitch deck, 
            market offering, and funding preparation from Sandipp Vijj and our expert team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            What We Evaluate
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <CheckCircle className="h-8 w-8 text-primary mx-auto" />
              <h4 className="font-semibold text-foreground">Pitch Decks</h4>
              <p className="text-sm text-muted-foreground">Structure, flow, and investor appeal</p>
            </div>
            <div className="space-y-2">
              <CheckCircle className="h-8 w-8 text-primary mx-auto" />
              <h4 className="font-semibold text-foreground">Market Offering</h4>
              <p className="text-sm text-muted-foreground">Product/service positioning and value proposition</p>
            </div>
            <div className="space-y-2">
              <CheckCircle className="h-8 w-8 text-primary mx-auto" />
              <h4 className="font-semibold text-foreground">Fund Requirements</h4>
              <p className="text-sm text-muted-foreground">Funding strategy and requirements assessment</p>
            </div>
          </div>
        </div>

        <div className="text-center space-y-6">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Our Community
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Connect with like-minded entrepreneurs, get expert feedback, and prepare your startup for funding success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="group"
                asChild
              >
                <a 
                  href="https://chat.whatsapp.com/EJvbiNA55vkLV3dz9cVVkr?mode=ems_copy_t" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Join WhatsApp Community
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => setShowConsultationForm(true)}
              >
                Get Personal Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Also featured in:
              </p>
              <Button variant="link" asChild className="text-primary hover:underline">
                <a 
                  href="https://www.three60magazine.com/creating-the-blueprint-of-a-unicorn-in-just-15-days/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Three60 Magazine - Create a Blueprint for Your Unicorn in 15 Days
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Consultation Form Modal */}
      {showConsultationForm && (
        <ConsultationForm 
          onClose={() => setShowConsultationForm(false)} 
        />
      )}
    </section>
  );
};

export default PitchDeckService;