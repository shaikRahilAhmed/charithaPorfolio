import profileImage from "@/assets/profile-casual.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Hello! I'm a passionate developer who enjoys creating things that live on the
                internet. My interest in development started back in [year] when I decided to
                try building my first website.
              </p>

              <p className="text-lg text-muted-foreground">
                Fast-forward to today, and I've had the privilege of working on various projects
                ranging from [project types]. My main focus these days is building accessible,
                inclusive products and digital experiences.
              </p>

              <p className="text-lg text-muted-foreground">
                Here are a few technologies I've been working with recently:
              </p>

              <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
                {[
                  "JavaScript (ES6+)",
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Python",
                  "SQL",
                ].map((tech) => (
                  <li key={tech} className="flex items-center">
                    <span className="text-accent mr-2">▹</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative group">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-medium">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <div className="absolute -inset-4 border-2 border-accent rounded-lg -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
