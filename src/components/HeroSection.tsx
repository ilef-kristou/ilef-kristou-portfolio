import { ArrowRight, Download, Github, Linkedin, Mail, Code, Cloud, Brain, Server } from "lucide-react";
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
              Hi, I'm{" "}
              <span className="gradient-text">Ilef Kristou</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white font-medium">
  <span className="font-bold">Full-Stack Developer</span> <span className="text-white">|</span> <span className="font-bold">AI & Cloud Innovator</span>
</p>


            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Final-year <strong>software engineering</strong> student, developing <strong>full-stack web applications</strong> using <strong>modern technologies</strong>, from <strong>concept to deployment</strong>, building <strong>reliable</strong> and <strong>high-performing solutions</strong> with <strong>cloud deployment experience</strong> and a solid foundation in <strong>artificial intelligence</strong>.
</p>


            

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={() => scrollToSection("experience")}
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-all group hover:scale-105 hover-glow shadow-lg"
              >
                Check My Portfolio
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <a href="/CV_Ilef_Kristou.pdf" download="CV_Ilef_Kristou.pdf">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all hover-glow shadow-md"
                >
                  <Download className="mr-2" size={18} />
                  Download CV
                </Button>
              </a>
            </div>

            <div className="flex gap-4 pt-6">
              <a
                href="https://github.com/ilef-kristou"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110 hover-glow shadow-md group"
                title="GitHub"
              >
                <Github size={20} className="group-hover:text-primary" />
              </a>
              <a
                href="https://linkedin.com/in/ilef-kristou-99374a302"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110 hover-glow shadow-md group"
                title="LinkedIn"
              >
                <Linkedin size={20} className="group-hover:text-primary" />
              </a>
              <a
                href="mailto:ilefkristou992@gmail.com"
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110 hover-glow shadow-md group"
                title="Email"
              >
                <Mail size={20} className="group-hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Photo */}
          <div className="flex justify-center animate-slide-up animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-50 animate-float animate-glow"></div>
              <div className="relative glass rounded-3xl p-2 overflow-hidden hover-lift shadow-2xl border border-white/10">
              <img
  src={profilePhoto}
  alt="Ilef Kristou - Full-Stack Developer & AI/Cloud Innovator"
  className="w-full max-w-sm h-[430px] object-cover rounded-2xl transform hover:scale-105 transition-transform duration-300"
/>

                {/* Capabilities Badge */}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;