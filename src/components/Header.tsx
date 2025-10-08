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
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Domains", href: "/domains" },
    { name: "Events", href: "/events" },
    { name: "News & Media", href: "/news-media" },
    { name: "Plans & Pricing", href: "/pricing" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "#contact" },
  ];

  const sectors = [
    { name: "FnB", href: "/sectors/fnb" },
    { name: "Pharmaceuticals", href: "/sectors/pharmaceuticals" },
    { name: "Education", href: "/sectors/education" },
    { name: "SaaS", href: "/sectors/saas" },
    { name: "IT Services", href: "/sectors/it-services" },
    { name: "Renewable Energy", href: "/sectors/renewable-energy" },
  ];

  const personas = [
    { name: "Startups", href: "/for-startups" },
    { name: "Partners", href: "/partner-us" },
    { name: "Investors", href: "/for-investors" },
    { name: "Workshop Participants", href: "/workshops" },
    { name: "Students", href: "/resources" },
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
      <nav className="container mx-auto px-4 lg:px-6 py-3">
        <div className="flex items-center justify-between gap-6">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
            <img src={unicornLogo} alt="Idea2Unicorn" className="h-10 w-10 object-contain" />
            <span className="text-xl lg:text-2xl font-bold text-foreground whitespace-nowrap">Idea2Unicorn</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 flex-1 justify-center">
            {navigation.map((item) => {
              const isActive = item.href.startsWith('#') 
                ? location.pathname === '/' 
                : location.pathname === item.href;
              
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                    isActive 
                      ? 'text-primary font-semibold border-b-2 border-primary' 
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* Dropdowns & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Desktop Sectors Dropdown */}
            <div className="hidden md:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="btn-secondary">
                    Sectors
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 bg-popover border border-border shadow-elegant">
                  {sectors.map((sector) => (
                    <DropdownMenuItem
                      key={sector.name}
                      onClick={() => navigate(sector.href)}
                      className="cursor-pointer text-popover-foreground hover:bg-muted"
                    >
                      {sector.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Desktop Personas Dropdown */}
            <div className="hidden md:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="btn-secondary">
                    Explore for You
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 bg-popover border border-border shadow-elegant">
                  {personas.map((persona) => (
                    <DropdownMenuItem
                      key={persona.name}
                      onClick={() => navigate(persona.href)}
                      className="cursor-pointer text-popover-foreground hover:bg-muted"
                    >
                      {persona.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-foreground" />
              ) : (
                <Menu className="h-5 w-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => {
                const isActive = item.href.startsWith('#') 
                  ? location.pathname === '/' 
                  : location.pathname === item.href;
                
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-sm font-medium transition-colors duration-200 text-left py-1 ${
                      isActive 
                        ? 'text-primary font-semibold' 
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
              
              {/* Mobile Sectors Section */}
              <div className="mt-4 pt-3 border-t border-border">
                <h3 className="text-sm font-semibold text-foreground mb-2">Sectors</h3>
                <div className="flex flex-col space-y-2">
                  {sectors.map((sector) => (
                    <button
                      key={sector.name}
                      onClick={() => {
                        navigate(sector.href);
                        setIsMenuOpen(false);
                      }}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 text-left py-1"
                    >
                      {sector.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Personas Section */}
              <div className="mt-4 pt-3 border-t border-border">
                <h3 className="text-sm font-semibold text-foreground mb-2">Explore for You</h3>
                <div className="flex flex-col space-y-2">
                  {personas.map((persona) => (
                    <button
                      key={persona.name}
                      onClick={() => {
                        navigate(persona.href);
                        setIsMenuOpen(false);
                      }}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 text-left py-1"
                    >
                      {persona.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;