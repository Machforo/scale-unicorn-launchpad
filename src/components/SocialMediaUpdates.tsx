import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Youtube, Linkedin, ExternalLink, Clock, Play, Eye } from "lucide-react";
import unicornBlueprintThumb from "@/assets/youtube-unicorn-blueprint.jpg";
import franchiseModelThumb from "@/assets/youtube-franchise-model.jpg";
import methodologiesThumb from "@/assets/youtube-methodologies.jpg";

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
      content: "In Good to Great, Jim Collins explains that great companies achieve sustained success by building on three core principles: disciplined people, disciplined thought, and disciplined action. These form the foundation of the Flywheel and are essential to moving from \"good\" to \"great.\"",
      engagement: "156 likes • 23 comments • 18 shares",
      publishedAt: "2 days ago",
      url: "https://www.linkedin.com/posts/dream-life-creator-in-wellness_entrepreneur-startup-unicorn-activity-7323584636758974464-0jgG?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADfvJ7QBNM9oql8Qi0-uYmBOMCs1PukxmtA"
    },
    {
      id: "2",
      content: "How can Government help a startup Ecosystem? That's a powerful question — and very relevant for today's world. Governments can catalyze (meaning: speed up and energize) a startup ecosystem in several key ways:",
      engagement: "284 likes • 31 comments • 22 shares", 
      publishedAt: "5 days ago",
      url: "https://www.linkedin.com/posts/dream-life-creator-in-wellness_how-can-government-help-a-startup-ecosystem-activity-7322068281933053954-jnmC?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADfvJ7QBNM9oql8Qi0-uYmBOMCs1PukxmtA"
    },
    {
      id: "3",
      content: "Critical success factors to develop a strategy to create Unicorns (startup). Creating a unicorn—a startup valued at over $1 billion—is an ambitious goal. While there's no guaranteed formula, certain critical success factors (CSFs) significantly increase the chances. Here's a strategic breakdown:",
      engagement: "387 likes • 64 comments • 29 shares",
      publishedAt: "1 week ago", 
      url: "https://www.linkedin.com/posts/dream-life-creator-in-wellness_critical-success-factors-to-develop-a-strategy-activity-7321333260414795776-cZ67?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADfvJ7QBNM9oql8Qi0-uYmBOMCs1PukxmtA"
    }
  ];

  const youtubeVideos: YouTubeVideo[] = [
    {
      id: "1",
      title: "How to Create a Unicorn Blueprint in 15 Days | Sandipp Vijj",
      thumbnail: unicornBlueprintThumb,
      views: "32K",
      duration: "15:42",
      publishedAt: "3 days ago",
      url: "https://www.youtube.com/results?search_query=How+to+Create+a+Unicorn+Blueprint+Sandipp+Vijj"
    },
    {
      id: "2", 
      title: "Zero-Investment Franchise Model for Startups | Growth Strategies",
      thumbnail: franchiseModelThumb,
      views: "24K",
      duration: "12:28",
      publishedAt: "1 week ago",
      url: "https://www.youtube.com/results?search_query=Zero+Investment+Franchise+Model+Startups"
    },
    {
      id: "3",
      title: "10 Business Methodologies Every Entrepreneur Must Know",
      thumbnail: methodologiesThumb, 
      views: "41K",
      duration: "18:55",
      publishedAt: "2 weeks ago",
      url: "https://www.youtube.com/results?search_query=10+Business+Methodologies+Entrepreneur"
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
                <Card key={video.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className="block">
                    <CardContent className="p-4">
                      <div className="flex space-x-4">
                        <div className="relative flex-shrink-0">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-32 h-20 object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Play className="h-8 w-8 text-white" />
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
                          <div className="mt-2 text-sm text-primary flex items-center">
                            <Youtube className="h-3 w-3 mr-1" />
                            View on YouTube
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </a>
                </Card>
              ))}
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
            <div className="flex gap-4 justify-center mt-6">
              <Button variant="outline" asChild>
                <a href="https://www.linkedin.com/company/dream-life-creator-in-wellness/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  Follow on LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.youtube.com/results?search_query=idea2unicorn+startup" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-4 w-4 mr-2" />
                  Find on YouTube
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