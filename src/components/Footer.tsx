import { Sparkles, Mail, MessageCircle, MapPin, Twitter, Linkedin, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import ganeshaSmal from "@/assets/ganesha-small.jpg";
import lotusDeitySmall from "@/assets/lotus-deity-small.jpg";
import decorativeOrnamentSmall from "@/assets/decorative-ornament-small.jpg";
import traditionalDeitySmall from "@/assets/traditional-deity-small.jpg";

const Footer = () => {
  const { toast } = useToast();

  const handleSubscribe = () => {
    const emailInput = document.getElementById('newsletter-email') as HTMLInputElement;
    const email = emailInput?.value;
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Error", 
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would typically send the email to your backend
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter!",
    });
    
    emailInput.value = '';
  };
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Workshops", href: "/workshops" },
    { name: "Growth Strategies", href: "/growth-strategies" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/#contact" },
  ];

  const workshops = [
    { name: "Dream Life Workshop", href: "/workshops/business-visioning" },
    { name: "Crossing the Chasm", href: "/workshops/crossing-the-chasm" },
    { name: "Smart Growth Strategy", href: "/workshops/smart-growth" },
    { name: "Real Estate Growth", href: "/workshops/real-estate-strategy" },
    { name: "Unicorn Strategy", href: "/workshops/conceptualize-unicorn" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-8 lg:gap-x-10 xl:gap-x-12 justify-items-start">
          {/* Company Info */}
          <div className="flex flex-col space-y-4 w-full max-w-[280px]">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">Idea2Unicorn</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed text-sm">
              India's premier startup growth accelerator helping entrepreneurs scale with 
              smart growth strategies without diluting equity through proprietary methodologies and expert guidance.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/17343557828" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp +1 734-355-7828" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/dream-life-creator-in-wellness/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4 w-full">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Workshops */}
          <div className="flex flex-col space-y-4 w-full">
            <h3 className="text-lg font-semibold">Workshops</h3>
            <nav className="flex flex-col space-y-3">
              {workshops.map((workshop, index) => (
                <Link
                  key={index}
                  to={workshop.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  {workshop.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-4 w-full">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="flex flex-col space-y-3">
              <a href="mailto:Sandipp@idea2unicorn.ai" className="flex items-center space-x-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm break-all">Sandipp@idea2unicorn.ai</span>
              </a>
              <a href="https://wa.me/17343557828" className="flex items-center space-x-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <MessageCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm">+1 (734) 355-7828</span>
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=9809+%23203+Walnut+st+Dallas+TX+75243+USA" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm">9809, #203 Walnut st, Dallas, TX 75243, USA</span>
              </a>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col space-y-3 mt-2">
              <h4 className="font-medium text-sm">Stay Updated</h4>
              <div className="flex space-x-2">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 px-3 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-accent text-sm"
                />
                <button 
                  onClick={handleSubscribe}
                  className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors text-sm font-medium whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          {/* Decorative spiritual images */}
          <div className="flex items-center justify-center space-x-6 mb-6 opacity-60">
            <img src={ganeshaSmal} alt="Ganesha" className="w-8 h-8 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
            <img src={lotusDeitySmall} alt="Lotus Deity" className="w-8 h-8 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
            <img src={decorativeOrnamentSmall} alt="Decorative Ornament" className="w-8 h-8 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
            <img src={traditionalDeitySmall} alt="Traditional Deity" className="w-8 h-8 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/60 text-sm">
              © 2024 Idea2Unicorn. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;