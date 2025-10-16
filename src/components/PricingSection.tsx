import { motion } from 'framer-motion';

interface PricingSectionProps {
  onOpenModal: (service?: string) => void;
}

// Pricing tier data
const pricingTiers = [
  {
    name: 'Starter Forge',
    description:
      'Entry-level AI solution, ideal for small businesses or startups exploring AI.',
    pricing: '£14-18/hour',
    timeline: '2-4 weeks typical project',
    icon: 'Simple Anvil Icon',
    featured: false,
    buttonText: 'Get Started',
    buttonStyle: 'gray',
    serviceId: 'Starter Forge',
  },
  {
    name: 'Master Forge',
    description:
      'Custom AI solutions for established businesses seeking advanced capabilities.',
    pricing: '£20+/hour',
    timeline: '4+ weeks typical project',
    icon: 'Complex Anvil + Sparks Icon',
    featured: true,
    buttonText: 'Contact Us for Quote',
    buttonStyle: 'primary',
    serviceId: 'Master Forge',
  },
  {
    name: 'Hive-Mind System',
    description:
      'Fully integrated, scalable AI architecture. Subscription-based, launching Q2 2026.',
    pricing: 'From £49/month',
    timeline: 'Q2 2026 Launch',
    icon: 'Hexagon Network Icon',
    featured: false,
    buttonText: 'Join Waitlist',
    buttonStyle: 'gray',
    serviceId: 'Hive-Mind Waitlist',
  },
];

const PricingSection = ({ onOpenModal }: PricingSectionProps) => {
  return (
    <section id="pricing" className="bg-bg-light py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Your Journey to AI Transformation
          </h2>
          <p className="text-lg text-text-gray">
            Three paths, one destination: Accessible intelligence
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className={`relative bg-bg-card-light rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col ${
                tier.featured ? 'border-2 border-primary' : 'border-2 border-gray-200'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Featured Badge */}
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white rounded-full px-4 py-1 text-xs font-bold">
                  POPULAR
                </div>
              )}

              {/* Badge Illustration Placeholder */}
              <div className="aspect-square max-h-40 bg-gradient-to-br from-amber to-orange rounded-lg flex items-center justify-center mb-6">
                <div className="text-center p-4">
                  <svg
                    className="mx-auto mb-2"
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                  >
                    {index === 0 && (
                      // Simple anvil for Starter
                      <path
                        d="M10 40h40v6H10v-6zm4-4h32l2-12H12l2 12zm30-18v4H16v-4h28zM14 12h32v2H14v-2z"
                        fill="white"
                      />
                    )}
                    {index === 1 && (
                      // Anvil with sparks for Master
                      <>
                        <path
                          d="M10 40h40v6H10v-6zm4-4h32l2-12H12l2 12zm30-18v4H16v-4h28z"
                          fill="white"
                        />
                        <circle cx="20" cy="20" r="2" fill="white" />
                        <circle cx="40" cy="20" r="2" fill="white" />
                        <circle cx="30" cy="15" r="2" fill="white" />
                      </>
                    )}
                    {index === 2 && (
                      // Hexagon network for Hive-Mind
                      <>
                        <circle cx="30" cy="30" r="4" fill="white" />
                        <circle cx="15" cy="20" r="3" fill="white" />
                        <circle cx="45" cy="20" r="3" fill="white" />
                        <circle cx="15" cy="40" r="3" fill="white" />
                        <circle cx="45" cy="40" r="3" fill="white" />
                        <line
                          x1="30"
                          y1="30"
                          x2="15"
                          y2="20"
                          stroke="white"
                          strokeWidth="2"
                        />
                        <line
                          x1="30"
                          y1="30"
                          x2="45"
                          y2="20"
                          stroke="white"
                          strokeWidth="2"
                        />
                        <line
                          x1="30"
                          y1="30"
                          x2="15"
                          y2="40"
                          stroke="white"
                          strokeWidth="2"
                        />
                        <line
                          x1="30"
                          y1="30"
                          x2="45"
                          y2="40"
                          stroke="white"
                          strokeWidth="2"
                        />
                      </>
                    )}
                  </svg>
                  <p className="text-white text-xs opacity-75">{tier.icon}</p>
                </div>
              </div>

              {/* Service Name */}
              <h3 className="text-2xl font-bold text-text-dark mb-3">
                {tier.name}
              </h3>

              {/* Description */}
              <p className="text-base text-text-gray leading-relaxed mb-6 flex-grow">
                {tier.description}
              </p>

              {/* Pricing */}
              <div className="mb-6">
                <p className="text-4xl font-black text-text-dark mb-1">
                  {tier.pricing}
                </p>
                <p className="text-sm text-text-gray">{tier.timeline}</p>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => onOpenModal(tier.serviceId)}
                className={`w-full py-3 px-4 rounded-lg font-bold transition-all duration-200 ${
                  tier.buttonStyle === 'primary'
                    ? 'bg-primary text-white hover:bg-primary-dark hover:scale-105'
                    : 'bg-gray-200 text-text-dark hover:bg-gray-300 hover:scale-105'
                }`}
              >
                {tier.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
