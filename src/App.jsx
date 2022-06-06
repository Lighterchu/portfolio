import './App.css';
import NavgationBar from './components/NavgationBar';
import About from './pages/About'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <Router>
      <NavgationBar/>
      <Routes>
        <Route path="/portfolio/About" element={<About/>}/>
        <Route path="/portfolio" element={<Home/>}/>
        <Route path="/portfolio/Projects" element={<Projects/>}/>
        <Route path="/portfolio/Resume" element={<Resume/>}/>
      </Routes>
    </Router>
  );
}

export default App;
