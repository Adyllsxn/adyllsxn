import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './containers/pages/Home/Home';
import About from './containers/pages/About/About';
import Skills from './containers/pages/Skills/Skills';
import Project from './containers/features/Projects/Project';
import Contact from './containers/features/Contact/Contact';
import './core/styles/App.css';

function App() {

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
  )
}

export default App
