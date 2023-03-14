import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Particle from "../Particle";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
//service_uj8qk98
import { FaLinkedinIn } from "react-icons/fa";

  function Contact() {
    const form=useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_uj8qk98', 'template_3gw7kf9', form.current, 'KACXi1k6qVxUENBE8')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    
    return (
      
      <Container fluid className="contact-section">
        <Container>
         
          <Row>
            <br/><br/><br/>
          <h2>CONTACT ME </h2>
            <form ref={form} onSubmit={sendEmail}>
            <input type="text" className="inputclass" placeholder="Name" name="name"/><br/><br/>
            <input type="email" className="inputclass"placeholder="Email Address" name="emailadd"/><br/><br/>
            <input type="text"className="inputclass"  placeholder="subject" name="sub"/><br/><br/>
            <textarea name="msg" className="inputclass"  placeholder="Message"></textarea><br/><br/>
            <input className="sub-btn" type="submit" value="Send Msg"/>
            </form>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">contact </span>
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/Swetha-ramasamy"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="mailto:swetharamasamy378@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineMail />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/swetha-r-2278771bb"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/_._swetha_._16"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
  export default Contact;
