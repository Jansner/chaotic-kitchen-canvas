import { ChevronDown } from "lucide-react";

const VideoHero = () => {
  // Google Drive video - convert to direct embed URL
  const videoId = "1jn3Ocz8wHs5JiB2XL4puugrKM5AatxoG";
  const videoUrl = `https://drive.google.com/file/d/${videoId}/preview`;

  const scrollToContent = () => {
    document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src={videoUrl}
          className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ border: 'none' }}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      {/* Overlay */}
      <div className="video-overlay absolute inset-0 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.2em] uppercase animate-fade-in">
          Chaotic
        </h1>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.2em] uppercase mt-2 animate-fade-in-delay">
          Kitchen
        </h1>
        <p className="mt-8 text-lg md:text-xl text-foreground/60 font-light tracking-widest uppercase animate-fade-in-delay-2">
          Physical Theatre • Contemporary Dance • Visual Arts
        </p>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-foreground/50 hover:text-primary transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default VideoHero;
