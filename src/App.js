import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Resume from './pages/resume';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
