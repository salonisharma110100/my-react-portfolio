import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import WorkExperience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles.css"; // Renamed the imported CSS file

function App() {
  return (
    <>
      <header className="main-header">
        <Navbar />
      </header>
      {/* The main content wrapper */}
      <main className="section-container">
        <Home />
        <Skills />
        <Projects />
        <WorkExperience />
        <Contact />
      </main>
    </>
  );
}

export default App;
