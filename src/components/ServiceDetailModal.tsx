import { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceDetail {
  title: string;
  icon: React.ComponentType<{ className?: string; size?: number; strokeWidth?: number }>;
  description: string;
  detailedContent: {
    overview: string;
    benefits: string[];
    howItWorks: string[];
    useCases: string[];
  };
}

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceDetail | null;
}

const ServiceDetailModal = ({ isOpen, onClose, service }: ServiceDetailModalProps) => {
  // Prevent body scroll when modal is open
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

  if (!service) return null;

  const IconComponent = service.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-4xl w-full bg-bg-card-dark border border-primary/50 rounded-xl shadow-2xl overflow-hidden max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-text-teal-gray hover:text-text-cream transition-colors bg-bg-darker/50 rounded-full p-2 hover:bg-bg-darker"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh] p-8 md:p-12">
              {/* Header Section with Icon */}
              <div className="flex flex-col items-center text-center mb-8">
                {/* Decorative concentric rings around icon */}
                <div className="relative mb-6">
                  {/* Outer rings */}
                  <svg width="200" height="200" viewBox="0 0 200 200" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
                    <ellipse cx="100" cy="100" rx="90" ry="85" stroke="#17A2B8" strokeWidth="1" fill="none" />
                    <ellipse cx="100" cy="100" rx="75" ry="70" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.6" />
                    <ellipse cx="100" cy="100" rx="60" ry="55" stroke="#17A2B8" strokeWidth="0.5" fill="none" opacity="0.8" />
                  </svg>

                  {/* Icon with glow */}
                  <div className="relative z-10">
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl" />
                    <div className="relative z-10 bg-gradient-to-br from-bg-card-dark to-bg-darker rounded-full p-8 border-2 border-gold/30">
                      <IconComponent
                        className="text-gold"
                        size={80}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-text-cream mb-4">
                  {service.title}
                </h2>

                {/* Subtitle */}
                <p className="text-lg text-text-teal-gray max-w-2xl leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Divider with decorative elements */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                <svg width="16" height="16" viewBox="0 0 16 16" className="text-gold fill-current opacity-60">
                  <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" />
                </svg>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
              </div>

              {/* Content Sections */}
              <div className="space-y-8">
                {/* Overview */}
                <div>
                  <h3 className="text-xl font-bold text-text-cream mb-3 flex items-center gap-2">
                    <span className="text-gold">●</span> Overview
                  </h3>
                  <p className="text-text-teal-gray leading-relaxed">
                    {service.detailedContent.overview}
                  </p>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-xl font-bold text-text-cream mb-3 flex items-center gap-2">
                    <span className="text-gold">●</span> Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    {service.detailedContent.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg width="12" height="12" viewBox="0 0 16 16" className="text-primary fill-current mt-1 flex-shrink-0">
                          <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" />
                        </svg>
                        <span className="text-text-teal-gray leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How It Works */}
                <div>
                  <h3 className="text-xl font-bold text-text-cream mb-3 flex items-center gap-2">
                    <span className="text-gold">●</span> How It Works
                  </h3>
                  <ol className="space-y-3">
                    {service.detailedContent.howItWorks.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-gold font-bold text-sm mt-0.5 flex-shrink-0 w-6">
                          {index + 1}.
                        </span>
                        <span className="text-text-teal-gray leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Use Cases */}
                <div>
                  <h3 className="text-xl font-bold text-text-cream mb-3 flex items-center gap-2">
                    <span className="text-gold">●</span> Perfect For
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.detailedContent.useCases.map((useCase, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 bg-bg-darker/50 rounded-lg p-3 border border-primary/20"
                      >
                        <svg width="10" height="10" viewBox="0 0 16 16" className="text-gold fill-current mt-1 flex-shrink-0">
                          <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" />
                        </svg>
                        <span className="text-text-teal-gray text-sm leading-relaxed">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA at bottom */}
              <div className="mt-10 pt-8 border-t border-gold/20 text-center">
                <p className="text-text-teal-gray mb-4">
                  Interested in learning more about {service.title}?
                </p>
                <button
                  onClick={onClose}
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ServiceDetailModal;
