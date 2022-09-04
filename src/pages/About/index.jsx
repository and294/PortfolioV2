import React from "react";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

const AboutSection = styled.section`
background: #0D0D0D;
color: white;
height: 100vh;
display: flex;
padding: 50px;
`;

const Left = styled.div`
width: 30%;
`;

const Right = styled.div``;

export default function WelcomeBand() {
  return (
    <>
      <AboutSection>
        <Left>
          <h1 style={{ fontSize: "32px"}}><span style={{color: "#4c6096"}}>&#x2022;</span>&nbsp;About Me</h1>
          <p>
            I am a <span  style={{color: "#4c6096"}}>self thaught front-end developer</span> from Paris. <br/><br/>With diplomas in
            international sales and marketing, I've spent the last few years in
            pharmaceutical sales. A global pandemic and a lockdown later, I've
            came to realise that a career change was needed in my life. <br/><br/>Falling
            in love with web development, I've dived head first in that new
            adventure. The rigour of my past experiences, my artistic eye, my
            attention to detail and my ability to adapt/learn quickly will allow
            me to be able to help you with every aspects of your projects.
          </p>
        </Left>
        <right></right>
      </AboutSection>
    </>
  );
}
