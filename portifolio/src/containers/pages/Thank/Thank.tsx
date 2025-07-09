import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Thank.css';

const Thank = () => {
  return (
    <section className="thankSection">
      <div className="layoutContainer">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1>✅ Message sent successfully!</h1>
          <p>Thanks for getting in touch. I'll reply as soon as possible.</p>
          <Link to="/" className="backHome">Back to homepage</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Thank;
