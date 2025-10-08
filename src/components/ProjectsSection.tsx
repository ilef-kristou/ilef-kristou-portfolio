import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import projectReservation from "@/assets/project-reservation.jpg";
import projectAws from "@/assets/project-aws.jpg";
import projectMl from "@/assets/project-ml.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Online Reservation System",
      year: "2024",
      description:
        "A comprehensive web application featuring multi-user management, rating system, and secure authentication. Built with modern technologies for optimal performance and user experience.",
      technologies: ["Angular", "Spring Boot", "Spring Security", "JWT", "MySQL"],
      github: "https://github.com/ilef-kristou",
      image: projectReservation,
    },
    {
      title: "AWS 3-Tier Cloud Architecture",
      year: "2024",
      description:
        "Designed and deployed a secure, scalable cloud infrastructure on AWS. Implemented VPC, EC2, RDS, S3, and CloudWatch with load balancing and auto-scaling for high availability.",
      technologies: ["AWS", "VPC", "EC2", "RDS", "S3", "CloudWatch", "Load Balancing"],
      github: "https://github.com/ilef-kristou",
      image: projectAws,
    },
    {
      title: "Anomaly Detection & Multi-Class Classification",
      year: "2024",
      description:
        "Developed an advanced machine learning model using autoencoders for anomaly detection and clustering. Implemented with TensorFlow/Keras and Scikit-learn for robust performance.",
      technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Data Science"],
      github: "https://github.com/ilef-kristou",
      image: projectMl,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Showcasing technical expertise through real-world applications
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass border-white/20 overflow-hidden hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 animate-scale-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Image Section */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full z-20">
                    <span className="text-primary font-bold text-sm">{project.year}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`p-8 lg:p-12 space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-white/80 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 animate-slide-in-left"
                        style={{ animationDelay: `${index * 0.2 + techIndex * 0.05}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300 group/btn"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={20} className="mr-2 group-hover/btn:rotate-12 transition-transform" />
                        View Code
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      className="flex-1 bg-accent hover:bg-accent/90 text-primary transition-all duration-300 group/btn"
                    >
                      <ExternalLink size={20} className="mr-2 group-hover/btn:translate-x-1 transition-transform" />
                      Live Demo
                    </Button>
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

export default ProjectsSection;
