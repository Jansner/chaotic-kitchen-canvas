import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const VideoHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  // Direct video URL - for proper autoplay, host the video file directly
  const videoUrl = "/hero-video.mp4";

  const scrollToContent = () => {
    document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log("Autoplay prevented by browser");
      });
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
        />
        
        {/* Fallback gradient background when video not available */}
        {!videoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        )}
      </div>

      {/* Overlay */}
      <div className="video-overlay absolute inset-0 z-10" />

      {/* Content - Only "Chaotic Kitchen" title, no subtitle */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.2em] uppercase"
        >
          Chaotic
        </motion.h1>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.2em] uppercase mt-2"
        >
          Kitchen
        </motion.h1>
      </div>

      {/* Showreel Disclaimer */}
      <div className="absolute bottom-3 right-3 z-20">
        <span className="text-[10px] text-foreground/20 font-light">
          Showreel — Linus Jansner
        </span>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-foreground/50 hover:text-primary transition-colors duration-300"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default VideoHero;
