import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CVViewer from "./components/CVViewer";

const PortfolioLayout = () => (
  <>
    <Home />
    <About />
    <Education />
    <Experience />
    <Skills />
    <Projects />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="app-shell">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<PortfolioLayout />} />
            <Route path="/cv" element={<CVViewer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
