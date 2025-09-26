import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Briefcase, Target, TrendingUp, Heart, Mail, MessageCircle, Building } from "lucide-react";

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Careers at <span className="text-primary">Idea2Unicorn</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join us in shaping the future of startups! We welcome passionate individuals to explore opportunities with us and contribute to building unicorns.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <Button 
                  size="lg" 
                  className="btn-primary"
                  onClick={() => window.location.href = 'mailto:careers@idea2unicorn.ai'}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Apply Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.open('https://chat.whatsapp.com/FSTIIBNedzl8ee7VkUtYAz', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Idea2Unicorn?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Be part of India's premier startup growth accelerator and make a real impact in the entrepreneurial ecosystem
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4 p-0">
                  <Building className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-lg font-semibold">Growth Impact</h3>
                  <p className="text-muted-foreground text-sm">
                    Help startups scale without equity dilution through proprietary methodologies
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4 p-0">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-lg font-semibold">Global Expansion</h3>
                  <p className="text-muted-foreground text-sm">
                    Be part of our Dallas Chapter launch and international growth
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4 p-0">
                  <Users className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-lg font-semibold">Expert Network</h3>
                  <p className="text-muted-foreground text-sm">
                    Collaborate with leading Angel Networks and industry experts
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4 p-0">
                  <Heart className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-lg font-semibold">Mission Driven</h3>
                  <p className="text-muted-foreground text-sm">
                    Work with purpose to transform startups into unicorns
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Current Opportunities
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore various roles and find the perfect fit for your skills and passion
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Advisors */}
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center justify-between">
                    <Users className="h-10 w-10 text-primary" />
                    <Badge variant="secondary">Leadership</Badge>
                  </div>
                  <h3 className="text-xl font-semibold">Advisors</h3>
                  <p className="text-muted-foreground">
                    Guide startups with your expertise and experience. Help shape strategic decisions and growth trajectories.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Strategic mentorship</li>
                    <li>• Industry guidance</li>
                    <li>• Network connections</li>
                  </ul>
                  <div className="pt-4">
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.location.href = 'mailto:careers@idea2unicorn.ai?subject=Advisor Position Inquiry'}
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Co-Founders / Consultants */}
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center justify-between">
                    <Briefcase className="h-10 w-10 text-primary" />
                    <Badge variant="outline">Executive</Badge>
                  </div>
                  <h3 className="text-xl font-semibold">Co-Founders / Consultants</h3>
                  <p className="text-muted-foreground">
                    Lead consulting initiatives and manage key relationships with Angel Networks, funds, and professional services.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Angel Network management</li>
                    <li>• Fund access coordination</li>
                    <li>• Legal & financial partnerships</li>
                  </ul>
                  <div className="pt-4">
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.location.href = 'mailto:careers@idea2unicorn.ai?subject=Co-Founder/Consultant Position Inquiry'}
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Domain Experts */}
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center justify-between">
                    <Target className="h-10 w-10 text-primary" />
                    <Badge variant="secondary">Specialist</Badge>
                  </div>
                  <h3 className="text-xl font-semibold">Domain Experts</h3>
                  <p className="text-muted-foreground">
                    Apply your specialized knowledge in AI, Retail, BFSI, Education, Real Estate, Fintech, or Telecom.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Industry-specific guidance</li>
                    <li>• Technical expertise</li>
                    <li>• Market insights</li>
                  </ul>
                  <div className="pt-4">
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.location.href = 'mailto:careers@idea2unicorn.ai?subject=Domain Expert Position Inquiry'}
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Investors */}
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center justify-between">
                    <TrendingUp className="h-10 w-10 text-primary" />
                    <Badge variant="outline">Investment</Badge>
                  </div>
                  <h3 className="text-xl font-semibold">Investors</h3>
                  <p className="text-muted-foreground">
                    Join our investor network to support and scale promising startups in our ecosystem.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Portfolio opportunities</li>
                    <li>• Due diligence support</li>
                    <li>• Growth partnerships</li>
                  </ul>
                  <div className="pt-4">
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.location.href = 'mailto:careers@idea2unicorn.ai?subject=Investor Partnership Inquiry'}
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Partial CxOs */}
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center justify-between">
                    <Briefcase className="h-10 w-10 text-primary" />
                    <Badge variant="outline">Executive</Badge>
                  </div>
                  <h3 className="text-xl font-semibold">Partial CxOs for Startups</h3>
                  <p className="text-muted-foreground">
                    Experienced executive leaders who can provide strategic guidance and leadership to startups.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Executive leadership</li>
                    <li>• Strategic planning</li>
                    <li>• Operational guidance</li>
                  </ul>
                  <div className="pt-4">
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.location.href = 'mailto:careers@idea2unicorn.ai?subject=Partial CxO Position Inquiry'}
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Volunteers */}
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center justify-between">
                    <Heart className="h-10 w-10 text-primary" />
                    <Badge variant="secondary">Community</Badge>
                  </div>
                  <h3 className="text-xl font-semibold">Volunteers</h3>
                  <p className="text-muted-foreground">
                    Passionate individuals who want to contribute to the startup ecosystem and make a difference.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Community building</li>
                    <li>• Event support</li>
                    <li>• Content creation</li>
                  </ul>
                  <div className="pt-4">
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.location.href = 'mailto:careers@idea2unicorn.ai?subject=Volunteer Opportunity Inquiry'}
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Ready to Make an Impact?
                </h2>
                <p className="text-lg text-muted-foreground">
                  If you are ready to make an impact and contribute to building unicorns, we'd love to hear from you.
                </p>
              </div>

              <Card className="p-8">
                <CardContent className="space-y-6 p-0">
                  <div className="text-center">
                    <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Mail className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                    <p className="text-muted-foreground mb-6">
                      Send us your resume and let us know which role interests you most. We'll get back to you within 48 hours.
                    </p>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-6 text-center">
                    <div className="space-y-3">
                      <div className="flex items-center justify-center space-x-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <span className="font-medium">careers@idea2unicorn.ai</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Include your resume, cover letter, and specify the role you're interested in
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                    <Button 
                      size="lg" 
                      className="btn-primary"
                      onClick={() => window.location.href = 'mailto:careers@idea2unicorn.ai?subject=Career Opportunity Inquiry'}
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Send Application
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      onClick={() => window.open('https://chat.whatsapp.com/FSTIIBNedzl8ee7VkUtYAz', '_blank')}
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Join Community
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;