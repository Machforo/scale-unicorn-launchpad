import { FileText, BookOpen, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const Resources = () => {
  const resourceCategories = [
    {
      icon: FileText,
      title: "Guides",
      description: "Step-by-step guides to navigate your startup journey effectively.",
      resources: [
        "Startup Foundation Guide",
        "Market Research Handbook", 
        "Product-Market Fit Strategy",
        "Customer Acquisition Playbook"
      ]
    },
    {
      icon: BookOpen,
      title: "Handbooks",
      description: "Comprehensive handbooks covering essential startup knowledge.",
      resources: [
        "Entrepreneur's Handbook",
        "Scaling Without Dilution Guide",
        "Franchise Model Blueprint",
        "Channel Partnership Manual"
      ]
    },
    {
      icon: Target,
      title: "Methodologies",
      description: "Proven methodologies developed through years of startup acceleration.",
      resources: [
        "Smart Growth Framework",
        "Zero Dilution Strategy",
        "SKCKJ Movement Model",
        "Unicorn Building Blueprint"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-12 pt-24">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Resources
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Access our comprehensive library of guides, handbooks, and proven methodologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resourceCategories.map((category, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-8 shadow-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {category.description}
              </p>
              
              <ul className="space-y-3">
                {category.resources.map((resource, idx) => (
                  <li key={idx} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                    <span className="text-sm font-medium text-foreground">{resource}</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      Download
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="btn-primary">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;