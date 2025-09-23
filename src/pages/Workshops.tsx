import { useState } from "react";
import { Calendar, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import WorkshopRegistrationForm from "@/components/WorkshopRegistrationForm";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Workshops = () => {
  const navigate = useNavigate();
  const [selectedWorkshop, setSelectedWorkshop] = useState<string | null>(null);

  const workshops = [
    {
      id: "business-visioning",
      title: "Business Visioning - Idea2Unicorn",
      facilitator: "Sandipp Vijj",
      duration: "5 Steps",
      description: "Our proprietary Idea2Unicorn workshop using a 5-step visual method to transform your business vision across all spheres of life.",
      route: "/workshops/business-visioning"
    },
    {
      id: "dream-life",
      title: "Dream Life Workshop",
      facilitator: "Sandipp Vijj",
      duration: "2 Days",
      description: "Transform your vision into reality with our comprehensive dream activation program. Master emotional freedom tools and create a clear roadmap for your ideal life.",
      route: "/workshops/dream-life"
    },
    {
      id: "crossing-chasm",
      title: "Crossing the Chasm Strategy",
      facilitator: "Sandipp Vijj",
      duration: "1 Day",
      description: "Navigate the critical transition from early adopters to mainstream market. Learn proven strategies to scale your startup across the innovation chasm.",
      route: "/workshops/crossing-chasm"
    },
    {
      id: "smart-growth",
      title: "Smart Growth Without Diluting Equity",
      facilitator: "Sam Kundu",
      duration: "3 Days",
      description: "Revolutionary growth methodologies that preserve founder equity while achieving exponential scale. Perfect for startups ready to dominate their market.",
      route: "/workshops/smart-growth"
    },
    {
      id: "real-estate",
      title: "Real Estate Compounded Growth Strategy",
      facilitator: "Mr Satyavir Yadav",
      duration: "2 Days",
      description: "Master the art of real estate investment with compound growth principles. Build generational wealth through strategic property investments.",
      route: "/workshops/real-estate-strategy"
    },
    {
      id: "unicorn-strategy",
      title: "Strategy to Become a Unicorn",
      facilitator: "Mr Jain",
      duration: "4 Days",
      description: "The ultimate masterclass on building billion-dollar companies. Learn the insider strategies used by unicorn founders and investors.",
      route: "/workshops/unicorn-strategy"
    },
    {
      id: "conceptualize-unicorn",
      title: "Conceptualize Your Unicorn",
      facilitator: "Sandipp Vijj",
      duration: "10 Sessions",
      description: "Transform your startup idea into a structured unicorn blueprint using our proven 10-book methodology framework.",
      route: "/workshops/conceptualize-unicorn"
    },
    {
      id: "funding-mastery",
      title: "Funding Mastery Workshop",
      facilitator: "Sandipp Vijj",
      duration: "4 Sessions",
      description: "Master the art of raising capital and securing funding for your startup with proven strategies and investor insights.",
      route: "/workshops/funding-mastery"
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      facilitator: "Dinesh Makhija & Amardeep Bajpai",
      duration: "4 Sessions",
      description: "Transform your business with cutting-edge digital strategies, AI integration, and technology implementation.",
      route: "/workshops/digital-transformation"
    },
    {
      id: "leadership-excellence",
      title: "Leadership Excellence",
      facilitator: "Sandipp Vijj",
      duration: "4 Sessions",
      description: "Develop exceptional leadership skills, build high-performing teams, and create lasting organizational impact.",
      route: "/workshops/leadership-excellence"
    },
    {
      id: "franchising-mastery",
      title: "Franchising Mastery",
      facilitator: "Sam Kundu",
      duration: "4 Sessions",
      description: "Learn from the 'Franchising King' how to build scalable franchise models and expand your business globally.",
      route: "/workshops/franchising-mastery"
    },
    {
      id: "fintech-innovation",
      title: "FinTech Innovation Workshop",
      facilitator: "Chandra Patni",
      duration: "4 Sessions",
      description: "Navigate the FinTech landscape, understand regulatory requirements, and build innovative financial solutions.",
      route: "/workshops/fintech-innovation"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Proprietary Workshops
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Exclusive, hands-on workshops designed to accelerate your entrepreneurial journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {workshops.map((workshop) => (
                <div key={workshop.id} className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-lg transition-all duration-200 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <span className="text-sm text-muted-foreground">{workshop.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">{workshop.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">Facilitator: {workshop.facilitator}</p>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{workshop.description}</p>
                  
                  <Button 
                    className="w-full btn-primary group" 
                    onClick={() => navigate(workshop.route)}
                  >
                    Learn More & Register
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Workshop Stats */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="flex items-center justify-center mb-3">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">500+</div>
                  <div className="text-muted-foreground">Entrepreneurs Trained</div>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-3">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">85%</div>
                  <div className="text-muted-foreground">Success Rate</div>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-3">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">₹250Cr+</div>
                  <div className="text-muted-foreground">Funding Raised</div>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-3">
                    <ArrowRight className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">100+</div>
                  <div className="text-muted-foreground">Workshops Conducted</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

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