import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaChevronDown } from 'react-icons/fa';
import styles from './style.module.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [projectsDropdown, setProjectsDropdown] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setProjectsDropdown(false);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  const toggleProjectsDropdown = () => {
    setProjectsDropdown(!projectsDropdown);
  };

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProjectsDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fechar dropdown quando o menu mobile fechar
  useEffect(() => {
    if (!menuOpen) {
      setProjectsDropdown(false);
    }
  }, [menuOpen]);

  const handleDropdownInteraction = () => {
    // No mobile, toggle no click
    if (window.innerWidth <= 768) {
      toggleProjectsDropdown();
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <header className={styles.header}>
      <div className="layoutContainer">
        <nav className={styles.navBar}>
          <div className={styles.navBarLogo}>
            <Link to="/" className={styles.logo} onClick={closeMenu}>
              <span className={styles.logoText}>Adyllsxn</span>
              <span className={styles.logoDot}></span>
            </Link>
          </div>

          <ul className={`${styles.navMenu} ${menuOpen ? styles.navMenuActive : ''}`}>
            <li><Link to="/" className={styles.navLink} onClick={closeMenu}>home</Link></li>
            <li><Link to="/about" className={styles.navLink} onClick={closeMenu}>about</Link></li>
            <li><Link to="/skills" className={styles.navLink} onClick={closeMenu}>skills</Link></li>
            
            {/* Projects Dropdown */}
            <li 
              className={styles.dropdownContainer}
              ref={dropdownRef}
              onMouseEnter={() => window.innerWidth > 768 && setProjectsDropdown(true)}
              onMouseLeave={() => window.innerWidth > 768 && setProjectsDropdown(false)}
            >
              <div 
                className={styles.dropdownTrigger}
                onClick={handleDropdownInteraction}
              >
                <span className={styles.navLink}>
                  projects
                  <FaChevronDown className={`${styles.dropdownIcon} ${projectsDropdown ? styles.rotate : ''}`} />
                </span>
              </div>
              
              <ul className={`${styles.dropdownMenu} ${projectsDropdown ? styles.dropdownActive : ''}`}>
                <li>
                  <Link to="/projects/personal" className={styles.dropdownLink} onClick={closeMenu}>
                    Personal Projects
                  </Link>
                </li>
                <li>
                  <Link to="/projects/collaborations" className={styles.dropdownLink} onClick={closeMenu}>
                    Collaborations
                  </Link>
                </li>
              </ul>
            </li>
            
            <li><Link to="/contact" className={styles.navLink} onClick={closeMenu}>contact</Link></li>
          </ul>

          <div className={styles.menuToggleAndLang}>
            <div className={styles.themeToggle} onClick={toggleTheme}>
              <div className={`${styles.toggleSwitch} ${theme === 'light' ? styles.toggleSwitchLight : styles.toggleSwitchDark}`}>
                <div className={`${styles.toggleIcon} ${styles.sunIcon}`}><FaSun /></div>
                <div className={`${styles.toggleIcon} ${styles.moonIcon}`}><FaMoon /></div>
                <div className={styles.sliderBall}></div>
              </div>
            </div>

            <div className={`${styles.menuToggle} ${menuOpen ? styles.menuToggleActive : ''}`} onClick={toggleMenu}>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;