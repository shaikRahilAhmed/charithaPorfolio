import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Software Developer",
      company: "Company Name",
      period: "2023 - Present",
      description: [
        "Developed and maintained web applications using React and TypeScript",
        "Collaborated with cross-functional teams to deliver high-quality products",
        "Implemented responsive designs and optimized application performance",
      ],
    },
    {
      type: "work",
      title: "Junior Developer",
      company: "Previous Company",
      period: "2021 - 2023",
      description: [
        "Built reusable component libraries and front-end architecture",
        "Worked closely with designers to implement pixel-perfect interfaces",
        "Participated in code reviews and mentored junior developers",
      ],
    },
    {
      type: "education",
      title: "Bachelor of Science in Computer Science",
      company: "University Name",
      period: "2017 - 2021",
      description: [
        "Graduated with honors",
        "Relevant coursework: Data Structures, Algorithms, Web Development",
        "Active member of coding club and participated in hackathons",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Experience & Education
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-border last:pb-0 group hover:border-accent transition-colors duration-300"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-background group-hover:scale-125 transition-transform duration-300"></div>

                <div className="flex items-start gap-4 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    {exp.type === "work" ? (
                      <Briefcase className="w-5 h-5 text-accent" />
                    ) : (
                      <GraduationCap className="w-5 h-5 text-accent" />
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-muted-foreground">
                      <span className="font-medium">{exp.company}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 ml-14">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-start">
                      <span className="text-accent mr-2 mt-1.5">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
