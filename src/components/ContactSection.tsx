import { Mail, Phone, Instagram, Youtube } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./ScrollAnimations";

const ContactSection = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "linusjansner@hotmail.com",
      href: "mailto:linusjansner@hotmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+46 70 529 89 19",
      href: "tel:+46705298919",
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/f.l.o.w.e.r_boy/",
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://www.youtube.com/@ChaoticKitchenJansner",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide mb-6">
              Contact
            </h2>
            <div className="section-divider" />
            <p className="text-muted-foreground font-light max-w-xl mx-auto mb-16">
              For bookings, collaborations, and inquiries
            </p>
          </AnimatedSection>

          {/* Contact Info */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {contactLinks.map((contact) => (
              <StaggerItem key={contact.label}>
                <a
                  href={contact.href}
                  className="group p-8 border border-border hover:border-primary/50 transition-all duration-300 block"
                >
                  <contact.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                    {contact.label}
                  </div>
                  <div className="text-lg font-light group-hover:text-primary transition-colors duration-300">
                    {contact.value}
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Social Links */}
          <AnimatedSection>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-14 h-14 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
