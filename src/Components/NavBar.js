import React from 'react'
//react fontawasome imports
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import{faBars} from "@fortawesome/free-solid-svg-icons"
import{Link} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className='container'>

     <Link className='nickname' to="/">
      <a className="navbar-brand" href="#">
        Jax.
      </a>
     </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto ">
          <li className="nav-item active">
            <Link className='route' to="/">
            <a className="nav-link" href="#" >
              Home <span class="sr-only">()</span>
            </a>
            </Link>
          </li>

          <li className="nav-item ">
          <Link  className='route'to="/project">
            <a className="nav-link" href="#"> Project</a>
          </Link>
          </li>
          <li className="nav-item ">
          <Link className='route'to="/about">
            <a className="nav-link" href="#"> About</a>
          </Link>
          </li>
          <li className="nav-item ">
          <Link className='route' to="/contact">
            <a className="nav-link" href="#"> Contact</a>
          </Link>
          </li>
          {/* <li className="nav-item ">
            <a className="nav-link" href="#"> Portfolio</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#"> contacts</a>
          </li> */}
        </ul>
      </div>
    </div>
    </nav>
  );
}

export default NavBar