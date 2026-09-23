import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, MapPin, Users, Clock, FileText, ExternalLink, Play, Award } from "lucide-react";
import { projects, shortFilms, musicVideos, getAllWorks } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { AnimatedSection, FadeInSection, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import { useEffect, useState } from "react";

// Import project images
import strangers2 from "@/assets/strangers-2.png";
import wfdal1 from "@/assets/wfdal-1.jpg";
import wfdal2 from "@/assets/wfdal-2.jpg";
import wfdal3 from "@/assets/wfdal-3.jpg";
import bodyBorder1 from "@/assets/body-border-1.jpg";
import bodyBorder2 from "@/assets/body-border-2.jpg";
import bodyBorder3 from "@/assets/body-border-3.jpg";
import throughLookingGlassPreview from "@/assets/through-looking-glass-preview.jpg";
import throughLookingGlassPreviewNew from "@/assets/through-looking-glass-preview-new.jpg";
import liminalPhantomsGallery from "@/assets/liminal-phantoms-gallery.jpg";
import liminalPhantomsGallery2 from "@/assets/liminal-phantoms-gallery-2.jpg";
import liminalPhantomsGallery3 from "@/assets/liminal-phantoms-gallery-3.jpg";
import noiseWithoutSilencePreview from "@/assets/noise-without-silence-preview.png";
import noiseWithoutSilenceGallery1 from "@/assets/noise-without-silence-gallery-1.png";
import noiseWithoutSilenceGallery2 from "@/assets/noise-without-silence-gallery-2.png";
import gloomPreview from "@/assets/gloom-preview.jpg";
import justLikeOldDaysPreview from "@/assets/just-like-old-days-preview.jpg";
import haitunPreviewNew from "@/assets/haitun-preview-new.jpg";
import fikaPreviewNew from "@/assets/fika-preview-new.png";
import fikaPreview from "@/assets/fika-preview.png";
import fikaGalleryPoster from "@/assets/fika-gallery-poster.jpg";
import fikaGallery4 from "@/assets/fika-gallery-4.jpg";
import fikaGallery5 from "@/assets/fika-gallery-5.jpg";
import fikaGallery6 from "@/assets/fika-gallery-6.jpg";
import fikaGallery3 from "@/assets/fika-gallery-3.jpg";
import rorschachPreview from "@/assets/rorschach-preview.jpg";
import rorschachGallery from "@/assets/rorschach-gallery.jpg";
import storfagelPreview from "@/assets/storfagel-preview.jpg";
import storfagelGallery from "@/assets/storfagel-gallery.jpg";
import imbrutePreview from "@/assets/imbrute-preview.png";
import viciousCyclePreview from "@/assets/vicious-cycle-preview.jpg";
import beneathPreview from "@/assets/beneath-preview.jpg";
import beneathPreviewNew from "@/assets/beneath-preview-new.png";

import balanceInCover from "@/assets/project-media/balance-in-cover.webp";
import balanceInGallery1 from "@/assets/project-media/balance-in-1.webp";
import balanceInGallery2 from "@/assets/project-media/balance-in-2.webp";
import balanceInGallery3 from "@/assets/project-media/balance-in-3.webp";
import balanceInGallery5 from "@/assets/project-media/balance-in-5.webp";
import balanceInGallery6 from "@/assets/project-media/balance-in-6.webp";
import strangersGallery4 from "@/assets/project-media/strangers-4.webp";
import strangersGallery5 from "@/assets/project-media/strangers-5.webp";
import strangersGallery6 from "@/assets/project-media/strangers-6.webp";
import dontYouHearGallery1 from "@/assets/project-media/dont-you-hear-1.webp";
import dontYouHearGallery2 from "@/assets/project-media/dont-you-hear-2.webp";
import dontYouHearGallery3 from "@/assets/project-media/dont-you-hear-3.webp";
import dontYouHearGallery9 from "@/assets/project-media/dont-you-hear-9.webp";
import wfdal4 from "@/assets/project-media/wfdal-4.webp";
import wfdal7 from "@/assets/project-media/wfdal-7.webp";
import noiseWithoutSilenceGallery4 from "@/assets/project-media/noise-without-silence-4.webp";
import noiseWithoutSilenceGallery5 from "@/assets/project-media/noise-without-silence-5.webp";
import dontYouHearGallery10 from "@/assets/project-media/dont-you-hear-10.webp";
import dontYouHearFront from "@/assets/project-media/dont-you-hear-front-new.webp";
import liminalPhantomsGallery4 from "@/assets/project-media/liminal-phantoms-gallery-4.webp";
import liminalPhantomsGallery5 from "@/assets/project-media/liminal-phantoms-gallery-5.webp";
import wfdalFeature1 from "@/assets/project-media/wfdal-feature-1.webp";
import wfdalFeature2 from "@/assets/project-media/wfdal-feature-2.webp";
import justLikeOldDaysNew1 from "@/assets/project-media/just-like-old-days-new-1.webp";
import justLikeOldDaysNew2 from "@/assets/project-media/just-like-old-days-new-2.webp";
import justLikeOldDaysNew3 from "@/assets/project-media/just-like-old-days-new-3.webp";
import justLikeOldDaysNew4 from "@/assets/project-media/just-like-old-days-new-4.webp";
import balanceInGallery10 from "@/assets/project-media/balance-in-10.webp";
import balanceInGallery12 from "@/assets/project-media/balance-in-12.webp";
import beneath1 from "@/assets/project-media/beneath-1.webp";
import beneath2 from "@/assets/project-media/beneath-2.webp";
import beneath3 from "@/assets/project-media/beneath-3.webp";
import beneath4 from "@/assets/project-media/beneath-4.webp";
import beneath5 from "@/assets/project-media/beneath-5.webp";
import beneath6 from "@/assets/project-media/beneath-6.webp";
import beneath7 from "@/assets/project-media/beneath-7.webp";
import beneath8 from "@/assets/project-media/beneath-8.webp";
import { driveGalleries } from "@/data/driveGalleries";
import { publishedReviews } from "@/data/press";

// Image mapping for projects
const projectImages: Record<string, { main: string; gallery: string[] }> = {
  "capodimonte-site-specific": {
    main: dontYouHearFront,
    gallery: [dontYouHearGallery1, dontYouHearGallery2, dontYouHearGallery3, dontYouHearGallery9, dontYouHearGallery10]
  },
  "balance-in": {
    main: balanceInCover,
    gallery: [balanceInGallery1, balanceInGallery2, balanceInGallery3, balanceInGallery5, balanceInGallery6, balanceInGallery10, balanceInGallery12]
  },
  "strangers-in-the-night": {
    main: strangers2,
    gallery: [strangersGallery4, strangersGallery5, strangersGallery6]
  },
  "what-falls-doesnt-always-land": {
    main: wfdal1,
    gallery: [wfdal2, wfdal3, wfdal4, wfdal7]
  },
  "the-body-as-border": {
    main: throughLookingGlassPreview,
    gallery: [bodyBorder1, bodyBorder2, bodyBorder3]
  },
  "liminal-phantoms": {
    main: liminalPhantomsGallery,
    gallery: [liminalPhantomsGallery4, liminalPhantomsGallery5, liminalPhantomsGallery2, liminalPhantomsGallery3]
  },
  "noise-without-silence": {
    main: noiseWithoutSilencePreview,
    gallery: [noiseWithoutSilenceGallery1, noiseWithoutSilenceGallery2, noiseWithoutSilenceGallery4, noiseWithoutSilenceGallery5]
  },
  "gloom": {
    main: gloomPreview,
    gallery: []
  },
  "through-the-looking-glass": {
    main: throughLookingGlassPreviewNew,
    gallery: []
  },
  "just-like-old-days": {
    main: justLikeOldDaysPreview,
    gallery: [justLikeOldDaysNew1, justLikeOldDaysNew2, justLikeOldDaysNew3, justLikeOldDaysNew4]
  },
  "haitun": {
    main: haitunPreviewNew,
    gallery: []
  },
  "fika": {
    main: fikaPreviewNew,
    gallery: [fikaGalleryPoster, fikaGallery4, fikaGallery5, fikaGallery6, fikaGallery3]
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
    main: beneathPreviewNew,
    gallery: [beneathPreview]
  },
};

// Helper to get YouTube thumbnail from URL - use hqdefault for better availability
const getYouTubeThumbnail = (url: string) => {
  const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
  if (videoIdMatch && videoIdMatch[1]) {
    return `https://img.youtube.com/vi/${videoIdMatch[1]}/hqdefault.jpg`;
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

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

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

  const baseImages = projectImages[project.id];
  const driveGallery = driveGalleries[project.id] ?? [];
  const images = baseImages
    ? { main: baseImages.main, gallery: [...baseImages.gallery, ...driveGallery] }
    : driveGallery.length > 0
      ? { main: driveGallery[0], gallery: driveGallery }
      : undefined;
  const trailerVideo = project.videoLinks?.find(v => v.type === 'trailer') || project.videoLinks?.[0];

  // Check if this is Strangers in the Night - special gallery layout
  const isStrangers = project.id === "strangers-in-the-night";
  // Check if this is Balance In - presentations shown higher
  const isBalanceIn = project.id === "balance-in";
  const isLiminalPhantoms = project.id === "liminal-phantoms";
  const isNoiseWithoutSilence = project.id === "noise-without-silence";
  const isWfdal = project.id === "what-falls-doesnt-always-land";
  const hasBundledMedia = isStrangers || isBalanceIn || project.id === "capodimonte-site-specific" || project.id === "noise-without-silence";
  const projectReviews = isStrangers
    ? publishedReviews.filter((review) => review.project === project.title)
    : [];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

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
      
      {/* Lightbox */}
      {images?.gallery && images.gallery.length > 0 && (
        <Lightbox
          images={isWfdal ? [...images.gallery, wfdalFeature1, wfdalFeature2] : images.gallery}
          initialIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          alt={project.title}
        />
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

                {/* Noise Without Silence relies on its films, so feature them with the dossier. */}
                {isNoiseWithoutSilence && project.videoLinks && project.videoLinks.length > 0 && (
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.videoLinks.map((video) => {
                      const thumbnail = getYouTubeThumbnail(video.url);
                      return (
                        <a
                          key={video.url}
                          href={video.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative aspect-video bg-secondary overflow-hidden group"
                        >
                          {thumbnail && <img src={thumbnail} alt={`${project.title} — ${video.title}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />}
                          <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
                            <Play className="w-9 h-9 text-foreground" />
                          </div>
                          <span className="absolute bottom-2 left-2 bg-background/90 px-2 py-1 text-xs">{video.title}</span>
                        </a>
                      );
                    })}
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

            {/* Right: unified image and video bundle for featured projects */}
            <AnimatedSection delay={0.2}>
              <div className="sticky top-32 space-y-4">
                {hasBundledMedia && images?.gallery && images.gallery.length > 0 && (
                  <div className="grid grid-cols-2 gap-3">
                    {images.gallery.map((img, index) => (
                      <button
                        key={img}
                        type="button"
                        className={`${images.gallery.length === 1 ? "col-span-2 aspect-[4/3]" : "aspect-[4/3]"} overflow-hidden group cursor-pointer`}
                        onClick={() => openLightbox(index)}
                        aria-label={`Open ${project.title} image ${index + 1}`}
                      >
                        <img
                          src={img}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {!hasBundledMedia && trailerVideo && (
                  <a
                    href={trailerVideo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block aspect-video bg-secondary relative overflow-hidden group"
                  >
                    {getYouTubeThumbnail(trailerVideo.url) ? (
                      <img 
                        src={getYouTubeThumbnail(trailerVideo.url) ?? ""}
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
                
                {/* Video links, placed beneath images in featured media bundles */}
                {!isNoiseWithoutSilence && project.videoLinks && project.videoLinks.length > 0 && (
                  <div className="grid grid-cols-2 gap-2">
                    {project.videoLinks.slice(hasBundledMedia ? 0 : 1).map((video, index) => {
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

                {projectReviews.length > 0 && (
                  <aside className="pt-3 border-t border-border/60" aria-labelledby="project-reviews-heading">
                    <h2 id="project-reviews-heading" className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                      Press reviews
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {projectReviews.map((review) => (
                        <a
                          key={review.id}
                          href={review.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group border border-border/70 p-3 hover:border-primary/50 transition-colors"
                          aria-label={`Read ${review.publication} review of ${project.title}`}
                        >
                          <span className="flex items-start justify-between gap-2 text-sm font-light leading-snug group-hover:text-primary transition-colors">
                            {review.publication}
                            <ExternalLink className="w-3.5 h-3.5 shrink-0 mt-0.5 text-primary" />
                          </span>
                          <span className="block mt-1 text-xs text-muted-foreground">{review.author}</span>
                        </a>
                      ))}
                    </div>
                  </aside>
                )}

                {isWfdal && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {[wfdalFeature1, wfdalFeature2].map((img, index) => (
                      <button
                        key={img}
                        type="button"
                        className="aspect-[4/3] overflow-hidden group cursor-pointer"
                        onClick={() => openLightbox((images?.gallery.length ?? 0) + index)}
                        aria-label={`Open ${project.title} featured image ${index + 1}`}
                      >
                        <img src={img} alt={`${project.title} — Montreal performance ${index + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      </button>
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
                {project.details.format && (
                  <StaggerItem>
                    <div className="flex items-start gap-4">
                      <FileText className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Format</h3>
                        <p className="font-light">{project.details.format}</p>
                      </div>
                    </div>
                  </StaggerItem>
                )}
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
                        <p className="font-light whitespace-pre-line">{project.details.performers}</p>
                      </div>
                    </div>
                  </StaggerItem>
                )}
              </StaggerContainer>
            </div>
          </section>
        )}

        {/* Credits Section - Special layout for Strangers in the Night */}
        {project.details && (
          <section className="py-16">
            <div className="container mx-auto px-6">
              <AnimatedSection>
                <h2 className="text-3xl font-light tracking-wide mb-8">Credits</h2>
                
                {isStrangers ? (
                  <div className="max-w-3xl space-y-8">
                    {/* Choreographers section */}
                    <div>
                      <h3 className="text-lg font-light tracking-wide mb-4 text-primary/80">Choreographers</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.details.choreography && (
                          <div className="border-l-2 border-primary/30 pl-4">
                            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Choreography</h3>
                            <p className="font-light">{project.details.choreography}</p>
                          </div>
                        )}
                        {project.details.performers && (
                          <div className="border-l-2 border-primary/30 pl-4">
                            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Performers</h3>
                            <p className="font-light">{project.details.performers}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Presentations in between */}
                    {project.details.presentations && project.details.presentations.length > 0 && (
                      <div>
                        <h3 className="text-lg font-light tracking-wide mb-4 text-primary/80">Presentations</h3>
                        <div className="space-y-3 max-w-2xl">
                          {project.details.presentations.map((presentation, index) => (
                            <div key={index} className="flex items-center gap-3 py-2 border-b border-border/30">
                              <Calendar className="w-4 h-4 text-primary" />
                              <span className="font-light">{presentation}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Additional Credits */}
                    <div>
                      <h3 className="text-lg font-light tracking-wide mb-4 text-primary/80">Additional Credits</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                            <p className="font-light whitespace-pre-line">{project.details.production}</p>
                          </div>
                        )}
                        {project.details.credits && (
                          <div className="border-l-2 border-primary/30 pl-4 md:col-span-2">
                            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Additional Credits</h3>
                            <p className="font-light">{project.details.credits}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Co-producing & Partners for Strangers */}
                    <div className="mt-6 pt-6 border-t border-border/30">
                      <h3 className="text-sm uppercase tracking-wider text-muted-foreground/60 mb-2">Co-producing & Partners</h3>
                      <p className="font-light text-sm text-muted-foreground/70 italic">Through C&C Company</p>
                    </div>
                  </div>
                ) : (
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
                       <p className="font-light whitespace-pre-line">{project.details.production}</p>
                      </div>
                    )}
                    {project.details.credits && (
                      <div className="border-l-2 border-primary/30 pl-4 md:col-span-2">
                        <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Additional Credits</h3>
                        <p className="font-light">{project.details.credits}</p>
                      </div>
                    )}
                  </div>
                )}
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Presentations Section for Balance In - shown right after credits */}
        {isBalanceIn && project.details?.presentations && project.details.presentations.length > 0 && (
          <section className="py-16 bg-card">
            <div className="container mx-auto px-6">
              <AnimatedSection>
                <h2 className="text-3xl font-light tracking-wide mb-8">Performance Dates</h2>
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

        {/* Awards and Liminal Phantoms presentation history */}
        {project.details?.awards && project.details.awards.length > 0 && (
          <section className="py-16 bg-card">
            <div className="container mx-auto px-6">
              <AnimatedSection>
                <div className={isLiminalPhantoms ? "grid grid-cols-1 lg:grid-cols-2 gap-12" : ""}>
                  <div>
                    <h2 className="text-3xl font-light tracking-wide mb-8">Awards & Recognition</h2>
                    <div className="space-y-4 max-w-2xl">
                      {project.details.awards.map((award, index) => (
                        <div key={index} className="flex items-center gap-3 py-3 border-b border-border/30">
                          <Award className="w-5 h-5 text-primary shrink-0" />
                          <span className="font-light">{award}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {isLiminalPhantoms && project.details.presentations && (
                    <div>
                      <h2 className="text-3xl font-light tracking-wide mb-8">Presentations</h2>
                      <div className="space-y-3">
                        {project.details.presentations.map((presentation, index) => (
                          <div key={index} className="flex items-center gap-3 py-2 border-b border-border/30">
                            <Calendar className="w-4 h-4 text-primary shrink-0" />
                            <span className="font-light">{presentation}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Gallery Section - featured media galleries are shown beside project text */}
        {!hasBundledMedia && images?.gallery && images.gallery.length > 0 && (
          <section className={`py-16 ${isBalanceIn ? '' : 'bg-card'}`}>
            <div className="container mx-auto px-6">
              <AnimatedSection>
                <h2 className="text-3xl font-light tracking-wide mb-8">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {images.gallery.map((img, index) => (
                    <div 
                      key={index} 
                      className="aspect-[4/3] overflow-hidden group cursor-pointer"
                      onClick={() => openLightbox(index)}
                    >
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

        {/* Presentations Section - Skip for Balance In (shown earlier) and Strangers (shown in credits) */}
        {!isBalanceIn && !isStrangers && !isLiminalPhantoms && project.details?.presentations && project.details.presentations.length > 0 && (
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
