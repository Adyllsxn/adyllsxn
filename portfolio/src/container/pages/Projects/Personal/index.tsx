// Personal.tsx
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaMobile, FaServer, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Footer from '@/components/layout/Footer';
import styles from './style.module.css';
import { projectsData, type ProjectType } from './projectsData';

const Personal = () => {
  const [filter, setFilter] = useState<ProjectType>('all');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  const handleFilterChange = (newFilter: ProjectType) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend': return <FaGlobe />;
      case 'backend': return <FaServer />;
      case 'mobile': return <FaMobile />;
      case 'fullstack': return <FaGlobe />;
      default: return <FaGlobe />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend': return '#61DAFB';
      case 'backend': return '#339933';
      case 'mobile': return '#FF2D55';
      case 'fullstack': return '#512BD4';
      default: return '#6B7280';
    }
  };

  return (
    <section className={styles.sectionProject}>
      <div className={styles.sectionProjectContent}>
        <div className={styles.layoutContainer}>
          <div className={styles.projectContainer}>
            <motion.div 
              className={styles.projectsContext}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className={styles.sectionLabel}>MY WORK</p>
              <h1>Featured Projects</h1>
              <p>A collection of my latest work across different technologies and platforms. Each project represents a unique challenge and solution.</p>
              
              <div className={styles.filterButtons}>
                <button 
                  onClick={() => handleFilterChange('all')}
                  className={filter === 'all' ? styles.active : ''}
                >
                  All Projects
                </button>
                <button 
                  onClick={() => handleFilterChange('frontend')}
                  className={filter === 'frontend' ? styles.active : ''}
                >
                  <FaGlobe /> Frontend
                </button>
                <button 
                  onClick={() => handleFilterChange('backend')}
                  className={filter === 'backend' ? styles.active : ''}
                >
                  <FaServer /> Backend
                </button>
                <button 
                  onClick={() => handleFilterChange('mobile')}
                  className={filter === 'mobile' ? styles.active : ''}
                >
                  <FaMobile /> Mobile
                </button>
                <button 
                  onClick={() => handleFilterChange('fullstack')}
                  className={filter === 'fullstack' ? styles.active : ''}
                >
                  <FaGlobe /> Full Stack
                </button>
              </div>
            </motion.div>

            <motion.div 
              className={styles.projectsGrid}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {currentProjects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  className={styles.projectCard}
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={styles.cardHeader}>
                    <div 
                      className={styles.categoryBadge}
                      style={{ backgroundColor: getCategoryColor(project.category) }}
                    >
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </div>
                    <div className={styles.cardImage}>
                      {project.image ? (
                        <img src={project.image} alt={project.title} />
                      ) : (
                        <div className={styles.imagePlaceholder}>
                          {getCategoryIcon(project.category)}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className={styles.cardContent}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    
                    <div className={styles.tools}>
                      {project.tools.map(tool => (
                        <span key={tool}>{tool}</span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.cardActions}>
                    {(project.category === 'frontend' || project.category === 'fullstack') && project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                      <FaGithub /> Code
                    </a>
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

export default Personal;