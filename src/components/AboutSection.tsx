import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const education = [
    {
      degree: "Cycle d'Ingénieur en Génie Logiciel et Système d'Information",
      institution: "Faculty of Sciences of Tunis",
      period: "2023 - Present",
      icon: GraduationCap,
    },
    {
      degree: "Cycle Préparatoire Intégré (MPI)",
      institution: "Faculty of Sciences of Tunis",
      period: "2021 - 2023",
      icon: GraduationCap,
    },
    {
      degree: "Baccalauréat Sciences Expérimentales",
      institution: "Lycée Mohamed Ali Annabi Ras Jebel",
      period: "2021",
      description: "Mention Très Bien",
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about technology and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6 animate-slide-up animate-fade-in">
            <Card className="glass p-8 border-border/50 hover-lift hover-glow">
              <h3 className="text-2xl font-bold mb-4 gradient-text">My Journey</h3>
              <p className="text-foreground/80 leading-relaxed">
                🎓 Final-year Software Engineering student, I am passionate about creating innovative software solutions, with a keen interest in full-stack web development, cloud computing, and artificial intelligence.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-4">
                🚀 At Optima Junior Enterprise, I contributed to real-world projects for clients, strengthening my skills in software development, agile project management, and client communication. These experiences allowed me to take on responsibilities and collaborate effectively within dynamic teams.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-4">
                💡 My academic projects gave me the opportunity to consolidate my knowledge in software design, databases, and development best practices, while implementing these skills on various projects. I have thus acquired a comprehensive view of the software development lifecycle and a solid ability to produce reliable and high-performance solutions.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-4">
                🔍 Curious, rigorous, and constantly on the lookout for new technologies, I am seeking an end-of-studies internship that will allow me to apply my skills and deepen my expertise in software engineering.
              </p>
            </Card>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6 animate-slide-up animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            {education.map((edu, index) => (
              <Card
                key={index}
                className="glass p-6 border-l-4 border-primary hover:border-accent transition-all duration-300 hover:translate-x-2 hover:scale-105 hover-glow animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <edu.icon className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1">{edu.degree}</h4>
                    <p className="text-muted-foreground mb-1">{edu.institution}</p>
                    <p className="text-sm text-primary font-medium">{edu.period}</p>
                    {edu.description && (
                      <p className="text-sm text-accent mt-2">{edu.description}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
