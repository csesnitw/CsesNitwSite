import { MapPin, Mail, Users } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactSection() {

  const socialLinks = [
    { icon: FaLinkedin, href: "#", color: "hover:text-green-400" },
    { icon: FaGithub, href: "#", color: "hover:text-green-400" },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 matrix-text matrix-glow" data-testid="contact-title">Get In Touch</h2>
          <p className="text-xl text-slate-400 matrix-text" data-testid="contact-subtitle">
            Connect with our community and stay updated with the latest opportunities.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="text-green-500 text-xl mt-1 matrix-glow" />
              <div>
                <h4 className="font-semibold mb-2 matrix-text" data-testid="location-title">Location</h4>
                <p className="text-slate-400 matrix-text" data-testid="location-address">
                  National Institute of Technology Warangal<br />
                  Hanamkonda, Warangal - 506004<br />
                  Telangana, India
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="text-green-400 text-xl mt-1 matrix-glow" />
              <div>
                <h4 className="font-semibold mb-2 matrix-text" data-testid="email-title">Email</h4>
                <p className="text-slate-400 matrix-text">
                  <a 
                    href="mailto:cses@nitw.ac.in" 
                    className="hover:text-green-400 transition-colors matrix-text"
                    data-testid="email-link"
                  >
                    cses@nitw.ac.in
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Users className="text-green-300 text-xl mt-1 matrix-glow" />
              <div>
                <h4 className="font-semibold mb-2 matrix-text" data-testid="community-title">Connect With Us</h4>
                <div className="flex space-x-4 mt-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`text-slate-400 transition-colors text-2xl ${social.color}`}
                      data-testid={`social-link-${index}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
