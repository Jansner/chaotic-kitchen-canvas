import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, MapPin, Users, Clock, FileText, ExternalLink, Play, Award } from "lucide-react";
import { projects, shortFilms, musicVideos, getAllWorks } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection, FadeInSection, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import { useEffect } from "react";

// Import project images
import balanceInPreview from "@/assets/balance-in-preview.png";
import balanceIn1 from "@/assets/balance-in-1.jpg";
import balanceIn2 from "@/assets/balance-in-2.jpg";
import balanceIn3 from "@/assets/balance-in-3.jpg";
import balanceIn4 from "@/assets/balance-in-4.jpg";
import strangers1 from "@/assets/strangers-1.png";
import strangers2 from "@/assets/strangers-2.png";
import strangersGallery1 from "@/assets/strangers-gallery-1.jpg";
import strangersGallery2 from "@/assets/strangers-gallery-2.jpg";
import strangersGallery3 from "@/assets/strangers-gallery-3.jpg";
import wfdal1 from "@/assets/wfdal-1.jpg";
import wfdal2 from "@/assets/wfdal-2.jpg";
import wfdal3 from "@/assets/wfdal-3.jpg";
import bodyBorder1 from "@/assets/body-border-1.jpg";
import bodyBorder2 from "@/assets/body-border-2.jpg";
import bodyBorder3 from "@/assets/body-border-3.jpg";
import throughLookingGlassPreview from "@/assets/through-looking-glass-preview.jpg";
import throughLookingGlassPreviewNew from "@/assets/through-looking-glass-preview-new.jpg";
import liminalPhantomsPreview from "@/assets/liminal-phantoms-preview.jpg";
import liminalPhantomsGallery from "@/assets/liminal-phantoms-gallery.jpg";
import liminalPhantomsGallery2 from "@/assets/liminal-phantoms-gallery-2.jpg";
import liminalPhantomsGallery3 from "@/assets/liminal-phantoms-gallery-3.jpg";
import noiseWithoutSilencePreview from "@/assets/noise-without-silence-preview.png";
import noiseWithoutSilenceGallery1 from "@/assets/noise-without-silence-gallery-1.png";
import noiseWithoutSilenceGallery2 from "@/assets/noise-without-silence-gallery-2.png";
import noiseWithoutSilenceGallery3 from "@/assets/noise-without-silence-gallery-3.png";
import gloomPreview from "@/assets/gloom-preview.jpg";
import justLikeOldDaysPreview from "@/assets/just-like-old-days-preview.jpg";
import haitunPreviewNew from "@/assets/haitun-preview-new.jpg";
import fikaPreviewNew from "@/assets/fika-preview-new.png";
import fikaPreview from "@/assets/fika-preview.png";
import fikaGallery1 from "@/assets/fika-gallery-1.png";
import fikaGallery2 from "@/assets/fika-gallery-2.jpg";
import fikaGallery3 from "@/assets/fika-gallery-3.jpg";
import rorschachPreview from "@/assets/rorschach-preview.jpg";
import rorschachGallery from "@/assets/rorschach-gallery.jpg";
import storfagelPreview from "@/assets/storfagel-preview.jpg";
import storfagelGallery from "@/assets/storfagel-gallery.jpg";
import imbrutePreview from "@/assets/imbrute-preview.png";
import viciousCyclePreview from "@/assets/vicious-cycle-preview.jpg";
import beneathPreview from "@/assets/beneath-preview.jpg";
import beneathPreviewNew from "@/assets/beneath-preview-new.png";

// Image mapping for projects
const projectImages: Record<string, { main: string; gallery: string[] }> = {
  "balance-in": {
    main: balanceInPreview,
    gallery: [balanceIn1, balanceIn2, balanceIn3, balanceIn4] // New Balance In gallery images
  },
  "strangers-in-the-night": {
    main: strangers2, // Swapped - gallery image is now preview
    gallery: [strangers1, strangersGallery1, strangersGallery2, strangersGallery3] // New gallery images
  },
  "what-falls-doesnt-always-land": {
    main: wfdal1,
    gallery: [wfdal2, wfdal3]
  },
  "the-body-as-border": {
    main: throughLookingGlassPreview, // Using Through the Looking Glass preview for Body as Border
    gallery: [bodyBorder1, bodyBorder2, bodyBorder3]
  },
  "liminal-phantoms": {
    main: liminalPhantomsGallery, // Changed to gallery image as preview
    gallery: [liminalPhantomsPreview, liminalPhantomsGallery2, liminalPhantomsGallery3]
  },
  "noise-without-silence": {
    main: noiseWithoutSilencePreview,
    gallery: [noiseWithoutSilenceGallery1, noiseWithoutSilenceGallery2, noiseWithoutSilenceGallery3]
  },
  "gloom": {
    main: gloomPreview,
    gallery: []
  },
  "through-the-looking-glass": {
    main: throughLookingGlassPreviewNew, // New preview for Through the Looking Glass
    gallery: []
  },
  "just-like-old-days": {
    main: justLikeOldDaysPreview,
    gallery: []
  },
  "haitun": {
    main: haitunPreviewNew,
    gallery: []
  },
  "fika": {
    main: fikaPreviewNew, // New preview
    gallery: [fikaPreview, fikaGallery1, fikaGallery2, fikaGallery3] // Old preview goes to gallery
  },
  "rorschach": {
    main: rorschachPreview,
    gallery: [rorschachGallery]
  },
  "stor-fagel": {
    main: storfagelPreview,
    gallery: [storfagelGallery]
  },
  "imburte-union": {
    main: imbrutePreview,
    gallery: []
  },
  "vicious-cycle": {
    main: viciousCyclePreview,
    gallery: []
  },
  "beneath": {
    main: beneathPreviewNew, // New preview
    gallery: [beneathPreview] // Old preview goes to gallery
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
  const navigate = useNavigate();
  const allWorks = [...projects, ...shortFilms, ...musicVideos];
  const project = allWorks.find(p => p.id === id);

  // Get ordered works for prev/next navigation
  const orderedWorks = getAllWorks();
  const currentIndex = orderedWorks.findIndex(w => w.id === id);
  const prevProject = currentIndex > 0 ? orderedWorks[currentIndex - 1] : null;
  const nextProject = currentIndex < orderedWorks.length - 1 ? orderedWorks[currentIndex + 1] : null;

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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

  // Check if this is Strangers in the Night - special gallery layout
  const isStrangers = project.id === "strangers-in-the-night";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Faded Hero Background Image */}
      {images?.main && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <img 
            src={images.main}
            alt=""
            className="w-full h-full object-cover opacity-[0.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
      )}
      
      <main className="pt-24 relative z-10">
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

        {/* Quote Section for Balance In */}
        {project.quote && project.quote.author && (
          <section className="container mx-auto px-6 pb-8">
            <AnimatedSection>
              <blockquote className="max-w-3xl mx-auto text-center">
                <p className="text-xl md:text-2xl font-light italic text-foreground/80 leading-relaxed mb-4">
                  "{project.quote.text}"
                </p>
                <cite className="text-primary text-sm uppercase tracking-widest">
                  — {project.quote.author}
                </cite>
              </blockquote>
            </AnimatedSection>
          </section>
        )}

        {/* Quote Section for Vicious Cycle (no author) */}
        {project.quote && !project.quote.author && (
          <section className="container mx-auto px-6 pb-8">
            <AnimatedSection>
              <blockquote className="max-w-3xl mx-auto text-center">
                <p className="text-xl md:text-2xl font-light italic text-foreground/80 leading-relaxed">
                  "{project.quote.text}"
                </p>
              </blockquote>
            </AnimatedSection>
          </section>
        )}

        {/* Synopsis Section */}
        {project.synopsis && (
          <section className="container mx-auto px-6 pb-8">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-lg text-foreground/80 font-light leading-relaxed italic">
                  {project.synopsis}
                </p>
              </div>
            </AnimatedSection>
          </section>
        )}

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

                {/* Dossier Link */}
                {project.dossierLink && (
                  <div className="mt-6">
                    <a
                      href={project.dossierLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      View Dossier
                    </a>
                  </div>
                )}

                {/* Key Themes */}
                {project.details?.keyThemes && project.details.keyThemes.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Key Themes</h3>
                    <ul className="space-y-2">
                      {project.details.keyThemes.map((theme, index) => (
                        <li key={index} className="text-foreground/80 font-light flex items-start gap-2">
                          <span className="text-primary">•</span>
                          {theme}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Residencies */}
                {project.details?.residencies && project.details.residencies.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Residencies & Performances</h3>
                    <ul className="space-y-2">
                      {project.details.residencies.map((residency, index) => (
                        <li key={index} className="text-foreground/80 font-light text-sm">
                          {residency}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </AnimatedSection>

            {/* Right: Video Embed or Thumbnail + Gallery for Strangers */}
            <AnimatedSection delay={0.2}>
              <div className="sticky top-32 space-y-4">
                {trailerVideo && (
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
                )}
                
                {/* Additional video links as thumbnails */}
                {project.videoLinks && project.videoLinks.length > 1 && (
                  <div className="grid grid-cols-2 gap-2">
                    {project.videoLinks.slice(1).map((video, index) => {
                      const thumbnail = getYouTubeThumbnail(video.url);
                      return (
                        <a
                          key={index}
                          href={video.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative aspect-video bg-secondary overflow-hidden group"
                        >
                          {thumbnail ? (
                            <img 
                              src={thumbnail}
                              alt={video.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                              <Play className="w-8 h-8 text-muted-foreground/50" />
                            </div>
                          )}
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Play className="w-8 h-8 text-white" />
                          </div>
                          <div className="absolute bottom-2 left-2 bg-background/90 px-2 py-0.5 text-xs">
                            {video.title}
                          </div>
                        </a>
                      );
                    })}
                  </div>
                )}

                {/* Gallery under video for Strangers in the Night */}
                {isStrangers && images?.gallery && images.gallery.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 mt-4">
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
                )}
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
                  {project.details.scenography && (
                    <div className="border-l-2 border-primary/30 pl-4">
                      <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Scenography</h3>
                      <p className="font-light">{project.details.scenography}</p>
                    </div>
                  )}
                  {project.details.lightingDesign && (
                    <div className="border-l-2 border-primary/30 pl-4">
                      <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Lighting Design</h3>
                      <p className="font-light">{project.details.lightingDesign}</p>
                    </div>
                  )}
                  {project.details.soundDesign && (
                    <div className="border-l-2 border-primary/30 pl-4">
                      <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Sound Design</h3>
                      <p className="font-light">{project.details.soundDesign}</p>
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

        {/* Gallery Section - Skip for Strangers as gallery is shown next to video */}
        {!isStrangers && images?.gallery && images.gallery.length > 0 && (
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

        {/* Previous/Next Navigation */}
        <section className="py-12 border-t border-primary/10">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">
              {prevProject ? (
                <Link
                  to={`/project/${prevProject.id}`}
                  className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <div className="text-left">
                    <span className="text-xs uppercase tracking-wider block">Previous</span>
                    <span className="font-light">{prevProject.title}</span>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              
              {nextProject ? (
                <Link
                  to={`/project/${nextProject.id}`}
                  className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="text-right">
                    <span className="text-xs uppercase tracking-wider block">Next</span>
                    <span className="font-light">{nextProject.title}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectPage;
