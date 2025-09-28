import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { styles } from './style';

const Home = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Instagram', url: 'https://instagram.com' }
  ];

  return (
    <section style={styles.hero}>
      <div style={styles.container}>
        <div style={styles.content}>
          
          <motion.h1
            style={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span style={styles.titleHighlight}>Domingos Nascimento</span>
          </motion.h1>

          <motion.p
            style={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Full Stack Developer (Web & Mobile)
          </motion.p>

          <motion.ul
            style={styles.links}
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
                style={styles.linkItem}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.4 }}
              >
                <a 
                  href={item.url} 
                  style={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name} 
                  <FiArrowUpRight style={styles.icon} />
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