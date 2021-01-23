import './assets/css/app.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar/NavigationBar';
import Main from './components/main/Main';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';

//import {Container,Row,Col} from '../node_modules/react-bootstrap';

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
    </>
  );
}

export default App;
