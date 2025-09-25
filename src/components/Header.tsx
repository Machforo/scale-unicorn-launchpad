import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Link, useNavigate, useLocation } from "react-router-dom";
import unicornLogo from "@/assets/unicorn-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "/services" },
    { name: "Domains", href: "/domains" },
    { name: "Partner Us", href: "/partner-us" },
    { name: "News & Media", href: "/news-media" },
    { name: "Plans & Pricing", href: "/pricing" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const section = href.slice(1);
      navigate("/", { state: { scrollTo: section } });
    } else {
      navigate(href);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src={unicornLogo} alt="Idea2Unicorn" className="h-8 w-8 object-contain" />
            <span className="text-2xl font-bold text-foreground">Idea2Unicorn</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant={location.pathname === "/for-investors" ? "default" : "outline"}
              onClick={() => navigate("/for-investors")}
              className={location.pathname === "/for-investors" ? "btn-primary" : "btn-secondary"}
            >
              For Investors
            </Button>
            <Button 
              variant={location.pathname === "/for-startups" ? "default" : "outline"}
              onClick={() => navigate("/for-startups")}
              className={location.pathname === "/for-startups" ? "btn-primary" : "btn-secondary"}
            >
              For Startups
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium text-left"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                variant={location.pathname === "/for-investors" ? "default" : "outline"}
                className={`w-full mt-4 ${location.pathname === "/for-investors" ? "btn-primary" : "btn-secondary"}`}
                onClick={() => navigate("/for-investors")}
              >
                For Investors
              </Button>
              <Button 
                variant={location.pathname === "/for-startups" ? "default" : "outline"}
                className={`w-full ${location.pathname === "/for-startups" ? "btn-primary" : "btn-secondary"}`}
                onClick={() => navigate("/for-startups")}
              >
                For Startups
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;