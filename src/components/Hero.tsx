import { ArrowRight, TrendingUp, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-unicorn.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="hero-title">
                Be A Unicorn
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground leading-relaxed">
                Helping Startups Scale <span className="text-gradient font-bold">15x Without Diluting Equity</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Transform your startup with our proprietary growth methodologies, expert workshops, 
              and proven franchise strategies that scale businesses across India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                Join a Workshop
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-secondary">
                Apply for Incubation
              </Button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-gradient">15x</div>
                <div className="text-sm text-muted-foreground">Growth Rate</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-gradient">500+</div>
                <div className="text-sm text-muted-foreground">Startups Helped</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gradient">93%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-float">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={heroImage}
                alt="Be A Unicorn - Startup Growth Accelerator"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full animate-glow opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full animate-glow opacity-15"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;