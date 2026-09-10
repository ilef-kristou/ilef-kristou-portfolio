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
      <strong>Software Engineer</strong> with a strong focus on{" "}
      <strong>Full-Stack Development and DevOps</strong>, passionate about
      turning ideas into <strong>practical and impactful software solutions</strong>.
    </p>

    <p className="text-foreground/80 leading-relaxed mb-4">
      My experience includes <strong>web application development</strong>,{" "}
      <strong>software architecture</strong>, <strong>CI/CD</strong>,{" "}
      <strong>cloud environments</strong>, and{" "}
      <strong>AI-powered solutions</strong>, allowing me to work across
      different stages of the software development lifecycle.
    </p>

    <p className="text-foreground/80 leading-relaxed mb-4">
      Through my academic and professional projects, I’ve had the opportunity
      to work on <strong>real-world applications</strong>, explore modern
      technologies, and develop a strong approach to{" "}
      <strong>problem-solving</strong>, <strong>collaboration</strong>, and{" "}
      <strong>continuous learning</strong>.
    </p>

    <p className="text-foreground/80 leading-relaxed">
      Currently seeking a <strong>professional opportunity</strong> where I
      can apply my <strong>technical expertise</strong>, contribute to{" "}
      <strong>ambitious projects</strong>, and help build{" "}
      <strong>innovative, high-impact technology solutions</strong>.
    </p>
  </Card>
</div>
      </div>
    </section>
  );
};

export default AboutSection;
