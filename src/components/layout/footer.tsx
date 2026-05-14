import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "wouter";
import logoSrc from "@/assets/logo.png";
import { SITE_CONFIG } from "@/config";

export function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16 clip-diagonal-reverse -mt-[3vw] pt-[6vw]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center cursor-pointer">
              <img
                src={logoSrc}
                alt="Goodfellow & Sons Construction"
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs opacity-80">
              Three generations of uncompromising craftsmanship in the MetroWest area.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm text-muted opacity-80">
              <li>Custom Decks</li>
              <li>Whole-Home Remodels</li>
              <li>Exterior Siding</li>
              <li>Finish Carpentry</li>
              <li>Additions & Framing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted opacity-80">
              <li><button onClick={() => scrollTo("about")} className="hover:text-primary transition-colors cursor-pointer">Our Story</button></li>
              <li><button onClick={() => scrollTo("gallery")} className="hover:text-primary transition-colors cursor-pointer">Project Gallery</button></li>
              <li><button onClick={() => scrollTo("testimonials")} className="hover:text-primary transition-colors cursor-pointer">Client Reviews</button></li>
              <li><button onClick={() => scrollTo("contact")} className="hover:text-primary transition-colors cursor-pointer">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium mb-4 text-white">Contact</h4>
            <ul className="space-y-4 text-sm text-muted opacity-80">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Based in {SITE_CONFIG.baseTown}, MA — Serving the MetroWest area</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href={SITE_CONFIG.phone.href} className="hover:text-primary transition-colors">{SITE_CONFIG.phone.display}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-primary transition-colors">{SITE_CONFIG.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Goodfellow & Sons Construction. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
