import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Resume from './pages/resume';



function App() {
  return (
    <HashRouter>
      <>
        <Navbar />
      </>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </HashRouter>
  )
}
export default App;
