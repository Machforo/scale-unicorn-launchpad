import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, ExternalLink, ArrowRight, Newspaper, Users, TrendingUp, Award } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import teamImage from "@/assets/professional-meeting.jpg";

const NewsMediaSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { toast } = useToast();

  const newsArticles = [
    {
      id: 1,
      title: "Creating the Blueprint of a Unicorn in Just 15 Days",
      excerpt: "A visionary team of entrepreneurs, strategists, and domain experts has come together to launch a revolutionary platform designed to help startups scale faster and smarter.",
      content: `New Delhi, 19th September 2025 — A visionary team of entrepreneurs, strategists, and domain experts has come together to launch a revolutionary platform designed to help startups scale faster and smarter — with the promise of building the "360 degree service provider to startups."

The initiative offers pre-seed, seed, and angel funding opportunities alongside 360-degree growth services, enabling founders to achieve:

• A potential $1 million valuation within 4 weeks
• Enabling crossing the chasm strategy for an innovative idea to be embraced by early majority leading to a Path to Profitability  
• Blue print to build your unicorn
• Up to 5x growth for Franchisable Model for business in 24 months without diluting equity

Speaking on the launch, Sandipp Vijj (MBA – IIMA), Founder, Idea2Unicorn.ai said: "Every entrepreneur dreams of building a unicorn, but few have the blueprint or ecosystem to get there. Our mission is to fast-track this journey by combining strategic expertise, technology, and funding into one platform. With the right mentorship and resources, we believe a unicorn is not a distant dream for a level 5 leader entrepreneur — it can be a reality in just 15 days of disciplined execution."

Our integrated approach combines strategic consulting, funding access, and execution support to help founders build sustainable, high-growth businesses. We believe that with the right ecosystem and mentorship, every ambitious entrepreneur can achieve unicorn status.`,
      publication: "Three 60 Magazine",
      date: "September 18, 2025",
      category: "Press Release",
      image: teamImage,
      url: "https://www.three60magazine.com/creating-the-blueprint-of-a-unicorn-in-just-15-days/",
      featured: true,
      readTime: "5 min read"
    }
  ];

  const mediaHighlights = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Industry Recognition",
      description: "Featured in leading business publications for innovative startup ecosystem approach",
      count: "15+"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team Coverage",
      description: "Media spotlight on our world-class leadership team from IIMA, ISB backgrounds",
      count: "8+"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Growth Stories",
      description: "Success stories of startups achieving unicorn status through our platform",
      count: "3+"
    },
    {
      icon: <Newspaper className="h-6 w-6" />,
      title: "Press Releases",
      description: "Official announcements and company updates covered by major media outlets",
      count: "25+"
    }
  ];

  const categories = ["all", "Press Release", "Industry News", "Success Stories", "Awards"];

  const filteredNews = selectedCategory === "all" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  return (
    <section id="news-media" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Newspaper className="h-5 w-5 text-primary" />
            <span className="text-primary font-semibold">Latest Updates</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            News & Media
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest news, press releases, and media coverage about Idea2Unicorn's 
            revolutionary approach to startup success.
          </p>
        </div>

        {/* Media Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mediaHighlights.map((highlight, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 border-primary/20">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  {highlight.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{highlight.count}</div>
                <h3 className="font-semibold text-foreground mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="news" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="news" className="text-lg">Latest News</TabsTrigger>
            <TabsTrigger value="press" className="text-lg">Press Releases</TabsTrigger>
            <TabsTrigger value="coverage" className="text-lg">Media Coverage</TabsTrigger>
          </TabsList>

          <TabsContent value="news">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Featured Article */}
            {filteredNews.find(article => article.featured) && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">Featured Story</h3>
                <Card className="overflow-hidden border-primary/20 shadow-xl">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img 
                        src={filteredNews.find(article => article.featured)?.image} 
                        alt={filteredNews.find(article => article.featured)?.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {filteredNews.find(article => article.featured)?.category}
                        </Badge>
                        <Badge variant="outline">Featured</Badge>
                      </div>
                      <h4 className="text-2xl font-bold text-foreground mb-4">
                        {filteredNews.find(article => article.featured)?.title}
                      </h4>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {filteredNews.find(article => article.featured)?.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {filteredNews.find(article => article.featured)?.date}
                          </div>
                          <span>{filteredNews.find(article => article.featured)?.readTime}</span>
                        </div>
                        <div className="flex gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm">
                                Read More
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle className="text-2xl">
                                  {filteredNews.find(article => article.featured)?.title}
                                </DialogTitle>
                                <DialogDescription className="flex items-center gap-4 text-muted-foreground">
                                  <span>{filteredNews.find(article => article.featured)?.publication}</span>
                                  <span>•</span>
                                  <span>{filteredNews.find(article => article.featured)?.date}</span>
                                </DialogDescription>
                              </DialogHeader>
                              <div className="prose prose-lg max-w-none mt-6">
                                <img 
                                  src={filteredNews.find(article => article.featured)?.image} 
                                  alt={filteredNews.find(article => article.featured)?.title}
                                  className="w-full h-64 object-cover rounded-lg mb-6"
                                />
                                <div className="whitespace-pre-line text-foreground leading-relaxed">
                                  {filteredNews.find(article => article.featured)?.content}
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                          <Button asChild size="sm">
                            <a 
                              href={filteredNews.find(article => article.featured)?.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1"
                            >
                              View Original
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </TabsContent>

          <TabsContent value="press">
            <div className="text-center py-16">
              <Newspaper className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-2">More Press Releases Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                Stay tuned for official announcements and company updates.
              </p>
              <Button asChild className="btn-primary">
                <a href="#contact">Subscribe for Updates</a>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="coverage">
            <div className="text-center py-16">
              <TrendingUp className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-2">Media Coverage Archive</h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive coverage from leading business publications coming soon.
              </p>
              <Button asChild className="btn-primary">
                <a href="https://www.three60magazine.com/creating-the-blueprint-of-a-unicorn-in-just-15-days/" target="_blank" rel="noopener noreferrer">
                  View Media Coverage
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Stay Connected</CardTitle>
              <CardDescription className="text-lg">
                Get the latest updates about Idea2Unicorn directly in your inbox
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  id="news-email"
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <Button 
                  className="sm:w-auto"
                  onClick={async () => {
                    const emailInput = document.getElementById('news-email') as HTMLInputElement;
                    const email = emailInput?.value?.trim();
                    if (!email) {
                      toast({ title: "Error", description: "Please enter your email address", variant: "destructive" });
                      return;
                    }
                    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                      toast({ title: "Invalid email", description: "Please enter a valid email address", variant: "destructive" });
                      return;
                    }
                    const { error } = await supabase.from('form_responses').insert({ form_type: 'newsletter', name: 'Newsletter Subscriber', email, additional_data: { source: 'news-media' } });
                    if (error) {
                      toast({ title: "Subscription failed", description: "Please try again later.", variant: "destructive" });
                      return;
                    }
                    toast({ title: "Subscribed!", description: "You will receive our latest updates." });
                    emailInput.value = '';
                  }}
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsMediaSection;