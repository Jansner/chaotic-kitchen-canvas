import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { shortFilms, musicVideos } from "@/data/projects";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import { Play, Film, Music } from "lucide-react";

const ShortMoviesPage = () => {
  // Sort films by order
  const sortedFilms = [...shortFilms].sort((a, b) => (a.order || 999) - (b.order || 999));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide mb-6">
                Films & Gallery
              </h1>
              <div className="section-divider" />
              <p className="text-muted-foreground font-light leading-relaxed">
                A space for fun and another medium of artistic expression — a creative playground 
                beyond the stage. Editing, filming, and production by Linus Jansner, plus collaborators.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Short Films Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6">
            <AnimatedSection className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Film className="w-6 h-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-light tracking-wide">Short Films</h2>
              </div>
              <div className="section-divider !mx-0" />
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sortedFilms.map((film) => (
                <StaggerItem key={film.id}>
                  <div className="group relative bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
                    {/* Thumbnail/Placeholder */}
                    <div className="aspect-video bg-secondary relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-16 h-16 text-primary/30 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                      </div>
                      {film.videoLinks && film.videoLinks[0] && (
                        <a 
                          href={film.videoLinks[0].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 z-10"
                          aria-label={`Watch ${film.title}`}
                        />
                      )}
                    </div>
                    
                    {/* Info */}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-light tracking-wide group-hover:text-primary transition-colors">
                          {film.title}
                        </h3>
                        <span className="text-sm text-muted-foreground">{film.year}</span>
                      </div>
                      <p className="text-muted-foreground font-light mb-4">
                        {film.description}
                      </p>
                      
                      {/* Video Links */}
                      {film.videoLinks && film.videoLinks.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {film.videoLinks.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs px-3 py-1 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              <Play className="w-3 h-3" />
                              {link.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Drone Music Videos Section - Smaller cards */}
        <section className="py-12 md:py-16 bg-card">
          <div className="container mx-auto px-6">
            <AnimatedSection className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Music className="w-5 h-5 text-primary" />
                <h2 className="text-2xl md:text-3xl font-light tracking-wide">Drone Music Videos</h2>
              </div>
              <div className="section-divider !mx-0" />
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {musicVideos.map((video) => (
                <StaggerItem key={video.id}>
                  <div className="group relative bg-background border border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
                    {/* Thumbnail/Placeholder - Smaller aspect ratio */}
                    <div className="aspect-square bg-secondary relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-8 h-8 text-primary/30 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                      </div>
                      {video.videoLinks && video.videoLinks[0] && (
                        <a 
                          href={video.videoLinks[0].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 z-10"
                          aria-label={`Watch ${video.title}`}
                        />
                      )}
                    </div>
                    
                    {/* Info - Compact */}
                    <div className="p-3">
                      <h3 className="text-sm font-light tracking-wide group-hover:text-primary transition-colors truncate">
                        {video.title}
                      </h3>
                      <span className="text-xs text-muted-foreground">{video.year}</span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShortMoviesPage;
