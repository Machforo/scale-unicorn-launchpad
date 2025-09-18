import { CheckCircle, Clock, Users, Award, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkshopRegistrationForm from "@/components/WorkshopRegistrationForm";

const ConceptualizeUnicorn = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Conceptualize Your Unicorn
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                "You were born with wings — learn to use them and fly 🦋"
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  4 Sessions
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-primary" />
                  Max 15 participants
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  Weekly sessions
                </div>
              </div>
              <Button 
                onClick={() => setShowRegistrationForm(true)}
                className="btn-primary text-lg px-8 py-3"
              >
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Purpose Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                Purpose of Our Community
              </h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-muted-foreground mb-4 text-center font-medium">
                  You were born with the Potential:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    You were born with goodness and trust
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    You were born with ideals and dreams
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    You were born with greatness
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    You were born with wings
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    You were not meant for crawling, so don't
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    You have wings — learn to use them and fly
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 10 Book Methodology */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              10 Book Methodology Framework
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                "5 Stage, 5 Gate Process",
                "Crossing the Chasm Strategies", 
                "Maxi-Marketing",
                "SAFe - Scaled Agile Framework",
                "6 Sigma",
                "Every Business is a Growth Business",
                "Good to Great",
                "One Word Can Change Your Life",
                "Bhagavad Gita",
                "Blue Ocean Strategy"
              ].map((methodology, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-4 shadow-card hover:shadow-lg transition-shadow">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-primary font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="font-medium text-foreground">{methodology}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workshop Design */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">Workshop Design</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <h4 className="text-xl font-semibold text-foreground">Session 1</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Sandipp explains the Concept of Visualization of the Unicorn
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <h4 className="text-xl font-semibold text-foreground">Session 2</h4>
                  </div>
                  <p className="text-muted-foreground">
                    The participant draws the dream life he/she wants
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <h4 className="text-xl font-semibold text-foreground">Session 3</h4>
                  </div>
                  <p className="text-muted-foreground">
                    The participant explains to Sandipp his Vision
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary font-bold">4</span>
                    </div>
                    <h4 className="text-xl font-semibold text-foreground">Session 4</h4>
                  </div>
                  <p className="text-muted-foreground">
                    We improve the Vision
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-foreground mb-8">About the Instructor</h3>
                <div className="bg-card border border-border rounded-lg p-6 shadow-card mb-6">
                  <h4 className="text-xl font-semibold text-foreground mb-3">Sandipp Vijj</h4>
                  <p className="text-muted-foreground mb-4">
                    <strong>LinkedIn:</strong> <a href="http://linkedin.com/in/sandeepvij" className="text-primary hover:underline">linkedin.com/in/sandeepvij</a>
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Mentor, thought leader, and visionary — deploying 10 proven business methodologies including 
                    5-Stage/5-Gate, Crossing the Chasm, Maxi-Marketing, SAFe, Six Sigma, Good to Great, 
                    Blue Ocean Strategy, and even timeless wisdom from the Bhagavad Gita.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                  <h4 className="text-xl font-semibold text-foreground mb-4">Workshop Benefits</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Award className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Personal mentorship from IIM-A MBA</span>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Access to exclusive founder community</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Structured 4-session transformation process</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-foreground text-center mb-12">Frequently Asked Questions</h3>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <h4 className="text-lg font-semibold text-foreground mb-3">What is the duration of each session?</h4>
                <p className="text-muted-foreground">Each session is approximately 2-3 hours, conducted over 4 weeks with one session per week.</p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <h4 className="text-lg font-semibold text-foreground mb-3">Is this workshop suitable for early-stage entrepreneurs?</h4>
                <p className="text-muted-foreground">Absolutely! The workshop is designed for entrepreneurs at all stages, from idea conceptualization to scaling unicorns.</p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <h4 className="text-lg font-semibold text-foreground mb-3">What materials do I need for the workshop?</h4>
                <p className="text-muted-foreground">We provide all necessary materials including workbooks, templates, and access to our digital resources.</p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <h4 className="text-lg font-semibont text-foreground mb-3">Do you offer follow-up support after the workshop?</h4>
                <p className="text-muted-foreground">Yes, participants get 90 days of follow-up support and access to our exclusive alumni network.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-foreground text-center mb-12">Payment & Registration Process</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Registration</h4>
                <p className="text-muted-foreground">Complete the workshop registration form with your details and preferences.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Payment</h4>
                <p className="text-muted-foreground">Secure online payment through multiple options including UPI, cards, and bank transfer.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Confirmation</h4>
                <p className="text-muted-foreground">Receive confirmation email with workshop schedule, materials, and joining instructions.</p>
              </div>
            </div>

            <div className="text-center">
              <Button 
                onClick={() => setShowRegistrationForm(true)}
                className="btn-primary text-lg px-8 py-3"
              >
                Register for Workshop
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Call Center Response */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="bg-card border border-border rounded-lg p-8 text-center shadow-card max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">Need Assistance?</h3>
              <p className="text-muted-foreground mb-6">
                Our dedicated support team is available to help you with registration, payments, and any workshop-related queries.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Email Support</h4>
                  <p className="text-muted-foreground">sandipp@idea2unicorn.ai</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">WhatsApp Groups</h4>
                  <div className="space-y-2">
                    <a href="https://chat.whatsapp.com/IPUGHnx2IxpKlPpXMT28Dy?mode=ems_copy_t" className="text-primary hover:underline text-sm block">
                      Join Community Group 1
                    </a>
                    <a href="https://chat.whatsapp.com/HCJIIzJ7rLUEtpGLwZe8GB?mode=ems_copy_t" className="text-primary hover:underline text-sm block">
                      Join Community Group 2
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Registration Form Modal */}
      {showRegistrationForm && (
        <WorkshopRegistrationForm
          workshopTitle="Conceptualize Your Unicorn"
          onClose={() => setShowRegistrationForm(false)}
        />
      )}
    </div>
  );
};

export default ConceptualizeUnicorn;