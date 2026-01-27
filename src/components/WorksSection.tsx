import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getAllWorks } from "@/data/projects";
import { AnimatedSection, StaggerContainer, StaggerItem, HoverScale } from "./ScrollAnimations";

// Import project images
import balanceInPreview from "@/assets/balance-in-preview.png";
import strangers2 from "@/assets/strangers-2.png";
import wfdal1 from "@/assets/wfdal-1.jpg";
import throughLookingGlassPreview from "@/assets/through-looking-glass-preview.jpg";
import throughLookingGlassPreviewNew from "@/assets/through-looking-glass-preview-new.jpg";
import liminalPhantomsPreview from "@/assets/liminal-phantoms-preview.jpg";
import noiseWithoutSilencePreview from "@/assets/noise-without-silence-preview.png";
import gloomPreview from "@/assets/gloom-preview.jpg";
import justLikeOldDaysPreview from "@/assets/just-like-old-days-preview.jpg";
import haitunPreviewNew from "@/assets/haitun-preview-new.jpg";
import fikaPreviewNew from "@/assets/fika-preview-new.png";
import rorschachPreview from "@/assets/rorschach-preview.jpg";
import storfagelPreview from "@/assets/storfagel-preview.jpg";
import imbrutePreview from "@/assets/imbrute-preview.png";
import viciousCyclePreview from "@/assets/vicious-cycle-preview.jpg";
import beneathPreviewNew from "@/assets/beneath-preview-new.png";

// Image mapping for projects - updated with swaps
const projectImages: Record<string, string> = {
  "balance-in": balanceInPreview,
  "strangers-in-the-night": strangers2, // Swapped
  "what-falls-doesnt-always-land": wfdal1,
  "the-body-as-border": throughLookingGlassPreview, // Using Through Looking Glass preview for Body as Border
  "liminal-phantoms": liminalPhantomsPreview,
  "noise-without-silence": noiseWithoutSilencePreview,
  "gloom": gloomPreview,
  "through-the-looking-glass": throughLookingGlassPreviewNew, // New preview
  "just-like-old-days": justLikeOldDaysPreview,
  "haitun": haitunPreviewNew, // New preview
  "fika": fikaPreviewNew, // New preview
  "rorschach": rorschachPreview,
  "stor-fagel": storfagelPreview,
  "imburte-union": imbrutePreview,
  "vicious-cycle": viciousCyclePreview,
  "beneath": beneathPreviewNew, // New preview
};

const WorksSection = () => {
  // Get all works sorted by custom order
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

        {/* Performances Grid - 2 columns on desktop, more spacing */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
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
                      {/* Quote for Balance In */}
                      {work.quote && (
                        <blockquote className="mt-4 pt-4 border-t border-border/30">
                          <p className="text-xs italic text-foreground/60 line-clamp-2">
                            "{work.quote.text}"
                          </p>
                          <cite className="text-xs text-primary/60 mt-1 block">— {work.quote.author}</cite>
                        </blockquote>
                      )}
                    </div>
                  </article>
                </Link>
              </HoverScale>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Link to Films & Gallery Page */}
        <AnimatedSection className="text-center mt-16">
          <Link 
            to="/short-movies"
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-light tracking-wide"
          >
            View Films & Gallery <ArrowUpRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WorksSection;
