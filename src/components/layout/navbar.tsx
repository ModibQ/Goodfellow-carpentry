import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoSrc from "@/assets/logo.png"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center cursor-pointer">
            <img
              src={logoSrc}
              alt="Goodfellow & Sons Construction"
              className={`h-28 w-auto transition-all duration-300 ${isScrolled ? "" : "[filter:drop-shadow(0_1px_6px_rgba(255,255,255,0.9))_drop-shadow(0_0_20px_rgba(255,255,255,0.4))]"}`}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollTo("services")} className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${isScrolled ? "text-muted-foreground" : "text-white/80 hover:text-white"}`}>Services</button>
            <button onClick={() => scrollTo("about")} className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${isScrolled ? "text-muted-foreground" : "text-white/80 hover:text-white"}`}>About</button>
            <button onClick={() => scrollTo("gallery")} className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${isScrolled ? "text-muted-foreground" : "text-white/80 hover:text-white"}`}>Our Work</button>
            <button onClick={() => scrollTo("testimonials")} className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${isScrolled ? "text-muted-foreground" : "text-white/80 hover:text-white"}`}>Reviews</button>
            <Button onClick={() => scrollTo("contact")} variant={isScrolled ? "default" : "secondary"} className="font-semibold cursor-pointer">
              Get an Estimate
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className={`h-6 w-6 ${isScrolled ? "" : "text-white"}`} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg py-4 px-4 flex flex-col space-y-4">
          <button onClick={() => scrollTo("services")} className="text-left text-foreground font-medium py-2 border-b border-border/50">Services</button>
          <button onClick={() => scrollTo("about")} className="text-left text-foreground font-medium py-2 border-b border-border/50">About Us</button>
          <button onClick={() => scrollTo("gallery")} className="text-left text-foreground font-medium py-2 border-b border-border/50">Our Work</button>
          <button onClick={() => scrollTo("testimonials")} className="text-left text-foreground font-medium py-2 border-b border-border/50">Reviews</button>
          <Button onClick={() => scrollTo("contact")} className="w-full mt-4">
            Get an Estimate
          </Button>
        </div>
      )}
    </nav>
  );
}
