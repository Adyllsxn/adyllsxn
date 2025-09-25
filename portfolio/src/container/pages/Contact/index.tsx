import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaInstagram, FaXTwitter, FaPaperPlane } from 'react-icons/fa6';
import Footer from '@/components/layout/Footer';
import styles from './style.module.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Here you would handle the actual form submission
    }, 2000);
  };

  return (
    <section className={styles.sectionContact}>
      <div className={styles.sectionContactContent}>
        <div className={styles.layoutContainer}>
          <motion.div
            className={styles.contactContainer}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.contactInfo}>
              <motion.p 
                className={styles.sectionLabel}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                GET IN TOUCH
              </motion.p>
              
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Let's Create Something Amazing Together
              </motion.h2>
              
              <motion.p 
                className={styles.contactDescription}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Let's turn your ideas into reality with cutting-edge solutions.
              </motion.p>

              <motion.div 
                className={styles.contactDetails}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className={styles.contactItem}>
                  <strong>Email</strong>
                  <span>domingos.nxscimento@gmail.com</span>
                </div>
                
                <div className={styles.contactItem}>
                  <strong>Availability</strong>
                  <span>Open for new projects</span>
                </div>
                
                <div className={styles.contactItem}>
                  <strong>Response Time</strong>
                  <span>Within 24 hours</span>
                </div>
              </motion.div>

              <motion.div 
                className={styles.socialIcons}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <a href="https://github.com/adyllsxn" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <div className={styles.iconCircle}>
                    <FaGithub />
                  </div>
                  <span>GitHub</span>
                </a>
                
                <a href="https://linkedin.com/in/adyllsxn" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <div className={styles.iconCircle}>
                    <FaLinkedinIn />
                  </div>
                  <span>LinkedIn</span>
                </a>
                
                <a href="https://x.com/adyllsxn" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <div className={styles.iconCircle}>
                    <FaXTwitter />
                  </div>
                  <span>Twitter</span>
                </a>
                
                <a href="https://instagram.com/adyllsxn" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <div className={styles.iconCircle}>
                    <FaInstagram />
                  </div>
                  <span>Instagram</span>
                </a>
              </motion.div>
            </div>

            <motion.form
              className={styles.contactForm}
              action="https://formspree.io/f/mjkrqdko"
              method="POST"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className={styles.formGroup}>
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Enter your full name" 
                  required 
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="your.email@example.com" 
                  required 
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="Tell me about your project, ideas, or anything you'd like to discuss..."
                  rows={6}
                  required
                />
              </div>

              <motion.button 
                type="submit" 
                className={styles.submitBtn}
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className={styles.loadingSpinner}></div>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;