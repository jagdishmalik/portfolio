import React from 'react';
import Heroimg2 from './Heroimg2';
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./skills.css";
import coder from "../Assets/coder.jpg"
import {Card,Container} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import javascript from "../Assets/javascript.png"
import node from "../Assets/nodejs.jpg"
import css from "../Assets/css.png"
import html from "../Assets/html.png"
import react from "../Assets/react.png"
import jquery from "../Assets/jquery.png"

// import { Container } from '@mui/material';

const Skills = () => {
  return (
    <div>
  
     <div>
      <div className='skillheader'>
       <h6>Skills & Proficiency</h6>
      </div>
      <div className='skillsubheader'>
        <p>Following are some of technology I've worked in the past or currently working on.</p>
      </div>

    <Container>
      <Row>
        <Col md={4} >
          <Card  className='card-1'>
            <Card.Img src={html} className='image-1' />
            <Card.Body>
              <Card.Title className='titlename'>HTML</Card.Title>
        
              <Card.Text className='textname'>
              Backbone of every thing I create on web. PS. I Love <></>Tags
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card  className='card-1'>
            <Card.Img src={css} className='image-1'/>
            <Card.Body>
              <Card.Title className='titlename'>CSS3</Card.Title>
         
              <Card.Text className='textname'>
              Positioning, Alligning and beautifying my HTML for all type of screens. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='card-1'>
            <Card.Img src={javascript} className='image-1'/>
            <Card.Body>
              <Card.Title className='titlename'>Javascript</Card.Title>
              
              <Card.Text className='textname'>
              Simplest, coolest and my personal favourite since I've first printed "Hello World"
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className='card-1'>
            <Card.Img src={react} className='image-1'/>
            <Card.Body>
              <Card.Title className='titlename'>React JS</Card.Title>
              
              <Card.Text className='textname'>
              Using most advance JS Framework for the coolest web and hybrid apps
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='card-1'>
            <Card.Img src={node} className='image-1'/>
            <Card.Body>
              <Card.Title className='titlename'>Node JS</Card.Title>
             
              <Card.Text className='textname'>
               Using javascript another lebel 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='card-1'>
            <Card.Img src={jquery} className='image-1'/>
            <Card.Body>
              <Card.Title className='titlename'>J QUERY</Card.Title>
              
              <Card.Text  className='textname'>
              Manipulating my DOM and giving that extra Special Effect to my web pages. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
  
  <div className="skillcontainer">
    {/* <Heroimg2 heading="SKILLS." text="Some of my skillsets"/> */}
     <div className="skillcontainer__image">
       <img src={coder} alt="" />
     </div>
     <div className="skillcontainer_text">
       <h2> SKILLSET.</h2>
       <div className="skillcontainer__skillset">
         <h5>HTML</h5>
         <div className="skillcontainer__slider skillcontainer__slider1">
           <ProgressBar now={90} label={`${90}%`} />
         </div>
       </div>
       <div className="skillcontainer__skillset">
         <h5>CSS</h5>
         <div className="skillcontainer__slider skillcontainer__slider2">
           <ProgressBar now={60} label={`${60}%`} />
         </div>
       </div>
       <div className="skillcontainer__skillset">
         <h5>JAVASCRIPT</h5>
         <div className="skillcontainer__slider skillcontainer__slider3">
           <ProgressBar now={70} label={`${70}%`} />
         </div>
       </div>
       <div className="skillcontainer__skillset">
         <h5>REACT</h5>
         <div className="skillcontainer__slider skillcontainer__slider4">
           <ProgressBar now={90} label={`${90}%`} />
         </div>
       </div>
       <div className="skillcontainer__skillset">
         <h5>NODE JS</h5>
         <div className="skillcontainer__slider skillcontainer__slider5">
           <ProgressBar now={70} label={`${70}%`} />
         </div>
       </div>
     </div>
   </div>
   </div>
  );
}

export default Skills;