import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import WorkExperience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles.css";

function App() {
  return (
    <>
      <header className="main-header">
        <Navbar />
      </header>
      <main className="section-container">
        <Home />
        <Skills />
        <WorkExperience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
