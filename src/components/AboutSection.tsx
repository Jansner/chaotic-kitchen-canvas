const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[3/4] bg-secondary relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
                <span className="text-8xl font-light">LJ</span>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/30" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6">
              About
            </h2>
            <div className="section-divider !mx-0 !my-6" />
            
            <div className="space-y-6 text-foreground/80 font-light leading-relaxed">
              <p>
                <strong className="text-foreground font-normal">Chaotic Kitchen</strong> is a platform for experimental and interdisciplinary creations, fostering a space where movement, theatre, and visual storytelling collide to create powerful and transformative performances.
              </p>
              
              <p>
                Founded by <strong className="text-foreground font-normal">Linus Jansner</strong>, a Swedish choreographer, performer, and interdisciplinary artist known for bold, physical, and emotionally charged works that blend contemporary dance, physical theatre, and visual arts.
              </p>

              <p>
                Our creations push the boundaries of movement, storytelling, and human connection, often exploring themes of identity, societal expectations, captivity, and transformation.
              </p>

              <blockquote className="border-l-2 border-primary pl-6 my-8 italic text-lg">
                "Viewing my work is like looking into a fractured mirror—each angle reveals a new layer, a hidden detail, a story waiting to be seen."
              </blockquote>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div>
                <div className="text-3xl md:text-4xl font-light text-primary">15+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Works</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-primary">10+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Countries</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-primary">8+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
