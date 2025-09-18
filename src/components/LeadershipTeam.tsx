import { ExternalLink, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import sandippVijjImage from "@/assets/sandipp-vijj.png";
import ansshavJainImage from "@/assets/ansshav-jain.png";
import amardeepBajpaiImage from "@/assets/amardeep-bajpai-new.jpg";
import samKunduImage from "@/assets/sam-kundu-new.jpg";
import achalPaulImage from "@/assets/achal-paul-new.jpg";
import rajivKapahiImage from "@/assets/rajiv-khapi.jpg";
import sameerNigamImage from "@/assets/sameer-nigam.jpg";
import chandraPatniImage from "@/assets/chandra-patni.jpg";
import dineshMakhijaImage from "@/assets/dinesh-makhija.jpg";
import satyavirYadavImage from "@/assets/satyavir-yadav.jpg";

const LeadershipTeam = () => {
  const founder = {
    name: "Sandeep (Sandipp) K Vij (Vijj)",
    role: "CEO and Founder",
    title: "MBA – IIMA",
    description: "Serial Entrepreneur and Venture Capitalist",
    image: sandippVijjImage,
    linkedin: "https://www.linkedin.com/in/sandeepvij"
  };

  const principlePartners = [
    {
      name: "Ansshav Jain",
      role: "Serial Entrepreneur",
      title: "Founder of Bringleverse UK & India, DYU NFT $1B Fund",
      description: "Senior corporate professional for 2 decades, Serial entrepreneur for 10+ years",
      image: ansshavJainImage,
      linkedin: "https://lnkd.in/gawRP7sU"
    },
    {
      name: "Dinesh Makhija",
      role: "CIO & AI Expert",
      title: "Chief Information Officer",
      description: "Leading AI innovation and technology strategy",
      image: dineshMakhijaImage,
      linkedin: "https://linkedin.com"
    },
    {
      name: "Amardeep Bajpai",
      role: "Digital Marketing Expert",
      title: "IIMA | 3 Unicorns Creator",
      description: "Digital Marketing Expert, credited with building 3 unicorns",
      image: amardeepBajpaiImage,
      linkedin: "https://www.linkedin.com/in/amardeepbajpai/"
    },
    {
      name: "Sameer Nigam",
      role: "eLearning Innovator",
      title: "IIMA",
      description: "Pioneering digital learning solutions and educational technology",
      image: sameerNigamImage,
      linkedin: "https://www.linkedin.com/in/sameernigam/"
    },
    {
      name: "Sam Kundu",
      role: '"Franchising King"',
      title: "Franchise Expert",
      description: "Leading franchise model development and business expansion",
      image: samKunduImage,
      linkedin: "https://www.linkedin.com/in/samirankundu/"
    },
    {
      name: "Rajiv Kapahi",
      role: "CA & Startup Strategist",
      title: "Chartered Accountant",
      description: "Financial strategy and startup consulting expert",
      image: rajivKapahiImage,
      linkedin: "https://www.linkedin.com/in/rajiv-p-kapahi/"
    },
    {
      name: "Satyavir Yadav",
      role: "Educationist & Entrepreneur",
      title: "Education Expert",
      description: "Educational innovation and entrepreneurial development",
      image: satyavirYadavImage,
      linkedin: "https://linkedin.com"
    },
    {
      name: "Chandra Patni",
      role: "Fintech Expert",
      title: "Financial Technology Specialist",
      description: "Leading fintech innovation and digital financial solutions",
      image: chandraPatniImage,
      linkedin: "https://www.linkedin.com/in/chandrapatni/"
    },
    {
      name: "Achal Paul",
      role: "Communication Expert",
      title: "Founder Director, BUZZ Communications",
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

        {/* Principle Partners */}
        <div>
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Principle Partners & Expert Network
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principlePartners.map((partner, index) => (
              <PersonCard key={index} person={partner} />
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-card border border-border rounded-lg p-8 shadow-card">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
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