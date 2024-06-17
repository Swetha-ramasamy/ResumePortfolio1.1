import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi 👋🏻 I am <span className="purple">Swetha R </span>
            from <span className="purple"> Coimbatore, India.</span>
            <br />I am a student of <span className="purple">Coimbatore Institute Of technology</span> pursuing <span className="purple"> Msc Software Systems.
            <br /></span>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Art and Craft
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Stay hungry stay foolish"{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
