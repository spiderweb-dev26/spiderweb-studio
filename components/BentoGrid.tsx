import { motion, Variants } from 'framer-motion';
import { capabilities } from '@/constants/index';

export default function BentoGrid() {
  // Staggered animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } },
  };

  return (
    <section id="capabilities" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Our Capabilities
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="relative group bg-white dark:bg-gray-800 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 backdrop-blur-sm"
            >
              <div className="mb-6 text-4xl">{cap.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                {cap.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {cap.description}
              </p>
              <div className="absolute inset-0 rounded-2xl border-[2px] border-transparent group-hover:border-spiderweb/50 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}