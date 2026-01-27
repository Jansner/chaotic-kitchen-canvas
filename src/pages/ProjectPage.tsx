import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Users, Clock, FileText, ExternalLink, Play, Award } from "lucide-react";
import { projects, shortFilms, musicVideos } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection, FadeInSection, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";

// Import project images
import balanceIn1 from "@/assets/balance-in-1.jpg";
import balanceIn2 from "@/assets/balance-in-2.jpg";
import balanceIn3 from "@/assets/balance-in-3.jpg";
import balanceInPreview from "@/assets/balance-in-preview.png";
import strangers1 from "@/assets/strangers-1.png";
import strangers2 from "@/assets/strangers-2.png";
import wfdal1 from "@/assets/wfdal-1.jpg";
import wfdal2 from "@/assets/wfdal-2.jpg";
import wfdal3 from "@/assets/wfdal-3.jpg";
import bodyBorder1 from "@/assets/body-border-1.jpg";
import bodyBorder2 from "@/assets/body-border-2.jpg";
import bodyBorder3 from "@/assets/body-border-3.jpg";
import bodyBorderPreview from "@/assets/body-border-preview.jpg";
import liminalPhantomsPreview from "@/assets/liminal-phantoms-preview.jpg";
import liminalPhantomsGallery from "@/assets/liminal-phantoms-gallery.jpg";
import noiseWithoutSilencePreview from "@/assets/noise-without-silence-preview.png";
import gloomPreview from "@/assets/gloom-preview.jpg";
import throughLookingGlassPreview from "@/assets/through-looking-glass-preview.jpg";
import justLikeOldDaysPreview from "@/assets/just-like-old-days-preview.jpg";

// Image mapping for projects
const projectImages: Record<string, { main: string; gallery: string[] }> = {
  "balance-in": {
    main: balanceInPreview,
    gallery: [balanceIn1, balanceIn2, balanceIn3]
  },
  "strangers-in-the-night": {
    main: strangers1,
    gallery: [strangers2]
  },
  "what-falls-doesnt-always-land": {
    main: wfdal1,
    gallery: [wfdal2, wfdal3]
  },
  "the-body-as-border": {
    main: bodyBorderPreview,
    gallery: [bodyBorder1, bodyBorder2, bodyBorder3]
  },
  "liminal-phantoms": {
    main: liminalPhantomsPreview,
    gallery: [liminalPhantomsGallery]
  },
  "noise-without-silence": {
    main: noiseWithoutSilencePreview,
    gallery: []
  },
  "gloom": {
    main: gloomPreview,
    gallery: []
  },
  "through-the-looking-glass": {
    main: throughLookingGlassPreview,
    gallery: []
  },
  "just-like-old-days": {
    main: justLikeOldDaysPreview,
    gallery: []
  },
};

// Helper to get YouTube thumbnail from URL
const getYouTubeThumbnail = (url: string) => {
  const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
  if (videoIdMatch && videoIdMatch[1]) {
    return `https://img.youtube.com/vi/${videoIdMatch[1]}/maxresdefault.jpg`;
  }
  return null;
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
  const trailerVideo = project.videoLinks?.find(v => v.type === 'trailer') || project.videoLinks?.[0];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-24">
        {/* Back Button */}
        <section className="container mx-auto px-6 py-8">
          <FadeInSection>
            <Link 
              to="/#works" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Works
            </Link>
          </FadeInSection>
        </section>

        {/* Title + Video Section - Side by Side */}
        <section className="container mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Title and Description */}
            <AnimatedSection>
              <div className="max-w-2xl">
                <span className="text-primary text-sm uppercase tracking-widest">{project.year}</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mt-2 mb-4">
                  {project.title}
                </h1>
                <p className="text-lg md:text-xl text-primary/80 uppercase tracking-wider mb-6">
                  {project.subtitle}
                </p>
                <div className="text-foreground/80 font-light leading-relaxed whitespace-pre-line">
                  {project.fullDescription || project.description}
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Video Embed or Thumbnail */}
            <AnimatedSection delay={0.2}>
              {trailerVideo && (
                <div className="sticky top-32">
                  <a
                    href={trailerVideo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block aspect-video bg-secondary relative overflow-hidden group"
                  >
                    {getYouTubeThumbnail(trailerVideo.url) ? (
                      <img 
                        src={getYouTubeThumbnail(trailerVideo.url)!}
                        alt={`${project.title} - Video`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : images?.main ? (
                      <img 
                        src={images.main}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl font-light text-muted-foreground/30">{project.title.charAt(0)}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute bottom-4 left-4 bg-background/90 px-3 py-1 text-sm">
                      {trailerVideo.title}
                    </div>
                  </a>
                  
                  {/* Additional video links */}
                  {project.videoLinks && project.videoLinks.length > 1 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.videoLinks.slice(1).map((video, index) => (
                        <a
                          key={index}
                          href={video.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Play className="w-4 h-4" />
                          {video.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
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
                  {project.details.dramaturg && (
                    <div className="border-l-2 border-primary/30 pl-4">
                      <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Dramaturgy</h3>
                      <p className="font-light">{project.details.dramaturg}</p>
                    </div>
                  )}
                  {project.details.music && (
                    <div className="border-l-2 border-primary/30 pl-4">
                      <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Music</h3>
                      <p className="font-light">{project.details.music}</p>
                    </div>
                  )}
                  {project.details.costumeDesign && (
                    <div className="border-l-2 border-primary/30 pl-4">
                      <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Costume Design</h3>
                      <p className="font-light">{project.details.costumeDesign}</p>
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

        {/* Awards Section */}
        {project.details?.awards && project.details.awards.length > 0 && (
          <section className="py-16 bg-card">
            <div className="container mx-auto px-6">
              <AnimatedSection>
                <h2 className="text-3xl font-light tracking-wide mb-8">Awards & Recognition</h2>
                <div className="space-y-4 max-w-2xl">
                  {project.details.awards.map((award, index) => (
                    <div key={index} className="flex items-center gap-3 py-3 border-b border-border/30">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="font-light">{award}</span>
                    </div>
                  ))}
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
                        alt={`${project.title} - Image ${index + 1}`}
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
