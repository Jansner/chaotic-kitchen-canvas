import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navItems = [
    { label: "Works", href: isHomePage ? "#works" : "/#works" },
    { label: "About", href: isHomePage ? "#about" : "/#about" },
    { label: "News", href: "/news" },
    { label: "Short Movies", href: "/short-movies" },
    { label: "Contact", href: isHomePage ? "#contact" : "/#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo - Left side */}
          <Link 
            to="/" 
            className="text-xl font-light tracking-[0.15em] uppercase border border-primary/50 px-3 py-1.5 hover:bg-primary/10 transition-colors"
          >
            CK
          </Link>

          {/* Three Strips Menu Button - Right side (visible on all screens) */}
          <button
            className="relative z-50 w-10 h-8 flex flex-col justify-center items-center gap-[6px] group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span 
              className="w-7 h-[2px] bg-foreground block origin-center"
              animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <motion.span 
              className="w-7 h-[2px] bg-foreground block"
              animate={isMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span 
              className="w-7 h-[2px] bg-foreground block origin-center"
              animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </button>
        </nav>
      </header>

      {/* Full-screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-background z-40"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
                >
                  {item.href.startsWith("/") && !item.href.includes("#") ? (
                    <Link 
                      to={item.href}
                      className="text-4xl md:text-5xl font-light tracking-[0.15em] uppercase hover:text-primary transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="text-4xl md:text-5xl font-light tracking-[0.15em] uppercase hover:text-primary transition-colors duration-300"
                      onClick={(e) => {
                        if (isHomePage && item.href.startsWith("#")) {
                          e.preventDefault();
                          handleNavClick(item.href);
                        } else {
                          setIsMenuOpen(false);
                        }
                      }}
                    >
                      {item.label}
                    </a>
                  )}
                </motion.div>
              ))}
              
              {/* Social Links in Menu */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex gap-8 mt-12 text-sm tracking-widest"
              >
                <a 
                  href="https://www.instagram.com/f.l.o.w.e.r_boy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors uppercase"
                >
                  Instagram
                </a>
                <a 
                  href="https://www.youtube.com/@ChaoticKitchenJansner" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors uppercase"
                >
                  YouTube
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
