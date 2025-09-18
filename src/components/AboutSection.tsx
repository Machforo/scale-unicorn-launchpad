import { Target, Award, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadershipTeam from "@/components/LeadershipTeam";
import FounderJourneySection from "./FounderJourneySection";
import SocialMediaIntegration from "./SocialMediaIntegration";

const AboutSection = () => {
  const highlights = [
    { number: "$1M", label: "Possible valuation in 4 weeks" },
    { number: "360°", label: "Complete services available" },
    { number: "7", label: "Incubator partnerships including IIM Calcutta" },
    { number: "₹7.5Cr", label: "Corpus already committed" }
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
        <div className="bg-gradient-to-br from-muted/20 to-muted/10 border border-border rounded-xl p-12 mb-16 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-6">How to Create the Blueprint of a Unicorn in 15 Days?</h3>
            <p className="text-xl text-muted-foreground">
              Pre-seed, Seed & Angel Funding available with comprehensive 360° services
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-3">{highlight.number}</div>
                <div className="text-base text-muted-foreground">{highlight.label}</div>
              </div>
            ))}
          </div>

          {/* Purpose Section */}
          <div className="bg-card border border-border rounded-lg p-8 mt-8">
            <h4 className="text-xl font-semibold text-foreground mb-4 text-center">
              ✨ Purpose of Our Community
            </h4>
            <div className="space-y-3 text-muted-foreground">
              <p className="text-center font-medium">You were born with the Potential:</p>
              <ul className="list-disc list-inside space-y-1 max-w-2xl mx-auto">
                <li>You were born with goodness and trust</li>
                <li>You were born with ideals and dreams</li>
                <li>You were born with greatness</li>
                <li>You were born with wings</li>
                <li>You were not meant for crawling, so don't</li>
                <li>You have wings — learn to use them and fly 🦋</li>
              </ul>
              <p className="mt-4 font-medium text-center">
                This community exists to help you conceptualize, design, and scale your unicorns with structured mentorship, proven frameworks, and global networks.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-card border border-border rounded-lg p-8 shadow-card">
            <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
              <Target className="h-5 w-5 text-primary mr-2" />
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To solve every problem of your business holistically — from vision to systems, from sales to funding — 
              so you can systematically design your unicorn with structured mentorship, proven frameworks, and global networks.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 shadow-card">
            <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
              <Globe className="h-5 w-5 text-primary mr-2" />
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Transform 1 billion lives, 1 million businesses, and create 100 unicorns with $1B investment, 
              adding $5T to India's GDP through our proprietary #DesignYourUnicorn (DYU) framework.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Team Section */}
      <LeadershipTeam />
      
      {/* Founder Journey Section */}
      <FounderJourneySection />
      
      {/* Social Media Integration */}
      <SocialMediaIntegration />
    </section>
  );
};

export default AboutSection;