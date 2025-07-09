import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
};

  return (
    <header>
      <div className="layoutContainer">
        <nav className="navBar">
          <div className="navBarLogo">
            <a href="#" className="logo">Adyllsxn</a>
          </div>

          <ul className={`navMenu ${menuOpen ? 'active' : ''}`}>
            <li className="navItem">
              <Link to="/" className="navLink" onClick={closeMenu}>home</Link>
            </li>

            <li className="navItem">
              <Link to="/about" className="navLink" onClick={closeMenu}>about</Link>
            </li>

            <li className="navItem">
              <Link to="/skills" className="navLink" onClick={closeMenu}>skills</Link>
            </li>

            <li className="navItem">
              <Link to="/projects" className="navLink" onClick={closeMenu}>projects</Link>
            </li>

            <li className="navItem">
              <Link to="/contact" className="navLink" onClick={closeMenu}>contact</Link>
            </li>
          </ul>

          <div className={`menuToggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
