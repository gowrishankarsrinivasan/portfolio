import Navbar from "./component/Navbar";
import Skills from "./component/Skills";
import Contact from "./component/contact";
import Home from "./component/home";
import "./App.css";
import About from "./component/about";
import Projects from "./component/projects";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
