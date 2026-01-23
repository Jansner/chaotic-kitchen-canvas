import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play, Calendar, MapPin, Users, Clock, FileText, ExternalLink } from "lucide-react";
import { projects, shortFilms, musicVideos } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection, FadeInSection, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";

// Import project images
import balanceIn1 from "@/assets/balance-in-1.jpg";
import balanceIn2 from "@/assets/balance-in-2.jpg";
import balanceIn3 from "@/assets/balance-in-3.jpg";
import strangers1 from "@/assets/strangers-1.png";
import strangers2 from "@/assets/strangers-2.png";
import wfdal1 from "@/assets/wfdal-1.jpg";
import wfdal2 from "@/assets/wfdal-2.jpg";
import bodyBorder1 from "@/assets/body-border-1.jpg";
import bodyBorder2 from "@/assets/body-border-2.jpg";

// Image mapping for projects
const projectImages: Record<string, { main: string; gallery: string[] }> = {
  "balance-in": {
    main: balanceIn1,
    gallery: [balanceIn2, balanceIn3]
  },
  "strangers-in-the-night": {
    main: strangers1,
    gallery: [strangers2]
  },
  "what-falls-doesnt-always-land": {
    main: wfdal1,
    gallery: [wfdal2]
  },
  "the-body-as-border": {
    main: bodyBorder1,
    gallery: [bodyBorder2]
  },
};

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const allWorks = [...projects, ...shortFilms, ...musicVideos];
  const project = allWorks.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const images = projectImages[project.id];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-24">
        {/* Hero Image Section */}
        {images?.main && (
          <section className="relative">
            <div className="w-full h-[50vh] md:h-[70vh] relative overflow-hidden">
              <img 
                src={images.main} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>
          </section>
        )}

        {/* Title Section */}
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto px-6">
            <FadeInSection>
              <Link 
                to="/#works" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Works
              </Link>
            </FadeInSection>

            <AnimatedSection>
              <div className="max-w-4xl">
                <span className="text-primary text-sm uppercase tracking-widest">{project.year}</span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wide mt-2 mb-4">
                  {project.title}
                </h1>
                <p className="text-xl md:text-2xl text-primary/80 uppercase tracking-wider mb-8">
                  {project.subtitle}
                </p>
                <div className="text-lg text-foreground/80 font-light leading-relaxed max-w-3xl whitespace-pre-line">
                  {project.fullDescription || project.description}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Details Section */}
        {project.details && (
          <section className="py-16 bg-card">
            <div className="container mx-auto px-6">
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {project.details.duration && (
                  <StaggerItem>
                    <div className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Duration</h3>
                        <p className="font-light">{project.details.duration}</p>
                      </div>
                    </div>
                  </StaggerItem>
                )}

                {project.details.premiere && (
                  <StaggerItem>
                    <div className="flex items-start gap-4">
                      <Calendar className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Premiere</h3>
                        <p className="font-light">{project.details.premiere}</p>
                      </div>
                    </div>
                  </StaggerItem>
                )}

                {project.details.location && (
                  <StaggerItem>
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Location</h3>
                        <p className="font-light">{project.details.location}</p>
                      </div>
                    </div>
                  </StaggerItem>
                )}

                {project.details.performers && (
                  <StaggerItem>
                    <div className="flex items-start gap-4">
                      <Users className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Performers</h3>
                        <p className="font-light">{project.details.performers}</p>
                      </div>
                    </div>
                  </StaggerItem>
                )}
              </StaggerContainer>
            </div>
          </section>
        )}

        {/* Credits Section */}
        {project.details && (
          <section className="py-16">
            <div className="container mx-auto px-6">
              <AnimatedSection>
                <h2 className="text-3xl font-light tracking-wide mb-8">Credits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
                  {project.details.choreography && (
                    <div className="border-l-2 border-primary/30 pl-4">
                      <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Choreography</h3>
                      <p className="font-light">{project.details.choreography}</p>
                    </div>
                  )}
                  {project.details.music && (
                    <div className="border-l-2 border-primary/30 pl-4">
                      <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Music</h3>
                      <p className="font-light">{project.details.music}</p>
                    </div>
                  )}
                  {project.details.production && (
                    <div className="border-l-2 border-primary/30 pl-4">
                      <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Production</h3>
                      <p className="font-light">{project.details.production}</p>
                    </div>
                  )}
                  {project.details.credits && (
                    <div className="border-l-2 border-primary/30 pl-4 md:col-span-2">
                      <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Additional Credits</h3>
                      <p className="font-light">{project.details.credits}</p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Gallery Section */}
        {images?.gallery && images.gallery.length > 0 && (
          <section className="py-16 bg-card">
            <div className="container mx-auto px-6">
              <AnimatedSection>
                <h2 className="text-3xl font-light tracking-wide mb-8">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {images.gallery.map((img, index) => (
                    <div key={index} className="aspect-[4/3] overflow-hidden group">
                      <img 
                        src={img} 
                        alt={`${project.title} - Image ${index + 2}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Presentations Section */}
        {project.details?.presentations && project.details.presentations.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-6">
              <AnimatedSection>
                <h2 className="text-3xl font-light tracking-wide mb-8">Presentations</h2>
                <div className="space-y-3 max-w-2xl">
                  {project.details.presentations.map((presentation, index) => (
                    <div key={index} className="flex items-center gap-3 py-2 border-b border-border/30">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="font-light">{presentation}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Themes Section */}
        {project.details?.themes && (
          <section className="py-16 bg-card">
            <div className="container mx-auto px-6">
              <AnimatedSection>
                <h2 className="text-3xl font-light tracking-wide mb-8">Themes</h2>
                <div className="flex flex-wrap gap-3">
                  {project.details.themes.map((theme, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 border border-primary/30 text-sm uppercase tracking-wider"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Video Section */}
        {project.videoLinks && project.videoLinks.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-6">
              <AnimatedSection>
                <h2 className="text-3xl font-light tracking-wide mb-8">Watch</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.videoLinks.map((video, index) => (
                    <a
                      key={index}
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-5 bg-secondary/30 border border-primary/10 hover:border-primary/50 transition-colors"
                    >
                      <div>
                        <span className="text-xs text-primary/60 uppercase tracking-wider block mb-1">{video.type}</span>
                        <span className="text-foreground font-light group-hover:text-primary transition-colors">{video.title}</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Technical Info */}
        <section className="py-16 border-t border-primary/10">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="flex items-center gap-3 text-muted-foreground justify-center">
                <FileText className="w-5 h-5" />
                <p className="font-light text-sm italic">
                  Technical rider and lighting plot are available on request.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectPage;
