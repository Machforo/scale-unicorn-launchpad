import { Award } from "lucide-react";

const SandippMethodology = () => {
  return (
    <section className="py-20 bg-muted/20" id="methodology">
      <div className="container mx-auto px-6">
        {/* Sandipp's Methodology */}
        <div>
          <h2 className="text-4xl font-bold text-foreground mb-6 text-center">
            Sandipp Vijj's Methodology
          </h2>
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground mb-4">
              <strong>LinkedIn:</strong> <a href="http://linkedin.com/in/sandeepvij" className="text-primary hover:underline">linkedin.com/in/sandeepvij</a>
            </p>
            <p className="text-muted-foreground mb-6">
              10 proven business methodologies - implemented, not theory
            </p>
          </div>

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

          <div className="text-center mt-8">
            <div className="bg-card border border-border rounded-lg p-6 shadow-card max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold text-foreground">About Sandipp Vijj</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Mentor, thought leader, and visionary — deploying 10 proven business methodologies to help entrepreneurs transform ideas into unicorns. IIM-A MBA with extensive experience in scaling businesses and building successful ventures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SandippMethodology;