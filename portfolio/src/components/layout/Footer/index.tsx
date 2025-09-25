import { motion } from 'framer-motion';
import { FaRocket, FaCoffee, FaCode, FaRegSmileWink } from 'react-icons/fa';
import styles from './style.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerWave}>
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className={styles.waveSvg}
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            className={styles.wavePath}
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            className={styles.wavePath}
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            className={styles.wavePath}
          ></path>
        </svg>
      </div>
      
      <div className={styles.layoutContainer}>
        <motion.div 
          className={styles.footerContent}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.footerMain}>
            <motion.div 
              className={styles.copyright}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span>© {currentYear} Adyllsxn. All rights reserved.</span>
              <motion.div 
                className={styles.rocketLaunch}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              >
                <FaRocket />
              </motion.div>
            </motion.div>

            <div className={styles.footerInfo}>
              <motion.p
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaCode /> Crafted with passion
              </motion.p>
              
              <motion.p
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaCoffee /> Fueled by coffee
              </motion.p>
              
              <motion.p
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaRegSmileWink /> Deployed with love
              </motion.p>
            </div>
          </div>

          <motion.div 
            className={styles.footerSignature}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span>Made by </span>
            <motion.span 
              className={styles.signatureName}
              whileHover={{
                filter: "brightness(1.2) drop-shadow(0 0 8px rgba(30, 144, 255, 0.6))",
                scale: 1.05
              }}
              transition={{ duration: 0.3 }}
            >
              Domingos Nascimento
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.scrollTop}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          title="Back to top"
        >
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <path
              d="M12 20L12 4M12 4L5 11M12 4L19 11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;