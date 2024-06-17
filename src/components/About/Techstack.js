import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  CgCPlusPlus 
} from "react-icons/cg";

import {
  DiJavascript1,
  DiCss3,
  DiPython,
  DiMongodb,
} from "react-icons/di";
import {
  SiAngularjs,
  SiHtml5 ,
  SiAngular,
  SiDjango,
  SiFlutter,
  SiReact,
  SiMysql,
  SiFirebase,
  SiPhp,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp/>
      </Col>
    </Row>
  );
}

export default Techstack;
