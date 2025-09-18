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


      </div>
    </section>
  );
};

export default FounderJourneySection;