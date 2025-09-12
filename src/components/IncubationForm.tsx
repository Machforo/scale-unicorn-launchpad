import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface IncubationFormProps {
  onClose: () => void;
}

const IncubationForm = ({ onClose }: IncubationFormProps) => {
  const [formData, setFormData] = useState({
    founderName: "",
    email: "",
    phone: "",
    companyName: "",
    website: "",
    industry: "",
    stage: "",
    teamSize: "",
    fundingRaised: "",
    revenue: "",
    businessModel: "",
    problem: "",
    solution: "",
    marketSize: "",
    competition: "",
    traction: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for applying for incubation. Our team will review your application and get back to you within 5-7 business days.",
    });
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-semibold text-foreground">Apply for Incubation</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="founderName">Founder Name *</Label>
              <Input
                id="founderName"
                value={formData.founderName}
                onChange={(e) => handleInputChange("founderName", e.target.value)}
                placeholder="Primary founder name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name *</Label>
              <Input
                id="companyName"
                value={formData.companyName}
                onChange={(e) => handleInputChange("companyName", e.target.value)}
                placeholder="Your startup name"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">Website/Demo URL</Label>
            <Input
              id="website"
              type="url"
              value={formData.website}
              onChange={(e) => handleInputChange("website", e.target.value)}
              placeholder="https://yourwebsite.com"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="industry">Industry *</Label>
              <Select onValueChange={(value) => handleInputChange("industry", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fintech">FinTech</SelectItem>
                  <SelectItem value="healthtech">HealthTech</SelectItem>
                  <SelectItem value="edtech">EdTech</SelectItem>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="saas">SaaS</SelectItem>
                  <SelectItem value="ai">AI/ML</SelectItem>
                  <SelectItem value="mobility">Mobility</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="stage">Business Stage *</Label>
              <Select onValueChange={(value) => handleInputChange("stage", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select stage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="idea">Idea Stage</SelectItem>
                  <SelectItem value="prototype">Prototype/MVP</SelectItem>
                  <SelectItem value="early">Early Revenue</SelectItem>
                  <SelectItem value="growth">Growth Stage</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="teamSize">Team Size</Label>
              <Select onValueChange={(value) => handleInputChange("teamSize", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Team size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 (Solo founder)</SelectItem>
                  <SelectItem value="2-5">2-5 members</SelectItem>
                  <SelectItem value="6-10">6-10 members</SelectItem>
                  <SelectItem value="10+">10+ members</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fundingRaised">Funding Raised</Label>
              <Select onValueChange={(value) => handleInputChange("fundingRaised", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Funding status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No funding</SelectItem>
                  <SelectItem value="bootstrapped">Bootstrapped</SelectItem>
                  <SelectItem value="pre-seed">Pre-seed</SelectItem>
                  <SelectItem value="seed">Seed</SelectItem>
                  <SelectItem value="series-a">Series A+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="revenue">Monthly Revenue</Label>
              <Select onValueChange={(value) => handleInputChange("revenue", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Revenue range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">No revenue</SelectItem>
                  <SelectItem value="1-10k">₹1K - ₹10K</SelectItem>
                  <SelectItem value="10k-1l">₹10K - ₹1L</SelectItem>
                  <SelectItem value="1l-10l">₹1L - ₹10L</SelectItem>
                  <SelectItem value="10l+">₹10L+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="problem">Problem Statement *</Label>
            <Textarea
              id="problem"
              value={formData.problem}
              onChange={(e) => handleInputChange("problem", e.target.value)}
              placeholder="What problem are you solving?"
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="solution">Solution *</Label>
            <Textarea
              id="solution"
              value={formData.solution}
              onChange={(e) => handleInputChange("solution", e.target.value)}
              placeholder="How does your product/service solve this problem?"
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="traction">Traction & Key Metrics</Label>
            <Textarea
              id="traction"
              value={formData.traction}
              onChange={(e) => handleInputChange("traction", e.target.value)}
              placeholder="Users, revenue, partnerships, key achievements"
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Submit Application
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IncubationForm;