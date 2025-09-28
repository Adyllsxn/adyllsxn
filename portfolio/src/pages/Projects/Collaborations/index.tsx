// Collaborations.tsx
import { useState } from 'react';
import { FaExternalLinkAlt, FaUserTie, FaCheckCircle, FaPlayCircle, FaRegCalendarCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Footer from '@/components/layout/Footer';
import styles from './style.module.css';
import { collaborationsData } from './collaborationsData';

const Collaborations = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(collaborationsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCollaborations = collaborationsData.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <FaCheckCircle style={{ color: '#10B981' }} />;
      case 'in-progress': return <FaPlayCircle style={{ color: '#F59E0B' }} />;
      case 'planned': return <FaRegCalendarCheck style={{ color: '#8B5CF6' }} />;
      default: return <FaCheckCircle style={{ color: '#6B7280' }} />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'planned': return 'Planned';
      default: return status;
    }
  };

  return (
    <section className={styles.sectionCollaborations}>
      <div className={styles.sectionCollaborationsContent}>
        <div className={styles.layoutContainer}>
          <div className={styles.collaborationsContainer}>
            <motion.div 
              className={styles.collaborationsContext}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className={styles.sectionLabel}>COLLABORATIONS</p>
              <h1>Team Projects & Contributions</h1>
              <p>Projects developed in collaboration with teams and clients, showcasing my specific roles and contributions.</p>
            </motion.div>

            <motion.div 
              className={styles.collaborationsGrid}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {currentCollaborations.map((project, index) => (
                <motion.div 
                  key={project.id}
                  className={styles.collaborationCard}
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.statusBadge}>
                      {getStatusIcon(project.status)}
                      <span>{getStatusText(project.status)}</span>
                    </div>

                    <div className={styles.cardImage}>
                      {project.image ? (
                        <img src={project.image} alt={project.title} />
                      ) : (
                        <div className={styles.imagePlaceholder}>
                          <FaUserTie />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className={styles.cardContent}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    
                    <div className={styles.roleSection}>
                      <FaUserTie className={styles.roleIcon} />
                      <span className={styles.roleText}>{project.role}</span>
                    </div>
                    
                    
                  </div>

                  <div className={styles.cardActions}>
                    <a 
                      href={project.view} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.btnView}
                    >
                      <FaExternalLinkAlt /> View Project
                    </a>
                    
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.btnDemo}
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {totalPages > 1 && (
              <div className={styles.pagination}>
                <button 
                  onClick={handlePrev} 
                  disabled={currentPage === 1}
                  className={styles.paginationBtn}
                >
                  ‹ Previous
                </button>
                <span className={styles.pageInfo}>
                  Page {currentPage} of {totalPages}
                </span>
                <button 
                  onClick={handleNext} 
                  disabled={currentPage === totalPages}
                  className={styles.paginationBtn}
                >
                  Next ›
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Collaborations;