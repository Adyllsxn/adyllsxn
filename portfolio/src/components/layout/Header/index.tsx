import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import styles from './style.module.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
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
              Adyllsxn
            </Link>
          </div>

          {/* Menu SEMPRE escondido - só aparece quando active */}
          <ul className={`${styles.navMenu} ${menuOpen ? styles.navMenuActive : ''}`}>
            <li><Link to="/" className={styles.navLink} onClick={closeMenu}>home</Link></li>
            <li><Link to="/about" className={styles.navLink} onClick={closeMenu}>about</Link></li>
            <li><Link to="/skills" className={styles.navLink} onClick={closeMenu}>skills</Link></li>
            <li><Link to="/projects" className={styles.navLink} onClick={closeMenu}>projects</Link></li>
            <li><Link to="/contact" className={styles.navLink} onClick={closeMenu}>contact</Link></li>
          </ul>

          <div className={styles.menuToggleAndLang}>
            {/* REMOVIDO languages - PT/EN */}
            
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