import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Header.css';

const Header = () => {
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
    <header>
      <div className="layoutContainer">
        <nav className="navBar">
          <div className="navBarLogo">
            <Link to="/" className="logo">Adyllsxn</Link>
          </div>

          <ul className={`navMenu ${menuOpen ? 'active' : ''}`}>
            <li className="navItem"><Link to="/" className='navLink' onClick={closeMenu}>home</Link></li>
            <li className="navItem"><Link to="/about" className='navLink' onClick={closeMenu}>about</Link></li>
            <li className="navItem"><Link to="/skills" className='navLink' onClick={closeMenu}>skills</Link></li>
            <li className="navItem"><Link to="/projects" className='navLink' onClick={closeMenu}>projects</Link></li>
            <li className="navItem"><Link to="/contact" className='navLink' onClick={closeMenu}>contact</Link></li>
          </ul>

          <div className="menuToggleAndLang">
            <div className="languages">
              <a href="#" className='navLinkLang' >PT</a>
              <a href="#" className='navLinkLang'>EN</a>
            </div>

            <div className="themeToggle" onClick={toggleTheme}>
              <div className={`toggleSwitch ${theme}`}>
                <div className="icon sun"><FaSun /></div>
                <div className="icon moon"><FaMoon /></div>
                <div className="sliderBall"></div>
              </div>
            </div>

            <div className={`menuToggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
