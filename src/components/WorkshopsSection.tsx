import WorkshopCard from "./WorkshopCard";

const WorkshopsSection = () => {
  const workshops = [
    {
      title: "Dream Life Workshop",
      facilitator: "Sandipp Vijj",
      duration: "2 Days",
      description: "Transform your vision into reality with our comprehensive dream activation program. Master emotional freedom tools and create a clear roadmap for your ideal life.",
      outcomes: [
        "93% participants achieve clarity about life direction",
        "Vision activation and goal-setting mastery",
        "Emotional freedom and breakthrough techniques",
        "Health optimization and self-image enhancement",
        "Relationship rewiring strategies",
        "Wealth creation rituals and mindset shifts"
      ]
    },
    {
      title: "Crossing the Chasm Strategy",
      facilitator: "Sandipp Vijj",
      duration: "1 Day",
      description: "Navigate the critical transition from early adopters to mainstream market. Learn proven strategies to scale your startup across the innovation chasm.",
      outcomes: [
        "Market segmentation and targeting mastery",
        "Product positioning for mainstream adoption",
        "Customer acquisition strategy optimization",
        "Risk mitigation during scaling phases",
        "Revenue model refinement"
      ]
    },
    {
      title: "15X Growth Without Diluting Equity",
      facilitator: "Sam Kundu",
      duration: "3 Days",
      description: "Revolutionary growth methodologies that preserve founder equity while achieving exponential scale. Perfect for startups ready to dominate their market.",
      outcomes: [
        "Proprietary growth hacking techniques",
        "Bootstrap scaling strategies",
        "Revenue multiplication without external funding",
        "Operational efficiency optimization",
        "Market expansion frameworks"
      ]
    },
    {
      title: "Real Estate Compounded Growth Strategy",
      facilitator: "Mr Satyavir Yadav",
      duration: "2 Days",
      description: "Master the art of real estate investment with compound growth principles. Build generational wealth through strategic property investments.",
      outcomes: [
        "Market analysis and opportunity identification",
        "Financing strategies and leverage optimization",
        "Portfolio diversification techniques",
        "Risk management in real estate",
        "Passive income generation methods"
      ]
    },
    {
      title: "Strategy to Become a Unicorn",
      facilitator: "Mr Jain",
      duration: "4 Days",
      description: "The ultimate masterclass on building billion-dollar companies. Learn the insider strategies used by unicorn founders and investors.",
      outcomes: [
        "Unicorn business model design",
        "Investor attraction and pitch perfection",
        "Scaling culture and team building",
        "Market disruption strategies",
        "Exit strategy planning"
      ]
    }
  ];

  return (
    <section id="workshops" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Proprietary Workshops
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your startup journey with our expert-led workshops designed to accelerate growth, 
            optimize operations, and unlock your full potential.
          </p>
        </div>

        {/* Workshops Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <div key={index}>
              <WorkshopCard {...workshop} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-lg p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Startup?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of entrepreneurs who have accelerated their growth with our proven methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Browse All Workshops
              </button>
              <button className="btn-secondary">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;