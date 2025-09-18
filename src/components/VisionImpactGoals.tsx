import { Target, Globe, Users, TrendingUp } from "lucide-react";

const VisionImpactGoals = () => {
  const achievements = [
    {
      number: "1B",
      label: "Lives to Transform",
      description: "Target impact across India and neighboring countries",
      icon: Globe
    },
    {
      number: "1M", 
      label: "Businesses to Impact",
      description: "Creating sustainable business ecosystems",
      icon: TrendingUp
    },
    {
      number: "100",
      label: "Unicorns to Nurture", 
      description: "Building the next generation of billion-dollar companies",
      icon: Target
    },
    {
      number: "500+",
      label: "Startups Guided",
      description: "Successfully implemented smart growth methodologies", 
      icon: Users
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Vision Impact Goals
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our ambitious targets for transforming the entrepreneurial ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-elegant transition-all duration-300 group-hover:scale-105">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-2">
                    {achievement.label}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisionImpactGoals;