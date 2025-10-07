import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Stagiaire Full-Stack",
      company: "TAC-TIC",
      period: "Jul - Aug 2025",
      description:
        "Developed a full-stack web application for managing a training center using React.js, Laravel, and MySQL. Implemented multi-role authentication, dynamic dashboards, and scheduling features with a focus on user experience and performance.",
      technologies: ["React.js", "Laravel", "MySQL", "Authentication", "Dashboards"],
    },
    {
      role: "Développeuse Frontend",
      company: "Startup Colibris",
      period: "Nov 2024 - Feb 2025",
      description:
        "Built the frontend for a circular economy e-commerce platform using React.js. Created responsive interfaces including authentication flows, product catalog, shopping cart, contact forms, and custom user profiles with seamless navigation.",
      technologies: ["React.js", "E-commerce", "Authentication", "Responsive Design"],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building real-world solutions and gaining hands-on expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="glass p-8 hover:border-primary/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-white" size={28} />
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                    <div className="flex flex-wrap gap-4 text-muted-foreground">
                      <span className="font-medium text-primary">{exp.company}</span>
                      <span className="flex items-center gap-2">
                        <Calendar size={16} />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-foreground/80 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
