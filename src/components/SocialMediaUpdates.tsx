import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Youtube, Linkedin, ExternalLink, Clock, Play, Eye } from "lucide-react";

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  duration: string;
  publishedAt: string;
  url: string;
}

interface LinkedInPost {
  id: string;
  content: string;
  engagement: string;
  publishedAt: string;
  url: string;
}

const SocialMediaUpdates = () => {
  // LinkedIn channel: https://www.linkedin.com/company/dream-life-creator-in-wellness/posts/?feedView=all
  const linkedinPosts: LinkedInPost[] = [
    {
      id: "1",
      content: "🚀 Transforming startups into unicorns with our proprietary #DesignYourUnicorn framework. Just completed another successful funding round for our portfolio startup! The key lies in systematic methodology and proven business strategies.",
      engagement: "347 likes • 52 comments • 28 shares",
      publishedAt: "2 days ago",
      url: "https://www.linkedin.com/company/dream-life-creator-in-wellness/posts/"
    },
    {
      id: "2",
      content: "💡 The future of entrepreneurship lies in combining technology with social impact. Our Metaverse SkillTech University is revolutionizing how we prepare the next generation of entrepreneurs across India, Nepal, Sri Lanka, and Bangladesh.",
      engagement: "298 likes • 41 comments • 19 shares", 
      publishedAt: "5 days ago",
      url: "https://www.linkedin.com/company/dream-life-creator-in-wellness/posts/"
    },
    {
      id: "3",
      content: "🎯 Target: Transform 1 billion lives, impact 1 million businesses, create 100 unicorns. Our Zero-Investment Franchise Model is helping startups scale across tier 2/3 cities without equity dilution. #Idea2Unicorn",
      engagement: "521 likes • 73 comments • 45 shares",
      publishedAt: "1 week ago", 
      url: "https://www.linkedin.com/company/dream-life-creator-in-wellness/posts/"
    }
  ];

  const youtubeVideos: YouTubeVideo[] = [
    {
      id: "1",
      title: "How to Create a Unicorn Blueprint in 15 Days | Sandipp Vijj",
      thumbnail: "/placeholder.svg",
      views: "32K",
      duration: "15:42",
      publishedAt: "3 days ago",
      url: "#"
    },
    {
      id: "2", 
      title: "Zero-Investment Franchise Model for Startups | Growth Strategies",
      thumbnail: "/placeholder.svg",
      views: "24K",
      duration: "12:28",
      publishedAt: "1 week ago",
      url: "#"
    },
    {
      id: "3",
      title: "10 Business Methodologies Every Entrepreneur Must Know",
      thumbnail: "/placeholder.svg", 
      views: "41K",
      duration: "18:55",
      publishedAt: "2 weeks ago",
      url: "#"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest Updates
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay connected with our latest content on YouTube and LinkedIn
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* YouTube Videos */}
          <div>
            <div className="flex items-center mb-6">
              <Youtube className="h-6 w-6 text-red-600 mr-2" />
              <h3 className="text-2xl font-bold text-foreground">Latest Videos</h3>
            </div>
            <div className="space-y-4">
              {youtubeVideos.map((video) => (
                <Card key={video.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex space-x-4">
                      <div className="relative flex-shrink-0">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-32 h-20 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="h-6 w-6 text-white" />
                        </div>
                        <Badge className="absolute bottom-1 right-1 bg-black/80 text-white text-xs">
                          {video.duration}
                        </Badge>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {video.title}
                        </h4>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            {video.views}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {video.publishedAt}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Watch Video
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-6">
              <Button variant="outline">
                <Youtube className="h-4 w-4 mr-2" />
                View All Videos
              </Button>
            </div>
          </div>

          {/* LinkedIn Posts */}
          <div>
            <div className="flex items-center mb-6">
              <Linkedin className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-2xl font-bold text-foreground">Latest Posts</h3>
            </div>
            <div className="space-y-4">
              {linkedinPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4">
                    <p className="text-foreground leading-relaxed mb-3 line-clamp-3">
                      {post.content}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{post.engagement}</span>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.publishedAt}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto" asChild>
                      <a href={post.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View Post
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-6">
              <Button variant="outline" asChild>
                <a href="https://www.linkedin.com/company/dream-life-creator-in-wellness/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  Follow on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaUpdates;