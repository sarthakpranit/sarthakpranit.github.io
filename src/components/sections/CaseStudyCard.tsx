
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudyCardProps {
  id: number;
  title: string;
  subtitle: string;
  roles: string;
  link: string;
}

const CaseStudyCard = ({ title, subtitle, roles, link }: CaseStudyCardProps) => {
  return (
    <Link
      to={link}
      className="block group hover:bg-muted/50 -mx-4 px-4 py-4 rounded-lg transition-colors"
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-xl text-foreground font-medium mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-2">{subtitle}</p>
          <p className="text-sm text-muted-foreground">{roles}</p>
        </div>
        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors ml-4 mt-1" />
      </div>
    </Link>
  );
};

export default CaseStudyCard;
