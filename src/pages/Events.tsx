import { Calendar, Download, Users, Globe, Clock, Target, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Events = () => {
  const events = [
    {
      title: "Investor Conference & Business Visioning Workshop",
      date: "November 1-2, 2025",
      location: "STPI Mohali, Chandigarh",
      time: "10:00 AM - 05:00 PM",
      description: "A comprehensive two-day event combining investor networking with transformative workshops. Join us for the Transform 14.0 Investor Conference and Business Visioning Workshops designed to help entrepreneurs build success mindset, align goals, and grow sustainably.",
      highlights: [
        "Dream Life Workshop - Understanding psychology of success",
        "Growth Without Diluting Equity in 24 Months",
        "Crossing the Chasm Strategy",
        "Finance for Non-Finance Executives",
        "Investor Pitch Sessions & Networking",
        "Expert Speakers: Sandipp Vijj, Sam Kundu, CA Sahil Makkar"
      ],
      workshops: [
        {
          day: "Day 1",
          sessions: [
            {
              title: "Business Visioning Workshop",
              speaker: "Sandipp Vijj",
              topics: [
                "Purpose of life of entrepreneurs",
                "Purpose of enterprise",
                "9 pillars of Success",
                "The wheel of life",
                "5 step process: Idea→Planning→MVP1→Launch→Global Launch",
                "Law of attraction and visualization techniques",
                "Pathway to achieving unicorn status"
              ]
            },
            {
              title: "Growth Without Diluting Equity in 24 Months",
              speaker: "Sam Kundu",
              topics: [
                "Non-dilutive funding options",
                "Smart scaling and reinvestment strategies",
                "Revenue maximization techniques",
                "Leveraging partnerships and collaborations"
              ]
            }
          ]
        },
        {
          day: "Day 2",
          sessions: [
            {
              title: "Crossing the Chasm Strategy",
              speaker: "Sandipp Vijj",
              topics: [
                "Innovation diffusion curve",
                "Identifying the early majority",
                "Product-market fit and adoption barriers",
                "Strategies for sustainable scaling"
              ]
            },
            {
              title: "Finance for Non-Finance Executives",
              speaker: "CA Sahil Makkar",
              topics: [
                "Understanding balance sheets, P&L, and cash flow",
                "Key performance indicators and ratios",
                "Budgeting and cost management",
                "Financial planning for business growth"
              ]
            }
          ]
        }
      ],
      pdfs: [
        {
          url: "/assets/Emerging_Workshop_Curriculum.pdf",
          name: "Workshop Curriculum & Details",
          description: "Complete workshop agenda and speaker profiles"
        },
        {
          url: "/assets/Transform_14_Proposal.pdf",
          name: "Transform 14.0 Investor Conference",
          description: "Punjab Angels Network investment opportunity"
        }
      ]
    },
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
      pdfs: [
        {
          url: "/assets/Australia_Delegation_CAPTECH2025.pdf",
          name: "CapTech 2025 Australia Delegation Brochure",
          description: "Complete delegation details and registration"
        }
      ]
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
      pdfs: [
        {
          url: "/assets/sample-brochure.pdf",
          name: "Idea2Unicorn Services Brochure",
          description: "Our complete service offerings"
        },
        {
          url: "/assets/Idea2Unicorn_Presentation.pdf",
          name: "Idea2Unicorn Overview Presentation",
          description: "Company overview, team, and proprietary workshops"
        }
      ]
    }
  ];

  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

          {/* Mission & Vision Section */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
            <Card className="border-border bg-gradient-to-br from-primary/10 to-primary/5">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Target className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To solve every problem of your startup holistically — from vision to systems, from sales to funding — so you can systematically design your unicorn with structured mentorship, proven frameworks, and global networks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-gradient-to-br from-primary/10 to-primary/5">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Eye className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Transform 1 billion lives, 1 million businesses, and create 100 unicorns with $1B investment, adding $5T to India's GDP through our #CrossingtheChasm framework.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Media Section */}
          <div className="mb-16 max-w-6xl mx-auto">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-3xl text-center">Media Coverage</CardTitle>
                <CardDescription className="text-center text-base mt-2">
                  Featured in leading business publications and platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="p-4">
                    <div className="text-4xl font-bold text-primary mb-2">6+</div>
                    <p className="text-muted-foreground">Media Features</p>
                  </div>
                  <div className="p-4">
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <p className="text-muted-foreground">Speaking Events</p>
                  </div>
                  <div className="p-4">
                    <div className="text-4xl font-bold text-primary mb-2">100+</div>
                    <p className="text-muted-foreground">Workshops Conducted</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Events Section */}
          <div className="space-y-8 max-w-6xl mx-auto">
            {events.map((event, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-elegant transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-muted-foreground">
                    {event.date && (
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{event.date}</span>
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-primary" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    )}
                    {'time' in event && (
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-3xl mb-3">{event.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Highlights */}
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-3 flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Key Highlights
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {event.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Workshop Details (if available) */}
                  {'workshops' in event && event.workshops && (
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-4">Workshop Details</h3>
                      <Accordion type="single" collapsible className="w-full">
                        {event.workshops.map((workshop, wIdx) => (
                          <AccordionItem key={wIdx} value={`workshop-${wIdx}`}>
                            <AccordionTrigger className="text-base font-semibold">
                              {workshop.day}
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-4 pt-2">
                                {workshop.sessions.map((session, sIdx) => (
                                  <div key={sIdx} className="border-l-2 border-primary pl-4 py-2">
                                    <h4 className="font-semibold text-foreground mb-1">{session.title}</h4>
                                    <p className="text-sm text-primary mb-2">Speaker: {session.speaker}</p>
                                    <ul className="space-y-1">
                                      {session.topics.map((topic, tIdx) => (
                                        <li key={tIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                          <span className="text-primary mt-1">→</span>
                                          <span>{topic}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  )}

                  {/* Download Buttons */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground text-lg">Download Resources</h3>
                    <div className="grid gap-3">
                      {event.pdfs.map((pdf, pIdx) => (
                        <Button
                          key={pIdx}
                          onClick={() => handleDownload(pdf.url, pdf.name)}
                          variant="outline"
                          className="w-full justify-start group hover:bg-primary/10"
                        >
                          <Download className="h-4 w-4 mr-3 text-primary group-hover:animate-bounce" />
                          <div className="text-left flex-1">
                            <div className="font-semibold">{pdf.name}</div>
                            <div className="text-xs text-muted-foreground">{pdf.description}</div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </div>
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