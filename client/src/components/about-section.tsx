import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 modern-text" data-testid="about-title">About CSES NITW</h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto modern-text" data-testid="about-subtitle">
            Empowering the next generation of computer science professionals through community, learning, and innovation.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <Card className="minimal-card">
              <CardContent className="p-6">
                <Target className="text-slate-600 text-2xl mb-4" />
                <h3 className="text-xl font-semibold mb-3 modern-text" data-testid="mission-title">Our Mission</h3>
                <p className="text-slate-600 modern-text" data-testid="mission-description">
                  To create a vibrant community of computer science enthusiasts, fostering technical excellence, 
                  innovation, and collaborative learning at NIT Warangal.
                </p>
              </CardContent>
            </Card>
            
            <Card className="minimal-card">
              <CardContent className="p-6">
                <Eye className="text-slate-600 text-2xl mb-4" />
                <h3 className="text-xl font-semibold mb-3 modern-text" data-testid="vision-title">Our Vision</h3>
                <p className="text-slate-600 modern-text" data-testid="vision-description">
                  To be the leading platform for computer science students to explore cutting-edge technologies, 
                  build meaningful connections, and develop industry-ready skills.
                </p>
              </CardContent>
            </Card>
            
            <Card className="minimal-card">
              <CardContent className="p-6">
                <Users className="text-slate-600 text-2xl mb-4" />
                <h3 className="text-xl font-semibold mb-3 modern-text" data-testid="community-title">Our Community</h3>
                <p className="text-slate-600 modern-text" data-testid="community-description">
                  Join <span className="text-slate-800 font-semibold minimal-accent-text">500+</span> passionate students and alumni 
                  who are shaping the future of technology through collaboration and innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
