import { Card } from "@/components/ui/card";
import { 
  Code2, 
  Cloud, 
  Brain,
  GitBranch
} from "lucide-react";

const ServicesSection = () => {
  const skills = [
    {
      title: "Full-Stack Development",
      icon: Code2,
      description: "Creating web applications with both front-end and back-end technologies.",
      features: [
        "User interface design",
        "Server-side development",
        "API integration",
        "Responsive layouts"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cloud Architecture",
      icon: Cloud,
      description: "Working on deploying and managing applications using cloud platforms.",
      features: [
        "Cloud service usage",
        "App hosting setup",
        "Cloud storage management",
        "Scalability exploration"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      description: "Exploring data analysis and basic machine learning techniques.",
      features: [
        "Neural network design",
        "Deep learning with TensorFlow/PyTorch",
        "Model training",
        "Dataset preprocessing"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "DevOps & CI/CD",
      icon: GitBranch,
      description: "Using tools to streamline software development and deployment.",
      features: [
        "Version control",
        "Build automation",
        "Testing",
        "Containerization"
      ],
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Delivering innovative and effective solutions to bring your digital projects to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="glass overflow-hidden hover:border-primary/50 transition-all duration-300 animate-slide-up hover-lift hover-glow group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 space-y-4">
                {/* Icon Header */}
                <div className="flex flex-col items-center text-center mb-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mb-3`}>
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                    {skill.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-foreground/70 text-sm leading-relaxed text-center">
                  {skill.description}
                </p>

                {/* Features */}
                <div className="space-y-2 text-center">
                 
                  <ul className="space-y-1.5 list-none mx-auto inline-block text-left">
                    {skill.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-start gap-2 text-foreground/80 text-xs leading-relaxed"
                      >
                        <span className="text-primary mt-0.5 text-sm">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
