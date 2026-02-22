import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link, useLocation } from "wouter";
import footerLogoUrl from "@/cses_black.svg";

export default function Footer() {
  const [, navigate] = useLocation();

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.substring(2); // remove '/#'

    // Navigate to home page if not already there
    if (window.location.pathname !== "/") {
      navigate("/");
      // Wait for the home page to render, then scroll
      setTimeout(() => {
        document
          .getElementById(targetId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100); // Adjust delay if needed
    } else {
      // Already on the home page, just scroll
      document
        .getElementById(targetId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { href: "/links", label: "About Us" },
    { href: "/team", label: "Team" },
    { href: "/#events-showcase", label: "Events" },
    { href: "/#projects-showcase", label: "Projects" },
    { href: "/#contact", label: "Contact" },
    { href: "/links", label: "Links" },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/company/cses-nitw",
      testId: "footer-linkedin",
    },
    {
      icon: FaGithub,
      href: "https://github.com/csesnitw",
      testId: "footer-github",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/cses_nitw/",
      testId: "footer-instagram",
    },
  ];

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div
              className="flex items-center space-x-2 mb-4"
              data-testid="footer-logo"
            >
              <img
                src={footerLogoUrl}
                alt="CSES NITW logo"
                className="h-10"
                data-testid="hero-logo"
              />
            </div>
            <p
              className="text-slate-400 mb-4 max-w-md"
              data-testid="footer-description"
            >
              Empowering computer science students at NIT Warangal through
              innovation, collaboration, and technical excellence.
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
            <h4
              className="font-semibold mb-4"
              data-testid="quick-links-title"
            >
              Quick Links
            </h4>
            <ul className="space-y-2 text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      className="hover:text-green-400 transition-colors"
                      data-testid={`footer-link-${link.label
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href}>
                      <a
                        className="hover:text-green-400 transition-colors"
                        data-testid={`footer-link-${link.label
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {link.label}
                      </a>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-slate-400">
          <p data-testid="footer-copyright" className="">
            &copy; 2025 Computer Science and Engineering Society, NIT Warangal.
            <br />
            Made with <span className="text-red-500">❤</span> by the CSES DEV
            team.
          </p>
        </div>
      </div>
    </footer>
  );
}