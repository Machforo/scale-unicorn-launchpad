import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Youtube, Linkedin, ExternalLink, Clock, Play, Eye } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

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
  const { toast } = useToast();
  const [youtubeChannelUrl, setYoutubeChannelUrl] = useState("");
  const [linkedinPageUrl, setLinkedinPageUrl] = useState("");
  const [youtubeVideos, setYoutubeVideos] = useState<YouTubeVideo[]>([]);
  const [linkedinPosts, setLinkedinPosts] = useState<LinkedInPost[]>([]);
  const [loading, setLoading] = useState(false);

  // Sample data for demonstration - replace with actual API calls
  const sampleYouTubeVideos: YouTubeVideo[] = [
    {
      id: "1",
      title: "How to Build a Unicorn Startup in 15 Days",
      thumbnail: "/placeholder.svg",
      views: "25K",
      duration: "12:34",
      publishedAt: "2 days ago",
      url: "#"
    },
    {
      id: "2", 
      title: "Funding Mastery: Pitch Deck Secrets",
      thumbnail: "/placeholder.svg",
      views: "18K",
      duration: "8:45",
      publishedAt: "1 week ago",
      url: "#"
    }
  ];

  const sampleLinkedInPosts: LinkedInPost[] = [
    {
      id: "1",
      content: "🚀 Just completed another successful funding round for our portfolio startup! The key to successful fundraising isn't just about the numbers...",
      engagement: "247 likes • 34 comments",
      publishedAt: "3 days ago",
      url: "#"
    },
    {
      id: "2",
      content: "💡 The future of entrepreneurship lies in combining technology with social impact. Here's why every startup should think about...",
      engagement: "189 likes • 28 comments", 
      publishedAt: "1 week ago",
      url: "#"
    }
  ];

  const fetchSocialMediaContent = async () => {
    if (!youtubeChannelUrl && !linkedinPageUrl) {
      toast({
        title: "Please provide at least one channel URL",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    
    try {
      // For now, using sample data - replace with actual API calls
      // when you provide the channel URLs
      
      if (youtubeChannelUrl) {
        setYoutubeVideos(sampleYouTubeVideos);
      }
      
      if (linkedinPageUrl) {
        setLinkedinPosts(sampleLinkedInPosts);
      }

      toast({
        title: "Social media content updated!",
        description: "Latest posts and videos have been fetched."
      });
    } catch (error) {
      toast({
        title: "Error fetching content",
        description: "Please check the URLs and try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Load sample data initially
    setYoutubeVideos(sampleYouTubeVideos);
    setLinkedinPosts(sampleLinkedInPosts);
  }, []);

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

        {/* Channel Configuration */}
        <div className="mb-8 max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Configure Social Media Channels</CardTitle>
              <CardDescription>
                Provide your YouTube channel and LinkedIn page URLs to fetch latest content
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Youtube className="h-5 w-5 text-red-600" />
                <Input 
                  placeholder="YouTube channel URL"
                  value={youtubeChannelUrl}
                  onChange={(e) => setYoutubeChannelUrl(e.target.value)}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="h-5 w-5 text-blue-600" />
                <Input
                  placeholder="LinkedIn page URL" 
                  value={linkedinPageUrl}
                  onChange={(e) => setLinkedinPageUrl(e.target.value)}
                />
              </div>
              <Button 
                onClick={fetchSocialMediaContent}
                disabled={loading}
                className="w-full"
              >
                {loading ? "Fetching..." : "Update Content"}
              </Button>
            </CardContent>
          </Card>
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
                    <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View Post
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-6">
              <Button variant="outline">
                <Linkedin className="h-4 w-4 mr-2" />
                Follow on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaUpdates;