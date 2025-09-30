import { Calendar, Download, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Events = () => {
  const events = [
    {
      title: "CapTech 2025 - Trade Delegation to Sydney, Australia",
      date: "November 11-16, 2025",
      location: "Sydney, Australia",
      description: "A Special trade delegation designed to foster stronger ties, facilitate networking opportunities, and explore new avenues for trade and investment between India and Australia.",
      highlights: [
        "50+ World Class Speakers",
        "Business Match Making",
        "Strategic Partnerships & Joint Ventures",
        "Investment Opportunities",
        "Global Summit at Hyatt Regency, Sydney",
        "Exclusive Networking Events"
      ],
      pdfUrl: "/assets/Australia_Delegation_CAPTECH2025.pdf",
      pdfName: "CapTech 2025 Australia Delegation Brochure"
    },
    {
      title: "Idea2Unicorn Business Resources",
      description: "Comprehensive guide to our services, workshops, and business transformation programs. Download to learn more about how we help businesses scale and achieve unicorn status.",
      highlights: [
        "Business Strategy Consulting",
        "Funding & Investment Guidance",
        "Leadership & Management Training",
        "Digital Transformation Services",
        "Patent & IP Services",
        "Incubation Programs"
      ],
      pdfUrl: "/assets/sample-brochure.pdf",
      pdfName: "Idea2Unicorn Services Brochure"
    }
  ];

  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 lg:px-6 py-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Events & Resources
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay updated with our upcoming events, trade delegations, and download comprehensive resources to accelerate your business growth.
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {events.map((event, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-elegant transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2 text-primary">
                      <Calendar className="h-5 w-5" />
                      {event.date && <span className="text-sm font-medium">{event.date}</span>}
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-2">{event.title}</CardTitle>
                  {event.location && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Globe className="h-4 w-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  )}
                  <CardDescription className="mt-4 text-base">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  {/* Highlights */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      Key Highlights
                    </h3>
                    <ul className="space-y-2">
                      {event.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Download Button */}
                  <Button
                    onClick={() => handleDownload(event.pdfUrl, event.pdfName)}
                    className="w-full btn-primary group"
                  >
                    <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                    Download PDF Brochure
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="border-border bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Need More Information?</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  For inquiries about upcoming events, partnerships, or to discuss how we can help your business grow, reach out to our team.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button 
                    onClick={() => window.location.href = '/#contact'} 
                    className="btn-primary"
                  >
                    Contact Us
                  </Button>
                  <Button 
                    onClick={() => window.location.href = '/workshops'} 
                    variant="outline"
                    className="btn-secondary"
                  >
                    View All Workshops
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
