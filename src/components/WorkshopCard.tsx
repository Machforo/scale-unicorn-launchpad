import { User, Clock, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WorkshopCardProps {
  title: string;
  facilitator: string;
  duration: string;
  description: string;
  outcomes: string[];
  image?: string;
}

const WorkshopCard = ({ title, facilitator, duration, description, outcomes }: WorkshopCardProps) => {
  return (
    <div className="workshop-card group">
      {/* Workshop Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-colors">
            {title}
          </h3>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{facilitator}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>

      {/* Key Outcomes */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center space-x-2 text-sm font-medium text-foreground">
          <Target className="h-4 w-4 text-primary" />
          <span>Key Outcomes</span>
        </div>
        <ul className="space-y-2">
          {outcomes.map((outcome, index) => (
            <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <Button className="w-full btn-secondary group-hover:btn-hero transition-all duration-300">
        Register Now
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

export default WorkshopCard;