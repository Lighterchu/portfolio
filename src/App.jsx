import './App.css';
import NavgationBar from './components/NavgationBar';
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <Router>
      <NavgationBar/>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/project" element={<Projects/>}/>
      </Routes>
    </Router>
  );
}

export default App;
