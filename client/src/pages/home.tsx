import ParticlesBackground from "@/components/particles-background";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import EventsSection from "@/components/events-section";
import TeamSection from "@/components/team-section";
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
        <EventsSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
