import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Zap, Briefcase, Users, TrendingUp } from "lucide-react";

const LatestUpdatesSection = () => {
  const updates = [
    {
      id: 1,
      type: "funding",
      icon: TrendingUp,
      title: "New Funding Round Success",
      description: "Successfully closed ₹2.5Cr seed funding for AgriTech startup",
      date: "2 days ago",
      category: "Funding",
      categoryColor: "bg-green-100 text-green-800"
    },
    {
      id: 2,
      type: "workshop",
      icon: Users,
      title: "Leadership Excellence Workshop",
      description: "Next batch starting January 15th - Limited seats available",
      date: "5 days ago",
      category: "Workshop",
      categoryColor: "bg-blue-100 text-blue-800"
    },
    {
      id: 3,
      type: "partnership",
      icon: Briefcase,
      title: "Strategic Partnership with TechHub",
      description: "Expanding our incubation network across tier-2 cities",
      date: "1 week ago",
      category: "Partnership",
      categoryColor: "bg-purple-100 text-purple-800"
    },
    {
      id: 4,
      type: "innovation",
      icon: Zap,
      title: "AI-Powered Mentorship Platform",
      description: "Launching personalized mentorship matching algorithm",
      date: "2 weeks ago",
      category: "Innovation",
      categoryColor: "bg-orange-100 text-orange-800"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest Updates
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our latest achievements, upcoming events, and ecosystem developments
          </p>
        </div>

        {/* Updates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {updates.map((update) => {
            const IconComponent = update.icon;
            return (
              <Card key={update.id} className="group hover:shadow-lg transition-all duration-300 border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <Badge className={update.categoryColor}>
                      {update.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {update.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed mb-4">
                    {update.description}
                  </CardDescription>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {update.date}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All Updates Button */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Updates
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdatesSection;