import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-background"
    >

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-up animate-fade-in">
            <div className="inline-block px-4 py-2 glass rounded-full text-sm font-medium gradient-text animate-bounce-subtle">
              Available for Opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hello, I'm{" "}
              <span className="gradient-text">Ilef Kristou</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 font-medium">
              Full-Stack Developer | Cloud & AI Enthusiast
            </p>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Building modern, scalable, and intelligent web solutions. 
              Final-year Software Engineering student passionate about creating 
              exceptional digital experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-all group hover:scale-105 hover-glow"
              >
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all hover-glow"
              >
                <Download className="mr-2" size={18} />
                Download CV
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/ilef-kristou"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110 hover-glow"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/ilef-kristou-99374a302"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110 hover-glow"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ilef.kristou@etudiant-fst.utm.tn"
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110 hover-glow"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Photo */}
          <div className="flex justify-center animate-slide-up animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-50 animate-float animate-glow"></div>
              <div className="relative glass rounded-3xl p-2 overflow-hidden hover-lift">
                <img
                  src={profilePhoto}
                  alt="Ilef Kristou"
                  className="w-full max-w-md rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
