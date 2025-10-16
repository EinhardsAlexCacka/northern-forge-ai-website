import { DollarSign, Grid, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section id="our-story" className="bg-bg-light py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            The AI Gap We're Closing
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
              className="bg-bg-card-light border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary hover:-translate-y-1 transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <problem.icon
                className="text-primary mb-4"
                size={48}
                strokeWidth={1.5}
              />

              {/* Heading */}
              <h3 className="text-xl font-bold text-text-dark mb-3">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="text-base text-text-gray leading-relaxed mb-6 flex-grow">
                {problem.description}
              </p>

              {/* Placeholder Illustration */}
              <div className="aspect-video bg-gradient-to-br from-amber/30 to-orange/30 rounded-lg flex items-center justify-center">
                <div className="text-center p-4">
                  <p className="text-text-gray text-sm font-medium">
                    {problem.illustration}
                  </p>
                  <p className="text-text-gray text-xs opacity-75 mt-1">
                    Replace with actual flat 2D illustration
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
