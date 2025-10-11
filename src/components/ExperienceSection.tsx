import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import trainingDashboard from "@/assets/training-dashboard.jpg";
import trainingManagement from "@/assets/training-management.jpg";
import trainingAuth from "@/assets/training-auth.jpg";
import dbSyncInterface from "@/assets/db-sync-interface.jpg";
import dbSyncMonitoring from "@/assets/db-sync-monitoring.jpg";
import { 
  Code2, 
  Server, 
  Database, 
  Shield, 
  FileJson, 
  LayoutDashboard,
  Coffee,
  Globe,
  Lock,
  GitBranch
} from "lucide-react";

const getTechIcon = (tech: string) => {
  const techLower = tech.toLowerCase();
  if (techLower.includes('react') || techLower.includes('angular') || techLower.includes('html') || techLower.includes('css')) return Code2;
  if (techLower.includes('laravel') || techLower.includes('spring') || techLower.includes('nest') || techLower.includes('node')) return Server;
  if (techLower.includes('mysql') || techLower.includes('mongodb') || techLower.includes('database') || techLower.includes('jdbc')) return Database;
  if (techLower.includes('auth') || techLower.includes('security')) return Shield;
  if (techLower.includes('api') || techLower.includes('rest') || techLower.includes('web service')) return FileJson;
  if (techLower.includes('dashboard')) return LayoutDashboard;
  if (techLower.includes('java')) return Coffee;
  if (techLower.includes('synchronization')) return GitBranch;
  return Globe;
};

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Full-Stack Intern",
      company: "TAC-TIC",
      period: "Jul - Aug 2025",
      description:
        "Development of a web application for managing a training center. Objective: Optimize the management of training center activities through a centralized platform, enabling administrators, training managers, trainers, and participants to manage the entire training lifecycle intuitively and efficiently.",
      features: [
        "Administrative dashboard: overview of key statistics for quick and efficient monitoring",
        "Authentication and user management: secure registration and login, role management (administrator, training manager, trainer, participant), user profiles",
        "Training management: creation, modification, deletion of training programs, trainer assignment, session scheduling (date, time, room)",
        "Participant registrations: online registration, validation by training manager, registration status tracking",
        "Trainer management: consultation and management of assigned training sessions",
        "Room and schedule management: creation and management of rooms with capacity, assignment to sessions, availability verification",
        "Resource management: association of resources with training programs, access for trainers and participants",
      ],
      technologies: ["React.js", "Laravel", "MySQL", "Authentication", "REST API", "Dashboards"],
      images: [trainingDashboard, trainingManagement, trainingAuth],
    },
    {
      role: "Database Synchronization Application",
      company: "Goodwill Consulting",
      period: "Summer 2024",
      description:
        "Development of a synchronization solution between two databases (source and target) via web services.",
      features: [
        "Automatic replication of insertions, updates, and deletions",
        "Guarantee of data consistency and integrity between databases",
        "Service-oriented architecture to ensure reliability and scalability of the process",
      ],
      technologies: ["Java", "JDBC", "Web Services", "Database Synchronization"],
      images: [dbSyncInterface, dbSyncMonitoring]
    },
    {
      role: "Frontend Developer",
      company: "Startup Colibris",
      period: "Nov 2024 - Feb 2025",
      description:
        "Colibris – Web and E-commerce platform enabling waste collection appointment scheduling, online product purchases, and supporting sustainable job creation.",
      features: [
        "Registration/Login: development of a secure module with email verification for customers and businesses",
        "Shop: creation of an intuitive interface to browse products, manage quantities and shopping cart",
        "Contact: implementation of dynamic forms and social media links to facilitate communication",
        "Home: design of an informative page with clear navigation to other features",
        "Appointment scheduling: development of a simple and interactive interface for businesses",
        "User/business profiles: personalized access management and activity tracking for each user",
      ],
      technologies: ["React.js", "JavaScript", "Responsive Design", "E-commerce", "UI/UX"],
      images: [],
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
              className="glass overflow-hidden hover:border-primary/50 transition-all duration-300 animate-slide-up hover-lift hover-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid lg:grid-cols-[auto_1fr] gap-0">
                {/* Icon Section */}
                <div className="lg:w-24 bg-primary/10 flex items-start justify-center p-8 lg:p-6">
                  <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                    <Briefcase className="text-white" size={28} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 space-y-6">
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

                  {/* Image Carousel - Only show if images exist */}
                  {exp.images && exp.images.length > 0 && (
                    <div className="relative overflow-hidden rounded-lg bg-secondary/30">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {exp.images.map((image, imgIndex) => (
                            <CarouselItem key={imgIndex}>
                              <div className="relative w-full h-[300px]">
                                <img
                                  src={image}
                                  alt={`${exp.role} - Image ${imgIndex + 1}`}
                                  className="w-full h-full object-cover rounded-lg"
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
                      {exp.technologies.map((tech, techIndex) => {
                        const IconComponent = getTechIcon(tech);
                        return (
                          <span
                            key={techIndex}
                            className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/30 hover:bg-primary/20 hover:border-primary/50 hover:scale-105 transition-all duration-300 animate-scale-in flex items-center gap-1.5"
                            style={{ animationDelay: `${index * 0.1 + techIndex * 0.05}s` }}
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

export default ExperienceSection;
