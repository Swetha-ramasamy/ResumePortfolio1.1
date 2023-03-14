import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import miniature  from "../../Assets/award/minature.jpeg";
import foss  from "../../Assets/award/foss.jpeg";
import foss_hackathon  from "../../Assets/award/foss_hackathon.jpeg";
import all  from "../../Assets/award/all.jpeg";

function Achievements() {
  return (
    <Container fluid className="project-section">
      <Container>
        <Particle/>
        <h1 className="project-heading">
          My <strong className="purple">Achievements </strong> and <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
         My achievements are given below 🏅.
        </p>
        <h1>
        <span>Extra Curricular</span>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="cards">
              <div class="card-achievement">
              <h2 class="card-title">Ms Social</h2>
              <img src={miniature} alt=""/>
              <div class="card-desc">
              <p >I got <b>FIRST</b> place 🏅 in online events conducted by <b>KKC club</b> [ kalam Knowledge club in CIT] for this minature furnitures. My motto is to bring a <b> Wealth From Waste</b></p>

              </div>
              
            </div>
          </Col>
         
        </Row>
        <h1>
        <br/>
        <span>Co-Curricular</span>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="cards">
              <div class="card-achievement">
              <h2 class="card-title">Certificates</h2>
              <img src={all} alt=""/>
              <div class="card-desc">

              <p >I have completed <b>HTML, PHP and Python</b> courses from <b>Solo Learn</b> and completed soft skills course from <b>TCS ion</b>  </p>
              
              </div>
              
            </div>
          </Col>
        
          <Col md={6} className="cards">
              <div class="card-achievement">
              <h2 class="card-title">Game of Codes</h2>
              <img src={foss} alt=""/>
              <div class="card-desc">
              <p > I got <b>THIRD</b> place 🏅 in <b>Game Of Codes</b> conducted by <b>FOSS</b> which is one of the actively functioning technical clubs at Coimbatore Institute Of Technology. I have solved all the given three problems in C++ and Python</p>
              </div>
              
            </div>
          </Col>
         
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={12} className="cards">
              <div class="card-achievement">
              <h2 class="card-title">FRONT - END HACKATHON</h2>
              <img src={foss_hackathon} alt=""/>
              <div class="card-desc">
              <p > I got <b>SECOND </b> place 🏅 in the event <b>Front End Hackathon </b>conducted by <b>FOSS</b> which is one of the actively functioning technical clubs at Coimbatore Institute Of Technology.The problem statement is to design a resume portfolio website using any framework, I used ReactJS to design this portfolio.The duration to solve the given problem is 5 days </p>
              </div>
              
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Achievements;
