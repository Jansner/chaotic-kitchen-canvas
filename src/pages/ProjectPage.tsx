import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play, Calendar, MapPin, Users, Clock, FileText } from "lucide-react";
import { projects, shortFilms, musicVideos } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection, FadeInSection, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";

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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32">
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

        {/* Presentations Section */}
        {project.details?.presentations && project.details.presentations.length > 0 && (
          <section className="py-16 bg-card">
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
          <section className="py-16">
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
          <section className="py-16 bg-card">
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
                      className="group relative aspect-video bg-secondary flex flex-col items-center justify-center border border-border hover:border-primary/50 transition-all duration-300"
                    >
                      <Play className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <span className="mt-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {video.title}
                      </span>
                      <span className="absolute top-2 right-2 text-xs text-primary/60 uppercase">
                        {video.type}
                      </span>
                    </a>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Technical Info */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="flex items-center gap-3 text-muted-foreground">
                <FileText className="w-5 h-5" />
                <p className="font-light text-sm">
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
