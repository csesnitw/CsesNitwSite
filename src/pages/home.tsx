import ParticlesBackground from "@/components/particles-background";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import AdvisorSection from "@/components/advisor-section";
import EventsShowcaseSection from "@/components/events-showcase-section";
import ProjectsShowcaseSection from "@/components/projects-showcase-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ParticlesBackground />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <AdvisorSection />
        <EventsShowcaseSection />
        <ProjectsShowcaseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}