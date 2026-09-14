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
import inscri_patient from "@/assets/inscri_patient.png";
import liste_utilisateurs from "@/assets/liste_utilisateurs.png";
import details_utilisateurs from "@/assets/details_utilisateurs.png";
import modifier_profil from "@/assets/modifier_profil.png";
import filtre_docs from "@/assets/filtre_docs.png";
import ajout_doc from "@/assets/ajout_doc.png";
import visualiser_doc from "@/assets/visualiser_doc.png";
import generer_code from "@/assets/generer_code.png";
import liste_access from "@/assets/listeacces.png";
import mail_qrcode from "@/assets/mail-qrcode.png";
import dispo1 from "@/assets/dispo1.png";
import recherchemedecin from "@/assets/recherchemedecin.png";
import details_medecin from "@/assets/details_medecin.png";
import prendre_rdv from "@/assets/prendre_rdv.png";
import confirme_rdv from "@/assets/confirme_rdv.png";
import patients_today from "@/assets/patients-today.png";
import consultationdossier from "@/assets/consultationdossier.png";
import modif_doc_medecin from "@/assets/modif_doc_medecin.png";
import listedossier from "@/assets/listedossier.png";
import ajout_doc_prestataire from "@/assets/ajout_doc_prestataire.png";
import interaction_medicamenteux from "@/assets/interaction-medicamenteux.png";
import maladie_chronique from "@/assets/maladie-chronique.png";
import aucune_contre_indication from "@/assets/aucune-contre-indication.png";
import dashbordssss from "@/assets/dashboardssss.png";
import urgence_patient1 from "@/assets/urgence-patient1.png";
import chatbot_patient4 from "@/assets/chatbot-patient4.png";
import chatbot_patient5 from "@/assets/chatbot-patient5.png";
import pipeline1 from "@/assets/pipeline1.png";
import pipeline2 from "@/assets/pipeline2.png";


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
  SiNextdotjs,
  SiPostgresql,
  SiJenkins,
  SiSonarqube,
  SiDocker,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";

import {
  Coffee,
  Globe,
  Database,
  FileJson,
  GitBranch,
  Brain,
  Workflow,
  ShieldCheck,
  Package,
  Activity,
} from "lucide-react";

const getTechIcon = (tech: string) => {
  const t = tech.toLowerCase();

  // Frontend
  if (t.includes("react")) return SiReact;
  if (t.includes("angular")) return SiAngular;
  if (t.includes("next")) return SiNextdotjs;
  if (t === "html") return SiHtml5;
  if (t === "css") return SiCss3;
  if (t.includes("javascript")) return SiJavascript;
  if (t.includes("typescript")) return SiTypescript;
  if (t.includes("tailwind")) return SiTailwindcss;

  // Backend
  if (t.includes("spring")) return SiSpringboot;
  if (t.includes("laravel")) return SiLaravel;
  if (t.includes("nest")) return SiNestjs;
  if (t.includes("node")) return SiNodedotjs;

  // Database
  if (t.includes("postgresql")) return SiPostgresql;
  if (t.includes("mysql")) return SiMysql;
  if (t.includes("mongodb")) return SiMongodb;
  if (t.includes("sql server")) return Database;
  if (t.includes("hibernate")) return Database;

  // Java / API / Security
  if (t === "java" || t.includes("javafx")) return Coffee;
  if (t.includes("jwt")) return FileJson;
  if (t.includes("rest") || t.includes("api")) return FileJson;

  // AI
  if (t === "rag") return Brain;
  if (t === "llm") return Brain;

  // Workflow / Automation
  if (t.includes("n8n")) return Workflow;

  // CI/CD & DevOps
  if (t.includes("ci/cd")) return GitBranch;
  if (t.includes("jenkins")) return SiJenkins;
  if (t.includes("docker")) return SiDocker;
  if (t.includes("nexus")) return Package;
  if (t.includes("sonarqube")) return SiSonarqube;

  // Monitoring
  if (t.includes("grafana")) return SiGrafana;
  if (t.includes("prometheus")) return SiPrometheus;

  // Security
  if (t.includes("trivy")) return ShieldCheck;

  // Fallback
  return Globe;
};

const ExperienceSection = () => {
  const experiences = [
    { 
      role: "Software Engineer Intern – Full-Stack, AI & DevOps",
      company: "Talan Tunisia",
      period: "Feb - Mai 2026",
      description: (
        <>
          Development of an intelligent web application for optimizing the patient journey.<br />
          <strong>Objective:</strong> Design and development of a centralized healthcare platform connecting patients, doctors, medical providers, while leveraging AI to support medical orientation and decision-making.
        </>
      ),
      features: [
        "Medical record management: Centralized management and secure sharing of patient medical records via QR Code",
        "Medical appointments: Appointment scheduling and management for both patients and doctors, including appointment requests, confirmation, and cancellation",
        "Notifications & alerts: Automated notifications and alerts to keep users informed about important updates, appointments, and medical events",
        "Dashboards: Dedicated dashboards providing users with a clear overview of their activities and relevant information based on their role",
        "User registration management: Administration of registration requests from doctors and medical providers, with the ability to approve or reject applications",
        "AI-powered medical orientation: Intelligent chatbot that analyzes patient symptoms, assesses urgency, guides patients toward appropriate care facilities, and assists with appointment scheduling",
        "Medication risk analysis: Detection of drug-drug interactions and potential contraindications based on the patient's medical profile, including allergies and chronic conditions",
        "RAG-based medical assistant: Intelligent assistant allowing doctors to query and retrieve relevant information from patients' medical documents and records",
        "DevOps & CI/CD: Implementation of automated CI/CD pipelines covering source code checkout, project build, unit testing, code quality analysis, artifact management, Docker image creation, and application deployment",
      ],
technologies: [
  "Next.js",
  "Spring Boot",
  "PostgreSQL",
  "JWT",
  "REST API",
  "n8n",
  "RAG",
  "LLM",
  "CI/CD",
  "Jenkins",
  "Nexus",
  "SonarQube",
  "Grafana",
  "Prometheus",
  "Trivy",
  "Docker",
  "Docker Hub",
],
images: [
  inscri_patient,
  liste_utilisateurs,
  details_utilisateurs,
  dashbordssss,
  filtre_docs,
  ajout_doc,
  visualiser_doc,
  generer_code,
  liste_access,
  mail_qrcode,
  modifier_profil,
  dispo1,
  recherchemedecin,
  details_medecin,
  prendre_rdv,
  confirme_rdv,
  patients_today,
  consultationdossier,
  modif_doc_medecin,
  listedossier,
  ajout_doc_prestataire,
  interaction_medicamenteux,
  maladie_chronique,
  aucune_contre_indication,
  urgence_patient1,
  chatbot_patient4,
  chatbot_patient5,
  pipeline1,
  pipeline2
],      link: "https://www.talan.com/global/fr",
    },
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
      role: "Full-Stack Developer",
      company: "Startup Colibris",
      period: "Nov 2024 - Feb 2025",
      description:
        "Colibris – Web & E-commerce Platform for waste collection appointments, online shopping, and supporting sustainable job creation.",
      features: [
        "Authentication & User Management: Secure registration and login with email verification for customers and businesses, with personalized user profiles",
        "E-commerce Shop: Online product browsing, quantity management, and shopping cart functionality",
        "Waste Collection Appointments: Appointment booking for businesses to schedule waste collection services",
        "Contact: Dynamic contact form for submitting inquiries and requests",
        "Homepage: Informative homepage with clear navigation to the platform’s main features",
        "User & Business Profiles: Personalized access management and activity tracking for each user and business",
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "JavaScript", "Tailwind"],
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
