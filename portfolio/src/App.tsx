import { Route, Routes } from "react-router-dom";
import { Header, Home, About, Skills, Project, Contact, Thank } from "./imports";

function App() {
  return (
    <>
      <Routes>
        <Route path="/thank" element={<Thank />} />
        <Route path="*" element={
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
        } />
      </Routes>
    </>
  );
}

export default App;