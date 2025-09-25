import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaRocket, FaHome, FaPaperPlane } from 'react-icons/fa';
import styles from './style.module.css';

const Thank = () => {
  return (
    <section className={styles.thankSection}>
      <div className={styles.layoutContainer}>
        <motion.div
          className={styles.thankContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className={styles.successIcon}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 15,
              delay: 0.2 
            }}
          >
            <FaCheckCircle />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Message Sent Successfully!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className={styles.thankMessage}
          >
            Thank you for reaching out! Your message has been delivered to my inbox.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className={styles.responseInfo}
          >
            <FaPaperPlane /> I'll get back to you within <strong>24 hours</strong>
          </motion.p>

          <motion.div
            className={styles.ctaButtons}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Link to="/" className={styles.backHome}>
              <FaHome />
              <span>Back to Homepage</span>
            </Link>
            
            <motion.a
              href="/projects"
              className={styles.viewProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRocket />
              <span>View My Projects</span>
            </motion.a>
          </motion.div>

          <motion.div
            className={styles.decoration}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Animation */}
      <div className={styles.backgroundEffects}>
        <div className={styles.floatingCircle}></div>
        <div className={styles.floatingCircle}></div>
        <div className={styles.floatingCircle}></div>
      </div>
    </section>
  );
};

export default Thank;