import { Calendar, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WorkshopsSection = () => {
  const workshops = [
    {
      id: "conceptualize-unicorn",
      title: "Conceptualize Your Unicorn",
      facilitator: "Sandipp Vijj",
      duration: "4 Sessions",
      description: "Transform your vision into a billion-dollar business blueprint using proven methodologies and Sandipp's unique visualization techniques.",
      route: "/workshops/conceptualize-unicorn"
    },
    {
      id: "funding-mastery",
      title: "Funding Mastery Workshop", 
      facilitator: "Industry Experts",
      duration: "3 Sessions",
      description: "Navigate the funding landscape from pre-seed to Series A with expert guidance and real-world case studies.",
      route: "/workshops/funding-mastery"
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      facilitator: "Tech Leaders", 
      duration: "5 Sessions",
      description: "Leverage cutting-edge technology to scale your business and reach global markets efficiently.",
      route: "/workshops/digital-transformation"
    },
    {
      id: "leadership-excellence",
      title: "Leadership Excellence",
      facilitator: "Leadership Experts",
      duration: "4 Sessions", 
      description: "Develop exceptional leadership skills to build and manage high-performing teams in startup environments.",
      route: "/workshops/leadership-excellence"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="workshops">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Proprietary Workshops
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exclusive, hands-on workshops designed to accelerate your entrepreneurial journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-lg transition-all duration-200">
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm text-muted-foreground">{workshop.duration}</span>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2">{workshop.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">Facilitator: {workshop.facilitator}</p>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{workshop.description}</p>
              
              <Link to={workshop.route}>
                <Button className="w-full btn-primary group">
                  Learn More & Register
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
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
  );
};

export default WorkshopsSection;