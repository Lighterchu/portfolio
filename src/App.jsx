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
        <Route exact path="about" element={<About/>}/>
        <Route exact path="phome" element={<Home/>}/>
        <Route exact path="projects" element={<Projects/>}/>
        <Route exact path="resume" element={<Resume/>}/>
      </Routes>
    </Router>
  );
}

export default App;
