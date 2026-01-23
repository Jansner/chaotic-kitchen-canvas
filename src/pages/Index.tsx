import Header from "@/components/Header";
import VideoHero from "@/components/VideoHero";
import WorksSection from "@/components/WorksSection";
import PressSection from "@/components/PressSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <VideoHero />
        <WorksSection />
        <PressSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
