import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.jpeg";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
function Home2() {
  return (
    
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="images-radius" alt="avatar" width="300px"/>
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
             <span className="purple"> My Introduction </span> 
            </h1>
            <p className="home-about-body">
              Aspiring <span className="purple">Software Engineer</span> with experience in <span className="purple">mobile and web development using Flutter.</span>

              <br />
              <br />Dedicated and enthusiastic technical person, eager to learn new technologies.
              <br/>
              <p>Proficient in programming languages including 
              <i>
                <b className="purple"> C++, C, Javascript and Python. </b>
              </i>
              </p>
              Fields of interest encompass  
              <i>
                <b className="purple"> full-stack development. </b>
              </i>
              Passionate about developing products using modern JavaScript libraries and frameworks such as
            
              <i>
                <b className="purple"> React.js </b>
              </i>
            </p>
          </Col>
          
        </Row>
      </Container>
     
    </Container>
    
  );
}
export default Home2;
