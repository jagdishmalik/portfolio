import { Button } from "bootstrap";
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
     <div>

      <a href="" >
        <button className="btn-main-offer">Download Cv</button>
      </a>


     <Link className="btn-main" to="/contact">
     <button href="#" className="btn-main-offer">Contact Me</button>
     </Link>
        </div>
     </div>
    </div>
  )
}

export default Header;
