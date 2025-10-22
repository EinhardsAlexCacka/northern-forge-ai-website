import { useState } from 'react';
import { Network, TrendingDown, ShieldCheck, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceDetailModal from './ServiceDetailModal';
import ConcentricRings from './ConcentricRings';

// Solution card data with detailed content
const solutions = [
  {
    icon: Network,
    title: 'Distributed Intelligence',
    description:
      'Like a beehive, we use specialized AI workers for specific tasks. No massive models doing simple jobs.',
    detailedContent: {
      overview: 'Our Distributed Intelligence approach mirrors nature\'s most efficient system: the beehive. Instead of relying on a single, monolithic AI model for all tasks, we deploy specialized AI agents, each optimized for specific functions. This results in faster processing, lower costs, and more accurate outputs.',
      benefits: [
        'Reduced computational overhead by 60-80% compared to traditional large language models',
        'Faster response times with task-specific optimization',
        'Greater accuracy through specialized training for each function',
        'Scalable architecture that grows with your business needs',
        'Lower environmental impact with reduced energy consumption'
      ],
      howItWorks: [
        'Task Analysis: We break down your business processes into discrete, manageable tasks',
        'Agent Assignment: Each task is assigned to a specialized AI agent optimized for that specific function',
        'Coordinated Execution: Agents work together seamlessly, passing information efficiently',
        'Quality Assurance: Built-in validation ensures accuracy at every step',
        'Continuous Learning: Agents improve over time based on real-world performance'
      ],
      useCases: [
        'Customer service with specialized agents for different departments',
        'Data processing pipelines with validation at each stage',
        'Content generation with separate agents for research, writing, and editing',
        'Business intelligence with dedicated analytical agents'
      ]
    }
  },
  {
    icon: TrendingDown,
    title: 'Cost-Optimized Architecture',
    description:
      'Our three-tier system activates only what you need, when you need it. Result? 60-80% cost reduction.',
    detailedContent: {
      overview: 'We\'ve developed a revolutionary three-tier architecture that matches the complexity of the AI model to the complexity of the task. Simple queries use lightweight models, while complex challenges activate more powerful systems. This intelligent routing ensures you never pay for more than you need.',
      benefits: [
        'Dramatic cost reduction of 60-80% compared to traditional AI solutions',
        'Pay-as-you-grow pricing that scales with your business',
        'Optimized resource allocation for maximum efficiency',
        'Transparent pricing with no hidden costs',
        'ROI-positive from day one with measurable cost savings'
      ],
      howItWorks: [
        'Request Classification: Incoming requests are analyzed for complexity',
        'Tier Selection: The system automatically routes to the appropriate tier (Lightweight, Standard, or Advanced)',
        'Processing: Tasks are executed using the most cost-effective model capable of handling them',
        'Quality Monitoring: Results are validated to ensure accuracy regardless of tier',
        'Usage Analytics: Detailed reporting shows exactly where costs are being optimized'
      ],
      useCases: [
        'Customer inquiries with varying complexity levels',
        'Document processing from simple extraction to complex analysis',
        'Automated decision-making with different risk levels',
        'Content moderation from basic filters to nuanced evaluation'
      ]
    }
  },
  {
    icon: ShieldCheck,
    title: 'Privacy-First Design',
    description:
      'Open-source models you can deploy on-premise. Your data never leaves your control.',
    detailedContent: {
      overview: 'In an era of data breaches and privacy concerns, we put control back in your hands. Our solutions use open-source models that can be deployed entirely on your own infrastructure. Your sensitive business data never leaves your premises, ensuring complete privacy and compliance.',
      benefits: [
        'Complete data sovereignty - your data stays on your servers',
        'Full GDPR, HIPAA, and industry-specific compliance',
        'No vendor lock-in with open-source foundations',
        'Transparent AI with inspectable models and processes',
        'Custom security policies tailored to your requirements'
      ],
      howItWorks: [
        'Infrastructure Assessment: We evaluate your current setup and security requirements',
        'Model Selection: Choose from vetted open-source models or custom-trained options',
        'On-Premise Deployment: Installation and configuration on your servers',
        'Security Hardening: Implementation of your specific security protocols',
        'Ongoing Support: Regular updates and security patches without data exposure'
      ],
      useCases: [
        'Healthcare providers handling patient data',
        'Financial institutions with regulatory requirements',
        'Legal firms managing confidential information',
        'Government agencies with strict data sovereignty needs'
      ]
    }
  },
  {
    icon: Settings,
    title: 'SMB-Focused Customization',
    description:
      'Fine-tuned for your industry, your workflow, your challenges. Not a generic chatbot.',
    detailedContent: {
      overview: 'Generic AI solutions fail because every business is unique. We take the time to understand your industry, your processes, and your challenges. Then we fine-tune AI models specifically for your use case, delivering results that actually match how you work.',
      benefits: [
        'Industry-specific training on your sector\'s terminology and processes',
        'Workflow integration that fits your existing operations',
        'Custom outputs formatted exactly how you need them',
        'Faster implementation with pre-trained industry knowledge',
        'Continuous refinement based on your feedback and results'
      ],
      howItWorks: [
        'Discovery Workshop: Deep dive into your business processes and pain points',
        'Data Preparation: We help identify and prepare relevant training data',
        'Fine-Tuning: Models are specialized for your industry and specific use cases',
        'Testing & Validation: Rigorous testing with real-world scenarios from your business',
        'Deployment & Iteration: Launch with ongoing refinement based on actual usage'
      ],
      useCases: [
        'Retail businesses with specific product catalogs and customer service needs',
        'Professional services with industry-specific terminology',
        'Manufacturing with unique processes and quality requirements',
        'Hospitality with brand voice and service standards'
      ]
    }
  },
];

const SolutionSection = () => {
  const [selectedService, setSelectedService] = useState<typeof solutions[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (solution: typeof solutions[0]) => {
    setSelectedService(solution);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="services" className="bg-bg-dark relative py-12 md:py-20 overflow-hidden">
      {/* Layered background decorations */}
      <div className="absolute inset-0 circuit-pattern" />

      {/* Dense flowing topographic pattern with animation */}
      <div className="absolute inset-0 topographic-dark-solution topographic-animated pointer-events-none z-0" />

      <div className="absolute top-0 right-0 w-40 h-40 star-pattern" />
      <div className="absolute bottom-0 left-0 w-32 h-32 star-pattern" />

      {/* Concentric rings */}
      <ConcentricRings position="top-left" size="large" variant="mixed" opacity={0.08} />
      <ConcentricRings position="bottom-right" size="medium" variant="gold" opacity={0.1} />

      <div className="container mx-auto px-4 md:px-8 lg:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Orbital ring decorative element */}
          <div className="flex justify-center mb-6">
            <svg width="80" height="40" viewBox="0 0 80 40" className="opacity-40">
              <ellipse cx="40" cy="20" rx="35" ry="15" stroke="#17A2B8" strokeWidth="1" fill="none" />
              <ellipse cx="40" cy="20" rx="25" ry="10" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.6" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-text-cream mb-4">
            The <span className="text-gold">Distributed Intelligence</span> Architecture
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
              onClick={() => handleCardClick(solution)}
              className="bg-bg-card-dark border border-primary rounded-xl p-6 hover:border-gold hover:shadow-2xl hover:shadow-gold/20 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 relative overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-3 right-3">
                <svg width="12" height="12" viewBox="0 0 16 16" className="text-primary fill-current opacity-30 group-hover:opacity-60 transition-opacity">
                  <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" />
                </svg>
              </div>
              <div className="absolute inset-0 topographic-bg opacity-0 group-hover:opacity-10 transition-opacity" />

              {/* Icon with glow effect */}
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:bg-gold/20 transition-colors" />
                <solution.icon
                  className="text-primary relative z-10 group-hover:text-gold transition-colors"
                  size={64}
                  strokeWidth={1.5}
                />
              </div>

              {/* Heading */}
              <h3 className="text-xl font-bold text-text-cream">
                {solution.title}
              </h3>

              {/* Description */}
              <p className="text-base text-text-teal-gray leading-relaxed">
                {solution.description}
              </p>

              {/* Click to learn more hint */}
              <div className="mt-auto pt-4 flex items-center justify-between text-sm text-primary group-hover:text-gold transition-colors">
                <span className="font-medium">Click to learn more</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Service Detail Modal */}
    <ServiceDetailModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      service={selectedService}
    />
    </>
  );
};

export default SolutionSection;
