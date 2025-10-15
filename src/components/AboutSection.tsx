import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A quick insight into who I am
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-slide-up animate-fade-in">
          <Card className="glass p-8 border-border/50 hover-lift hover-glow">
            <p className="text-foreground/80 leading-relaxed mb-4">
              Final-year <strong>Software Engineering</strong> student with a passion for <strong>full-stack development</strong>, <strong>cloud computing</strong>, and <strong>AI</strong>.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
  Gained hands-on experience at{" "}
  <a
    href="https://optimaje.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary font-semibold hover:underline"
  >
    Optima Junior Enterprise
  </a>
  , contributing to real client projects and strengthening{" "}
  <strong>technical skills</strong>, <strong>teamwork</strong>, and{" "}
  <strong>project management</strong>.
</p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              Academic and personal projects helped me build a solid understanding of <strong>software design</strong>, <strong>databases</strong>, and <strong>best practices</strong>.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              I am actively seeking p<strong>rofessional opportunities </strong>that allow me to leverage my <strong>skills</strong> while continuing to grow.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
