import './assets/css/app.min.css';
import './assets/css/navbar.min.css';
import './assets/css/main.min.css';
import './assets/css/about.min.css';
import './assets/css/resume.min.css';
import './assets/css/projects.min.css';
import './assets/css/contact.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar/NavigationBar';
import Main from './components/main/Main';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <section>
      <NavigationBar />
      </section>
      <section>
        <Main />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Resume />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
    </>
  );
}

export default App;
