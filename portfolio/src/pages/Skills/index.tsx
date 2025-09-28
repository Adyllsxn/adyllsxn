import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaLinux, FaGithub, FaNpm, FaDocker } from 'react-icons/fa';
import { SiDotnet, SiTypescript, SiPostgresql, SiTailwindcss, SiDbeaver, SiNuget, SiGithubactions, SiMongodb, SiRedis, SiReact } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import Footer from '@/components/layout/Footer';
import styles from './style.module.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState<'skills' | 'tools'>('skills');

  const skillsIcons = [
    { icon: <SiDotnet />, label: '.NET Core', color: '#512BD4' },
    { icon: <SiReact />, label: 'React JS', color: '#61DAFB' },
    { icon: <TbBrandReactNative />, label: 'React Native', color: '#61DAFB' },
    { icon: <SiTypescript />, label: 'TypeScript', color: '#3178C6' },
    { icon: <FaJsSquare />, label: 'JavaScript', color: '#F7DF1E' },
    { icon: <SiMongodb />, label: 'MongoDB', color: '#47A248' },
    { icon: <SiRedis />, label: 'Redis', color: '#DC382D' },
    { icon: <SiPostgresql />, label: 'PostgreSQL', color: '#336791' },
    { icon: <FaHtml5 />, label: 'HTML5', color: '#E34F26' },
    { icon: <FaCss3Alt />, label: 'CSS3', color: '#1572B6' },
    { icon: <SiTailwindcss />, label: 'Tailwind', color: '#06B6D4' },
  ];

  const toolsIcons = [
    { icon: <SiDbeaver />, label: 'DBeaver', color: '#372923' },
    { icon: <FaLinux />, label: 'Linux', color: '#FCC624' },
    { icon: <FaGitAlt />, label: 'Git', color: '#F05032' },
    { icon: <FaGithub />, label: 'GitHub', color: '#181717' },
    { icon: <SiGithubactions />, label: 'GitHub Actions', color: '#2088FF' },
    { icon: <SiNuget />, label: 'NuGet', color: '#004880' },
    { icon: <FaNpm />, label: 'NPM', color: '#CB3837' },
    { icon: <FaDocker />, label: 'Docker', color: '#2496ED' },
  ];

  const icons = activeTab === 'skills' ? skillsIcons : toolsIcons;

  return (
    <section className={styles.sectionSkills}>
      <div className={styles.sectionSkillsContent}>
        <div className={styles.layoutContainer}>
          <div className={styles.skillContent}>
            
            <div className={styles.skillsHeader}>
              <p className={styles.sectionLabel}>MY SKILLS</p>
              <h2>What My Programming Skills Include?</h2>
              <p className={styles.skillsDescription}>
                As a Full Stack Developer, I build complete applications by combining responsive and intuitive 
                interfaces with efficient and secure back-ends. I work with modern technologies to deliver 
                practical and functional solutions that scale.
              </p>
              
              <div className={styles.skillsToggle}>
                <button
                  className={`${styles.toggleBtn} ${activeTab === 'skills' ? styles.active : ''}`}
                  onClick={() => setActiveTab('skills')}
                >
                  Technologies
                </button>
                <button
                  className={`${styles.toggleBtn} ${activeTab === 'tools' ? styles.active : ''}`}
                  onClick={() => setActiveTab('tools')}
                >
                  Tools & Platforms
                </button>
              </div>
            </div>

            <motion.div
              className={styles.skillsGrid}
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {icons.map(({ icon, label, color }, index) => (
                <motion.div
                  key={index}
                  className={styles.skillCard}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  style={{ '--skill-color': color } as React.CSSProperties}
                >
                  <div className={styles.skillIcon}>
                    {icon}
                  </div>
                  <span className={styles.skillLabel}>{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Skills;