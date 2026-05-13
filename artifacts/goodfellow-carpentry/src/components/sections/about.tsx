import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const contentRef = useScrollReveal();
  const imageRef = useScrollReveal();

  return (
    <section id="about" className="py-24 bg-foreground text-background relative clip-diagonal -mt-[3vw] pt-[6vw] pb-[6vw] clip-diagonal-reverse-bottom">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div ref={imageRef} className="reveal-on-scroll order-2 lg:order-1 relative">
            <div className="relative rounded-lg overflow-hidden aspect-square border-8 border-background/10">
              <img 
                src="/images/about-woodshop.png" 
                alt="Traditional woodworking shop with tools and sawdust" 
                className="w-full h-full object-cover grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary rounded-full blur-3xl opacity-30 pointer-events-none"></div>
          </div>

          <div ref={contentRef} className="reveal-on-scroll order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-primary font-medium tracking-wider uppercase text-sm mb-3">Our Story</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Real Craftsmanship. <br/>Real People.</h3>
            </div>
            
            <div className="space-y-4 text-lg text-white/80 font-light leading-relaxed">
              <p>
                Goodfellow & Sons isn't a corporate franchise. We are a family of carpenters who learned the trade the old-fashioned way—by doing the work, respecting the materials, and treating every home as if it were our own.
              </p>
              <p>
                For over three decades, we've been serving the MetroWest community. The majority of our business comes from the best kind of marketing there is: a neighbor telling a neighbor about the good work we did.
              </p>
            </div>

            <ul className="space-y-4 pt-4">
              {[
                "Fully licensed and insured in Massachusetts",
                "Owner on-site for every project, every day",
                "Transparent pricing with no hidden surprises",
                "Clean worksites and respectful crews"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-white/90 font-medium">{item}</span>
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
      <style>{`
        .clip-diagonal-reverse-bottom {
          clip-path: polygon(0 0, 100% 0, 100% calc(100% - 3vw), 0 100%);
        }
      `}</style>
    </section>
  );
}
