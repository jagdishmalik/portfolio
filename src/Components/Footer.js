import "./FooterStyle.css"

import React from 'react'
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter,FaInstagram,FaGithub} from "react-icons/fa" 

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" ,marginTop:"0.7rem" }} />
            <div>
              <p>Kalayni Nagar ,Balasore</p>
              <p>Odisha,India,756001</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91-7873000800
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              jagdishmdev@gmail.com
            </h4>
          </div>
        </div>
        <div className="right"></div>
        <h4 className="footer-heading">About Me</h4>
          <p className="footer-about">
          This is Jagdish.I enjoy discussing new projects and design Challenges & deliver on time as per clint requirement
          </p>
        <div className="social">
          <a  href="https://www.facebook.com/jagdishmalik31" target="__blank">
          <FaFacebook className="facebook"
            size={30}
            style={{ color: "#fff", marginRight: "1rem" }}
            />
            </a>
            <a href="https://twitter.com/home" target="__blank">

          <FaTwitter className="twitter" size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
          <a href="https://www.linkedin.com/feed/" target="__blank">

          <FaLinkedin
            className="linkedin" size={30}
            style={{ color: "#fff", marginRight: "1rem" }}
            />
            </a>
          <a href="https://www.instagram.com/" target="__blank">

          <FaInstagram size={30}
           className="instagram"
            style={{ color: "#fff", marginRight: "1rem" }}/>
            </a>
          <a href="https://github.com/jagdishmalik" target="__blank">

          <FaGithub className="github" size={30}
            style={{ color: "#fff", marginRight: "1rem" }}/>
            </a>
        </div>
      </div>
    </div>
  );
}

export default Footer