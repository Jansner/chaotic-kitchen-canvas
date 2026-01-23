import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, ArrowRight } from "lucide-react";
import { newsItems } from "@/data/news";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";

const NewsPage = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'upcoming':
        return 'bg-primary/20 text-primary';
      case 'news':
        return 'bg-accent/20 text-accent';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const upcomingEvents = newsItems.filter(item => item.category === 'upcoming');
  const newsAndUpdates = newsItems.filter(item => item.category !== 'upcoming');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wide mb-4">
                News
              </h1>
              <div className="section-divider !mx-0" />
              <p className="text-lg text-muted-foreground font-light max-w-2xl mt-6">
                Stay updated with the latest performances, tours, and announcements from Chaotic Kitchen.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-12">Upcoming</h2>
            </AnimatedSection>

            <StaggerContainer className="space-y-6">
              {upcomingEvents.map((item) => (
                <StaggerItem key={item.id}>
                  <article className="group p-8 border border-border hover:border-primary/50 transition-all duration-300 bg-background">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`px-3 py-1 text-xs uppercase tracking-wider ${getCategoryColor(item.category)}`}>
                            {item.category}
                          </span>
                          <span className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {formatDate(item.date)}
                          </span>
                        </div>
                        <h3 className="text-2xl font-light tracking-wide group-hover:text-primary transition-colors mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground font-light">
                          {item.description}
                        </p>
                      </div>
                      {item.link && (
                        <a 
                          href={item.link}
                          className="flex items-center gap-2 text-primary hover:gap-3 transition-all"
                        >
                          Learn More <ArrowRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* News & Updates */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-12">News & Updates</h2>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsAndUpdates.map((item) => (
                <StaggerItem key={item.id}>
                  <article className="group p-6 border border-border hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 text-xs uppercase tracking-wider ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {formatDate(item.date)}
                      </span>
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
      </main>

      <Footer />
    </div>
  );
};

export default NewsPage;
