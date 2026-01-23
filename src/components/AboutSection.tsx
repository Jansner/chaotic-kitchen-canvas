import { AnimatedSection, StaggerContainer, StaggerItem } from "./ScrollAnimations";
import { mentors, professionalExperience, choreographies, education, skills, languages } from "@/data/cv";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-24">
          {/* Image Placeholder */}
          <AnimatedSection className="relative">
            <div className="aspect-[3/4] bg-secondary relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
                <span className="text-8xl font-light">LJ</span>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/30" />
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection delay={0.2}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6">
              About
            </h2>
            <div className="section-divider !mx-0 !my-6" />
            
            <div className="space-y-6 text-foreground/80 font-light leading-relaxed">
              <p>
                <strong className="text-foreground font-normal">Linus Jansner</strong> is a Swedish choreographer, dancer, and performer, graduate of SEAD (Salzburg Experimental Academy of Dance) as both performer and choreographer.
              </p>
              
              <p>
                His work blends physical theatre, contemporary dance, urban dance, and visual arts to create emotionally charged and boundary-pushing performances. Through <strong className="text-foreground font-normal">Chaotic Kitchen</strong>, he creates interdisciplinary works that explore identity, perception, captivity, and human connection.
              </p>

              <p>
                He has collaborated with renowned artists including Sidi Larbi Cherkaoui, Sharon Eyal, Yoann Bourgeois, James Thierrée, and Anton Lachky, and has presented work across Europe, Canada, and Asia.
              </p>

              <blockquote className="border-l-2 border-primary pl-6 my-8 italic text-lg">
                "Viewing my work is like looking into a fractured mirror—each angle reveals a new layer, a hidden detail, a story waiting to be seen."
              </blockquote>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div>
                <div className="text-3xl md:text-4xl font-light text-primary">15+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Works</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-primary">10+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Countries</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-primary">8+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Years</div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* CV Section */}
        <div className="border-t border-border pt-24">
          <AnimatedSection className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-light tracking-wide">Curriculum Vitae</h3>
            <div className="section-divider" />
          </AnimatedSection>

          {/* Education */}
          <div className="mb-16">
            <AnimatedSection>
              <h4 className="text-2xl font-light tracking-wide mb-8 text-primary">Education</h4>
            </AnimatedSection>
            <StaggerContainer className="space-y-4">
              {education.map((edu, index) => (
                <StaggerItem key={index}>
                  <div className="grid grid-cols-1 md:grid-cols-[120px_1fr_1fr] gap-2 md:gap-6 py-4 border-b border-border/50">
                    <span className="text-sm text-muted-foreground">{edu.years}</span>
                    <span className="font-light">{edu.institution}</span>
                    <span className="text-muted-foreground font-light">{edu.major}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Professional Experience */}
          <div className="mb-16">
            <AnimatedSection>
              <h4 className="text-2xl font-light tracking-wide mb-8 text-primary">Professional Experience</h4>
            </AnimatedSection>
            <StaggerContainer className="space-y-4">
              {professionalExperience.slice(0, 8).map((exp, index) => (
                <StaggerItem key={index}>
                  <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr_1fr] gap-2 md:gap-6 py-4 border-b border-border/50">
                    <span className="text-sm text-muted-foreground">{exp.year}</span>
                    <span className="font-light">{exp.production}</span>
                    <span className="text-muted-foreground font-light">{exp.location}</span>
                    <span className="text-muted-foreground font-light text-sm">{exp.company}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Choreographies */}
          <div className="mb-16">
            <AnimatedSection>
              <h4 className="text-2xl font-light tracking-wide mb-8 text-primary">Choreographies – Chaotic Kitchen</h4>
            </AnimatedSection>
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {choreographies.map((choreo, index) => (
                <StaggerItem key={index}>
                  <div className="p-4 border border-border/50 hover:border-primary/30 transition-colors">
                    <span className="font-light block">{choreo.title}</span>
                    <span className="text-sm text-muted-foreground">{choreo.date}</span>
                    {choreo.details && (
                      <span className="text-xs text-primary ml-2">({choreo.details})</span>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Skills & Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection>
              <h4 className="text-2xl font-light tracking-wide mb-6 text-primary">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 border border-border/50 text-sm font-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h4 className="text-2xl font-light tracking-wide mb-6 text-primary">Languages</h4>
              <div className="space-y-2">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-border/50">
                    <span className="font-light">{lang.language}</span>
                    <span className="text-muted-foreground text-sm">{lang.level}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Mentors */}
          <AnimatedSection className="mt-16">
            <h4 className="text-2xl font-light tracking-wide mb-6 text-primary">Important Mentors</h4>
            <p className="text-foreground/80 font-light">
              {mentors.join(" • ")}
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
