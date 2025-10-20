import { motion } from 'framer-motion';
import ConcentricRings from './ConcentricRings';

interface HeroProps {
  onOpenModal: (service?: string) => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
  return (
    <section
      id="home"
      className="bg-bg-dark circuit-pattern min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Decorative concentric rings */}
      <ConcentricRings position="top-right" size="large" variant="mixed" opacity={0.12} />
      <ConcentricRings position="bottom-left" size="medium" variant="teal" opacity={0.08} />

      <div className="container mx-auto px-4 md:px-8 lg:px-24 py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content (order-2 on mobile, order-1 on desktop) */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-cream leading-tight tracking-tight mb-6">
              Forging Accessible AI for Tomorrow's Businesses
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-text-teal-gray leading-relaxed max-w-2xl mb-8">
              We blend Baltic/Norse heritage with modern AI innovation to create
              bespoke solutions that empower your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary CTA */}
              <button
                onClick={() => onOpenModal()}
                className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-dark hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Get in Touch
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => onOpenModal('quote')}
                className="bg-transparent border-2 border-gold text-gold px-8 py-3 rounded-lg font-bold hover:bg-gold hover:text-white hover:scale-105 transition-all duration-200"
              >
                Request Quote
              </button>
            </div>
          </motion.div>

          {/* Right Column: Hero Illustration (order-1 on mobile, order-2 on desktop) */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            {/* Hero Image */}
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/hero-image.png"
                alt="AI collaboration - person working alongside robot assistant"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
