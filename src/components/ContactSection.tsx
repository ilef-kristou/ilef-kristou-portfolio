import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ilef.kristou@etudiant-fst.utm.tn",
      link: "mailto:ilef.kristou@etudiant-fst.utm.tn",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+216 54 219 220",
      link: "tel:+21654219220",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ilef-kristou",
      link: "https://github.com/ilef-kristou",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Ilef Kristou",
      link: "https://linkedin.com/in/ilef-kristou-99374a302",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target={info.link.startsWith("http") ? "_blank" : undefined}
                rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block"
              >
                <Card className="glass p-4 hover:border-primary/50 transition-all duration-300 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Card className="glass p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-secondary/50 border-border/50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-secondary/50 border-border/50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-secondary/50 border-border/50 min-h-32"
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-24 text-muted-foreground">
        <p>© 2025 Ilef Kristou — Built with ❤️ and React</p>
      </div>
    </section>
  );
};

export default ContactSection;
