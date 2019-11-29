import React from "react";
import Iframe from "react-iframe";

function IntroSlides() {
  return (
    <div style={{ height: "100vh" }}>
      <Iframe
        src="//slides.com/jagadeeshpalaniappan/intro/embed"
        width="100%"
        height="100%"
        scrolling="no"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}

export default IntroSlides;
