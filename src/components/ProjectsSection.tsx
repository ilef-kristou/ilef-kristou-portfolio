import { Card } from "@/components/ui/card";
import projectReservation from "@/assets/project-reservation.jpg";
import projectAws from "@/assets/project-aws.jpg";
import projectMl from "@/assets/project-ml.jpg";
import crmDashboard from "@/assets/crm-dashboard.jpg";
import crmContacts from "@/assets/crm-contacts.jpg";
import crmDocuments from "@/assets/crm-documents.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { 
  Code2, 
  Server, 
  Database, 
  Shield, 
  Key,
  Cloud,
  Network,
  HardDrive,
  Activity,
  Globe,
  Lock,
  BarChart3,
  Brain,
  FileJson,
  ImageIcon
} from "lucide-react";

const getTechIcon = (tech: string) => {
  const techLower = tech.toLowerCase();
  if (techLower.includes('angular') || techLower.includes('react')) return Code2;
  if (techLower.includes('spring') || techLower.includes('boot')) return Server;
  if (techLower.includes('security')) return Shield;
  if (techLower.includes('jwt')) return Key;
  if (techLower.includes('mysql') || techLower.includes('rds')) return Database;
  if (techLower.includes('aws') || techLower.includes('cloud')) return Cloud;
  if (techLower.includes('vpc') || techLower.includes('load balancing') || techLower.includes('route')) return Network;
  if (techLower.includes('ec2') || techLower.includes('s3')) return HardDrive;
  if (techLower.includes('cloudwatch')) return Activity;
  if (techLower.includes('python') || techLower.includes('tensorflow') || techLower.includes('keras')) return Brain;
  if (techLower.includes('numpy') || techLower.includes('pandas') || techLower.includes('scikit')) return BarChart3;
  if (techLower.includes('matplotlib')) return ImageIcon;
  return Globe;
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Online Reservation System",
      year: "2024",
      description: "A comprehensive web application designed to streamline the reservation process with multi-user capabilities, featuring robust authentication and an intuitive rating system for enhanced user experience.",
      features: [
        "Multi-user management with role-based access control",
        "Rating and review system for user feedback",
        "Secure authentication using JWT tokens",
        "MySQL database for efficient data management",
      ],
      technologies: ["Angular", "Spring Boot", "Spring Security", "JWT", "MySQL"],
      images: [projectReservation, projectReservation, projectReservation],
    },
    {
      title: "Modern CRM Platform",
      year: "2024",
      description: "A modern web-based CRM platform designed for SMEs, startups, and associations, centralizing customer data, optimizing the sales cycle, and offering clear business insights through interactive dashboards — combining simplicity, efficiency, and productivity.",
      features: [
        "Secure authentication and role-based access (Admin & Sales Representatives)",
        "Centralized contact management with dynamic status tracking (prospect, client, loyal client)",
        "Automated and visualized sales prospecting cycle",
        "Document management system with project-based organization and filtering options",
        "Interactive dashboard displaying key statistics and performance charts",
        "Real-time validation and data input controls for improved accuracy",
        "JWT-based authentication ensuring secure and stateless communication",
      ],
      technologies: ["Angular", "NestJS", "TypeScript", "MySQL", "JWT"],
      images: [crmDashboard, crmContacts, crmDocuments],
    },
    {
      title: "AWS 3-Tier Cloud Architecture",
      year: "2024",
      description: "Complete enterprise-grade cloud infrastructure deployment on AWS, implementing best practices for security, high availability, scalability, and DNS management across multiple availability zones.",
      features: [
        "VPC with public/private subnets across multiple availability zones",
        "Internet Gateway, NAT Gateways, and Route 53 DNS management",
        "Security groups, bastion host, and SSL certificates via ACM",
        "Application Load Balancers with Auto Scaling groups",
        "Multi-AZ RDS with automated backups",
        "S3 bucket with CloudFront distribution for static assets",
        "CloudWatch monitoring for performance metrics",
      ],
      technologies: ["AWS", "VPC", "EC2", "RDS", "S3", "CloudWatch", "Load Balancing", "Route 53"],
      images: [projectAws, projectAws, projectAws],
    },
    {
      title: "Anomaly Detection & Multi-Class Classification",
      year: "2024",
      description: "Advanced deep learning system combining anomaly detection and multi-class classification using convolutional autoencoders, achieving effective anomaly identification and category clustering in image datasets.",
      features: [
        "Convolutional autoencoder trained on normal images for anomaly detection",
        "Latent space extraction and clustering using PCA + KMeans",
        "Complete pipeline: data preparation, augmentation, and training",
        "Performance evaluation: MSE, confusion matrix, ARI, Silhouette",
        "Latent space visualization with t-SNE",
      ],
      technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn", "NumPy", "Matplotlib"],
      images: [projectMl, projectMl, projectMl],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
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
              className="glass border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-scale-in group hover:-translate-y-2 hover-glow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`grid lg:grid-cols-2 gap-0 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
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
                  <div className="absolute top-4 right-4 bg-primary backdrop-blur-sm px-4 py-2 rounded-full z-20 animate-bounce-subtle">
                    <span className="text-white font-bold text-sm">{project.year}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`p-8 lg:p-12 space-y-8 bg-card ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold group-hover:text-primary transition-colors duration-300 animate-slide-up">
                      {project.title}
                    </h3>
                    
                    <p className="text-foreground/70 text-base leading-relaxed animate-fade-in">
                      {project.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-primary flex items-center gap-2">
                        <span className="w-1 h-6 bg-primary rounded-full"></span>
                        Key Features
                      </h4>
                      <ul className="space-y-2.5 ml-4">
                        {project.features.map((feature, featureIndex) => (
                          <li 
                            key={featureIndex} 
                            className="flex items-start gap-3 text-foreground/80 text-sm leading-relaxed animate-slide-in-left"
                            style={{ animationDelay: `${index * 0.2 + featureIndex * 0.1}s` }}
                          >
                            <span className="text-primary mt-0.5 text-lg">▸</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-border/50">
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider flex items-center gap-2">
                      <span className="w-6 h-0.5 bg-primary"></span>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {project.technologies.map((tech, techIndex) => {
                        const IconComponent = getTechIcon(tech);
                        return (
                          <span
                            key={techIndex}
                            className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/30 hover:bg-primary/20 hover:border-primary/50 hover:scale-105 transition-all duration-300 animate-scale-in flex items-center gap-2"
                            style={{ animationDelay: `${index * 0.2 + techIndex * 0.05}s` }}
                          >
                            <IconComponent className="w-4 h-4" />
                            {tech}
                          </span>
                        );
                      })}
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

export default ProjectsSection;
