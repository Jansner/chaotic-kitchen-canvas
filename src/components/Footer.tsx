import { Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-xl font-light tracking-[0.15em] uppercase">
            Chaotic Kitchen
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/f.l.o.w.e.r_boy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-7 h-7" />
            </a>
            <a
              href="https://www.youtube.com/@ChaoticKitchenJansner"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-7 h-7" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground font-light">
            © {currentYear} Chaotic Kitchen. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
