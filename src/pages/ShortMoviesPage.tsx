import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { shortFilms, musicVideos } from "@/data/projects";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import Lightbox from "@/components/Lightbox";
import { useState } from "react";
import { Play, Film, Music, Images } from "lucide-react";
import balanceInFrontAsset from "@/assets/uploads/balance-in-front-page.jpg.asset.json";
import balanceInGallery1Asset from "@/assets/uploads/balance-in-gallery-2026-1.jpg.asset.json";
import balanceInGallery2Asset from "@/assets/uploads/balance-in-gallery-2026-2.jpg.asset.json";
import balanceInGallery3Asset from "@/assets/uploads/balance-in-gallery-2026-3.jpg.asset.json";
import strangersGallery4Asset from "@/assets/uploads/strangers-gallery-4.jpg.asset.json";
import strangersGallery5Asset from "@/assets/uploads/strangers-gallery-5.jpg.asset.json";
import strangersGallery6Asset from "@/assets/uploads/strangers-gallery-6.jpg.asset.json";
import dontYouHearGallery1Asset from "@/assets/uploads/dont-you-hear-gallery-1.jpg.asset.json";
import liminalPhantomsGallery from "@/assets/liminal-phantoms-gallery.jpg";
import fikaGallery3 from "@/assets/fika-gallery-3.jpg";
import wfdal2 from "@/assets/wfdal-2.jpg";
import bodyBorder2 from "@/assets/body-border-2.jpg";

const galleryImages = [
  dontYouHearGallery1Asset.url,
  balanceInFrontAsset.url,
  balanceInGallery1Asset.url,
  balanceInGallery2Asset.url,
  balanceInGallery3Asset.url,
  strangersGallery4Asset.url,
  strangersGallery5Asset.url,
  strangersGallery6Asset.url,
  liminalPhantomsGallery,
  fikaGallery3,
  wfdal2,
  bodyBorder2,
];

// Helper to get YouTube thumbnail from URL - use hqdefault for better availability
const getYouTubeThumbnail = (url: string) => {
  const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
  if (videoIdMatch && videoIdMatch[1]) {
    return `https://img.youtube.com/vi/${videoIdMatch[1]}/hqdefault.jpg`;
  }
  return null;
};

const ShortMoviesPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  // Sort films by order and filter out any films without video links
  const sortedFilms = [...shortFilms]
    .filter(film => film.videoLinks && film.videoLinks.length > 0)
    .sort((a, b) => (a.order || 999) - (b.order || 999));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Lightbox
        images={galleryImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        alt="Chaotic Kitchen gallery"
      />
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
              {sortedFilms.map((film) => {
                const thumbnail = film.videoLinks?.[0] ? getYouTubeThumbnail(film.videoLinks[0].url) : null;
                const hasLinks = film.videoLinks && film.videoLinks.length > 0;
                
                return (
                  <StaggerItem key={film.id}>
                    <div className="group relative bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
                      {/* Thumbnail */}
                      <div className="aspect-video bg-secondary relative overflow-hidden">
                        {thumbnail ? (
                          <img 
                            src={thumbnail}
                            alt={film.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Play className="w-16 h-16 text-primary/30 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                          </div>
                        )}
                        {hasLinks && (
                          <a 
                            href={film.videoLinks![0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            aria-label={`Watch ${film.title}`}
                          >
                            <Play className="w-16 h-16 text-white" />
                          </a>
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
                        
                        {/* Video Links - only show if film has multiple links */}
                        {hasLinks && film.videoLinks!.length > 1 && (
                          <div className="flex flex-wrap gap-2">
                            {film.videoLinks!.map((link, idx) => (
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
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-6">
            <AnimatedSection className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Images className="w-6 h-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-light tracking-wide">Gallery</h2>
              </div>
              <div className="section-divider !mx-0" />
            </AnimatedSection>
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
              {galleryImages.map((image, index) => (
                <StaggerItem key={image}>
                  <button
                    type="button"
                    className="group block w-full aspect-[4/3] overflow-hidden bg-secondary"
                    onClick={() => {
                      setLightboxIndex(index);
                      setLightboxOpen(true);
                    }}
                    aria-label={`Open gallery image ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt={`Chaotic Kitchen performance image ${index + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </button>
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

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {musicVideos.map((video) => {
                const thumbnail = video.videoLinks?.[0] ? getYouTubeThumbnail(video.videoLinks[0].url) : null;
                
                return (
                  <StaggerItem key={video.id}>
                    <div className="group relative bg-background border border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
                      {/* Thumbnail - Smaller aspect ratio */}
                      <div className="aspect-video bg-secondary relative overflow-hidden">
                        {thumbnail ? (
                          <img 
                            src={thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Play className="w-6 h-6 text-primary/30 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                          </div>
                        )}
                        {video.videoLinks && video.videoLinks[0] && (
                          <a 
                            href={video.videoLinks[0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            aria-label={`Watch ${video.title}`}
                          >
                            <Play className="w-8 h-8 text-white" />
                          </a>
                        )}
                      </div>
                      
                      {/* Info - Compact */}
                      <div className="p-2">
                        <h3 className="text-xs font-light tracking-wide group-hover:text-primary transition-colors truncate">
                          {video.title}
                        </h3>
                        <span className="text-xs text-muted-foreground">{video.year}</span>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShortMoviesPage;
