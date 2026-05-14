import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/images";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden clip-diagonal pb-[3vw]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Custom wooden deck attached to a New England home"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-foreground/60 backdrop-blur-[2px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] tracking-tight">
            Craftsmanship <br className="hidden md:block" />
            <span className="text-primary italic">that lasts</span> generations.
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed font-light">
            We are MetroWest's trusted family builders. From custom decks to whole-home remodels, we build with integrity, precision, and a handshake that means something.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" onClick={scrollToContact} className="text-base h-14 px-8 cursor-pointer">
              Get a Free Estimate
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToServices} className="text-base h-14 px-8 bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white cursor-pointer">
              View Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
