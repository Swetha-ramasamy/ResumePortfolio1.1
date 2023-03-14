import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import movie from "../../Assets/Projects/movie.webp";
import cab from "../../Assets/Projects/cab.png";
import studentManagement from "../../Assets/Projects/studentManagement.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
       <Particle/>
      <Container>
        <h1 className="project-heading">
          My Project <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on ⬇️.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cab}
              isBlog={false}
              title="Cab Booking System"
              description="This Online Cab Booking project deals with an online system designed for booking cabs as per the requirements of the customers at their convenience. • The current system is manual and it is time-consuming. It is also cost-ineffective, and the average return is low and diminishing. • We give customer satisfaction the utmost priority and so give ample options to book cab by entering details like their journey date and time, origin, pick-up point, destination and the drop-off point they need to reach."
              ghLink="https://github.com/Swetha-ramasamy/cab-booking"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studentManagement}
              isBlog={false}
              title="Student Management System"
              description="To create a student record management system that can perform Add, Delete, Modify, View the student records and displays the student's register number if Blood group is given in emergency situations"
              ghLink="https://github.com/Swetha-ramasamy/Student-management-system---datastructures"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie Booking System"
              description="The traditional way of booking the ticket for the movie is the customer need to go to the specific theatre where the desired movie was playing and need to stand in queue and buy the ticket for the movie this will become more difficult for a person in order to overcome this problem
              The project gives real life understanding of online movie ticket booking system and activities performed by various roles in the supply chain. Here we provide automation for movie ticket booking system through internet. "
              ghLink="https://github.com/Swetha-ramasamy/Movie-ticket-Booking"
              demoLink=" https://swetha-ramasamy.github.io/MovieTicketBooking/"
                        
            />
          </Col>


         

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
