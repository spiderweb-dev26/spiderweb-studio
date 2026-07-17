import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { hero } from '@/constants/index';

export default function Hero() {
  // Variants for staggered animation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-b from-black/90 to-black/80 px-6 py-20 md:py-24">
      {/* Animated decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.08),transparent)]"></div>
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-spiderweb/5 blur-3xl"></div>
        <div className="absolute bottom-10 right-1/2 -translate-x-1/2 w-[200px] h-[200px] rounded-full bg-accent/5 blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <h1
            className="text-5xl font-display font-bold text-white mb-4 tracking-tighter lg:text-6xl"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            {hero.headline}
          </h1>
          <p
            className="text-xl text-gray-200 max-w-2xl mx-auto lg:text-2xl"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            {hero.subhead}
          </p>
          <Link
            href="/#capabilities"
            className="inline-block px-8 py-4 bg-spiderweb/90 hover:bg-spiderweb/100 text-white font-semibold rounded-full transition-all transform hover:-translate-y-1 hover:shadow-xl backdrop-blur-sm border border-spiderweb/30"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Explore Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}