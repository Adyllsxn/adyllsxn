import { Route, Routes } from "react-router-dom";
import { Header, Home, About, Skills, Personal, Collaborations, Contact, Thank } from "./imports";

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
              <Route path="/projects/personal" element={<Personal />} />
              <Route path="/projects/collaborations" element={<Collaborations />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </>
        } />
      </Routes>
    </>
  );
}

export default App;