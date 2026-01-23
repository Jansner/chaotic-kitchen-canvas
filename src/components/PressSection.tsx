import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { newsItems } from "@/data/news";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./ScrollAnimations";

const PressSection = () => {
  const latestNews = newsItems.slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short'
    });
  };

  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide">
              News & Press
            </h2>
            <div className="section-divider !mx-0 !mt-4" />
          </div>
          <Link 
            to="/news" 
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mt-4 md:mt-0"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestNews.map((item) => (
            <StaggerItem key={item.id}>
              <article className="group p-6 bg-background border border-border hover:border-primary/30 transition-all duration-300 h-full">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  {formatDate(item.date)}
                </div>
                <h3 className="text-xl font-light tracking-wide group-hover:text-primary transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  {item.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default PressSection;
