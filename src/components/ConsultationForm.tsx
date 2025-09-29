import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import PaymentModal from "@/components/PaymentModal";
import { supabase } from "@/integrations/supabase/client";


interface ConsultationFormProps {
  onClose: () => void;
}

const ConsultationForm = ({ onClose }: ConsultationFormProps) => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    whatsapp: "",
    company: "",
    stage: "",
    industry: "",
    challenges: "",
    preferredDate: "",
    preferredTime: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      toast({
        title: "Payment Required",
        description: "Please complete payment to confirm your consultation booking.",
      });
      setShowPaymentModal(true);
    } catch (error) {
      console.error('Error opening payment modal:', error);
      toast({
        title: "Error",
        description: "Failed to open payment. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-semibold text-foreground">Schedule a Consultation</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Enter your full name"
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

          <div className="space-y-2">
            <Label htmlFor="phone">Cell Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="Enter your cell number"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn Profile *</Label>
            <Input
              id="linkedin"
              type="url"
              value={formData.linkedin}
              onChange={(e) => handleInputChange("linkedin", e.target.value)}
              placeholder="https://linkedin.com/in/yourprofile"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp Number *</Label>
            <Input
              id="whatsapp"
              type="tel"
              value={formData.whatsapp}
              onChange={(e) => handleInputChange("whatsapp", e.target.value)}
              placeholder="Enter your WhatsApp number"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company/Startup Name</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              placeholder="Enter your company name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="stage">Business Stage</Label>
            <Select onValueChange={(value) => handleInputChange("stage", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your business stage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="idea">Idea Stage</SelectItem>
                <SelectItem value="prototype">Prototype/MVP</SelectItem>
                <SelectItem value="early">Early Stage</SelectItem>
                <SelectItem value="growth">Growth Stage</SelectItem>
                <SelectItem value="scale">Scale Stage</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="industry">Industry</Label>
            <Input
              id="industry"
              value={formData.industry}
              onChange={(e) => handleInputChange("industry", e.target.value)}
              placeholder="e.g., FinTech, HealthTech, EdTech"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="challenges">Key Challenges/Goals *</Label>
            <Textarea
              id="challenges"
              value={formData.challenges}
              onChange={(e) => handleInputChange("challenges", e.target.value)}
              placeholder="Describe your main challenges or what you'd like to achieve"
              rows={3}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="preferredDate">Preferred Date</Label>
              <Input
                id="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={(e) => handleInputChange("preferredDate", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredTime">Preferred Time</Label>
              <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                  <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Schedule Consultation
            </Button>
          </div>
        </form>
      </div>

      <PaymentModal 
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        workshopTitle="Consultation Session"
        servicePriceINR={3000}
        servicePriceUSD={36}
        calendlyUrl="https://calendly.com/sandeep-idea2unicorn/idea2unicorn-consult"
        onPaidAndBook={async () => {
          const { error } = await supabase.from('form_responses').insert({
            form_type: 'consultation',
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            message: formData.challenges,
            additional_data: {
              linkedin: formData.linkedin,
              whatsapp: formData.whatsapp,
              stage: formData.stage,
              industry: formData.industry,
              preferredDate: formData.preferredDate,
              preferredTime: formData.preferredTime
            }
          });
          if (error) {
            toast({ title: "Error", description: "Failed to save your details. Please retry.", variant: "destructive" });
          } else {
            toast({ title: "Payment noted", description: "Proceeding to booking..." });
          }
        }}
      />
    </div>
  );
};

export default ConsultationForm;