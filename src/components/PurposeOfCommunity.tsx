import { CheckCircle } from "lucide-react";

const PurposeOfCommunity = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Purpose of Our Community
          </h2>
        </div>
        
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-6 text-center italic">
            "You were born with wings — learn to use them and fly 🦋"
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-foreground mb-6 text-center font-medium">
              You were born with the Potential:
            </p>
            <ul className="space-y-4 text-muted-foreground">
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
  );
};

export default PurposeOfCommunity;