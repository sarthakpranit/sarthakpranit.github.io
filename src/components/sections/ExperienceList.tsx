
interface Experience {
  company: string;
  role: string;
  period: string;
}

interface ExperienceListProps {
  experiences: Experience[];
}

const ExperienceList = ({ experiences }: ExperienceListProps) => {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <div key={index} className="flex justify-between items-start">
          <div>
            <h3 className="text-xl text-foreground font-medium">{exp.company}</h3>
          </div>
          <div className="text-right">
            <p className="text-foreground">{exp.role}</p>
            <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceList;
