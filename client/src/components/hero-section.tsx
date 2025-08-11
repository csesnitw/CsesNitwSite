import { Button } from "@/components/ui/button";
import { useState } from 'react';
import TypewriterText from '@/components/typewriter-text';
import LiveTerminal from "./live-terminal";

export default function HeroSection() {
  const [titleComplete, setTitleComplete] = useState(false);
  const [subtitleComplete, setSubtitleComplete] = useState(false);
  
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
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-green-400 relative" data-testid="hero-title">
              <TypewriterText 
                text="CSES NITW"
                speed={100}
                onComplete={() => setTitleComplete(true)}
              />
              <div className="absolute inset-0 cyberpunk-scan-lines"></div>
            </h1>
          </div>
          <div className="text-xl md:text-2xl text-green-400 mb-8 max-w-3xl mx-auto" data-testid="hero-subtitle">
            {titleComplete && (
              <TypewriterText 
                text="Computer Science and Engineering Society at National Institute of Technology Warangal"
                speed={30}
                delay={500}
                onComplete={() => setSubtitleComplete(true)}
              />
            )}
          </div>
          <div className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto" data-testid="hero-description">
            {subtitleComplete && (
              <TypewriterText 
                text="Fostering innovation, collaboration, and technical excellence among aspiring computer scientists and engineers."
                speed={25}
                delay={500}
              />
            )}
          </div>
          
          <div className="flex justify-center">
            <Button 
              variant="outline"
              size="lg"
              className="px-8 py-3 futuristic-button cyberpunk-border"
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
