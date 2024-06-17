import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import prism from "../../Assets/exp/prism.png";
import ks from "../../Assets/exp/ks.png";
import ExperienceCards from "./ExperienceCard.js";
function Experience(){

    return (
     
     <Container>
       <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         <Col md={4} className="project-card">
           <ExperienceCards
             imgPath={prism}
             title="SAMSUNG PRISM"
             description="Worked as a team to develop a python based GUI
             tool to aid time KPI measurement of android
             solutions. Parsed the android logs and calculated time between entry and exit points End-to-End and individual components."
            
            
           />
         </Col>

         <Col md={4} className="project-card">
           <ExperienceCards
             imgPath={ks}
             
             title="KS GLOBALS"
             description="Developed an Admin panel for an ECharging private company, seamlessly integrating backend and frontend functionalities to manage charge stations, points, vehicles, and user accounts. Implemented CRUD operations and enhanced user experience by creating a user-friendly UI."
             
            
           />
         </Col>

       


        

        
       </Row>
     </Container>
      );
}
export default Experience;