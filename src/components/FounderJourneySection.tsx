import { Calendar, Target, Briefcase, Heart, Globe, Lightbulb } from "lucide-react";

const FounderJourneySection = () => {
  const journeySteps = [
    {
      icon: Briefcase,
      year: "Early Career",
      title: "Corporate Foundation",
      description: "Built extensive corporate experience across multiple industries, developing strategic thinking and business acumen."
    },
    {
      icon: Target,
      year: "Entrepreneurial Phase",
      title: "7+ Business Ventures",
      description: "Launched multiple startups across different sectors, learning invaluable lessons from each experience."
    },
    {
      icon: Heart,
      year: "The Turning Point",
      title: "Deep Debt & Recovery",
      description: "Faced significant financial challenges and debt, which became the catalyst for spiritual and business transformation."
    },
    {
      icon: Lightbulb,
      year: "Philosophy Evolution",
      title: "Spiritual Activism",
      description: "Developed a unique blend of business strategy with spiritual principles, redefining social entrepreneurship."
    },
    {
      icon: Globe,
      year: "Systems Thinking",
      title: "Tech-Forward Solutions",
      description: "Pioneered systems-level approach to solving unemployment and sustainability challenges through technology."
    },
    {
      icon: Calendar,
      year: "Present",
      title: "Idea2Unicorn Vision",
      description: "Leading revolutionary approach to social entrepreneurship, aiming to transform 1 billion lives and create 100 unicorns."
    }
  ];

  const achievements = [
    {
      number: "1B",
      label: "Lives to Transform",
      description: "Target impact across India and neighboring countries"
    },
    {
      number: "1M",
      label: "Businesses to Impact",
      description: "Creating sustainable business ecosystems"
    },
    {
      number: "100",
      label: "Unicorns to Nurture",
      description: "Building the next generation of billion-dollar companies"
    },
    {
      number: "500+",
      label: "Startups Guided",
      description: "Successfully implemented smart growth methodologies"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Founders' Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From corporate success through entrepreneurial failures to revolutionary social entrepreneurship - 
            a story of resilience, transformation, and vision.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            The Transformation Journey
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {journeySteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-primary">{step.year}</span>
                      <h4 className="text-lg font-semibold text-foreground">{step.title}</h4>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {/* Connection line for larger screens */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Vision Comparison */}
        <div className="mb-20">
          <div className="bg-card border border-border rounded-lg p-8 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Redefining Social Entrepreneurship
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Traditional Approach</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-muted-foreground/50 rounded-full mr-3" />
                    Low-tech, grassroots solutions
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-muted-foreground/50 rounded-full mr-3" />
                    Direct service delivery focus
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-muted-foreground/50 rounded-full mr-3" />
                    Grant and donation dependent
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-muted-foreground/50 rounded-full mr-3" />
                    Specific issue focused
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Company's Innovation</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-primary">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Tech-forward, systems-level thinking
                  </li>
                  <li className="flex items-center text-primary">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Ecosystem building approach
                  </li>
                  <li className="flex items-center text-primary">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Self-sustaining business models
                  </li>
                  <li className="flex items-center text-primary">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Macroeconomic transformation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Goals */}
        <div>
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Vision Impact Goals
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-elegant transition-shadow duration-200">
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
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              The Future: Metaverse SkillTech University
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Pioneering a revolutionary educational model that combines Metaverse technology with Blockchain SkillsBank, 
              creating scalable solutions for skill development across India, Nepal, Sri Lanka, and Bangladesh. 
              This futuristic approach will democratize quality education and create sustainable pathways to employment and entrepreneurship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderJourneySection;