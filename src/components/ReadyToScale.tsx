import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Target, Users, TrendingUp, ArrowRight } from "lucide-react";

const ReadyToScale = () => {
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
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Start Your Scaling Journey Today
            </h3>
            <p className="text-muted-foreground mb-6">
              Book a consultation with our experts and get a personalized roadmap to scale your startup to unicorn status.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Book Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToScale;