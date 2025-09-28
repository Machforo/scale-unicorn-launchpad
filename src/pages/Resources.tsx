import { useState } from "react";
import { ExternalLink, BookOpen, Play, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Resources = () => {
  const books = [
    {
      title: "Bhagavad Gita As It Is",
      author: "A.C.Bhakthivedantha Swamy Prabhupada",
      link: "https://www.amazon.com/Bhagavad-Gita-Original-English-As/dp/B07MDTX8BR/ref=sr_1_1?crid=YUWQID07I4YZ&dib=eyJ2IjoiMSJ9.jtqlx-tib5EJfQBY7KeozuFQIfJnrMBb7tPftwpvHrbnRWxQORHjivYESwH0baGIL-tpWBl9xvRqKZsFoNOxUZqYZXnoOV3zaNjSOr2ZLzx2TSGR99UbGflbHWSuk1FyAFxJgOUAZljKsVWsWyv2KaUtZWOAnBCqz2kvw-azsqIyvI4yDqhZzim1IFIMG64kCszK2g8nNPGIiLIS2EP1irpg1zRq13jhH4wIJXLdUoc.rJfCjl_TrQXYC5o7cgLfr5oi4nz5f30jO_aud6f55ts&dib_tag=se&keywords=bhagavad+gita+as+it+is&qid=1758194560&sprefix=bhagwad+gita+as+%2Caps%2C422&sr=8-1"
    },
    {
      title: "John C Maxwell Attitude 101",
      author: "John C Maxwell", 
      link: "https://www.amazon.in/Attitude-101-What-Leader-Needs/dp/0785288341"
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      link: "https://www.amazon.in/Alchemist-Paulo-Coelho/dp/8172234988"
    },
    {
      title: "One Word That Will Change Your Life Expanded Edition",
      author: "Jon Gordon, Dan Britton",
      link: "https://www.amazon.in/One-Word-That-Will-Change/dp/1118451309"
    },
    {
      title: "The 21 Most Powerful Minutes in a Leader's day",
      author: "John C Maxwell",
      link: "https://www.amazon.in/Most-Powerful-Minutes-Leaders-Day/dp/0785266658"
    },
    {
      title: "Dan Roam Draw To Win",
      author: "Dan Roam",
      link: "https://www.amazon.in/Draw-Win-Crash-Course-Innovate/dp/1101903953"
    },
    {
      title: "The Back Of The Napkin",
      author: "Dan Roam",
      link: "https://www.amazon.in/Back-Napkin-Expanded-Edition-Problems/dp/1591842697"
    },
    {
      title: "Product Development For The Service Sector",
      author: "Robert G Cooper",
      link: "https://www.amazon.in/Product-Development-Service-Sector-Lessons/dp/0465020359"
    },
    {
      title: "Crossing the Chasm, 3rd Edition",
      author: "Geoffrey A Moore",
      link: "https://www.amazon.in/Crossing-Chasm-3rd-Disruptive-Mainstream/dp/0062292986"
    },
    {
      title: "Zone to win",
      author: "Geoffrey A Moore",
      link: "https://amzn.in/d/eF7NDPj"
    },
    {
      title: "Good to Great",
      author: "Jim Collins",
      link: "https://amzn.in/d/4ZNggsC"
    },
    {
      title: "Customers.com",
      author: "Ronni T Marshak, Patricia B Seybold",
      link: "https://amzn.in/d/1sVnXVB"
    },
    {
      title: "The Agile Samurai",
      author: "Jonathan Ramusson",
      link: "https://amzn.in/d/eW7QeIt"
    },
    {
      title: "The Lean Six Sigma Pocket Toolbook",
      author: "Dave Rowlands, Michael L George",
      link: "https://amzn.in/d/c6lT22o"
    },
    {
      title: "Max-E-Marketing in the Net Future",
      author: "Chuck Martin, Stan Rapp",
      link: "https://amzn.in/d/52ve44q"
    },
    {
      title: "The GE Work-Out",
      author: "David Ulrich, Dave Ulrich",
      link: "https://amzn.in/d/3VckTBU"
    },
    {
      title: "Six Sigma for Marketing Processes",
      author: "Clyde M Creveling",
      link: "https://amzn.in/d/fCAdTdY"
    },
    {
      title: "Scrum: The Art of Doing Twice the Work in Half the Time",
      author: "Jeff Sutherland, JJ Sutherland",
      link: "https://amzn.in/d/5YgLwOB"
    }
  ];

  const videos = [
    {
      title: "Smart Growth Methodology Overview",
      presenter: "Sandipp Vijj",
      duration: "45 mins",
      description: "Introduction to our proprietary Smart Growth methodology for scaling startups without dilution",
      link: "#"
    },
    {
      title: "Crossing the Chasm in Indian Market",
      presenter: "Amardeep Bajpai",
      duration: "32 mins", 
      description: "Strategies for moving from early adopters to mainstream market in India",
      link: "#"
    },
    {
      title: "Digital Transformation for Startups",
      presenter: "Dinesh Makhija",
      duration: "38 mins",
      description: "Leveraging AI and digital technologies to accelerate startup growth",
      link: "#"
    },
    {
      title: "Franchising Mastery Fundamentals",
      presenter: "Sam Kundu",
      duration: "41 mins",
      description: "Building scalable franchise models for business expansion",
      link: "#"
    }
  ];

  const recordedWorkshops = [
    {
      title: "Business Visioning Masterclass",
      facilitator: "Sandipp Vijj",
      date: "December 2024",
      duration: "3 hours",
      description: "Complete recording of our flagship Business Visioning workshop with 5-step methodology",
      link: "#"
    },
    {
      title: "Conceptualize Your Unicorn - Session 1",
      facilitator: "Sandipp Vijj", 
      date: "November 2024",
      duration: "2.5 hours",
      description: "First session of the 10-book methodology framework for unicorn creation",
      link: "#"
    },
    {
      title: "Leadership Excellence Workshop",
      facilitator: "Sandipp Vijj",
      date: "October 2024", 
      duration: "4 hours",
      description: "Comprehensive leadership development session for startup founders",
      link: "#"
    },
    {
      title: "FinTech Innovation Deep Dive",
      facilitator: "Dr. Atul Mehta",
      date: "September 2024",
      duration: "3.5 hours", 
      description: "Exploring fintech opportunities and regulatory landscape in India",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-12 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Learning Resources
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Curated learning materials to accelerate your entrepreneurial journey
          </p>
        </div>

        <Tabs defaultValue="books" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="books" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Books
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Play className="h-4 w-4" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="workshops" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              Recorded Workshops
            </TabsTrigger>
          </TabsList>

          <TabsContent value="books">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {books.map((book, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <BookOpen className="h-8 w-8 text-primary flex-shrink-0" />
                    <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      <a href={book.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                    {book.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    by {book.author}
                  </p>
                  
                  <Button asChild variant="outline" className="w-full">
                    <a href={book.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View on Amazon
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos">
            <div className="grid md:grid-cols-2 gap-6">
              {videos.map((video, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <Play className="h-8 w-8 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                      {video.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {video.title}
                  </h3>
                  
                  <p className="text-sm text-primary font-medium mb-2">
                    Presenter: {video.presenter}
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {video.description}
                  </p>
                  
                  <Button variant="outline" className="w-full">
                    <Play className="h-4 w-4 mr-2" />
                    Watch Video
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="workshops">
            <div className="grid md:grid-cols-2 gap-6">
              {recordedWorkshops.map((workshop, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <Video className="h-8 w-8 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                      {workshop.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {workshop.title}
                  </h3>
                  
                  <div className="text-sm text-muted-foreground mb-2">
                    <span className="font-medium text-primary">Facilitator:</span> {workshop.facilitator}
                  </div>
                  
                  <div className="text-sm text-muted-foreground mb-3">
                    <span className="font-medium">Date:</span> {workshop.date}
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {workshop.description}
                  </p>
                  
                  <Button variant="outline" className="w-full">
                    <Video className="h-4 w-4 mr-2" />
                    Watch Recording
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Download Section */}
        <div className="mt-16 bg-card border border-border rounded-lg p-8 shadow-card text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Download Our Brochure
          </h3>
          <p className="text-muted-foreground mb-6">
            Get detailed information about our services, workshops, and methodologies
          </p>
          <Button asChild className="btn-primary">
            <a href="/assets/sample-brochure.pdf" download>
              Download Brochure
            </a>
          </Button>
        </div>

        <div className="mt-16 bg-card border border-border rounded-lg p-8 shadow-card text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Stay Updated with Latest Resources
          </h3>
          <p className="text-muted-foreground mb-6">
            Subscribe to get notified when we release new guides, handbooks, and methodologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="btn-primary">Subscribe</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resources;