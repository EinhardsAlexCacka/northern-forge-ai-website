import { motion } from 'framer-motion';
import ConcentricRings from './ConcentricRings';

// Blog post data
const blogPosts = [
  {
    title: 'The Future of AI in Small Business',
    summary:
      'Discover how AI is revolutionizing small businesses and what it means for you.',
    imageGradient: 'from-primary to-primary-dark',
  },
  {
    title: 'AI-Powered Automation for Enhanced Productivity',
    summary:
      'Learn how to leverage AI-powered automation to streamline your business processes.',
    imageGradient: 'from-primary-light via-primary to-gold',
  },
  {
    title: 'Navigating the AI Landscape: A Guide for SMEs',
    summary:
      'A comprehensive guide to help SMEs navigate the complex world of AI.',
    imageGradient: 'from-gold via-gold-dark to-primary',
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="bg-bg-dark relative py-12 md:py-20 overflow-hidden">
      {/* Concentric rings */}
      <ConcentricRings position="top-left" size="large" variant="teal" opacity={0.06} />
      <ConcentricRings position="bottom-right" size="medium" variant="mixed" opacity={0.08} />

      <div className="container mx-auto px-4 md:px-8 lg:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-cream">
            From the Anvil: Our Latest Insights
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              className="bg-bg-card-dark border border-primary/50 rounded-xl overflow-hidden hover:border-primary hover:scale-102 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Featured Image Placeholder */}
              <div
                className={`aspect-video bg-gradient-to-br ${post.imageGradient} flex items-center justify-center`}
              >
                <div className="text-center p-6">
                  <svg
                    className="mx-auto"
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                  >
                    {/* Abstract geometric tech illustration */}
                    <rect
                      x="10"
                      y="10"
                      width="20"
                      height="20"
                      fill="white"
                      opacity="0.3"
                    />
                    <rect
                      x="35"
                      y="10"
                      width="15"
                      height="15"
                      fill="white"
                      opacity="0.5"
                    />
                    <rect
                      x="55"
                      y="10"
                      width="15"
                      height="25"
                      fill="white"
                      opacity="0.4"
                    />
                    <rect
                      x="10"
                      y="35"
                      width="15"
                      height="35"
                      fill="white"
                      opacity="0.6"
                    />
                    <rect
                      x="30"
                      y="30"
                      width="25"
                      height="40"
                      fill="white"
                      opacity="0.7"
                    />
                    <rect
                      x="60"
                      y="40"
                      width="10"
                      height="30"
                      fill="white"
                      opacity="0.5"
                    />
                  </svg>
                  <p className="text-white text-xs opacity-75 mt-2">
                    Abstract geometric tech illustration
                  </p>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6">
                {/* Post Title */}
                <h3 className="text-xl font-bold text-text-cream mb-3">
                  {post.title}
                </h3>

                {/* Summary - 2 lines max */}
                <p className="text-base text-text-teal-gray mb-4 line-clamp-2">
                  {post.summary}
                </p>

                {/* Read More Link */}
                <a
                  href="#"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Read More →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
