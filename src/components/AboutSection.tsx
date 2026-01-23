import { AnimatedSection, StaggerContainer, StaggerItem } from "./ScrollAnimations";
import { mentors, selectedProfessionalExperience, choreographies, education, skills, languages, coProducingPartners, cvLink, shortBioLink } from "@/data/cv";
import { ExternalLink } from "lucide-react";

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
                <strong className="text-foreground font-normal">Linus Jansner | Artistic Director & Founder, Chaotic Kitchen</strong>
              </p>
              
              <p>
                Linus Jansner is a Swedish choreographer, performer, and interdisciplinary artist whose work interrogates the fluidity of identity and the body as a site of transformation.
              </p>

              <p>
                As the founder and artistic director of Chaotic Kitchen, he has cultivated a genre-defying practice that synthesises urban dance, contemporary physical theatre, acrobatics, and visual art into a distinct, visceral language.
              </p>

              <p>
                His choreographic work, characterised by its raw emotionality and narrative physicality, has been presented at major festivals and venues across Europe, North and South America, and Asia. These include Festival Quartiers Danses (Montréal), MasDanza Festival (Spain), Beu Festival (India), and the Hannover (Germany), establishing an international footprint for his artistic inquiry.
              </p>

              <p>
                Jansner's collaborative ethos has led him to work with and be mentored by a constellation of influential European choreographers, including Anton Lachky, Michele Anne de Mey, Sidi Larbi Cherkaoui, Jos Baker, and Paul Blackman. These experiences deeply inform his approach to ensemble work, improvisational systems, and the creation of emotionally charged stage worlds.
              </p>

              <p>
                As a dedicated mentor, Jansner leads international workshops on improvisation, character development, and interdisciplinary creation, extending his artistic philosophy beyond performance. His leadership of Chaotic Kitchen is defined by a commitment to cross-cultural exchange and to developing work that is both personally resonant and universally communicative, seeking to expand the possibilities of contemporary physical expression.
              </p>
            </div>

            {/* External Links */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a 
                href={shortBioLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Short Bio <ExternalLink className="w-4 h-4" />
              </a>
              <a 
                href={cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Full CV <ExternalLink className="w-4 h-4" />
              </a>
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

        {/* Co-producing Partners Section */}
        <div className="border-t border-border pt-16 mb-16">
          <AnimatedSection className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-light tracking-wide">Co-producing Foundations & Partners</h3>
            <div className="section-divider" />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {coProducingPartners.map((partner, index) => (
              <StaggerItem key={index}>
                <div className="p-4 border border-border/50 text-center font-light text-sm">
                  {partner}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
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

          {/* Selected Professional Experience */}
          <div className="mb-16">
            <AnimatedSection>
              <h4 className="text-2xl font-light tracking-wide mb-8 text-primary">Selected Professional Experiences</h4>
            </AnimatedSection>
            <StaggerContainer className="space-y-4">
              {selectedProfessionalExperience.map((exp, index) => (
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
