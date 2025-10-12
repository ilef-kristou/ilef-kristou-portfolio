import { Card } from "@/components/ui/card";
import { 
  Code2, 
  Server, 
  Braces, 
  Database, 
  GitBranch, 
  Github, 
  Cloud, 
  Package, 
  FileJson, 
  Terminal,
  Brain,
  BarChart3,
  Users,
  Boxes,
  Box,
  Layers,
  Folder,
  Key
} from "lucide-react";

const getSkillIcon = (skill: string) => {
  const skillLower = skill.toLowerCase();
  if (skillLower.includes('angular')) return Code2;
  if (skillLower.includes('react')) return Code2;
  if (skillLower.includes('html')) return FileJson;
  if (skillLower.includes('css')) return Layers;
  if (skillLower.includes('javascript') || skillLower.includes('typescript')) return Braces;
  if (skillLower.includes('spring boot') || skillLower.includes('spring')) return Server;
  if (skillLower.includes('laravel')) return Server;
  if (skillLower.includes('nest')) return Server;
  if (skillLower.includes('node')) return Server;
  if (skillLower.includes('java')) return Braces;
  if (skillLower.includes('python')) return Brain;
  if (skillLower.includes('c++') || skillLower === 'c') return Terminal;
  if (skillLower.includes('r')) return BarChart3;
  if (skillLower.includes('mysql') || skillLower.includes('mongodb')) return Database;
  if (skillLower.includes('git')) return GitBranch;
  if (skillLower.includes('docker')) return Box;
  if (skillLower.includes('jenkins') || skillLower.includes('kubernetes')) return Cloud;
  if (skillLower.includes('nexus') || skillLower.includes('sonarqube')) return Package;
  if (skillLower.includes('aws')) return Cloud;
  if (skillLower.includes('postman')) return Terminal;
  if (skillLower.includes('jira')) return Folder;
  if (skillLower.includes('scikit') || skillLower.includes('tensorflow')) return Brain;
  if (skillLower.includes('numpy') || skillLower.includes('pandas') || skillLower.includes('matplotlib')) return BarChart3;
  if (skillLower.includes('scrum')) return Users;
  if (skillLower.includes('jwt')) return Key;
  return Boxes;
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: ["Angular", "React.js", "HTML", "CSS", "JavaScript", "TypeScript"],
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
      skills: ["Java", "Python", "C", "C++", "R"],
      color: "from-green-400 to-emerald-400",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB"],
      color: "from-orange-400 to-red-400",
    },
    {
      title: "Tools & DevOps",
      icon: Package,
      skills: ["Git", "GitHub", "GitLab", "Docker", "Jenkins", "Kubernetes", "Nexus", "SonarQube", "AWS", "Postman", "JIRA"],
      color: "from-indigo-400 to-purple-400",
    },
    {
      title: "Data & Machine Learning",
      icon: Brain,
      skills: ["Scikit-learn", "TensorFlow", "NumPy", "Pandas", "Matplotlib"],
      color: "from-cyan-400 to-blue-400",
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
                      <SkillIcon className="w-3.5 h-3.5" />
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
