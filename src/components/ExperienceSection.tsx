import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Stagiaire Full-Stack",
      company: "TAC-TIC",
      period: "Jul - Aug 2025",
      description:
        "Developed a comprehensive training center management web application to optimize operations through a centralized platform, enabling efficient management of the entire training lifecycle.",
      features: [
        "Administrative dashboard with key statistics and performance metrics",
        "Secure multi-role authentication system (administrator, training manager, trainer, participant)",
        "Complete training lifecycle management with session scheduling",
        "Online participant registration with validation workflow",
        "Resource management system with access control",
        "Room and schedule management with capacity tracking and availability verification",
      ],
      technologies: ["React.js", "Laravel", "MySQL", "Authentication", "REST API", "Dashboards"],
    },
    {
      role: "Développeuse Frontend",
      company: "Startup Colibris",
      period: "Nov 2024 - Feb 2025",
      description:
        "Built the frontend for a circular economy e-commerce platform, creating intuitive and responsive interfaces that enhance the user shopping experience and promote sustainable practices.",
      features: [
        "Secure authentication flows with user registration and login",
        "Dynamic product catalog with search and filtering capabilities",
        "Interactive shopping cart with real-time updates",
        "Contact forms with validation and user feedback",
        "Custom user profiles with order history and preferences",
        "Seamless navigation and responsive design across all devices",
      ],
      technologies: ["React.js", "JavaScript", "Responsive Design", "E-commerce", "UI/UX"],
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
              className="glass p-8 hover:border-primary/50 transition-all duration-300 animate-slide-up hover:scale-105 hover-lift hover-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                  <Briefcase className="text-white" size={28} />
                </div>

                <div className="flex-1 space-y-6">
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

                  <p className="text-foreground/70 leading-relaxed">{exp.description}</p>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-primary flex items-center gap-2">
                      <span className="w-1 h-5 bg-primary rounded-full"></span>
                      Key Features
                    </h4>
                    <ul className="space-y-2 ml-4">
                      {exp.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex} 
                          className="flex items-start gap-3 text-foreground/80 text-sm leading-relaxed animate-fade-in"
                          style={{ animationDelay: `${index * 0.1 + featureIndex * 0.05}s` }}
                        >
                          <span className="text-primary mt-0.5">▸</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-border/50">
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wider flex items-center gap-2">
                      <span className="w-6 h-0.5 bg-primary"></span>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/30 hover:bg-primary/20 hover:border-primary/50 hover:scale-105 transition-all duration-300 animate-scale-in"
                          style={{ animationDelay: `${index * 0.1 + techIndex * 0.05}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
