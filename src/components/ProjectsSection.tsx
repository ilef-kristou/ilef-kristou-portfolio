import { Card } from "@/components/ui/card";
import crm from "@/assets/crm.png";
import crm1 from "@/assets/crm1.png";
import crm2 from "@/assets/crm2.png";
import crm6 from "@/assets/crm6.png";
import crm7 from "@/assets/crm7.png";
import crm8 from "@/assets/crm8.png";
import ia1 from "@/assets/ia1.png";
import ia2 from "@/assets/ia2.png";
import aws from "@/assets/aws.png";
import aws1 from "@/assets/aws1.png";
import aws2 from "@/assets/aws2.png";
import unnamed from "@/assets/unnamed.png";
import unnamed1 from "@/assets/unnamed (1).png";
import unnamed2 from "@/assets/unnamed (2).png";
import unnamed3 from "@/assets/unnamed (3).png";
import unnamed4 from "@/assets/unnamed (4).png";
import unnamed5 from "@/assets/unnamed (5).png";
import unnamed6 from "@/assets/unnamed (6).png";
import unnamed7 from "@/assets/unnamed (7).png";
import unnamed8 from "@/assets/unnamed (8).png";
import unnamed10 from "@/assets/unnamed (10).png";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaAws, FaChartBar } from "react-icons/fa";
import {
  Code2,
  Database,
  Shield,
  Key,
  Cloud,
  Network,
  HardDrive,
  Activity,
  Globe,
  Calendar,
} from "lucide-react";
import {
  SiAngular,
  SiReact,
  SiSpringboot,
  SiNestjs,
  SiMysql,
  SiPython,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiNumpy
} from "react-icons/si";

const getTechIcon = (tech: string) => {
  const t = tech.toLowerCase();
  if (t.includes("angular")) return SiAngular;
  if (t.includes("react")) return SiReact;
  if (t.includes("spring")) return SiSpringboot;
  if (t.includes("nestjs")) return SiNestjs;
  if (t.includes("mysql")) return SiMysql;
  if (t.includes("jwt")) return Key;
  if (t.includes("aws") || t.includes("amazon")) return FaAws;
  if (t.includes("vpc") || t.includes("load balancing") || t.includes("route")) return Network;
  if (t.includes("ec2") || t.includes("s3")) return HardDrive;
  if (t.includes("rds")) return Database;
  if (t.includes("cloudwatch")) return Activity;
  if (t.includes("python")) return SiPython;
  if (t.includes("tensorflow")) return SiTensorflow;
  if (t.includes("keras")) return SiKeras;
  if (t.includes("scikit")) return SiScikitlearn;
  if (t.includes("numpy")) return SiNumpy;
  if (t.includes("matplotlib")) return FaChartBar;
  if (t.includes("security")) return Shield;
  return Globe;
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Online Reservation System",
      year: "2024",
      description:
        "Web application designed to streamline the reservation process with multi-user capabilities, featuring robust authentication and an intuitive rating system for enhanced user experience.",
      features: [
        "Multi-user management with role-based access control",
        "Rating and review system for user feedback",
        "Secure authentication using JWT tokens",
        "MySQL database for efficient data management",
      ],
      technologies: ["Angular", "TypeScript", "Spring Boot", "Spring Security", "JWT", "MySQL"],
      images: [unnamed2, unnamed1, unnamed, unnamed3, unnamed8, unnamed4, unnamed10, unnamed5, unnamed7, unnamed6],
    },
    {
      title: "Modern CRM Platform",
      year: "2024",
      description:
        "A modern web-based CRM platform designed for SMEs, startups, and associations, centralizing customer data, optimizing the sales cycle, and offering clear business insights through interactive dashboards.",
      features: [
        "Secure authentication and role-based access (Admin & Sales Representatives)",
        "Centralized contact management with dynamic status tracking",
        "Automated and visualized sales prospecting cycle",
        "Document management system with project-based organization and filtering options",
        "Interactive dashboard displaying key statistics and performance charts",
        "JWT-based authentication ensuring secure and stateless communication",
      ],
      technologies: ["Angular", "NestJS", "TypeScript", "MySQL", "JWT"],
      images: [crm, crm2, crm1, crm8, crm6, crm7],
    },
    {
      title: "AWS 3-Tier Cloud Architecture",
      year: "2024",
      description:
        "Deployment of a 3-Tier architecture on AWS implementing best practices for security, high availability, scalability, and DNS management.",
      features: [
        "VPC with public/private subnets across multiple availability zones",
        "Internet Gateway, NAT Gateways, and Route 53 DNS management",
        "Security groups, bastion host, and SSL certificates via ACM",
        "Application Load Balancers with Auto Scaling groups",
        "Multi-AZ RDS with automated backups",
        "S3 bucket with CloudFront distribution for static assets",
        "CloudWatch monitoring for performance metrics",
      ],
      technologies: ["AWS", "VPC", "EC2", "RDS", "S3", "CloudWatch", "Load Balancing"],
      images: [aws, aws1, aws2],
    },
    {
      title: "Anomaly Detection & Multi-Class Classification",
      year: "2024",
      description:
        "Development of an autoencoder for anomaly detection using reconstruction thresholding, extended with K-Means clustering in the latent space for multi-class classification.",
      features: [
        "Convolutional autoencoder trained on normal images",
        "Latent space extraction and clustering using PCA + KMeans",
        "Performance evaluation: MSE, confusion matrix, ARI, Silhouette",
        "Latent space visualization with t-SNE",
      ],
      technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn", "NumPy", "Matplotlib"],
      images: [ia2, ia1],
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing technical expertise through real-world applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group glass overflow-hidden hover:border-primary/50 transition-all duration-300 animate-slide-up hover-lift hover-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid lg:grid-cols-[auto_1fr] gap-0">
                {/* Icon */}
                <div className="lg:w-24 bg-primary/10 flex items-start justify-center p-8 lg:p-6">
                  <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                    <Code2 className="text-white" size={28} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-pink-500">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Calendar size={16} />
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <p className="text-foreground/70 leading-relaxed">{project.description}</p>

                  {/* Carousel avec tailles uniformes sur mobile */}
                  {project.images && project.images.length > 0 && (
                    <div className="relative overflow-hidden rounded-lg bg-secondary/30">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {project.images.map((image, imgIndex) => (
                            <CarouselItem key={imgIndex}>
                              <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px]">
                                <img
                                  src={image}
                                  alt={`${project.title} - Image ${imgIndex + 1}`}
                                  className="w-full h-full object-contain rounded-lg"
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                      </Carousel>
                    </div>
                  )}

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-primary flex items-center gap-2">
                      <span className="w-1 h-5 bg-primary rounded-full"></span>
                      Key Features
                    </h4>
                    <ul className="space-y-2 ml-4">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3 text-foreground/80 text-sm leading-relaxed animate-fade-in"
                        >
                          <span className="text-primary mt-0.5">▸</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3 pt-4 border-t border-border/50">
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wider flex items-center gap-2">
                      <span className="w-6 h-0.5 bg-primary"></span>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => {
                        const IconComponent = getTechIcon(tech);
                        return (
                          <span
                            key={techIndex}
                            className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/30 hover:bg-primary/20 hover:border-primary/50 hover:scale-105 transition-all duration-300 flex items-center gap-1.5"
                          >
                            <IconComponent className="w-3.5 h-3.5" />
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
