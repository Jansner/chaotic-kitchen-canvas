import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    setIsMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl md:text-2xl font-light tracking-[0.15em] uppercase">
          CK
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <ul className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.href.startsWith("/") && !item.href.includes("#") ? (
                <Link 
                  to={item.href} 
                  className="nav-link text-sm tracking-widest uppercase"
                >
                  {item.label}
                </Link>
              ) : (
                <a 
                  href={item.href} 
                  className="nav-link text-sm tracking-widest uppercase"
                  onClick={(e) => {
                    if (isHomePage && item.href.startsWith("#")) {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }
                  }}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger Menu - Only visible on mobile */}
        <button
          className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span 
            className="w-6 h-0.5 bg-foreground block"
            animate={isMobileMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span 
            className="w-6 h-0.5 bg-foreground block"
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span 
            className="w-6 h-0.5 bg-foreground block"
            animate={isMobileMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background z-40 md:hidden"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  {item.href.startsWith("/") && !item.href.includes("#") ? (
                    <Link 
                      to={item.href}
                      className="text-3xl font-light tracking-[0.2em] uppercase hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="text-3xl font-light tracking-[0.2em] uppercase hover:text-primary transition-colors"
                      onClick={(e) => {
                        if (isHomePage && item.href.startsWith("#")) {
                          e.preventDefault();
                          handleNavClick(item.href);
                        } else {
                          setIsMobileMenuOpen(false);
                        }
                      }}
                    >
                      {item.label}
                    </a>
                  )}
                </motion.div>
              ))}
              
              {/* Social Links in Mobile Menu */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex gap-6 mt-8"
              >
                <a 
                  href="https://www.instagram.com/f.l.o.w.e.r_boy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Instagram
                </a>
                <a 
                  href="https://www.youtube.com/@ChaoticKitchenJansner" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  YouTube
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
