import ParticlesBackground from "@/components/particles-background";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AdvisorSection from "@/components/advisor-section";
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
        <AdvisorSection />
        <ProjectsShowcaseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}