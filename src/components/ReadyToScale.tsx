import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Target, Users, TrendingUp, ArrowRight } from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";

const ReadyToScale = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const scalingPoints = [
    {
      icon: Rocket,
      title: "Launch Strategy",
      description: "Get your product-market fit and go-to-market strategy right"
    },
    {
      icon: Target,
      title: "Growth Hacking",
      description: "Implement proven methodologies to achieve exponential growth"
    },
    {
      icon: Users,
      title: "Team Building",
      description: "Scale your team with the right talent and leadership"
    },
    {
      icon: TrendingUp,
      title: "Revenue Optimization",
      description: "Maximize revenue streams and achieve sustainable profitability"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ready to Scale Your Startup?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transform your startup into a unicorn with our proven methodologies and expert guidance. 
            Join hundreds of successful entrepreneurs who have scaled their businesses with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {scalingPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-6 text-center">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Transform your idea into a scalable unicorn with Idea2Unicorn.ai's comprehensive approach. 
              With a team of visionary entrepreneurs, investors, AI experts, and global business leaders, 
              we solve every business problem holistically.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 text-left">
              <div className="space-y-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">1</div>
                <h4 className="font-semibold text-foreground">360° Services</h4>
                <p className="text-sm text-muted-foreground">Complete support for every stage of growth</p>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">2</div>
                <h4 className="font-semibold text-foreground">Access to Funding</h4>
                <p className="text-sm text-muted-foreground">Pre-seed, Seed & Angel funding opportunities</p>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">3</div>
                <h4 className="font-semibold text-foreground">Strategic Tie-ups</h4>
                <p className="text-sm text-muted-foreground">Top incubator partnerships in India</p>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">4</div>
                <h4 className="font-semibold text-foreground">Proprietary Workshops</h4>
                <p className="text-sm text-muted-foreground">Through Angel Investor Networks</p>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">5</div>
                <h4 className="font-semibold text-foreground">Committed Fund</h4>
                <p className="text-sm text-muted-foreground">₹1 cr fund to fuel ambitious founders</p>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">✓</div>
                <h4 className="font-semibold text-foreground">Holistic Solutions</h4>
                <p className="text-sm text-muted-foreground">Turning ideas into scalable unicorns</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="group"
                onClick={() => setShowConsultationForm(true)}
              >
                Start Your Blueprint
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
              >
                <a 
                  href="https://www.three60magazine.com/creating-the-blueprint-of-a-unicorn-in-just-15-days/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Read Our Story
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

export default ReadyToScale;