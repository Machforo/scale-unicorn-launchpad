import { ExternalLink, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import sandippVijjImage from "@/assets/sandipp-vijj.png";

import amardeepBajpaiImage from "@/assets/amardeep-bajpai-new.jpg";
import samKunduImage from "@/assets/sam-kundu-new.jpg";
import achalPaulImage from "@/assets/achal-paul-new.jpg";
import rajivKapahiImage from "@/assets/rajiv-khapi.jpg";
import sameerNigamImage from "@/assets/sameer-nigam.jpg";
import chandraPatniImage from "@/assets/chandra-patni.jpg";
import dineshMakhijaImage from "@/assets/dinesh-makhija-new.jpg";
import satyavirYadavImage from "@/assets/satyavir-yadav-new.jpg";

const LeadershipTeam = () => {
  const founder = {
    name: "Sandeep (Sandipp) K Vij (Vijj)",
    role: "CEO and Founder",
    title: "MBA – IIMA | Retail and Visioning Expert",
    description: "Serial Entrepreneur and Venture Capitalist",
    image: sandippVijjImage,
    linkedin: "https://www.linkedin.com/in/sandeepvij"
  };

  const principalPartners = [
    {
      name: "Dinesh Makhija",
      role: "Advisor, AI & Technology",
      title: "Advisor, AI & Technology",
      expertise: "AI",
      description: "Leading AI innovation and technology strategy",
      image: dineshMakhijaImage,
      linkedin: "http://linkedin.com/in/dinesh-makhija-5774141"
    },
    {
      name: "Amardeep Bajpai",
      role: "AI Expert",
      title: "IIMA | 3 Unicorns Creator",
      expertise: "AI",
      description: "Digital Marketing Expert, credited with building 3 unicorns, AI innovation specialist",
      image: amardeepBajpaiImage,
      linkedin: "https://www.linkedin.com/in/amardeepbajpai/"
    },
    {
      name: "Sameer Nigam",
      role: "eLearning & EdTech Expert",
      title: "IIMA",
      expertise: "eLearning, EdTech",
      description: "Pioneering digital learning solutions and educational technology",
      image: sameerNigamImage,
      linkedin: "https://www.linkedin.com/in/sameernigam/"
    },
    {
      name: "Sam Kundu",
      role: "Franchising Expert",
      title: '"Franchising King"',
      expertise: "Franchising",
      description: "Leading franchise model development and business expansion",
      image: samKunduImage,
      linkedin: "https://www.linkedin.com/in/samirankundu/"
    },
    {
      name: "Satyavir Yadav",
      role: "Education & Real Estate Expert",
      title: "Education & Real Estate Specialist",
      expertise: "Education, Real Estate",
      description: "Educational innovation, entrepreneurial development, and real estate expertise",
      image: satyavirYadavImage,
      linkedin: "https://www.linkedin.com/in/satyavir-yadav/"
    },
    {
      name: "Rajiv Kapahi",
      role: "CA & Startup Strategist",
      title: "Chartered Accountant",
      expertise: "Financial Strategy",
      description: "Financial strategy and startup consulting expert",
      image: rajivKapahiImage,
      linkedin: "https://www.linkedin.com/in/rajiv-p-kapahi/"
    },
    {
      name: "Achal Paul",
      role: "Communication Expert",
      title: "Founder Director, BUZZ Communications",
      expertise: "Strategic Communication",
      description: "Strategic communication and brand development expert",
      image: achalPaulImage,
      linkedin: "https://www.linkedin.com/in/achal-paul-8a2385b/"
    }
  ];


  const PersonCard = ({ person, isFounder = false }: { person: any, isFounder?: boolean }) => (
    <div className={`bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-elegant transition-all duration-300 ${isFounder ? 'md:col-span-2 lg:col-span-1' : ''}`}>
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-primary/10">
          <img 
            src={person.image} 
            alt={person.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <h4 className="text-lg font-semibold text-foreground mb-1">{person.name}</h4>
        <div className="text-sm font-medium text-primary mb-1">{person.role}</div>
        {person.expertise && (
          <div className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full mb-2 font-bold">
            <strong>{person.expertise}</strong>
          </div>
        )}
        <div className="text-sm text-muted-foreground mb-3">{person.title}</div>
        
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {person.description}
        </p>
        
        <Button variant="outline" size="sm" asChild className="w-full">
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-4 w-4 mr-2" />
            View Profile
          </a>
        </Button>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Leadership Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet our exceptional team of visionaries, entrepreneurs, and industry experts who are driving innovation and transforming the startup ecosystem.
          </p>
        </div>

        {/* Founder */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground text-center mb-8">Founder</h3>
          <div className="flex justify-center">
            <div className="max-w-md">
              <PersonCard person={founder} isFounder={true} />
            </div>
          </div>
        </div>

        {/* Principal Partners */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Principal Partners & Domain Experts
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principalPartners.map((partner, index) => (
              <PersonCard key={index} person={partner} />
            ))}
          </div>
        </div>


        {/* Team Stats */}
        <div className="mt-16 bg-card border border-border rounded-lg p-8 shadow-card">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">9+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">60+</div>
              <div className="text-muted-foreground">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">7+</div>
              <div className="text-muted-foreground">Incubator Partnerships</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">₹7.5Cr</div>
              <div className="text-muted-foreground">Committed Corpus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;