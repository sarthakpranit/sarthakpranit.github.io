
const ExperienceSection = () => {
  const experiences = [
    {
      company: "Company One",
      role: "Product Designer",
      period: "2022-2024"
    },
    {
      company: "Company Two",
      role: "Product Designer",
      period: "2020-2022"
    },
    {
      company: "Company Three",
      role: "UX Design Intern",
      period: "2019"
    }
  ];

  return (
    <div className="space-y-8 mb-20">
      <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
        Previously
      </h2>
      
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
    </div>
  );
};

export default ExperienceSection;
