import { Card } from "@/components/ui/card";
import { 
  Code2, 
  Server, 
  Braces, 
  Database, 
  Cloud, 
  Package, 
  Brain, 
  Users, 
  Boxes 
} from "lucide-react";
import {
  SiReact,
  SiAngular,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiLaravel,
  SiGrafana,
  SiPrometheus,
  SiSpringboot,
  SiNestjs,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiJenkins,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiGitlab,
  SiPostman,
  SiJira,
  SiTensorflow,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiR,
  SiSonarqube,
  SiC,
  SiCplusplus,
  SiPython,
} from "react-icons/si";

const getSkillIcon = (skill: string) => {
  const s = skill.toLowerCase();

  // Frontend
  if (s.includes("react")) return SiReact;
  if (s.includes("angular")) return SiAngular;
  if (s.includes("html")) return SiHtml5;
  if (s.includes("css")) return SiCss3;
  if (s.includes("javascript")) return SiJavascript;
  if (s.includes("typescript")) return SiTypescript;

  // Backend
  if (s.includes("spring")) return SiSpringboot;
  if (s.includes("laravel")) return SiLaravel;
  if (s.includes("nest")) return SiNestjs;
  if (s.includes("node")) return SiNodedotjs;

  // Languages
  if (s === "java") return SiSpringboot;
  if (s === "python") return SiPython;
  if (s === "c") return SiC;
  if (s === "c++") return SiCplusplus;
  if (s === "r") return SiR;

  // Databases
  if (s.includes("mysql")) return SiMysql;
  if (s.includes("mongodb")) return SiMongodb;

  // Cloud & DevOps
  if (s.includes("aws")) return Cloud;
  if (s.includes("docker")) return SiDocker;
  if (s.includes("jenkins")) return SiJenkins;
  if (s.includes("kubernetes")) return SiKubernetes;
  if (s.includes("nexus")) return Boxes;
  if (s.includes("sonarqube")) return SiSonarqube;
  if (s.includes("grafana")) return SiGrafana;
if (s.includes("prometheus")) return SiPrometheus;


  // Tools
  if (s === "git") return SiGit;
  if (s === "github") return SiGithub;
  if (s === "gitlab") return SiGitlab;
  if (s === "postman") return SiPostman;
  if (s === "jira") return SiJira;

  // Data & ML
  if (s.includes("tensorflow")) return SiTensorflow;
  if (s.includes("scikit")) return SiScikitlearn;
  if (s.includes("numpy")) return SiNumpy;
  if (s.includes("pandas")) return SiPandas;
  if (s.includes("matplotlib")) return SiPython;

  // Methodologies
  if (s.includes("scrum")) return Users;

  // Default
  return Boxes;
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: ["Angular", "React.js", "HTML", "CSS"],
      color: "from-purple-400 to-pink-400",
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Spring Boot", "Laravel", "Nest.js", "Node.js"],
      color: "from-blue-400 to-cyan-400",
    },
    {
      title: "Languages",
      icon: Braces,
      skills: ["Java", "Python", "C", "C++", "JavaScript", "TypeScript", "R"],
      color: "from-green-400 to-emerald-400",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB"],
      color: "from-orange-400 to-red-400",
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Docker", "Jenkins", "Kubernetes", "Nexus", "SonarQube","Grafana", "Prometheus"],
      color: "from-purple-400 to-pink-400",
    },
    {
      title: "Data & Machine Learning",
      icon: Brain,
      skills: ["TensorFlow", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
      color: "from-cyan-400 to-blue-400",
    },
    {
      title: "Tools",
      icon: Package,
      skills: ["Git", "GitHub", "GitLab", "Postman", "JIRA"],
      color: "from-indigo-400 to-blue-400",
    },
    {
      title: "Methodologies",
      icon: Users,
      skills: ["Scrum"],
      color: "from-pink-400 to-rose-400",
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="glass p-6 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 hover:scale-105 animate-slide-up animate-pulse-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => {
                  const SkillIcon = getSkillIcon(skill);
                  return (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 rounded-lg bg-secondary text-foreground text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default flex items-center gap-1.5"
                    >
                      <SkillIcon className="w-4 h-4" />
                      {skill}
                    </span>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
