import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="layoutContainer">
        <nav className="navBar">
          <div className="navBarLogo">
            <a href="#" className="logo">Adyllsxn</a>
          </div>

          <ul className={`navMenu ${menuOpen ? 'active' : ''}`}>
            <li className="navItem"><a href="#" className="navLink">Home</a></li>
            <li className="navItem"><a href="#" className="navLink">About me</a></li>
            <li className="navItem"><a href="#" className="navLink">Portifolio</a></li>
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
