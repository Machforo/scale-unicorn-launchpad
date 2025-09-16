import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import WorkshopCard from "@/components/WorkshopCard";
import WorkshopRegistrationForm from "@/components/WorkshopRegistrationForm";
import { Link } from "react-router-dom";

const Workshops = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<string | null>(null);

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
      title: "Smart Growth Without Diluting Equity",
      facilitator: "Sam Kundu",
      duration: "3 Days",
      description: "Revolutionary growth methodologies that preserve founder equity while achieving exponential scale. Perfect for startups ready to dominate their market, after operational services/product offerings.",
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
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center mb-8">
          <Link to="/">
            <Button variant="ghost" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Workshops
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from our expert-led workshops designed to accelerate your startup journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <div key={index}>
              <WorkshopCard 
                {...workshop} 
                onRegister={() => setSelectedWorkshop(workshop.title)}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedWorkshop && (
        <WorkshopRegistrationForm
          workshopTitle={selectedWorkshop}
          onClose={() => setSelectedWorkshop(null)}
        />
      )}
    </div>
  );
};

export default Workshops;