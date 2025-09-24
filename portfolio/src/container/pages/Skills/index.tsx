import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaLinux, FaDatabase, FaGithub, FaNpm, FaDocker } from 'react-icons/fa';
import { SiDotnet, SiTypescript, SiPostgresql, SiTailwindcss, SiDbeaver, SiNuget, SiFigma, SiGithubactions } from 'react-icons/si';
import Footer from '@/components/layout/Footer';
import './Skills.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState<'skills' | 'tools'>('skills');

  const skillsIcons = [
    { icon: <SiDotnet />, label: '.NET' },
    { icon: <FaNodeJs />, label: 'Node.js' },
    { icon: <FaReact />, label: 'React' },
    { icon: <SiTypescript />, label: 'TypeScript' },
    { icon: <FaJsSquare />, label: 'JavaScript' },
    { icon: <FaDatabase />, label: 'SQL Server' },
    { icon: <SiPostgresql />, label: 'PostgreSQL' },
    { icon: <FaHtml5 />, label: 'HTML' },
    { icon: <FaCss3Alt />, label: 'CSS' },
    { icon: <SiTailwindcss />, label: 'Tailwind' },
  ];

  const toolsIcons = [
    { icon: <SiDbeaver />, label: 'DBeaver' },
    { icon: <FaLinux />, label: 'Linux' },
    { icon: <FaGitAlt />, label: 'Git' },
    { icon: <FaGithub />, label: 'GitHub' },
    { icon: <SiGithubactions />, label: 'GitHub Actions' },
    { icon: <SiNuget />, label: 'NuGet' },
    { icon: <SiFigma />, label: 'Figma' },
    { icon: <FaNpm />, label: 'NPM' },
    { icon: <FaDocker />, label: 'Docker' },
  ];

  const icons = activeTab === 'skills' ? skillsIcons : toolsIcons;

  return (
    <section className='sectionSkills'>
      <div className='sectionSkillsContant'>
        <div className='layoutContainer'>

          <div className="skillContant">
            <div className='skillsHeader'>
              <h2>What My Programming Skills Included?</h2>
              <p>I am a Full Stack developer who builds complete applications, combining responsive and intuitive interfaces with efficient and secure back-ends. I work with modern technologies to deliver practical and functional solutions.</p>
              <div className='skillsToggle'>
                <button
                  className={activeTab === 'skills' ? 'skillsBtn active' : 'skillsBtn'}
                  onClick={() => setActiveTab('skills')}
                >
                  Skills
                </button>
                <button
                  className={activeTab === 'tools' ? 'skillsBtn active' : 'skillsBtn'}
                  onClick={() => setActiveTab('tools')}
                >
                  Tools
                </button>
              </div>
            </div>

            <motion.div
              className='skillsIconsGrid'
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {icons.map(({ icon, label }, index) => (
                <div key={index} className='skillsIcon'>
                  {icon}
                  <span>{label}</span>
                </div>
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
