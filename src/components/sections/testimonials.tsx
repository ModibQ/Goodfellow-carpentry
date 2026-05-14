import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/config";

const testimonials = SITE_CONFIG.testimonials;

export function Testimonials() {
  const headerRef = useScrollReveal();

  return (
    <section id="testimonials" className="py-24 bg-accent/30 relative border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={headerRef} className="reveal-on-scroll text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-medium tracking-wider uppercase text-sm mb-3">Client Reviews</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">Word of Mouth</h3>
          <p className="text-muted-foreground text-lg">
            Our reputation is built on the satisfaction of our neighbors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => {
            const cardRef = useScrollReveal({ threshold: 0.1 });
            return (
              <div key={i} ref={cardRef} className="reveal-on-scroll" style={{ transitionDelay: `${i * 150}ms` }}>
                <Card className="h-full bg-card border-border shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex gap-1 mb-6 text-primary">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <blockquote className="flex-grow font-serif text-lg text-foreground/80 leading-relaxed mb-6">
                      "{t.quote}"
                    </blockquote>
                    <div className="mt-auto">
                      <p className="font-bold text-foreground">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
