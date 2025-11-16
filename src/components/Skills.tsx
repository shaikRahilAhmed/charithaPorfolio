import { Code2, Database, Palette, Rocket, Terminal, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    
    {
      icon: Database,
      title: "Database Management",
      description: "Designing and optimizing data storage solutions",
      skills: [ "SQL"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Crafting beautiful and intuitive user experiences",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    },
    {
      icon: Zap,
      title: "DevOps & Tools",
      description: "Streamlining development and deployment processes",
      skills: ["Git", "Docker", "CI/CD", "AWS"],
    },
    {
      icon: Rocket,
      title: "Soft Skills",
      description: "Collaborating effectively in team environments",
      skills: ["Problem Solving", "Communication", "Team Leadership", "Agile"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Skills & Expertise
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="border-border hover:border-accent/50 transition-all duration-300 hover:shadow-medium group"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl text-foreground">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full border border-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
