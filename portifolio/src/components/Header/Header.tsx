import { useState } from 'react';
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
            <li className="navItem"><a href="#" className="navLink" onClick={closeMenu}>home</a></li>
            <li className="navItem"><a href="#" className="navLink" onClick={closeMenu}>about</a></li>
            <li className="navItem"><a href="#" className="navLink" onClick={closeMenu}>skills</a></li>
            <li className="navItem"><a href="#" className="navLink" onClick={closeMenu}>projects</a></li>
            <li className="navItem"><a href="#" className="navLink" onClick={closeMenu}>contact</a></li>
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
