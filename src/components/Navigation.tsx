import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-xl shadow-md py-4" : "bg-card/80 backdrop-blur-sm py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-lg font-bold">
            IK
          </div>
          <span className="text-xl font-bold">Ilef Kristou</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
            >
              {item.label}
            </button>
          ))}
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            Contact
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-4 mx-6 rounded-xl p-6 animate-slide-up">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-foreground/80 hover:text-primary transition-colors duration-200 font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-primary hover:opacity-90 transition-opacity w-full"
            >
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
