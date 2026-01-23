import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getAllWorks } from "@/data/projects";
import { AnimatedSection, StaggerContainer, StaggerItem, HoverScale } from "./ScrollAnimations";

// Import project images
import balanceIn1 from "@/assets/balance-in-1.jpg";
import strangers1 from "@/assets/strangers-1.png";
import wfdal1 from "@/assets/wfdal-1.jpg";
import bodyBorder1 from "@/assets/body-border-1.jpg";

// Image mapping for projects
const projectImages: Record<string, string> = {
  "balance-in": balanceIn1,
  "strangers-in-the-night": strangers1,
  "what-falls-doesnt-always-land": wfdal1,
  "the-body-as-border": bodyBorder1,
};

const WorksSection = () => {
  // Get all works sorted by year (newest first)
  const performances = getAllWorks();

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

        {/* Performances Grid - 2x2 layout */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {performances.map((work) => (
            <StaggerItem key={work.id}>
              <HoverScale>
                <Link to={`/project/${work.id}`}>
                  <article className="work-card group cursor-pointer">
                    {/* Image Area */}
                    <div className="aspect-[4/3] bg-secondary relative overflow-hidden">
                      {projectImages[work.id] ? (
                        <img 
                          src={projectImages[work.id]} 
                          alt={work.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30">
                          <span className="text-6xl font-light">{work.title.charAt(0)}</span>
                        </div>
                      )}
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                      <p className="text-sm text-muted-foreground font-light leading-relaxed line-clamp-3">
                        {work.description}
                      </p>
                    </div>
                  </article>
                </Link>
              </HoverScale>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Link to Short Movies Page */}
        <AnimatedSection className="text-center mt-16">
          <Link 
            to="/short-movies"
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-light tracking-wide"
          >
            View Short Movies & Films <ArrowUpRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WorksSection;
