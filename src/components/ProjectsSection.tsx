import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Online Reservation System",
      year: "2024",
      description:
        "A comprehensive web application featuring multi-user management, rating system, and secure authentication. Built with modern technologies for optimal performance and user experience.",
      technologies: ["Angular", "Spring Boot", "Spring Security", "JWT", "MySQL"],
      github: "https://github.com/ilef-kristou",
    },
    {
      title: "AWS 3-Tier Cloud Architecture",
      year: "2024",
      description:
        "Designed and deployed a secure, scalable cloud infrastructure on AWS. Implemented VPC, EC2, RDS, S3, and CloudWatch with load balancing and auto-scaling for high availability.",
      technologies: ["AWS", "VPC", "EC2", "RDS", "S3", "CloudWatch", "Load Balancing"],
      github: "https://github.com/ilef-kristou",
    },
    {
      title: "Anomaly Detection & Multi-Class Classification",
      year: "2024",
      description:
        "Developed an advanced machine learning model using autoencoders for anomaly detection and clustering. Implemented with TensorFlow/Keras and Scikit-learn for robust performance.",
      technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Data Science"],
      github: "https://github.com/ilef-kristou",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing technical expertise through real-world applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass p-6 flex flex-col hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <span className="text-2xl font-bold">{project.year.slice(2)}</span>
                </div>
                <span className="text-sm text-muted-foreground">{project.year}</span>
              </div>

              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              
              <p className="text-foreground/70 mb-4 flex-1 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 rounded bg-secondary text-foreground text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-primary/50 hover:bg-primary/10"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-primary/50 hover:bg-primary/10"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
