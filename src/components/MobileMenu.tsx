import { X } from 'lucide-react';
import { useEffect } from 'react';

interface NavLink {
  label: string;
  id: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenModal: () => void;
  navLinks: NavLink[];
}

const MobileMenu = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenModal,
  navLinks,
}: MobileMenuProps) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId);
    onClose();
  };

  const handleGetStarted = () => {
    onOpenModal();
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/70 z-50 lg:hidden"
        onClick={onClose}
      />

      {/* Slide-in Menu */}
      <div className="fixed top-0 right-0 bottom-0 w-72 bg-bg-dark border-l border-primary z-50 lg:hidden transform transition-transform duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-cream hover:text-primary transition-colors"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col pt-16 px-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigate(link.id)}
              className="text-text-cream text-lg font-medium py-4 border-b border-primary/20 hover:text-primary transition-colors text-left"
            >
              {link.label}
            </button>
          ))}

          {/* Get Started Button */}
          <button
            onClick={handleGetStarted}
            className="mt-8 w-full bg-primary text-text-cream rounded-lg px-6 py-3 font-bold hover:bg-primary-dark hover:scale-105 transition-all duration-200"
          >
            Get Started
          </button>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
