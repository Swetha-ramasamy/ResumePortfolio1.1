import React from "react";
import Typewriter from "typewriter-effect";
function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Interested in Designing",
          "Creative Thinker",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    
  );
}

export default Type;
