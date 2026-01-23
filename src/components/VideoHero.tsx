import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const VideoHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Google Drive video - convert to direct download URL for video element
  const videoId = "1jn3Ocz8wHs5JiB2XL4puugrKM5AatxoG";
  const videoUrl = `https://drive.google.com/uc?export=download&id=${videoId}`;
  
  // Alternative: Use iframe embed as fallback
  const iframeUrl = `https://drive.google.com/file/d/${videoId}/preview`;

  const scrollToContent = () => {
    document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Attempt to play video on load
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Video autoplay failed, likely due to browser restrictions
        console.log("Autoplay prevented by browser");
      });
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background - Using iframe for Google Drive compatibility */}
      <div className="absolute inset-0 z-0">
        <iframe
          src={iframeUrl}
          className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-150"
          style={{ border: 'none' }}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      {/* Overlay */}
      <div className="video-overlay absolute inset-0 z-10" />

      {/* Content */}
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
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 text-lg md:text-xl text-foreground/60 font-light tracking-widest uppercase"
        >
          Physical Theatre • Contemporary Dance • Visual Arts
        </motion.p>
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
