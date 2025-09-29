import { ExternalLink, Youtube, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialMediaIntegration = () => {
  // Sample YouTube and LinkedIn data - Replace with real API calls
  const youtubePosts = [
    {
      id: 1,
      title: "Smart Growth Strategies for Startups",
      thumbnail: "/placeholder.svg",
      views: "12K views",
      duration: "15:24",
      publishedAt: "2 days ago",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Zero Dilution Framework Explained",
      thumbnail: "/placeholder.svg", 
      views: "8.5K views",
      duration: "12:18",
      publishedAt: "1 week ago",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Building Unicorns: The SKCKJ Method",
      thumbnail: "/placeholder.svg",
      views: "15K views", 
      duration: "18:45",
      publishedAt: "2 weeks ago",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ];

  const linkedinPosts = [
    {
      id: 1,
      content: "Excellence in Startup & Corporate Leadership requires a unique blend of vision, resilience, and strategic thinking. After 7+ business failures and recovery from deep debt, I've learned that true leadership is about transforming challenges into opportunities for systemic change.",
      engagement: "245 likes • 32 comments",
      publishedAt: "3 hours ago",
      link: "https://www.linkedin.com/company/dream-life-creator-in-wellness/"
    },
    {
      id: 2, 
      content: "The future of social entrepreneurship lies in tech-forward, systems-level solutions. Our Metaverse SkillTech University and Blockchain SkillsBank represent a paradigm shift in how we approach skill development and employment creation.",
      engagement: "189 likes • 28 comments",
      publishedAt: "1 day ago",
      link: "https://www.linkedin.com/company/dream-life-creator-in-wellness/"
    },
    {
      id: 3,
      content: "Smart Growth, Zero Dilution - this isn't just a methodology, it's a revolution. We've helped 500+ startups achieve exponential growth while preserving founder equity. The key is understanding that growth doesn't require giving up control.",
      engagement: "312 likes • 45 comments", 
      publishedAt: "3 days ago",
      link: "https://www.linkedin.com/company/dream-life-creator-in-wellness/"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Latest Updates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected with our latest insights, strategies, and thought leadership content
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* YouTube Section */}
          <div>
            <div className="flex items-center mb-8">
              <Youtube className="h-8 w-8 text-red-600 mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Latest YouTube Videos</h3>
            </div>
            
            <div className="space-y-6">
              {youtubePosts.map((post) => (
                <div key={post.id} className="bg-card border border-border rounded-lg p-4 shadow-card hover:shadow-elegant transition-shadow duration-200">
                  <div className="flex gap-4">
                    <div className="relative w-32 h-20 bg-muted rounded-lg flex-shrink-0 flex items-center justify-center">
                      <Youtube className="h-8 w-8 text-red-600" />
                      <span className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                        {post.duration}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2 line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>{post.views}</p>
                        <p>{post.publishedAt}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="self-start" asChild>
                      <a href={post.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* LinkedIn Section */}
          <div>
            <div className="flex items-center mb-8">
              <Linkedin className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-foreground">LinkedIn Insights</h3>
            </div>

            <div className="space-y-6">
              {linkedinPosts.map((post) => (
                <div key={post.id} className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-elegant transition-shadow duration-200">
                  <p className="text-foreground leading-relaxed mb-4 line-clamp-4">
                    {post.content}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.engagement}</span>
                    <span>{post.publishedAt}</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <Button variant="ghost" size="sm" className="w-full" asChild>
                      <a href={post.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View on LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Button variant="outline" className="w-full" asChild>
                <a href="https://www.linkedin.com/company/dream-life-creator-in-wellness/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  Follow on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Company Page Link */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-lg p-8 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Excellence in Startup & Corporate Leadership
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Connect with us on LinkedIn to stay updated with the latest insights, strategies, 
              and thought leadership content from our team.
            </p>
            <Button className="btn-primary" asChild>
              <a href="https://www.linkedin.com/company/dream-life-creator-in-wellness/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                Visit LinkedIn Company Page
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaIntegration;