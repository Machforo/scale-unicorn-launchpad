import { Lightbulb, Users, TrendingUp, Award, Target, Globe, Zap } from "lucide-react";
import FounderJourneySection from "./FounderJourneySection";
import SocialMediaIntegration from "./SocialMediaIntegration";
import sandippImage from "@/assets/sandipp-vijj.png";
import ansshavImage from "@/assets/ansshav-jain.png";

const AboutSection = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We believe every startup has the potential to become a unicorn with the right guidance and methodologies."
    },
    {
      icon: Users,
      title: "360° Support",
      description: "From workshops to growth strategies, we provide comprehensive support across all aspects of your startup journey."
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Our proprietary methodologies have helped over 500+ startups achieve smart growth without diluting equity."
    },
    {
      icon: Award,
      title: "Expert Mentorship",
      description: "Learn from industry veterans who have built and scaled successful companies across various sectors."
    }
  ];

  const teamMembers = [
    {
      name: "Sandeep (Sandipp) K Vij",
      title: "Serial Entrepreneur & Venture Capitalist",
      description: "MBA from IIM-A, creator of Conceptualize Your Unicorn Workshop. Deploying 10 proven business methodologies including 5-Stage/5-Gate, Crossing the Chasm, Blue Ocean Strategy.",
      image: sandippImage,
      linkedin: "https://linkedin.com/in/sandeepvij"
    },
    {
      name: "Er. Ansshav Jain",
      title: "Founder of Bringleverse UK & India, DYU NFT $1B Fund",
      description: "Senior corporate professional for 2 decades, serial entrepreneur for 10+ years. Transformed a loss-making venture into a $100M global startup with reach in 158 countries.",
      image: ansshavImage,
      linkedin: "https://lnkd.in/gawRP7sU"
    }
  ];

  const highlights = [
    { number: "$1M", label: "Possible valuation in 4 weeks" },
    { number: "360°", label: "Complete services available" },
    { number: "7", label: "Incubator partnerships including IIM Calcutta" },
    { number: "₹75L", label: "Corpus already committed" }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            About Idea2Unicorn
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Building the McKinsey of Startups - Creating unicorn blueprints in 15 days with 360° services, 
            proven methodologies, and zero-dilution growth strategies.
          </p>
        </div>

        {/* Press Release Highlights */}
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">How to Create the Blueprint of a Unicorn in 15 Days?</h3>
            <p className="text-lg text-muted-foreground">
              Pre-seed, Seed & Angel Funding available with comprehensive 360° services
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{highlight.number}</div>
                <div className="text-sm text-muted-foreground">{highlight.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Founders Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">Leadership Team</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-8 shadow-card hover:shadow-elegant transition-shadow duration-200">
                <div className="flex items-center space-x-6 mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">{member.name}</h4>
                    <p className="text-primary font-medium">{member.title}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{member.description}</p>
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  View LinkedIn Profile →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Extended Team */}
        <div className="bg-card border border-border rounded-lg p-8 shadow-card mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Extended Expert Network</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <h4 className="font-semibold text-foreground">Dinesh Makhija</h4>
              <p className="text-sm text-muted-foreground">CIO - AI Expert</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground">Amardeep Bajpai</h4>
              <p className="text-sm text-muted-foreground">Digital Marketing Expert (IIM-A)</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground">Sameer Nigam</h4>
              <p className="text-sm text-muted-foreground">eLearning (IIM-A)</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground">Sam Kundu</h4>
              <p className="text-sm text-muted-foreground">Franchising King</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground">Rajiv Kapahi</h4>
              <p className="text-sm text-muted-foreground">CA & Startup Strategist</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground">Chandra Patni</h4>
              <p className="text-sm text-muted-foreground">Fintech Expert</p>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Philosophy */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                  <Target className="h-5 w-5 text-primary mr-2" />
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To solve every problem of your business holistically — from vision to systems, from sales to funding — 
                  so you can systematically design your unicorn with structured mentorship, proven frameworks, and global networks.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                  <Globe className="h-5 w-5 text-primary mr-2" />
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transform 1 billion lives, 1 million businesses, and create 100 unicorns with $1B investment, 
                  adding $5T to India's GDP through our proprietary #DesignYourUnicorn (DYU) framework.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                  <Zap className="h-5 w-5 text-primary mr-2" />
                  Purpose & Potential
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  You were born with greatness and wings. This community exists to help you learn to use them and fly. 
                  We believe you weren't meant for crawling—you have the potential to conceptualize, design, and scale unicorns.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground text-center lg:text-left">
              Our Core Values
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-elegant transition-shadow duration-200"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">{value.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Founder Journey Section */}
      <FounderJourneySection />
      
      {/* Social Media Integration */}
      <SocialMediaIntegration />
    </section>
  );
};

export default AboutSection;