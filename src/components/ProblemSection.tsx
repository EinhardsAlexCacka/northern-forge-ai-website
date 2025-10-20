import { DollarSign, Grid, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import ConcentricRings from './ConcentricRings';

// Problem card data
const problems = [
  {
    icon: DollarSign,
    title: 'The Cost Barrier',
    description:
      'Enterprise-level AI is often too expensive for small and medium-sized businesses, creating a significant barrier to entry.',
    illustration: 'Businessman + Price Tag Illustration',
  },
  {
    icon: Grid,
    title: 'The One-Size-Fits-All Trap',
    description:
      'Generic AI solutions fail to address the unique and specific needs of individual businesses, leading to inefficient outcomes.',
    illustration: 'Character + Complex Machine Illustration',
  },
  {
    icon: Shield,
    title: 'The Privacy Paradox',
    description:
      'Leveraging the power of AI while ensuring data privacy and security is a major challenge for businesses of all sizes.',
    illustration: 'Guardian + Shield Illustration',
  },
];

const ProblemSection = () => {
  return (
    <section id="our-story" className="bg-bg-light relative py-12 md:py-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 topographic-bg opacity-30 pointer-events-none" />
      <div className="absolute top-10 right-10 w-20 h-20 star-pattern" />
      <div className="absolute bottom-10 left-10 w-24 h-24 star-pattern" />

      {/* Concentric rings */}
      <ConcentricRings position="top-left" size="medium" variant="gold" opacity={0.1} />
      <ConcentricRings position="bottom-right" size="small" variant="teal" opacity={0.15} />

      <div className="container mx-auto px-4 md:px-8 lg:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Decorative stars above title */}
          <div className="flex justify-center gap-2 mb-4">
            <svg width="16" height="16" viewBox="0 0 16 16" className="text-primary fill-current opacity-60">
              <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" />
            </svg>
            <svg width="12" height="12" viewBox="0 0 16 16" className="text-gold fill-current opacity-40">
              <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" />
            </svg>
            <svg width="16" height="16" viewBox="0 0 16 16" className="text-primary fill-current opacity-60">
              <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            The <span className="text-gold">AI Gap</span> We're Closing
          </h2>
          <p className="text-lg text-text-gray max-w-3xl mx-auto">
            Three challenges keeping brilliant businesses from AI transformation
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="bg-bg-card-light border-2 border-transparent rounded-xl p-6 shadow hover:shadow-lg hover:border-gold hover:-translate-y-2 transition-all duration-300 flex flex-col relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Decorative star in corner */}
              <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity">
                <svg width="16" height="16" viewBox="0 0 16 16" className="text-primary fill-current">
                  <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" />
                </svg>
              </div>

              {/* Icon with background circle */}
              <div className="mb-4 relative inline-block">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl" />
                <problem.icon
                  className="text-primary relative z-10"
                  size={48}
                  strokeWidth={1.5}
                />
              </div>

              {/* Heading */}
              <h3 className="text-xl font-bold text-text-dark mb-3">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="text-base text-text-gray leading-relaxed mb-6 flex-grow">
                {problem.description}
              </p>

              {/* Illustration */}
              {index === 0 ? (
                <div className="aspect-video rounded-lg overflow-hidden border border-primary/20">
                  <img
                    src="/problem-cost.png"
                    alt="Businessman concerned about high AI costs"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : index === 1 ? (
                <div className="aspect-video rounded-lg overflow-hidden border border-primary/20">
                  <img
                    src="/problem-onesize.png"
                    alt="Person confused by complex one-size-fits-all AI system"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-video rounded-lg overflow-hidden border border-primary/20">
                  <img
                    src="/problem-privacy.png"
                    alt="Businessman protecting data privacy and security"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
