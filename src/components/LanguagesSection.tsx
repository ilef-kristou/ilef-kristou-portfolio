import { Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const LanguagesSection = () => {
  const languages = [
    {
      name: "French",
      level: "Native",
      proficiency: 100,
    },
    {
      name: "Arabic",
      level: "Native",
      proficiency: 100,
    },
    {
      name: "English",
      level: "Professional",
      proficiency: 85,
    },
  ];

  return (
    <section id="languages" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Globe className="w-10 h-10 text-primary animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Languages</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Multilingual communication capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {languages.map((language, index) => (
            <Card
              key={index}
              className="glass p-8 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 animate-scale-in hover:scale-105 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {language.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    {language.level}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out animate-slide-in-left"
                      style={{
                        width: `${language.proficiency}%`,
                        animationDelay: `${index * 0.2 + 0.3}s`,
                      }}
                    />
                  </div>
                  <p className="text-xs text-center text-muted-foreground">
                    {language.proficiency}% Proficiency
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
