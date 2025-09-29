import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Mail, Phone, MessageCircle, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  workshopTitle?: string;
  servicePriceINR?: number;
  servicePriceUSD?: number;
  calendlyUrl?: string;
  onPaidAndBook?: () => void | Promise<void>;
}

const PaymentModal = ({ isOpen, onClose, workshopTitle, servicePriceINR, servicePriceUSD, calendlyUrl, onPaidAndBook }: PaymentModalProps) => {
  const [selectedRegion, setSelectedRegion] = useState<'us' | 'india' | 'international'>('us');
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const { toast } = useToast();

  // Workshop/Service pricing mapping
  const getServicePrice = () => {
    if (servicePriceINR && servicePriceUSD) {
      return currency === 'INR' ? `₹${servicePriceINR.toLocaleString()}` : `$${servicePriceUSD.toLocaleString()}`;
    }
    
    // Default pricing for workshops
    const workshopPricing: { [key: string]: { inr: number, usd: number } } = {
      "Digital Transformation Workshop": { inr: 30000, usd: 360 },
      "Conceptualize Your Unicorn": { inr: 30000, usd: 360 },
      "Franchising Mastery": { inr: 60000, usd: 720 },
      "FinTech Innovation": { inr: 30000, usd: 360 },
      "Funding Mastery": { inr: 30000, usd: 360 },
      "Leadership Excellence": { inr: 30000, usd: 360 },
      "Dream Life Workshop": { inr: 3500, usd: 42 },
      "General Consultation": { inr: 3000, usd: 36 }
    };

    // Get pricing with fallback to General Consultation
    const pricing = workshopPricing[workshopTitle || ""] || workshopPricing["General Consultation"];
    
    if (!pricing) {
      return currency === 'INR' ? '₹3,000' : '$36';
    }
    
    return currency === 'INR' ? `₹${pricing.inr.toLocaleString()}` : `$${pricing.usd.toLocaleString()}`;
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Payment Information
          </DialogTitle>
          {workshopTitle && (
            <div className="text-center">
              <p className="text-muted-foreground mb-2">For: {workshopTitle}</p>
              <div className="flex items-center justify-center gap-4 mb-4">
                <Button
                  variant={currency === 'INR' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCurrency('INR')}
                >
                  INR
                </Button>
                <Button
                  variant={currency === 'USD' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCurrency('USD')}
                >
                  USD
                </Button>
              </div>
              <p className="text-xl font-bold text-primary">
                Price: {getServicePrice()}
              </p>
            </div>
          )}
        </DialogHeader>

        <div className="space-y-6">
          {/* Region Selection */}
          <div className="flex flex-col sm:flex-row gap-2 bg-muted p-2 rounded-lg">
            <Button
              variant={selectedRegion === 'us' ? 'default' : 'ghost'}
              onClick={() => setSelectedRegion('us')}
              className="flex-1"
            >
              US Customers
            </Button>
            <Button
              variant={selectedRegion === 'india' ? 'default' : 'ghost'}
              onClick={() => setSelectedRegion('india')}
              className="flex-1"
            >
              India Customers
            </Button>
            <Button
              variant={selectedRegion === 'international' ? 'default' : 'ghost'}
              onClick={() => setSelectedRegion('international')}
              className="flex-1"
            >
              International
            </Button>
          </div>

          {/* US Customers */}
          {selectedRegion === 'us' && (
            <div className="space-y-4">
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <CreditCard className="mr-2 h-5 w-5 text-primary" />
                  Zelle Payment
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-muted p-3 rounded">
                    <span>Zelle ID:</span>
                    <div className="flex items-center gap-2">
                      <code className="font-mono">7343557828</code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard('7343557828', 'Zelle ID')}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Next Steps:</h4>
                <ol className="list-decimal list-inside space-y-2 text-yellow-700">
                  <li>Send payment via Zelle to the above number</li>
                  <li>Take a screenshot of your payment confirmation</li>
                  <li>Email the screenshot to support@idea2unicorn.ai</li>
                  <li>Include the workshop name in your email</li>
                </ol>
              </div>

              <div className="space-y-2">
                <p className="font-medium">Please provide the following for communication:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Email address</li>
                  <li>LinkedIn profile</li>
                  <li>Cell number</li>
                  <li>WhatsApp number</li>
                </ul>
              </div>
            </div>
          )}

          {/* India Customers */}
          {selectedRegion === 'india' && (
            <div className="space-y-4">
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <CreditCard className="mr-2 h-5 w-5 text-primary" />
                  Bank Transfer Details (India)
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-muted p-3 rounded">
                    <span>Account Name:</span>
                    <div className="flex items-center gap-2">
                      <code className="font-mono text-sm">Idea2Unicorn Solutions</code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard('Idea2Unicorn Solutions', 'Account Name')}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-muted p-3 rounded">
                    <span>Account Number:</span>
                    <div className="flex items-center gap-2">
                      <code className="font-mono">50200073828651</code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard('50200073828651', 'Account Number')}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-muted p-3 rounded">
                    <span>IFSC Code:</span>
                    <div className="flex items-center gap-2">
                      <code className="font-mono">HDFC0000123</code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard('HDFC0000123', 'IFSC Code')}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-muted p-3 rounded">
                    <span>Bank Name:</span>
                    <div className="flex items-center gap-2">
                      <code className="font-mono text-sm">HDFC Bank</code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard('HDFC Bank', 'Bank Name')}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-muted p-3 rounded">
                    <span>UPI ID:</span>
                    <div className="flex items-center gap-2">
                      <code className="font-mono">sandipp@idea2unicorn</code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard('sandipp@idea2unicorn', 'UPI ID')}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">After Payment:</h4>
                <ol className="list-decimal list-inside space-y-2 text-blue-700">
                  <li>Upload screenshot of your deposit</li>
                  <li>Send email confirmation</li>
                  <li>Include workshop details</li>
                </ol>
              </div>

              <div className="space-y-2">
                <p className="font-medium">Please provide the following for communication:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Email address</li>
                  <li>LinkedIn profile</li>
                  <li>Cell number</li>
                  <li>WhatsApp number</li>
                </ul>
              </div>
            </div>
          )}

          {/* International Customers */}
          {selectedRegion === 'international' && (
            <div className="space-y-4">
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <CreditCard className="mr-2 h-5 w-5 text-primary" />
                  Chase Bank Transfer (International)
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-muted p-3 rounded">
                    <span>Account Name:</span>
                    <div className="flex items-center gap-2">
                      <code className="font-mono text-sm">Sandeep K Vij</code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard('Sandeep K Vij', 'Account Name')}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-muted p-3 rounded">
                    <span>Account Number:</span>
                    <div className="flex items-center gap-2">
                      <code className="font-mono">734355782834</code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard('734355782834', 'Account Number')}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-muted p-3 rounded">
                    <span>Routing Number:</span>
                    <div className="flex items-center gap-2">
                      <code className="font-mono">111000025</code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard('111000025', 'Routing Number')}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-muted p-3 rounded">
                    <span>Bank Name:</span>
                    <div className="flex items-center gap-2">
                      <code className="font-mono text-sm">Chase Bank USA</code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard('Chase Bank USA', 'Bank Name')}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-muted p-3 rounded">
                    <span>SWIFT Code:</span>
                    <div className="flex items-center gap-2">
                      <code className="font-mono">CHASUS33</code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard('CHASUS33', 'SWIFT Code')}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Payment Process:</h4>
                <ol className="list-decimal list-inside space-y-2 text-green-700">
                  <li>Initiate international wire transfer</li>
                  <li>Take screenshot of transfer confirmation</li>
                  <li>Email confirmation to support@idea2unicorn.ai</li>
                  <li>Include workshop name and transfer details</li>
                </ol>
              </div>

              <div className="space-y-2">
                <p className="font-medium">Please provide the following for communication:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Email address</li>
                  <li>LinkedIn profile</li>
                  <li>Cell number</li>
                  <li>WhatsApp number</li>
                </ul>
              </div>
            </div>
          )}

          {/* Contact Information */}
          <div className="border-t pt-4">
            <h4 className="font-semibold mb-3">Contact Information:</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-primary" />
                  <span>Email:</span>
                </div>
                <div className="flex items-center gap-2">
                  <code className="text-sm">support@idea2unicorn.ai</code>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard('support@idea2unicorn.ai', 'Email')}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-4">
            <Button onClick={onClose} variant="outline">
              Close
            </Button>
            <Button 
              onClick={async () => {
                try {
                  if (onPaidAndBook) {
                    await onPaidAndBook();
                  }
                  const url = calendlyUrl || "https://calendly.com/sandeep-idea2unicorn/idea2unicorn-consult";
                  window.open(url, "_blank");
                } finally {
                  onClose();
                }
              }}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Paid & Book Slot
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;