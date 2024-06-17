import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Github <strong className="purple">Calendar</strong>
      </h1>
      <GitHubCalendar
        username="Swetha-ramasamy"
        blockSize={15}
        blockMargin={5}
        color="#5f80f8"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
