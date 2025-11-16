import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "intern 3",
      title: " Web Developer Intern",
      company: "GS-HATCH-UI/UX",
      period: "Aug 2025- present",
      description: [
        'UI/UX and Web Developer Intern at S-HATCH, where I design and build responsive, user-centered web interfaces. I collaborate with the team to create intuitive UI/UX designs and implement them using Figma, React, and modern web technologies.'

      ],
    },
    {
      type: "intern 2",
      title: "Design Intern",
      company: "GrowAthlete",
      period: "Aug 2025- present",
      description: [
        'Design Intern at GrowAthlete, a sports startup, where I created user-centered UI/UX designs and visual assets for both web and mobile platforms. Collaborated closely with cross-functional teams to maintain brand consistency and enhance overall user experience using Figma and Adobe Creative Suite.'
      ],
    },
    {
      type: "intern 1",
      title: "Web Developer",
      company: "Plasmid",
      period: "Jan-Mar 2025",
      description: [
        'Completed a 2-month web development internship at Plasmid, where I developed and styled responsive user interfaces using HTML, CSS, JavaScript, and React.js—focusing on usability, performance, and clean component-based architecture.',
        
      ],
    },
    {
      type: "education",
      title: "B.tech",
      company: "Institue of Aeronautical Engineering",
      period: "2023 - Present",
      description: [
        "Pusring 3-2 right now with the current CGPA of 8.98",
        "Specilizing in Computer Scince Engineering",
        "Active member of coding club and participated in hackathons",
      ],
    },
    {
      type: "intermediate",
      title: "Intermediate",
      company: "Sri Chaitanya Junior College",
      period: "2021 - 2023",
      description: [
        "Percentage of 98.1",
      ],
    },
     {
      type: "schooling",
      title: "Secoundary School",
      company: "New Little Flowers(EM) high school",
      period: "2021",
      description: [
        "CGPA of 10.0",
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
