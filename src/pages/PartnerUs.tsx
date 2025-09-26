import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Handshake, Target, Globe, MessageCircle, Mail, Phone } from "lucide-react";

const PartnerUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Partner with <span className="text-primary">Idea2Unicorn</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are excited to announce the launch of our Dallas Chapter (www.idea2unicorn.ai). 
                Our mission is to help startups at the Pre-seed, Seed, and Angel Fund stages by creating a strong global ecosystem.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <Button 
                  size="lg" 
                  className="btn-primary"
                  onClick={() => window.open('https://chat.whatsapp.com/FSTIIBNedzl8ee7VkUtYAz', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Join our WhatsApp Community
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Partnership Opportunities
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We are currently inviting passionate individuals and organizations to join our ecosystem
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Founder Advisors */}
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center justify-between">
                    <Users className="h-10 w-10 text-primary" />
                    <Badge variant="secondary">1% Sweat Equity</Badge>
                  </div>
                  <h3 className="text-xl font-semibold">Founder Advisors</h3>
                  <p className="text-muted-foreground">
                    1% sweat equity of the US arm is available to the Founders, Unicorn creators or CEOs of startups.
                  </p>
                </CardContent>
              </Card>

              {/* Co-Founders */}
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center justify-between">
                    <Handshake className="h-10 w-10 text-primary" />
                    <Badge variant="outline">Leadership Role</Badge>
                  </div>
                  <h3 className="text-xl font-semibold">Co-Founders / Principal Consultants</h3>
                  <p className="text-muted-foreground">
                    Experienced professionals who manage Angel Networks, Access to Funds, Serial Entrepreneurs, Attorneys, CPAs, etc.
                  </p>
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
                    Specialists to guide Investee companies in AI, Retail, BFSI, Education, Real Estate, Fintech, Telecom.
                  </p>
                </CardContent>
              </Card>

              {/* Investors */}
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center justify-between">
                    <Globe className="h-10 w-10 text-primary" />
                    <Badge variant="outline">Investment</Badge>
                  </div>
                  <h3 className="text-xl font-semibold">Investors</h3>
                  <p className="text-muted-foreground">
                    For Investee Startups to support and scale in our growing ecosystem.
                  </p>
                </CardContent>
              </Card>

              {/* Partial CxOs */}
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center justify-between">
                    <Users className="h-10 w-10 text-primary" />
                    <Badge variant="secondary">Executive</Badge>
                  </div>
                  <h3 className="text-xl font-semibold">Partial CxOs</h3>
                  <p className="text-muted-foreground">
                    Partial CxOs for startups who can provide executive leadership and guidance.
                  </p>
                </CardContent>
              </Card>

              {/* Volunteers */}
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center justify-between">
                    <Handshake className="h-10 w-10 text-primary" />
                    <Badge variant="outline">Volunteer</Badge>
                  </div>
                  <h3 className="text-xl font-semibold">Volunteers</h3>
                  <p className="text-muted-foreground">
                    Passionate individuals who want to contribute to the startup ecosystem.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Network Recognition */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Leading Angel Networks in India
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are proud to be part of leading Angel Networks in India, bringing together investors, 
              startups, and industry experts to create a thriving ecosystem.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Partner with Us?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact our Founder & CEO to explore partnership opportunities
              </p>
              
              <div className="space-y-6">
                <Card className="p-8">
                  <CardContent className="space-y-4 p-0">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-semibold">Sandipp Vijj</h3>
                        <p className="text-muted-foreground">Founder & CEO</p>
                        <p className="text-primary font-medium">www.idea2unicorn.ai</p>
                      </div>
                    </div>
                    
                    <div className="pt-6 space-y-3">
                      <div className="flex items-center justify-center space-x-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <span>Sandipp@idea2unicorn.ai</span>
                      </div>
                      <div className="flex items-center justify-center space-x-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <span>+1 (734) 355-7828</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="btn-primary">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => window.open('https://chat.whatsapp.com/FSTIIBNedzl8ee7VkUtYAz', '_blank')}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Join WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PartnerUs;