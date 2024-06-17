import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import movie from "../../Assets/Projects/movie.webp";
import cab from "../../Assets/Projects/cab.png";
import food from "../../Assets/Projects/food.jpg";
import iot from "../../Assets/Projects/iot.png";
import handwriting from "../../Assets/Projects/handwriting.jpg";
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={handwriting}
              isBlog={false}
              title="Handwriting Analysis"
              description="Handwriting analysis offers a fascinating avenue for inferring personality traits using AI. By examining various aspects of handwriting such as size, pressure, slant, and style, it's possible to make educated guesses about an individual's emotional stability, confidence, introversion/extroversion, attention to detail, creativity, stress levels, openness to experience, organizational skills, assertiveness, and social adaptability."
              ghLink="https://github.com/Swetha-ramasamy/Handwriting-analysis.git"       
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Find Meal"
              description="FindMeal is used to find the meals and it's recipe based on the input given , the input can be a main ingredient of the dish or food category."
              ghLink="https://github.com/Swetha-ramasamy/FindMeal.git" 
              demoLink="https://find-meal-six.vercel.app"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iot}
              isBlog={false}
              title="Fire Fighting Robot - IOT"
              description="The robot uses Arduino UNO and nodeMCU-esp8266, it will operate within a predefined boundary range, detecting and extinguishing small flames within its vicinity. It will utilize sensors to detect fires and navigate towards them if they are outside its initial range, effectively responding to fire incidents. Stakeholders can receive real-time notifications once the flame is detected using blynk app"
              ghLink="https://github.com/Swetha-ramasamy/Fire-Fighting-Robot.git" 
                   
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
