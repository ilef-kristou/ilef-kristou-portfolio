import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import dashboard from "@/assets/dashboard.png";
import gestionFormations from "@/assets/gestionFormations.png";
import formationsForm from "@/assets/formationsForm.png";
import planningForm from "@/assets/planningForm.png";
import chiffre from "@/assets/chiffre.png";
import formationsPart from "@/assets/formationsPart.png";
import reservation1 from "@/assets/reservation1.png";
import acceuil0 from "@/assets/acceuil0.png";
import auth from "@/assets/auth.png";
import sync from "@/assets/sync.png";

import {
  SiReact,
  SiAngular,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiLaravel,
  SiSpringboot,
  SiNestjs,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import { Coffee, Globe, Database, FileJson } from "lucide-react";

const getTechIcon = (tech: string) => {
  const t = tech.toLowerCase();
  if (t.includes("react")) return SiReact;
  if (t.includes("angular")) return SiAngular;
  if (t === "html") return SiHtml5;
  if (t === "css") return SiCss3;
  if (t.includes("javascript")) return SiJavascript;
  if (t.includes("typescript")) return SiTypescript;
  if (t.includes("laravel")) return SiLaravel;
  if (t.includes("spring")) return SiSpringboot;
  if (t.includes("nest")) return SiNestjs;
  if (t.includes("node")) return SiNodedotjs;
  if (t.includes("mysql")) return SiMysql;
  if (t.includes("mongodb")) return SiMongodb;
  if (t === "java") return Coffee;
  if (t.includes("javafx")) return Coffee;
  if (t.includes("jwt")) return FileJson;
  if (t.includes("tailwind")) return SiTailwindcss;
  if (t.includes("rest") || t.includes("api")) return FileJson;
  if (t.includes("hibernate")) return Database;
  if (t.includes("sql server")) return Database;
  return Globe;
};

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Full-Stack Intern",
      company: "TAC-TIC",
      period: "Jul - Aug 2025",
      description: (
        <>
          Development of a web application for managing a training center.<br />
          <strong>Objective:</strong> Optimize the management of training center activities through a centralized platform, enabling administrators, training managers, trainers, and participants to manage the entire training lifecycle intuitively and efficiently.
        </>
      ),
      features: [
        "Administrative dashboard: overview of key statistics for quick and efficient monitoring",
        "Authentication and user management: secure registration and login, role management (administrator, training manager, trainer, participant), user profiles",
        "Training management: creation, modification, deletion of training programs, trainer assignment, session scheduling (date, time, room)",
        "Participant registrations: online registration, validation by training manager, registration status tracking",
        "Trainer management: consultation and management of assigned training sessions",
        "Room and schedule management: creation and management of rooms with capacity, assignment to sessions, availability verification",
        "Resource management: association of resources with training programs, access for trainers and participants",
      ],
      technologies: ["React.js", "Laravel", "MySQL", "JWT", "REST API"],
      images: [acceuil0, chiffre, dashboard, gestionFormations, formationsForm, planningForm, reservation1, formationsPart],
      link: "https://tac-tic.net/",
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
      technologies: ["React.js", "JavaScript", "Tailwind"],
      images: [],
      link: "https://www.facebook.com/colibristunisie",
    },
    {
      role: "Database Synchronization Application",
      company: "Goodwill Consulting",
      period: "Juin - Juil 2024",
      description:
        "Development of a synchronization solution between two databases (source and target) via web services.",
      features: [
        "Automatic replication of insertions, updates, and deletions",
        "Guarantee of data consistency and integrity between databases",
        "Service-oriented architecture to ensure reliability and scalability of the process",
      ],
      technologies: ["Java", "JavaFX", "JDBC", "Hibernate", "REST API", "SQL Server"],
      images: [auth,sync],
      link: "https://goodwill.tn",
    }
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
              className="group glass overflow-hidden hover:border-primary/50 transition-all duration-300 animate-slide-up hover-lift hover-glow"
              style={{ animationDelay: `${index * 0.08}s` }}
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
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-muted-foreground">
                      {exp.link ? (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-primary hover:underline"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <span className="font-medium text-primary">{exp.company}</span>
                      )}
                      <span className="flex items-center gap-2">
                        <Calendar size={16} />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-foreground/70 leading-relaxed">{exp.description}</p>

                  {/* Image Carousel */}
                  {exp.images && exp.images.length > 0 && (
                    <div className="relative overflow-hidden rounded-lg bg-secondary/30">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {exp.images.map((image, imgIndex) => (
                            <CarouselItem key={imgIndex}>
                              <div className="relative w-full">
                                <div className="aspect-video w-full max-w-4xl mx-auto">
                                  <img
                                    src={image}
                                    alt={`${exp.role} - Image ${imgIndex + 1}`}
                                    className="w-full h-full object-contain rounded-lg"
                                  />
                                </div>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2 sm:left-4 size-8 sm:size-10" />
                        <CarouselNext className="right-2 sm:right-4 size-8 sm:size-10" />
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

                  {/* Technologies */}
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
