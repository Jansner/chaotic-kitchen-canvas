import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, ArrowRight, X } from "lucide-react";
import { newsItems, NewsItem } from "@/data/news";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import { motion, AnimatePresence } from "framer-motion";

const NewsPage = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

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

  const upcomingEvents = newsItems.filter(item => item.category === 'upcoming').sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
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
                  <article 
                    className="group p-8 border border-border hover:border-primary/50 transition-all duration-300 bg-background cursor-pointer"
                    onClick={() => setSelectedNews(item)}
                  >
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
                      <div className="flex items-center gap-2 text-primary">
                        {item.projectId ? (
                          <Link 
                            to={`/project/${item.projectId}`}
                            className="flex items-center gap-2 hover:gap-3 transition-all"
                            onClick={(e) => e.stopPropagation()}
                          >
                            View Project <ArrowRight className="w-4 h-4" />
                          </Link>
                        ) : (
                          <span className="flex items-center gap-2 hover:gap-3 transition-all">
                            Read More <ArrowRight className="w-4 h-4" />
                          </span>
                        )}
                      </div>
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
                  <article 
                    className="group p-6 border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedNews(item)}
                  >
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
                    {item.projectId && (
                      <Link 
                        to={`/project/${item.projectId}`}
                        className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:gap-3 transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Project <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>

      <Footer />

      {/* News Detail Modal */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-6"
            onClick={() => setSelectedNews(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="max-w-2xl w-full bg-card border border-border p-8 relative max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 text-xs uppercase tracking-wider ${getCategoryColor(selectedNews.category)}`}>
                  {selectedNews.category}
                </span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {formatDate(selectedNews.date)}
                </span>
              </div>

              <h2 className="text-3xl font-light tracking-wide mb-6">
                {selectedNews.title}
              </h2>

              <div className="text-foreground/80 font-light leading-relaxed whitespace-pre-line">
                {selectedNews.fullDescription || selectedNews.description}
              </div>

              {selectedNews.projectId && (
                <Link 
                  to={`/project/${selectedNews.projectId}`}
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  View Full Project <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NewsPage;
