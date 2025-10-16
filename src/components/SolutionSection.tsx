import { Network, TrendingDown, ShieldCheck, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

// Solution card data
const solutions = [
  {
    icon: Network,
    title: 'Distributed Intelligence',
    description:
      'Like a beehive, we use specialized AI workers for specific tasks. No massive models doing simple jobs.',
  },
  {
    icon: TrendingDown,
    title: 'Cost-Optimized Architecture',
    description:
      'Our three-tier system activates only what you need, when you need it. Result? 60-80% cost reduction.',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy-First Design',
    description:
      'Open-source models you can deploy on-premise. Your data never leaves your control.',
  },
  {
    icon: Settings,
    title: 'SMB-Focused Customization',
    description:
      'Fine-tuned for your industry, your workflow, your challenges. Not a generic chatbot.',
  },
];

const SolutionSection = () => {
  return (
    <section id="services" className="bg-bg-dark circuit-pattern py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-cream mb-4">
            The Hive-Mind Architecture
          </h2>
          <p className="text-lg text-text-teal-gray">
            Four principles that make AI accessible
          </p>
        </div>

        {/* Solution Cards Grid - 2x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-bg-card-dark border border-primary rounded-xl p-6 hover:border-amber hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <solution.icon
                className="text-primary"
                size={64}
                strokeWidth={1.5}
              />

              {/* Heading */}
              <h3 className="text-xl font-bold text-text-cream">
                {solution.title}
              </h3>

              {/* Description */}
              <p className="text-base text-text-teal-gray leading-relaxed">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
