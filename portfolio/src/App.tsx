import { Route, Routes } from "react-router-dom";
import {Header, Home, About, Skills, Project, Contact, Thank} from "./imports";

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
          <Route path="/thank" element={<Thank />} />
        </Routes>
    </>
  )
}

export default App
