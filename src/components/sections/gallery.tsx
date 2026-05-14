import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { IMAGES } from "@/images";

export function Gallery() {
  const headerRef = useScrollReveal();

  return (
    <section id="gallery" className="py-24 bg-background bg-noise">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={headerRef} className="reveal-on-scroll text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-medium tracking-wider uppercase text-sm mb-3">Our Work</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">The Proof is in the Details</h3>
          <p className="text-muted-foreground text-lg">
            A portfolio of our recent projects across MetroWest. Every tight joint and straight line speaks for itself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {IMAGES.gallery.map((img, i) => {
            const imgRef = useScrollReveal({ threshold: 0.1 });
            return (
              <div
                key={i}
                ref={imgRef}
                className={`reveal-on-scroll group relative overflow-hidden rounded-lg bg-muted ${img.span}`}
                style={{ transitionDelay: `${(i % 3) * 100}ms` }}
              >
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 z-20 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20">
                  Example
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <p className="text-white font-medium">{img.alt}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
