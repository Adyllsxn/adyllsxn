import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import styles from './style.module.css';

const Home = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Instagram', url: 'https://instagram.com' }
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span className={styles.titleHighlight}>Domingos Nascimento</span>
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Full Stack Developer (Web & Mobile)
          </motion.p>

          <motion.ul
            className={styles.links}
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {socialLinks.map((item, index) => (
              <motion.li
                key={index}
                className={styles.linkItem}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.4 }}
              >
                <a 
                  href={item.url} 
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name} 
                  <FiArrowUpRight className={styles.icon} />
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