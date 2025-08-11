import { Button } from "@/components/ui/button";
import LiveTerminal from "./live-terminal";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text" data-testid="hero-title">
            CSES NITW
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto" data-testid="hero-subtitle">
            Computer Science Engineers Society at National Institute of Technology Warangal
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto" data-testid="hero-description">
            Fostering innovation, collaboration, and technical excellence among aspiring computer scientists and engineers.
          </p>
          
          <div className="flex justify-center">
            <Button 
              variant="outline"
              size="lg"
              className="px-8 py-3 matrix-text border-green-500 hover:bg-green-500/10"
              onClick={() => scrollToSection('contact')}
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        <LiveTerminal />
      </div>
    </section>
  );
}
