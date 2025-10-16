import { motion } from 'framer-motion';

interface HeroProps {
  onOpenModal: (service?: string) => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
  return (
    <section
      id="home"
      className="bg-bg-dark circuit-pattern min-h-screen flex items-center pt-20"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-24 py-12 lg:py-20">
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
                className="bg-transparent border-2 border-amber text-amber px-8 py-3 rounded-lg font-bold hover:bg-amber hover:text-white hover:scale-105 transition-all duration-200"
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
            {/* Placeholder Illustration */}
            <div className="aspect-square bg-gradient-to-br from-amber via-orange to-terra-cotta rounded-xl flex items-center justify-center p-8 shadow-2xl">
              <div className="text-center">
                <svg
                  className="mx-auto mb-4"
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Simple anvil and hammer illustration */}
                  <path
                    d="M30 80h60v12H30V80zm8-8h44l4-24H34l4 24zm40-32v8H42v-8h36zM38 24h44v4H38v-4z"
                    fill="white"
                    opacity="0.9"
                  />
                  {/* Hammer */}
                  <path
                    d="M75 15l8 8-20 20-8-8 20-20zM83 23h10v4H83v-4z"
                    fill="white"
                    opacity="0.9"
                  />
                  {/* Sparks */}
                  <circle cx="50" cy="45" r="2" fill="white" />
                  <circle cx="70" cy="50" r="2" fill="white" />
                  <circle cx="60" cy="35" r="2" fill="white" />
                </svg>
                <p className="text-white text-xl font-bold mb-2">
                  Nordic Smith at Forge
                </p>
                <p className="text-white/75 text-sm">
                  Replace with actual illustration
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
