  import { Button } from "@/components/ui/button";
  import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

  const Hero = () => {
    const scrollToSection = (href: string) => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center bg-gradient-hero relative"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in duration-1000">
            <div className="space-y-4">
              <p className="text-accent font-medium text-lg">Hi, my name is</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground">
                Charitha
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-muted-foreground">
                UI/UX and Web Developer.
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate developer specializing in creating exceptional digital experiences.
              Currently focused on building accessible, human-centered products.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => scrollToSection("#contact")}
              >
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10"
                onClick={() => scrollToSection("#projects")}
              >
                View My Work
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 pt-8">
              <a
                href="https://github.com/PantangiCharitha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/pantangi-charitha-5b43a9292/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:charithapantangi07@example.com"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("#about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-accent transition-colors animate-bounce"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </section>
    );
  };

  export default Hero;
