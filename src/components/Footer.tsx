const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="text-xl font-light tracking-[0.15em] uppercase">
            Chaotic Kitchen
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground font-light">
            © {currentYear} Chaotic Kitchen. All rights reserved.
          </div>

          {/* Location */}
          <div className="text-sm text-muted-foreground font-light">
            Sweden • International
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
