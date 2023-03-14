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
            Interested to be a <span className="purple">Software Engineer</span>

              <br />
              <br />Dedicated and enthusiastic technical person. Eager to learn new technologies
              <br/>
              <p>Known programming languages are
              <i>
                <b className="purple"> C++, C, Java, Javascript and Python. </b>
              </i>
              </p>

              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Front end developing  and also back end developing </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
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
