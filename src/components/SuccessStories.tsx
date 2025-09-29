import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, DollarSign, Award, ArrowRight, ExternalLink } from "lucide-react";

interface SuccessStory {
  id: string;
  companyName: string;
  founderName: string;
  industry: string;
  stage: string;
  fundingRaised: string;
  valuation: string;
  userBase: string;
  description: string;
  keyAchievements: string[];
  timeline: string;
  featured: boolean;
}

const SuccessStories = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const successStories: SuccessStory[] = [
    {
      id: "1",
      companyName: "EduTech Solutions",
      founderName: "Rahul Sharma",
      industry: "EdTech",
      stage: "Series A",
      fundingRaised: "$5.2M",
      valuation: "$25M",
      userBase: "500K+ students",
      description: "Revolutionizing online education with AI-powered personalized learning paths",
      keyAchievements: [
        "Achieved 300% user growth in 18 months",
        "Partnerships with 150+ educational institutions",
        "85% improvement in student learning outcomes"
      ],
      timeline: "18 months",
      featured: true
    },
    {
      id: "2", 
      companyName: "FinFlow",
      founderName: "Priya Patel",
      industry: "FinTech",
      stage: "Seed",
      fundingRaised: "$2.8M",
      valuation: "$12M",
      userBase: "100K+ users",
      description: "Digital lending platform for SMEs with instant approval using AI credit scoring",
      keyAchievements: [
        "Processed $50M+ in loans",
        "98% customer satisfaction rate",
        "Reduced loan approval time by 90%"
      ],
      timeline: "12 months",
      featured: false
    },
    {
      id: "3",
      companyName: "HealthHub",
      founderName: "Dr. Amit Kumar",
      industry: "HealthTech",
      stage: "Pre-Series A",
      fundingRaised: "$1.5M",
      valuation: "$8M",
      userBase: "50K+ patients",
      description: "Telemedicine platform connecting patients with specialists across rural India",
      keyAchievements: [
        "Served patients in 200+ cities",
        "95% diagnostic accuracy rate",
        "40% cost reduction for patients"
      ],
      timeline: "15 months",
      featured: false
    }
  ];

  const categories = ["all", "EdTech", "FinTech", "HealthTech", "E-commerce"];

  const filteredStories = selectedCategory === "all" 
    ? successStories 
    : successStories.filter(story => story.industry === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real transformations from startups that scaled with our guidance and methodologies
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Startups Mentored</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">$100M+</div>
            <div className="text-muted-foreground">Total Funding Raised</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-muted-foreground">Unicorn Creators</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">85%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Story */}
        {filteredStories.find(story => story.featured) && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Featured Success Story</h3>
            <Card className="overflow-hidden border-primary/20 shadow-xl">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="secondary">{filteredStories.find(story => story.featured)?.industry}</Badge>
                      <Badge variant="outline">{filteredStories.find(story => story.featured)?.stage}</Badge>
                    </div>
                    <h4 className="text-2xl font-bold text-foreground mb-2">
                      {filteredStories.find(story => story.featured)?.companyName}
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      Founded by {filteredStories.find(story => story.featured)?.founderName}
                    </p>
                    <p className="text-foreground leading-relaxed mb-6">
                      {filteredStories.find(story => story.featured)?.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 text-green-500 mr-2" />
                        <div>
                          <div className="font-semibold">{filteredStories.find(story => story.featured)?.fundingRaised}</div>
                          <div className="text-sm text-muted-foreground">Funding Raised</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-blue-500 mr-2" />
                        <div>
                          <div className="font-semibold">{filteredStories.find(story => story.featured)?.userBase}</div>
                          <div className="text-sm text-muted-foreground">User Base</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-4">Key Achievements</h5>
                    <ul className="space-y-3">
                      {filteredStories.find(story => story.featured)?.keyAchievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <Award className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Timeline to Success</span>
                        <span className="font-semibold text-primary">{filteredStories.find(story => story.featured)?.timeline}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Success Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredStories.filter(story => !story.featured).map((story) => (
            <Card key={story.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">{story.industry}</Badge>
                  <Badge variant="outline">{story.stage}</Badge>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {story.companyName}
                </h4>
                <p className="text-muted-foreground text-sm mb-4">by {story.founderName}</p>
                <p className="text-foreground leading-relaxed mb-6 line-clamp-3">
                  {story.description}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Funding Raised</span>
                    <span className="font-semibold text-green-600">{story.fundingRaised}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">User Base</span>
                    <span className="font-semibold text-blue-600">{story.userBase}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Timeline</span>
                    <span className="font-semibold text-primary">{story.timeline}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of entrepreneurs who have transformed their startups with our proven methodologies
            </p>
          </div>
              <div className="flex items-center space-x-4">
                <Button 
                  size="lg" 
                  className="btn-primary"
                  onClick={() => {
                    // Create consultation form modal instead of just applying
                    const consultationModal = document.createElement('div');
                    consultationModal.innerHTML = `
                      <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                        <div class="bg-white p-6 rounded-lg max-w-md w-full mx-4">
                          <h3 class="text-xl font-bold mb-4">Book a Consultation</h3>
                          <p class="text-gray-600 mb-4">Please visit our Contact section to book a consultation.</p>
                          <button onclick="this.closest('div').remove(); document.getElementById('contact').scrollIntoView({behavior: 'smooth'})" class="w-full bg-blue-600 text-white py-2 rounded">
                            Go to Contact Section
                          </button>
                          <button onclick="this.closest('div').remove()" class="w-full mt-2 bg-gray-300 text-gray-700 py-2 rounded">
                            Close
                          </button>
                        </div>
                      </div>
                    `;
                    document.body.appendChild(consultationModal);
                  }}
                >
                  Apply for Incubation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Book a Consultation
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;