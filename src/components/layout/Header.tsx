import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "होम", path: "/" },
  { label: "हमारे बारे में", path: "/about" },
  { label: "सदस्य", path: "/members" },
  { label: "कानूनी विभाग", path: "/legal" },
  { label: "संपर्क करें", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">
          📰 हिंदी समाचार
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                location.pathname === link.path
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social + Mobile Toggle */}
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 lg:flex">
            <a href="#" className="p-1.5 text-muted-foreground hover:text-primary"><Facebook size={18} /></a>
            <a href="#" className="p-1.5 text-muted-foreground hover:text-primary"><Instagram size={18} /></a>
            <a href="#" className="p-1.5 text-muted-foreground hover:text-primary"><Youtube size={18} /></a>
            <a href="#" className="p-1.5 text-muted-foreground hover:text-primary"><Twitter size={18} /></a>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="border-t border-border bg-card px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block rounded-md px-3 py-2 text-sm font-medium ${
                location.pathname === link.path
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 flex gap-3 px-3">
            <a href="#" className="text-muted-foreground hover:text-primary"><Facebook size={18} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Instagram size={18} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Youtube size={18} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Twitter size={18} /></a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
