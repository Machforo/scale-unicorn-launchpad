import { Lightbulb, Users, TrendingUp, Award } from "lucide-react";
import FounderJourneySection from "./FounderJourneySection";
import SocialMediaIntegration from "./SocialMediaIntegration";

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

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="section-title text-left">
                About Idea2Unicorn
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by Ansshav Jain, Idea2Unicorn represents a revolutionary approach to social entrepreneurship 
                in India, combining tech-forward solutions with systems-level thinking to solve unemployment and sustainability challenges.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To achieve financial independence, zero unemployment, and net-zero emissions through 
                  innovative tech solutions, creating a sustainable ecosystem that transforms 1 billion lives, 
                  1 million businesses, and nurtures 100 unicorns.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To pioneer a Metaverse-based SkillTech University and Blockchain SkillsBank, 
                  creating a futuristic model for skill development that scales across India and beyond 
                  to Nepal, Sri Lanka, and Bangladesh.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">Leadership Philosophy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ansshav Jain's journey through 7+ business failures and recovery from deep debt has shaped 
                  a unique blend of corporate experience, startup resilience, and spiritual activism that 
                  redefines social entrepreneurship through economic strategy and cultural revival.
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