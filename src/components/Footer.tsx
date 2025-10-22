import { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Linkedin, Github, Twitter } from 'lucide-react';

// Logo component with fallback (same as Header)
const LogoWithFallback = () => {
  const [useImage, setUseImage] = useState(true);
  const logoPath = '/logo.png';

  return (
    <>
      {useImage ? (
        <img
          src={logoPath}
          alt="Northern Forge AI Logo"
          className="h-10 w-auto object-contain"
          onError={() => setUseImage(false)}
        />
      ) : (
        <AnvilIconFallback />
      )}
    </>
  );
};

// Fallback SVG icon
const AnvilIconFallback = () => (
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

interface FooterProps {
  onOpenModal: () => void;
}

const Footer = ({ onOpenModal }: FooterProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <footer id="contact" className="bg-bg-dark border-t-4 border-primary relative overflow-hidden">
      {/* Topographic pattern flowing from top down */}
      <div className="absolute inset-0 topographic-footer pointer-events-none z-0" />

      <div className="container mx-auto px-4 md:px-8 lg:px-24 pt-16 pb-8 relative z-10">
        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Company */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <LogoWithFallback />
              <span className="text-text-cream font-bold text-lg">
                Northern Forge AI
              </span>
            </div>
            <p className="text-text-teal-gray text-sm mb-3">
              Forging Accessible AI
            </p>
            <p className="text-text-teal-gray text-sm mb-4 leading-relaxed">
              We blend Baltic/Norse heritage with modern AI innovation to create
              bespoke solutions that empower SMBs across the UK.
            </p>
            <div className="flex items-center gap-2 text-text-teal-gray text-sm">
              <MapPin size={16} />
              <span>Milton Keynes, UK</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-text-cream font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection('home')}
                className="text-text-teal-gray hover:text-primary text-sm text-left transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('our-story')}
                className="text-text-teal-gray hover:text-primary text-sm text-left transition-colors"
              >
                Our Story
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-text-teal-gray hover:text-primary text-sm text-left transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-text-teal-gray hover:text-primary text-sm text-left transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="text-text-teal-gray hover:text-primary text-sm text-left transition-colors"
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-text-teal-gray hover:text-primary text-sm text-left transition-colors"
              >
                Contact
              </button>
              <a
                href="#"
                className="text-text-teal-gray hover:text-primary text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-text-teal-gray hover:text-primary text-sm transition-colors"
              >
                Terms of Service
              </a>
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-text-cream font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3 mb-6">
              <a
                href="mailto:alex@northern-forge.com"
                className="flex items-center gap-2 text-text-teal-gray hover:text-primary text-sm transition-colors"
              >
                <Mail size={16} />
                <span>alex@northern-forge.com</span>
              </a>
              <a
                href="tel:+447405929684"
                className="flex items-center gap-2 text-text-teal-gray hover:text-primary text-sm transition-colors"
              >
                <Phone size={16} />
                <span>+44 7405 929684</span>
              </a>
              <div className="flex items-center gap-2 text-text-teal-gray text-sm">
                <Clock size={16} />
                <span>Mon-Fri, 9AM-6PM GMT</span>
              </div>
            </div>
            <button
              onClick={onOpenModal}
              className="bg-primary text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-primary-dark transition-colors"
            >
              Get in Touch
            </button>
          </div>

          {/* Column 4: Social & Legal */}
          <div>
            <h4 className="text-text-cream font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="text-text-teal-gray hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-text-teal-gray hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="text-text-teal-gray hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-text-teal-gray hover:text-primary text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-text-teal-gray hover:text-primary text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/30 pt-6 text-center">
          <p className="text-text-teal-gray text-sm mb-2">
            Made with ❤️ and AI in Milton Keynes
          </p>
          <p className="text-text-teal-gray text-sm">
            © 2025 Northern Forge AI Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
