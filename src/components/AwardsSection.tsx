import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Award, Star, Calendar, ExternalLink, Users, TrendingUp } from "lucide-react";

interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  category: string;
  description: string;
  icon: JSX.Element;
  featured: boolean;
}

const AwardsSection = () => {
  const awards: Award[] = [
    {
      id: "1",
      title: "Top 50 Startup Mentors in India",
      organization: "Startup India Initiative",
      year: "2024",
      category: "Mentorship",
      description: "Recognized for exceptional mentorship and guidance to over 50 startups, contributing to ecosystem growth",
      icon: <Trophy className="h-6 w-6" />,
      featured: true
    },
    {
      id: "2",
      title: "Excellence in Business Strategy",
      organization: "Indian Angel Network",
      year: "2023",
      category: "Strategy",
      description: "Awarded for innovative business strategies that helped startups achieve sustainable growth without equity dilution",
      icon: <Award className="h-6 w-6" />,
      featured: true
    },
    {
      id: "3",
      title: "Outstanding Contribution to EdTech",
      organization: "EdTech Innovation Awards",
      year: "2023",
      category: "Education",
      description: "Recognized for transforming educational technology landscape through strategic consulting and incubation",
      icon: <Star className="h-6 w-6" />,
      featured: false
    },
    {
      id: "4",
      title: "Best Incubation Program",
      organization: "National Startup Awards",
      year: "2022",
      category: "Incubation",
      description: "Idea2Unicorn incubation program recognized for highest success rate and comprehensive support system",
      icon: <TrendingUp className="h-6 w-6" />,
      featured: false
    },
    {
      id: "5",
      title: "Innovation in Franchise Consulting",
      organization: "Franchise Association of India",
      year: "2022",
      category: "Consulting",
      description: "Pioneering zero-investment franchise models that democratized business expansion for startups",
      icon: <Users className="h-6 w-6" />,
      featured: false
    },
    {
      id: "6",
      title: "Digital Transformation Leader",
      organization: "CII Digital India Awards",
      year: "2021",
      category: "Digital",
      description: "Leading digital transformation initiatives across multiple industry verticals with measurable impact",
      icon: <Star className="h-6 w-6" />,
      featured: false
    }
  ];

  const achievements = [
    {
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
      title: "Industry Recognition",
      count: "15+",
      description: "Awards and recognitions from leading industry bodies"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-500" />,
      title: "Media Features",
      count: "50+",
      description: "Featured in leading business publications and media"
    },
    {
      icon: <Star className="h-8 w-8 text-purple-500" />,
      title: "Speaking Engagements",
      count: "100+",
      description: "Keynote speeches at major conferences and events"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-accent/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Awards & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence has been recognized by leading industry organizations and media outlets
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {achievement.icon}
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{achievement.count}</div>
              <div className="font-semibold text-foreground mb-2">{achievement.title}</div>
              <div className="text-sm text-muted-foreground">{achievement.description}</div>
            </div>
          ))}
        </div>

        {/* Featured Awards */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Featured Awards</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {awards.filter(award => award.featured).map((award) => (
              <Card key={award.id} className="group hover:shadow-xl transition-all duration-300 border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary">
                        {award.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary">{award.category}</Badge>
                        <Badge variant="outline" className="text-xs">
                          <Calendar className="h-3 w-3 mr-1" />
                          {award.year}
                        </Badge>
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {award.title}
                      </h4>
                      <p className="text-primary font-semibold mb-3">{award.organization}</p>
                      <p className="text-muted-foreground leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Awards Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">All Awards & Recognition</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.filter(award => !award.featured).map((award) => (
              <Card key={award.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <div className="text-primary">
                        {award.icon}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{award.category}</Badge>
                      <Badge variant="secondary">{award.year}</Badge>
                    </div>
                  </div>
                  <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {award.title}
                  </h4>
                  <p className="text-primary font-semibold text-sm mb-3">{award.organization}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {award.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Media Coverage */}
        <div className="bg-card border border-border rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Media Coverage</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our work and achievements have been featured in leading business publications, 
            startup magazines, and industry reports across India and internationally.
          </p>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">Economic Times</div>
              <div className="text-sm text-muted-foreground">Featured Article</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">YourStory</div>
              <div className="text-sm text-muted-foreground">Founder Interview</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">Inc42</div>
              <div className="text-sm text-muted-foreground">Startup Spotlight</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">Business Today</div>
              <div className="text-sm text-muted-foreground">Expert Column</div>
            </div>
          </div>
          <Button variant="outline" asChild>
            <a href="https://www.three60magazine.com/creating-the-blueprint-of-a-unicorn-in-just-15-days/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Media Coverage
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;