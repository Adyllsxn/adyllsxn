// components/sections/About.tsx
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  FaDownload, 
  FaWhatsapp, 
  FaEnvelope,
  FaJs, 
  FaReact, 
  FaGitAlt, 
  FaDocker,
  FaMicrosoft,
  FaUbuntu,
  FaCloud,
  FaCode,
  FaGlobe,
  FaServer,
  FaDatabase
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiSharp, 
  SiHtml5, 
  SiCss3,
  SiPostgresql, 
  SiMongodb
} from 'react-icons/si';

export default function About() {
  const { theme } = useTheme();
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('languages');

  const categories = {
    languages: {
      title: language === 'pt' ? 'Linguagens' : 'Languages',
      skills: [
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
        { name: 'C#', icon: <SiSharp className="text-purple-600" /> },
        { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
        { name: 'CSS3', icon: <SiCss3 className="text-blue-500" /> }
      ]
    },
    frameworks: {
      title: language === 'pt' ? 'Frameworks' : 'Frameworks',
      skills: [
        { name: 'React', icon: <FaReact className="text-cyan-400" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
        { name: '.NET Core', icon: <FaMicrosoft className="text-purple-500" /> },
        { name: 'ASP.NET Core', icon: <FaServer className="text-purple-600" /> }
      ]
    },
    tools: {
      title: language === 'pt' ? 'Ferramentas' : 'Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
        { name: 'Azure', icon: <FaCloud className="text-blue-500" /> },
        { name: 'Ubuntu', icon: <FaUbuntu className="text-orange-600" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
        { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
        { name: 'VS Code', icon: <FaCode className="text-blue-500" /> }
      ]
    }
  };

  const handleDownloadCV = () => {
    // Define o arquivo baseado no idioma atual
    const cvFile = language === 'pt' ? 'cv-pt.pdf' : 'cv-en.pdf';
    const cvPath = `/cv/${cvFile}`;
    
    // Cria um link temporário para download
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = cvFile;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleWhatsApp = () => {
    const phone = '+244935751955';
    const message = language === 'pt' 
      ? 'Olá! Gostaria de conversar sobre um projeto.'
      : 'Hello! I would like to discuss a project.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:domingos.nxscimento@gmail.com';
  };

  return (
    <section 
      id="about" 
      className="py-16 lg:py-20 transition-all duration-300 overflow-hidden"
      style={{
        backgroundColor: 'var(--background)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="container section-title text-center mb-12 lg:mb-16" data-aos="fade-up">
          <span className="subtitle text-blue-500 font-bold text-sm uppercase tracking-widest mb-3">
            {language === 'pt' ? 'SOBRE MIM' : 'ABOUT ME'}
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {language === 'pt' ? 'Sobre Mim' : 'About Me'}
          </h2>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {language === 'pt' 
              ? 'Desenvolvendo soluções digitais que impulsionam negócios e encantam usuários'
              : 'Developing digital solutions that boost businesses and delight users'
            }
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Profile Card - Lado Esquerdo */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className={`profile-card rounded-2xl p-8 ${
                theme === 'dark' 
                  ? 'bg-gray-900/50 border border-gray-700/50' 
                  : 'bg-white/80 border border-gray-200/50'
              } shadow-2xl backdrop-blur-sm sticky top-24`}>
                
                {/* Profile Header */}
                <div className="profile-header text-center pb-6 border-b border-gray-600/30 mb-6">
                  {/* Substituindo a foto por um ícone/ilustração */}
                  <div className="profile-avatar relative mx-auto mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-500/20 relative flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                      <FaGlobe className="text-white text-5xl" />
                    </div>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Domingos Nascimento
                  </h3>
                  <span className="text-blue-500 font-medium text-sm">
                    Full Stack Developer
                  </span>
                </div>

                {/* Quick Stats */}
                <div className="quick-stats grid grid-cols-2 gap-4 mb-6">
                  <div className={`text-center p-3 rounded-xl ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                  }`}>
                    <div className={`text-xl font-black ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      2+
                    </div>
                    <div className={`text-xs ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {language === 'pt' ? 'Anos' : 'Years'}
                    </div>
                  </div>
                  <div className={`text-center p-3 rounded-xl ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                  }`}>
                    <div className={`text-xl font-black ${
                      theme === 'dark' ? 'text-green-400' : 'text-green-600'
                    }`}>
                      5+
                    </div>
                    <div className={`text-xs ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {language === 'pt' ? 'Projetos' : 'Projects'}
                    </div>
                  </div>
                </div>

                {/* Profile Actions */}
                <div className="profile-actions space-y-3">
                  <button 
                    onClick={handleDownloadCV}
                    className={`w-full py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    <FaDownload className="w-5 h-5" />
                    {language === 'pt' ? 'Baixar CV' : 'Download CV'}
                  </button>
                  
                  {/* WhatsApp Button */}
                  <button 
                    onClick={handleWhatsApp}
                    className={`w-full py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    WhatsApp
                  </button>

                  {/* Email Button */}
                  <button 
                    onClick={handleEmail}
                    className={`w-full py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 border transition-all duration-300 ${
                      theme === 'dark'
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <FaEnvelope className="w-5 h-5" />
                    Email
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Content - Lado Direito */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                {/* Bio Section */}
                <div className="bio-section">
                  <div className="section-tag inline-block px-4 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm font-semibold mb-4">
                    {language === 'pt' ? 'Sobre Mim' : 'About Me'}
                  </div>
                  <h2 className={`text-2xl font-bold mb-6 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {language === 'pt' ? 'Transformando Ideias em Realidade Digital' : 'Transforming Ideas into Digital Reality'}
                  </h2>
                  
                  <div className="space-y-4">
                    <p className={`text-base leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {language === 'pt' 
                        ? <>Olá! Sou o <strong className="text-blue-500">Domingos Nascimento</strong>, também conhecido como <strong className="text-blue-500">Adyllsxn</strong>, um apaixonado Desenvolvedor Full Stack dedicado a criar soluções digitais completas. Especializo-me em construir aplicações de ponta a ponta que combinam backends poderosos com interfaces de usuário envolventes.</>
                        : <>Hey! I'm <strong className="text-blue-500">Domingos Nascimento</strong>, also known as <strong className="text-blue-500">Adyllsxn</strong>, a passionate Full Stack Developer dedicated to creating complete digital solutions. I specialize in building end-to-end applications that combine powerful backends with engaging user interfaces.</>
                      }
                    </p>
                    
                    <p className={`text-base leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {language === 'pt' 
                        ? <>No backend, projeto <strong className="text-blue-500">sistemas robustos e APIs</strong> usando <strong className="text-blue-500">ASP.NET Core</strong>, com forte foco em performance e escalabilidade. Para o frontend, desenvolvo <strong className="text-blue-500">interfaces modernas e responsivas</strong> com <strong className="text-blue-500">React.js</strong> e <strong className="text-blue-500">Next.js</strong>, garantindo experiências de usuário de alta qualidade.</>
                        : <>On the backend, I architect <strong className="text-blue-500">robust systems and APIs</strong> using <strong className="text-blue-500">ASP.NET Core</strong>, with strong focus on performance and scalability. For the frontend, I develop <strong className="text-blue-500">modern, responsive interfaces</strong> with <strong className="text-blue-500">React.js</strong> and <strong className="text-blue-500">Next.js</strong>, ensuring high-quality user experiences.</>
                      }
                    </p>
                    
                    <p className={`text-base leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {language === 'pt' 
                        ? <>Minha expertise inclui desenvolvimento de <strong className="text-blue-500">aplicações web completas</strong>, desde APIs RESTful usando <strong className="text-blue-500">Minimal API</strong> ou <strong className="text-blue-500">API Controllers</strong> até interfaces de usuário responsivas. Trabalho com tecnologias modernas como <strong className="text-blue-500">TypeScript</strong>, <strong className="text-blue-500">Node.js</strong>, <strong className="text-blue-500">.NET Core</strong>, <strong className="text-blue-500">C#</strong>, e bancos de dados relacionais e não-relacionais. Também desenvolvo <strong className="text-blue-500">automações com console apps</strong>, sempre seguindo as melhores práticas de desenvolvimento.</>
                        : <>My expertise includes developing <strong className="text-blue-500">complete web applications</strong>, from RESTful APIs using <strong className="text-blue-500">Minimal API</strong> or <strong className="text-blue-500">API Controllers</strong> to responsive user interfaces. I work with modern technologies like <strong className="text-blue-500">TypeScript</strong>, <strong className="text-blue-500">Node.js</strong>, <strong className="text-blue-500">.NET Core</strong>, <strong className="text-blue-500">C#</strong>, and both relational and non-relational databases. I also develop <strong className="text-blue-500">automations with console apps</strong>, always following development best practices.</>
                      }
                    </p>
                  </div>
                </div>

                {/* Skills Section */}
                <div className="skills-showcase">
                  <div className="section-tag inline-block px-4 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm font-semibold mb-4">
                    {language === 'pt' ? 'Skills Principais' : 'Core Skills'}
                  </div>
                  <h3 className={`text-2xl font-bold mb-8 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {language === 'pt' ? 'Proficiência Técnica' : 'Technical Proficiency'}
                  </h3>

                  {/* Categorias Interativas */}
                  <div className="mb-8">
                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                      {Object.entries(categories).map(([key, category]) => (
                        <motion.button
                          key={key}
                          onClick={() => setActiveCategory(key)}
                          className={`px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                            activeCategory === key
                              ? theme === 'dark'
                                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                                : 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                              : theme === 'dark'
                                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 border border-gray-300'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {category.title}
                        </motion.button>
                      ))}
                    </div>

                    {/* Skills Grid com Ícones React */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                      >
                        {categories[activeCategory as keyof typeof categories].skills.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-300 cursor-default ${
                              theme === 'dark'
                                ? 'bg-gray-800/50 border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/20'
                                : 'bg-white/80 border-blue-400/30 hover:border-blue-500 hover:bg-blue-500/20'
                            }`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                              scale: 1.05,
                              y: -2,
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <div className="text-3xl mb-2">
                              {skill.icon}
                            </div>
                            <span className={`text-sm font-bold text-center ${
                              theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>
                              {skill.name}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}