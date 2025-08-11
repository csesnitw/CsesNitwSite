import { Code } from "lucide-react";
import { FaDiscord, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { href: "about", label: "About Us" },
    { href: "team", label: "Team" },
    { href: "contact", label: "Contact" },
  ];

  const resources = [
    { href: "#", label: "Blog" },
    { href: "#", label: "Workshops" },
    { href: "#", label: "Projects" },
    { href: "#", label: "Alumni" },
  ];

  const socialLinks = [
    { icon: FaDiscord, href: "#", testId: "footer-discord" },
    { icon: FaLinkedin, href: "#", testId: "footer-linkedin" },
    { icon: FaGithub, href: "#", testId: "footer-github" },
    { icon: FaTwitter, href: "#", testId: "footer-twitter" },
  ];

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4" data-testid="footer-logo">
              <Code className="text-green-500 text-2xl matrix-glow" />
              <h3 className="text-xl font-bold matrix-text">CSES NITW</h3>
            </div>
            <p className="text-slate-400 mb-4 max-w-md matrix-text" data-testid="footer-description">
              Empowering computer science students at NIT Warangal through innovation, 
              collaboration, and technical excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-slate-400 hover:text-green-400 transition-colors"
                  data-testid={social.testId}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 matrix-text" data-testid="quick-links-title">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-green-400 transition-colors matrix-text"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(' ', '-')}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 matrix-text" data-testid="resources-title">Resources</h4>
            <ul className="space-y-2 text-slate-400">
              {resources.map((resource) => (
                <li key={resource.label}>
                  <a
                    href={resource.href}
                    className="hover:text-green-400 transition-colors matrix-text"
                    data-testid={`footer-resource-${resource.label.toLowerCase()}`}
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-slate-400">
          <p data-testid="footer-copyright" className="matrix-text">
            &copy; 2024 Computer Science Engineers Society, NIT Warangal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
