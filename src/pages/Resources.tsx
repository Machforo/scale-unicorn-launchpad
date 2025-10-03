import { useState } from "react";
import { ExternalLink, BookOpen, Play, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import bhagavadGitaImg from "@/assets/books/bhagavad-gita.jpg";
import attitude101Img from "@/assets/books/attitude-101.jpg";
import theAlchemistImg from "@/assets/books/the-alchemist.jpg";
import oneWordImg from "@/assets/books/one-word.jpg";
import minutes21Img from "@/assets/books/21-minutes.jpg";
import drawToWinImg from "@/assets/books/draw-to-win.jpg";
import backOfNapkinImg from "@/assets/books/back-of-napkin.jpg";
import productDevImg from "@/assets/books/product-development.jpg";
import crossingChasmImg from "@/assets/books/crossing-chasm.jpg";
import zoneToWinImg from "@/assets/books/zone-to-win.jpg";
import goodToGreatImg from "@/assets/books/good-to-great.jpg";
import customersDotComImg from "@/assets/books/customers-dot-com.jpg";
import agileSamuraiImg from "@/assets/books/agile-samurai.jpg";
import leanSixSigmaImg from "@/assets/books/lean-six-sigma.jpg";
import maxEMarketingImg from "@/assets/books/max-e-marketing.jpg";
import geWorkoutImg from "@/assets/books/ge-workout.jpg";
import sixSigmaMarketingImg from "@/assets/books/six-sigma-marketing.jpg";
import scrumImg from "@/assets/books/scrum.jpg";

const Resources = () => {
  const books = [
    {
      title: "Bhagavad Gita As It Is",
      author: "A.C. Bhaktivedanta Swami Prabhupada",
      link: "https://www.amazon.in/Bhagavad-As-C-Bhaktivedanta-Prabhupada/dp/9382176225",
      image: bhagavadGitaImg
    },
    {
      title: "Attitude 101: What Every Leader Needs to Know",
      author: "John C Maxwell", 
      link: "https://www.amazon.in/Attitude-101-What-Leader-Needs/dp/0785288341",
      image: attitude101Img
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      link: "https://www.amazon.in/Alchemist-Paulo-Coelho/dp/8172234988",
      image: theAlchemistImg
    },
    {
      title: "One Word That Will Change Your Life Expanded Edition",
      author: "Jon Gordon, Dan Britton",
      link: "https://www.amazon.in/One-Word-That-Will-Change-ebook/dp/B00BATL788",
      image: oneWordImg
    },
    {
      title: "The 21 Most Powerful Minutes in a Leader's Day",
      author: "John C Maxwell",
      link: "https://www.amazon.in/Most-Powerful-Minutes-Leaders-Day/dp/0785289429",
      image: minutes21Img
    },
    {
      title: "Draw to Win",
      author: "Dan Roam",
      link: "https://www.amazon.in/Draw-Win-Course-Innovate-Visual/dp/0735219222",
      image: drawToWinImg
    },
    {
      title: "The Back of the Napkin",
      author: "Dan Roam",
      link: "https://www.amazon.in/Back-Napkin-Expanded-Problems-Pictures/dp/1591842697",
      image: backOfNapkinImg
    },
    {
      title: "Product Development for the Service Sector",
      author: "Robert G Cooper",
      link: "https://www.amazon.in/Product-Development-Service-Sector-Lessons/dp/0465020364",
      image: productDevImg
    },
    {
      title: "Crossing the Chasm, 3rd Edition",
      author: "Geoffrey A Moore",
      link: "https://www.amazon.in/Crossing-Chasm-3rd-Disruptive-Mainstream/dp/0062292986",
      image: crossingChasmImg
    },
    {
      title: "Zone to Win",
      author: "Geoffrey A Moore",
      link: "https://amzn.in/d/eF7NDPj",
      image: zoneToWinImg
    },
    {
      title: "Good to Great",
      author: "Jim Collins",
      link: "https://amzn.in/d/4ZNggsC",
      image: goodToGreatImg
    },
    {
      title: "Customers.com",
      author: "Patricia B Seybold, Ronni T Marshak",
      link: "https://amzn.in/d/1sVnXVB",
      image: customersDotComImg
    },
    {
      title: "The Agile Samurai",
      author: "Jonathan Rasmusson",
      link: "https://amzn.in/d/eW7QeIt",
      image: agileSamuraiImg
    },
    {
      title: "The Lean Six Sigma Pocket Toolbook",
      author: "Michael L George, Dave Rowlands",
      link: "https://amzn.in/d/c6lT22o",
      image: leanSixSigmaImg
    },
    {
      title: "Max-E-Marketing in the Net Future",
      author: "Stan Rapp, Chuck Martin",
      link: "https://amzn.in/d/52ve44q",
      image: maxEMarketingImg
    },
    {
      title: "The GE Work-Out",
      author: "Dave Ulrich, Steve Kerr, Ron Ashkenas",
      link: "https://amzn.in/d/3VckTBU",
      image: geWorkoutImg
    },
    {
      title: "Six Sigma for Marketing Processes",
      author: "Clyde M Creveling",
      link: "https://amzn.in/d/fCAdTdY",
      image: sixSigmaMarketingImg
    },
    {
      title: "Scrum: The Art of Doing Twice the Work in Half the Time",
      author: "Jeff Sutherland, JJ Sutherland",
      link: "https://amzn.in/d/5YgLwOB",
      image: scrumImg
    }
  ];

  const videos = [
    {
      title: "Smart Growth Methodology Overview",
      presenter: "Sandipp Vijj",
      duration: "45 mins",
      description: "Introduction to our proprietary Smart Growth methodology for scaling startups without dilution",
      link: "https://www.youtube.com/@idea2unicorn"
    },
    {
      title: "Crossing the Chasm in Indian Market",
      presenter: "Amardeep Bajpai",
      duration: "32 mins", 
      description: "Strategies for moving from early adopters to mainstream market in India",
      link: "https://www.youtube.com/@idea2unicorn"
    },
    {
      title: "Digital Transformation for Startups",
      presenter: "Dinesh Makhija",
      duration: "38 mins",
      description: "Leveraging AI and digital technologies to accelerate startup growth",
      link: "https://www.youtube.com/@idea2unicorn"
    },
    {
      title: "Franchising Mastery Fundamentals",
      presenter: "Sam Kundu",
      duration: "41 mins",
      description: "Building scalable franchise models for business expansion",
      link: "https://www.youtube.com/@idea2unicorn"
    }
  ];

  const recordedWorkshops = [
    {
      title: "Business Visioning Masterclass",
      facilitator: "Sandipp Vijj",
      date: "December 2024",
      duration: "3 hours",
      description: "Complete recording of our flagship Business Visioning workshop with 5-step methodology",
      link: "https://www.youtube.com/@idea2unicorn"
    },
    {
      title: "Conceptualize Your Unicorn - Session 1",
      facilitator: "Sandipp Vijj", 
      date: "November 2024",
      duration: "2.5 hours",
      description: "First session of the 10-book methodology framework for unicorn creation",
      link: "https://www.youtube.com/@idea2unicorn"
    },
    {
      title: "Leadership Excellence Workshop",
      facilitator: "Sandipp Vijj",
      date: "October 2024", 
      duration: "4 hours",
      description: "Comprehensive leadership development session for startup founders",
      link: "https://www.youtube.com/@idea2unicorn"
    },
    {
      title: "FinTech Innovation Deep Dive",
      facilitator: "Dr. Atul Mehta",
      date: "September 2024",
      duration: "3.5 hours", 
      description: "Exploring fintech opportunities and regulatory landscape in India",
      link: "https://www.youtube.com/@idea2unicorn"
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
                <div key={index} className="bg-card border border-border rounded-lg overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300">
                  <div className="relative h-64 bg-gradient-to-br from-primary/20 to-primary/10">
                    <img 
                      src={book.image} 
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                    <Button asChild variant="ghost" size="sm" className="absolute top-2 right-2 bg-background/80 hover:bg-background text-primary hover:text-primary/80">
                      <a href={book.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 min-h-[3.5rem]">
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
                  
                  <Button variant="outline" className="w-full" asChild>
                    <a href={video.link} target="_blank" rel="noopener noreferrer">
                      <Play className="h-4 w-4 mr-2" />
                      Watch Video
                    </a>
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
                  
                  <Button variant="outline" className="w-full" asChild>
                    <a href={workshop.link} target="_blank" rel="noopener noreferrer">
                      <Video className="h-4 w-4 mr-2" />
                      Watch Recording
                    </a>
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
              id="resources-newsletter-email"
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button 
              className="btn-primary"
              onClick={() => {
                const emailInput = document.getElementById('resources-newsletter-email') as HTMLInputElement;
                const email = emailInput?.value;
                if (!email) {
                  alert("Please enter your email address");
                  return;
                }
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                  alert("Please enter a valid email address");
                  return;
                }
                alert("Thank you for subscribing to our resources newsletter!");
                emailInput.value = '';
              }}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resources;