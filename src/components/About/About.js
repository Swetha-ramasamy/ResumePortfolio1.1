import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Type from "../Home/Type";
import Experience from "../Experience/Experience";

function About() {
  const company = {
    name: "Awesome Company",
    description: "This is a brief description of the awesome company.",
    image: "https://via.placeholder.com/150",
    linkedin: "https://www.linkedin.com/company/awesome-company",
  };
  return (
    <Container fluid className="about-section">
  
      <Container>
        <Row style={{ justifyContent: "left", padding: "10px" }}>
          <Particle/>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
              
            </h1>
            <div style={{ padding: 14, textAlign:"left" }}>
               <Type/>
            </div>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid"/>
            
          </Col>
        </Row>
        <h1 className="project-heading">
        <strong className="purple">Techstack </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
        Professional <strong className="purple">Experience</strong>
        </h1>
       
        <Experience />
      </Container>
    </Container>
  );
}

export default About;
