import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AllProjects from "./components/AllProjects";
import ProjectViewer from "./components/ProjectViewer";
import Services from "./components/Services";
import Contact from "./components/Contact";
import CVViewer from "./components/CVViewer";
import Certifications from "./components/Certifications";
import AllCertifications from "./components/AllCertifications";
import CertificateViewer from "./components/CertificateViewer";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Chatbot from "./components/Chatbot";

const PortfolioLayout = () => (
  <>
    <Home />
    <About />
    <Education />
    <Experience />
    <Skills />
    <Projects />
    <Certifications />
    <Services />
    <Contact />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Preloader />
      <div className="app-shell">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<PortfolioLayout />} />
            <Route path="/cv" element={<CVViewer />} />
            <Route path="/certifications" element={<AllCertifications />} />
            <Route path="/certification/:id" element={<CertificateViewer />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/project/:id" element={<ProjectViewer />} />
          </Routes>
        </main>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
