'use client';

import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="layout-container">
        <div className="text-center">
          
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Hi, I&apos;m Domingos Nascimento, a Full Stack Developer and UI/UX Designer.
          </motion.h1>

          <motion.ul
            className="flex justify-center gap-6 flex-wrap"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {['Github', 'LinkedIn', 'Instagram'].map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#" className="flex items-center gap-2 text-primary font-semibold text-lg">
                  {item} <FiArrowUpRight />
                </a>
              </motion.li>
            ))}
          </motion.ul>

        </div>
      </div>
    </section>
  );
}