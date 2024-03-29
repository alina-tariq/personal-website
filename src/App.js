import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from './components/Footer';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from './components/Skills';

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
