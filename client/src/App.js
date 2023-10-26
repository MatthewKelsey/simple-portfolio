import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
  <Navbar />
  <About />
  <Projects />
  <Testimonials />
  <Skills />
    </div>
  );
}

export default App;
