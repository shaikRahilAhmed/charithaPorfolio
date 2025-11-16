import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description:
        "A comprehensive web application built with React and Node.js that helps users manage their daily tasks efficiently.",
      technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Project Two",
      description:
        "An e-commerce platform featuring real-time inventory management and secure payment processing.",
      technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Project Three",
      description:
        "A mobile-responsive social media dashboard with data visualization and analytics features.",
      technologies: ["React", "D3.js", "Express", "Redis"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Project Four",
      description:
        "An AI-powered chatbot application that provides customer support and automates common queries.",
      technologies: ["Python", "OpenAI", "FastAPI", "Docker"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Project Five",
      description:
        "A collaborative project management tool with real-time updates and team communication features.",
      technologies: ["React", "Socket.io", "Node.js", "MySQL"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Project Six",
      description:
        "A portfolio website builder that allows users to create beautiful portfolios without coding.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Netlify"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Featured Projects
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-border hover:border-accent/50 transition-all duration-300 hover:shadow-medium flex flex-col"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-border hover:border-accent hover:bg-accent/10"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
