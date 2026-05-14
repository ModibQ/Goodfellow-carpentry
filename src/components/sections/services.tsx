import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Hammer, Home, PaintBucket, Wrench } from "lucide-react";
import { IMAGES } from "@/images";

const services = [
  {
    title: "Custom Decks & Porches",
    description: "Built for New England weather. We use premium mahogany, cedar, and top-tier composites for outdoor living spaces that endure.",
    icon: <Hammer className="w-8 h-8 text-primary" />,
    image: IMAGES.services.decks,
  },
  {
    title: "Whole-Home Remodels",
    description: "From concept to final nail. We handle extensive renovations while respecting the architectural integrity of your home.",
    icon: <Home className="w-8 h-8 text-primary" />,
    image: IMAGES.services.remodel,
  },
  {
    title: "Exterior Siding & Trim",
    description: "Flawless cedar shingle and clapboard installation. We seal your home against the elements with meticulous attention to detail.",
    icon: <PaintBucket className="w-8 h-8 text-primary" />,
    image: IMAGES.services.siding,
  },
  {
    title: "Custom Finish Carpentry",
    description: "Crown molding, wainscoting, built-ins, and custom staircases. The fine details that turn a house into a crafted home.",
    icon: <Wrench className="w-8 h-8 text-primary" />,
    image: IMAGES.services.finish,
  },
];

export function Services() {
  const headerRef = useScrollReveal();

  return (
    <section id="services" className="py-24 bg-background bg-noise relative">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={headerRef} className="reveal-on-scroll text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-medium tracking-wider uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">What We Build</h3>
          <p className="text-muted-foreground text-lg">
            Specializing in high-quality residential construction. We don't cut corners, and we don't rush. We do it right the first time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const cardRef = useScrollReveal({ threshold: 0.1 });
            return (
              <div
                key={index}
                ref={cardRef}
                className="reveal-on-scroll group rounded-lg overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden relative">
                  <div className="absolute inset-0 bg-foreground/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-8 sm:w-3/5 flex flex-col justify-center">
                  <div className="mb-4 bg-accent/50 w-16 h-16 rounded-full flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-serif font-bold mb-3">{service.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
