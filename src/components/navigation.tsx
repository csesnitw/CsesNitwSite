import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import BrandLogo from "@/components/brand-logo";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home", type: "route" as const },
    { href: "/#about", label: "About", type: "anchor" as const },
    { href: "/team", label: "Team", type: "route" as const },
    { href: "/#contact", label: "Contact", type: "anchor" as const },
  ];

  // For hash links we rely on default anchor behavior to scroll

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2" data-testid="logo">
            <BrandLogo size={24} className="matrix-glow" />
            <h1 className="text-xl font-bold">CSES NITW</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.type === 'route' ? (
                <Link key={item.href} href={item.href}>
                  <a className="hover:text-green-400 transition-colors" data-testid={`nav-${item.label.toLowerCase()}`}>
                    {item.label}
                  </a>
                </Link>
              ) : (
                <a key={item.href} href={item.href} className="hover:text-green-400 transition-colors" data-testid={`nav-${item.label.toLowerCase()}`}>
                  {item.label}
                </a>
              )
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-button"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                item.type === 'route' ? (
                  <Link key={item.href} href={item.href}>
                    <a
                      className="block w-full text-left px-3 py-2 hover:text-green-400 transition-colors"
                      data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block w-full text-left px-3 py-2 hover:text-green-400 transition-colors"
                    data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
