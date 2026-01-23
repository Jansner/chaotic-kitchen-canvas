import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, shortFilms, getAllWorks } from "@/data/projects";
import { AnimatedSection, StaggerContainer, StaggerItem, HoverScale } from "./ScrollAnimations";

const WorksSection = () => {
  // Get all works sorted by year (newest first)
  const allWorks = getAllWorks();
  const performances = allWorks.filter(w => w.type === 'performance');
  const films = allWorks.filter(w => w.type === 'film');

  return (
    <section id="works" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide">
            Works
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            A collection of choreographic works exploring identity, perception, and the human condition.
          </p>
        </AnimatedSection>

        {/* Performances Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {performances.map((work) => (
            <StaggerItem key={work.id}>
              <HoverScale>
                <Link to={`/project/${work.id}`}>
                  <article className="work-card group cursor-pointer">
                    {/* Placeholder Image Area */}
                    <div className="aspect-[4/3] bg-secondary relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30">
                        <span className="text-6xl font-light">{work.title.charAt(0)}</span>
                      </div>
                      {/* Hover Arrow */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                        <ArrowUpRight className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-baseline justify-between mb-2">
                        <h3 className="text-xl md:text-2xl font-light tracking-wide group-hover:text-primary transition-colors duration-300">
                          {work.title}
                        </h3>
                        <span className="text-sm text-muted-foreground">{work.year}</span>
                      </div>
                      <p className="text-sm text-primary/80 uppercase tracking-wider mb-3">
                        {work.subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        {work.description}
                      </p>
                    </div>
                  </article>
                </Link>
              </HoverScale>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Short Films Section */}
        {films.length > 0 && (
          <>
            <AnimatedSection className="text-center mt-24 mb-12">
              <h3 className="text-3xl md:text-4xl font-light tracking-wide">
                Short Films
              </h3>
              <div className="section-divider" />
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {films.map((film) => (
                <StaggerItem key={film.id}>
                  <HoverScale>
                    <Link to={`/project/${film.id}`}>
                      <article className="work-card group cursor-pointer">
                        <div className="aspect-video bg-secondary relative overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30">
                            <span className="text-5xl font-light">{film.title.charAt(0)}</span>
                          </div>
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                            <ArrowUpRight className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-baseline justify-between mb-2">
                            <h3 className="text-xl font-light tracking-wide group-hover:text-primary transition-colors duration-300">
                              {film.title}
                            </h3>
                            <span className="text-sm text-muted-foreground">{film.year}</span>
                          </div>
                          <p className="text-sm text-primary/80 uppercase tracking-wider mb-2">
                            {film.subtitle}
                          </p>
                          <p className="text-sm text-muted-foreground font-light">
                            {film.description}
                          </p>
                        </div>
                      </article>
                    </Link>
                  </HoverScale>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </>
        )}
      </div>
    </section>
  );
};

export default WorksSection;
