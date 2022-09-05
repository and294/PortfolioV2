import React from "react";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

const WorkSection = styled.section`
  background: #181818;
  color: white;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px;
  padding-top: 125px;
`;

export default function Work() {
  return (
    <>
      <WorkSection>
        <h1
          style={{
            fontSize: "18px",
            fontFamily: "GT america",
            marginBottom: "25px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ color: "#4c6096", fontSize: "35px" }}>&#x2022;</span>
          &nbsp;WORK&nbsp;
          <span style={{ color: "#4c6096", fontSize: "35px" }}>&#x2022;</span>
        </h1>
        
        <div>
        <img src="url('https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Screenshot%202022-05-05%20at%2011-48-47%20Sweet%20and%20Sour.png?v=1662368676833')"/>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </WorkSection>
    </>
  );
}
