import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFigma } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Footer from '@/components/layout/Footer';
import './Project.css';

import kairosImg from '@/assets/fullstack/kairos.png';
import frapiImg from '@/assets/backend/frapi.png';

// Definir tipos dos projetos
type ProjectType = 'programming' | 'design';

interface ProjectData {
  id: number;
  type: ProjectType;
  title: string;
  description: string;
  tools: string[];
  image: string;
  demo: string;
  repo?: string;
  figma?: string;
}

// Lista de projetos
const projectsData: ProjectData[] = [
  { id: 1, type: 'programming', title: 'Kairos', description: 'Event Management System', tools: ['C#', 'ASP.NET', 'React', 'TypeScript', 'SQL Server'], image: kairosImg, demo: 'https://kairoschurch.vercel.app/', repo: 'https://github.com/Adyllsxn/kairos' },
  { id: 2, type: 'programming', title: 'Fokuz ', description: 'Real-Time Chat Application', tools: ['C#', 'ASP.NET', 'React', 'TypeScript', 'SignalR'], image: '', demo: '#', repo: '#' },
  { id: 3, type: 'programming', title: 'Frapi ', description: 'Mock API for frontend practice', tools: ['C#', 'ASP.NET', 'Swagger'], image: frapiImg, demo: '#', repo: 'https://github.com/Adyllsxn/frapi' },
  { id: 4, type: 'design', title: 'Music App Design', description: 'UI para player de música.', tools: ['Figma'], image: '', demo: '#', figma: '#' },
  { id: 5, type: 'design', title: 'App Fitness', description: 'UI app fitness.', tools: ['Figma'], image: '', demo: '#', figma: '#' }
];

const Project = () => {
  const [filter, setFilter] = useState<'all' | ProjectType>('all');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;

  const filteredProjects = projectsData.filter(project => filter === 'all' || project.type === filter);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  const handleFilterChange = (newFilter: 'all' | ProjectType) => {
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

  return (
    <section className='sectionProject'>
      <div className='sectionProjectContant'>
        <div className='layoutContainer'>
          <div className='projectContainer'>
            <div className="projectsContext">
              <h1>Featured projects</h1>
              <p>Projects and solutions I’ve developed, focused on real impact and tangible results.</p>
              <div className="filterButtons">
                <button onClick={() => handleFilterChange('all')}>All</button>
                <button onClick={() => handleFilterChange('programming')}>Development</button>
                <button onClick={() => handleFilterChange('design')}>Design</button>
              </div>
            </div>

            <div className="projetsCards">
              {currentProjects.map(project => (
                <motion.div whileHover={{ scale: 1.05 }} className="card" key={project.id}>
                  <img src={project.image} alt={project.title} className="cardImage" />
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tools">
                    {project.tools.map(tool => (<span key={tool}>{tool}</span>))}
                  </div>
                  <div className="cardButtons">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn"><FaExternalLinkAlt /> View</a>
                    {project.type === 'programming' ? (
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn"><FaGithub /> Repository</a>
                    ) : (
                      <a href={project.figma} target="_blank" rel="noopener noreferrer" className="btn"><FaFigma /> Figma</a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pagination">
              <button onClick={handlePrev} disabled={currentPage === 1}>{'<'} Prev</button>
              <span>{currentPage} / {totalPages}</span>
              <button onClick={handleNext} disabled={currentPage === totalPages}>Next {'>'}</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Project;
