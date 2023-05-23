import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Skills from './Components/Skills';
import Project from './Components/Project';
import About from './Components/About';
import Contact from './Components/Contact';
import FooterBottom from './Components/FooterBottom'
import {Route,Routes} from "react-router-dom";
import Footer from './Components/Footer';
function App() {
  return (
   <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      <FooterBottom/>
   </>
  );
}

export default App;
