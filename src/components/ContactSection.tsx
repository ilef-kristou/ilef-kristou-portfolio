import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_a93nxfb",
      "template_0md4u9x",
      formData,
      "WJNR-3GsQ_7EI4a1K"
    )
    .then(() => {
      toast({ title: "Message Sent!", description: "I'll get back to you soon!" });
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      toast({ title: "Error", description: "Something went wrong. Please try again." });
      console.error("EmailJS Error:", error);
    })
    .finally(() => setLoading(false));
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "ilefkristou992@gmail.com", link: "mailto:ilefkristou992@gmail.com" },
    { icon: Phone, label: "Phone", value: "+216 54 219 220", link: "tel:+21654219220" },
    { icon: Github, label: "GitHub", value: "github.com/ilef-kristou", link: "https://github.com/ilef-kristou" },
    { icon: Linkedin, label: "LinkedIn", value: "Ilef Kristou", link: "https://linkedin.com/in/ilef-kristou-99374a302" },
    { icon: MapPin, label: "Location", value: "Tunis, Tunisia", link: "https://www.google.com/maps/place/Tunis,+Tunisia" },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In <span className="gradient-text">Touch</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Let's discuss your next project</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          {/* Contact Information */}
          <div className="space-y-5 animate-slide-up animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            {contactInfo.map((info, index) => (
              <a 
                key={index} 
                href={info.link} 
                target={info.link.startsWith("http") ? "_blank" : undefined} 
                rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block"
              >
                <Card 
                  className="glass p-4 hover:border-primary/50 transition-all duration-300 hover:translate-x-2 hover:scale-105 hover-glow animate-fade-in" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
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
          <div className="animate-slide-up animate-scale-in h-full" style={{ animationDelay: "0.2s" }}>
            <Card className="glass p-8 hover-lift hover-glow h-full">
              <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="bg-secondary/50 border-border/50" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="bg-secondary/50 border-border/50" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required className="bg-secondary/50 border-border/50 min-h-32" placeholder="Your message..." />
                  </div>
                </div>
                <div className="mt-auto pt-6">
                  <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90 transition-all hover:scale-105 hover-glow" size="lg" disabled={loading}>
                    <Send size={18} className="mr-2" />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
<div className="text-center mt-24 text-muted-foreground">
  <p>
    © 2025 Ilef Kristou — Created with passion, powered by modern technologies.<br />
    All rights reserved.
  </p>
</div>

    </section>
  );
};

export default ContactSection;