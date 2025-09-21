import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const pathname = usePathname();

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

  // Verifica se é a página inicial para não mostrar o header
  if (pathname === '/') {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-bg-color z-50 shadow-md">
      <div className="layout-container mx-auto px-4">
        <nav className="nav-bar flex items-center justify-between py-4">
          <div className="nav-bar-logo">
            <Link href="/" className="logo text-2xl font-bold text-text-color" onClick={closeMenu}>
              Adyllsxn
            </Link>
          </div>

          <ul className={`nav-menu ${menuOpen ? 'active' : ''} hidden md:flex items-center gap-8`}>
            <li className="nav-item">
              <Link href="/" className="nav-link text-text-color hover:text-primary transition-colors" onClick={closeMenu}>
                home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link text-text-color hover:text-primary transition-colors" onClick={closeMenu}>
                about
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/skills" className="nav-link text-text-color hover:text-primary transition-colors" onClick={closeMenu}>
                skills
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/projects" className="nav-link text-text-color hover:text-primary transition-colors" onClick={closeMenu}>
                projects
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link text-text-color hover:text-primary transition-colors" onClick={closeMenu}>
                contact
              </Link>
            </li>
          </ul>

          <div className="menu-toggle-and-lang flex items-center gap-6">
            <div className="languages hidden md:flex gap-2">
              <a href="#" className="nav-link-lang text-text-color">PT</a>
              <a href="#" className="nav-link-lang text-text-color">EN</a>
            </div>

            <div className="theme-toggle cursor-pointer" onClick={toggleTheme}>
              <div className={`toggle-switch ${theme} relative w-14 h-7 rounded-full bg-gray-300 transition-colors`}>
                <div className="icon sun absolute left-1.5 top-1/2 transform -translate-y-1/2 text-white text-sm">
                  <FaSun />
                </div>
                <div className="icon moon absolute right-1.5 top-1/2 transform -translate-y-1/2 text-white text-sm">
                  <FaMoon />
                </div>
                <div className={`slider-ball absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white transition-transform ${theme === 'dark' ? 'transform translate-x-7' : ''}`}></div>
              </div>
            </div>

            <div className={`menu-toggle ${menuOpen ? 'active' : ''} md:hidden flex flex-col justify-center w-6 h-6 cursor-pointer`} onClick={toggleMenu}>
              <span className="bar block w-6 h-0.5 bg-primary mb-1.5 transition-transform"></span>
              <span className="bar block w-6 h-0.5 bg-primary mb-1.5 transition-opacity"></span>
              <span className="bar block w-6 h-0.5 bg-primary transition-transform"></span>
            </div>
          </div>
        </nav>
      </div>

      {/* Menu mobile */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''} fixed top-0 left-0 w-full h-screen bg-menu-bg z-40 transition-transform transform md:hidden`}>
        <div className="flex flex-col items-start justify-center h-full pl-10 gap-8">
          <Link href="/" className="nav-link text-3xl font-bold text-text-color hover:text-primary" onClick={closeMenu}>
            home
          </Link>
          <Link href="/about" className="nav-link text-3xl font-bold text-text-color hover:text-primary" onClick={closeMenu}>
            about
          </Link>
          <Link href="/skills" className="nav-link text-3xl font-bold text-text-color hover:text-primary" onClick={closeMenu}>
            skills
          </Link>
          <Link href="/projects" className="nav-link text-3xl font-bold text-text-color hover:text-primary" onClick={closeMenu}>
            projects
          </Link>
          <Link href="/contact" className="nav-link text-3xl font-bold text-text-color hover:text-primary" onClick={closeMenu}>
            contact
          </Link>
        </div>
      </div>

      <style jsx>{`
        .layout-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .mobile-menu {
          transform: translateX(-100%);
        }
        
        .mobile-menu.active {
          transform: translateX(0);
        }
        
        .menu-toggle.active .bar:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        
        .menu-toggle.active .bar:nth-child(2) {
          opacity: 0;
        }
        
        .menu-toggle.active .bar:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
        
        .toggle-switch.dark {
          background-color: #2c3e50;
        }
        
        .toggle-switch.light {
          background-color: hsl(199, 100%, 50%);
        }
      `}</style>
    </header>
  );
};

export default Header;