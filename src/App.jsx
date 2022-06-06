import './App.css';
import NavgationBar from './components/NavgationBar';
import About from './pages/About'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import { HashRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <Router>
      <NavgationBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/portfolio/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
    </Router>
  );
}

export default App;
