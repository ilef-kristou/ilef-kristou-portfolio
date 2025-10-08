import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import projectReservation from "@/assets/project-reservation.jpg";
import projectAws from "@/assets/project-aws.jpg";
import projectMl from "@/assets/project-ml.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Online Reservation System",
      year: "2024",
      description:
        "A comprehensive web application featuring multi-user management, rating system, and secure authentication. Built with modern technologies for optimal performance and user experience.",
      technologies: ["Angular", "Spring Boot", "Spring Security", "JWT", "MySQL"],
      github: "https://github.com/ilef-kristou",
      images: [projectReservation, projectReservation, projectReservation],
    },
    {
      title: "AWS 3-Tier Cloud Architecture",
      year: "2024",
      description:
        "Created and deployed a complete 3-tier AWS architecture (frontend, backend, database) with containerization refactoring. Implemented VPC with public/private subnets across multiple AZs, Internet Gateway, NAT Gateways, Route 53 DNS management. Configured security groups, bastion host, SSL certificates via ACM. Deployed Application Load Balancers with Auto Scaling groups, multi-AZ RDS with automated backups, S3 bucket with CloudFront distribution for static assets, and CloudWatch monitoring for performance metrics.",
      technologies: ["AWS", "VPC", "EC2", "RDS", "S3", "CloudWatch", "Load Balancing"],
      github: "https://github.com/ilef-kristou",
      images: [projectAws, projectAws, projectAws],
    },
    {
      title: "Anomaly Detection & Multi-Class Classification",
      year: "2024",
      description:
        "Developed a deep learning system for automatic anomaly detection and multi-category classification in images. Combined convolutional autoencoder trained on normal images for anomaly detection with latent space extraction and clustering (PCA + KMeans) for multi-class classification. Implemented complete pipeline including data preparation and augmentation, model training, performance evaluation (MSE, confusion matrix, ARI, Silhouette), and latent space visualization with t-SNE. Built with Python, TensorFlow/Keras, NumPy, Matplotlib, and Scikit-learn.",
      technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Data Science"],
      github: "https://github.com/ilef-kristou",
      images: [projectMl, projectMl, projectMl],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing technical expertise through real-world applications
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-scale-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`grid lg:grid-cols-2 gap-0 items-stretch ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Carousel Section */}
                <div className={`relative overflow-hidden min-h-[300px] lg:min-h-[400px] bg-secondary/30 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Carousel className="w-full h-full">
                    <CarouselContent>
                      {project.images.map((image, imgIndex) => (
                        <CarouselItem key={imgIndex}>
                          <div className="relative w-full h-[300px] lg:h-[400px]">
                            <img
                              src={image}
                              alt={`${project.title} - Image ${imgIndex + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full z-20">
                    <span className="text-white font-bold text-sm">{project.year}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`p-8 lg:p-12 space-y-6 bg-card ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-foreground/80 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium border border-border hover:bg-accent transition-all duration-300 animate-slide-in-left"
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
                      className="flex-1 border-primary/50 hover:bg-primary/10 group/btn"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={20} className="mr-2 group-hover/btn:rotate-12 transition-transform" />
                        View Code
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      className="flex-1 bg-gradient-primary hover:opacity-90 transition-all duration-300 group/btn"
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
