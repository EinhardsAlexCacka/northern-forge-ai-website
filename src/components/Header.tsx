import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';

// Simple Anvil SVG icon component
const AnvilIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-primary"
  >
    <path
      d="M4 24h24v4H4v-4zm4-4h16l2-8H6l2 8zm18-12v4H6V8h20zM8 4h16v2H8V4z"
      fill="currentColor"
    />
  </svg>
);

// Mascot circle component with simple character face
const MascotCircle = () => (
  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber to-orange flex items-center justify-center">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="8" cy="9" r="1.5" fill="white" />
      <circle cx="16" cy="9" r="1.5" fill="white" />
      <path
        d="M8 14c0 2 1.5 3 4 3s4-1 4-3"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

interface HeaderProps {
  onOpenModal: () => void;
}

const Header = ({ onOpenModal }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Our Story', id: 'our-story' },
    { label: 'Services', id: 'services' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/80 backdrop-blur-sm border-b border-primary">
        <div className="container mx-auto px-4 md:px-8 lg:px-24 py-3">
          <div className="flex justify-between items-center">
            {/* Left: Logo and Brand Name */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <AnvilIcon />
              <span className="text-text-cream font-bold text-lg">
                Northern Forge AI
              </span>
            </button>

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-text-cream text-sm font-medium hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right: CTA Button and Mascot */}
            <div className="flex items-center gap-4">
              <button
                onClick={onOpenModal}
                className="bg-primary text-text-cream rounded-lg px-4 py-2 font-medium text-sm hover:bg-primary-dark hover:scale-105 transition-all duration-200"
              >
                Get Started
              </button>
              <MascotCircle />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden text-text-cream hover:text-primary transition-colors"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Component */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={scrollToSection}
        onOpenModal={onOpenModal}
        navLinks={navLinks}
      />
    </>
  );
};

export default Header;
