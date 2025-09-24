import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import './Home.css';

const Home = () => {
  return (
    <section className='sectionHero'>
      <div className='layoutContainer'>
        <div className='sectionHeroContainer'>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Hi, I'm Domingos Nascimento, a Full Stack Developer and UI/UX Designer.
          </motion.h1>

          <motion.ul
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
                <a href="#">
                  {item} <FiArrowUpRight />
                </a>
              </motion.li>
            ))}
          </motion.ul>

        </div>
      </div>
    </section>
  );
};

export default Home;