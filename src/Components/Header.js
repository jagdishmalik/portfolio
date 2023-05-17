import React from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed"

const Header = () => {
  return (
    <div className="header-wraper">
    <div className="main-info">
    <h1>Namaste!This is <span className="jagdish">Jagdish</span></h1>
  
  <Typed 
     className="typed-text"
     strings={["Freelancer","Web Designer","Web Developer","Graphical Designer"," Youtuber","Front End Developer","Photographer"]}
     typeSpeed={40}
     backSpeed={60}
     loop
     />
     <Link className="btn-main" to="/contact">
     <a  href="#" className="btn-main-offer">Contact Me</a>
     </Link>
        </div>
    </div>
  )
}

export default Header;
