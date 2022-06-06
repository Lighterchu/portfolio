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
        <Route path="/About" element={<About/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Resume" element={<Resume/>}/>
      </Routes>
    </Router>
  );
}

export default App;
