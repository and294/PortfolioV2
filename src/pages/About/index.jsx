import React from "react";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

const AboutSection = styled.section`
  background: #0d0d0d;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 50px;
  padding-top: 125px;
  padding-right: 125px;
`;

const Left = styled.div`
  width: 50%;
  font-size: 28px;
  font-family: Plantin;
`;

const Right = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: -500px;
`;


const CircleOne = styled.div`
grid-area: 1 / 2 / 2 / 3;
background-color: #4c6096;
height: 50px;
width: 50px;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
const CircleTwo = styled.div`
grid-area: 2 / 1 / 3 / 2;
background-color: #4c6096;
height: 150px;
width: 150px;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
const CircleThree = styled.div`
grid-area: 3 / 2 / 4 / 3;
background-color: #4c6096;
height: 150px;
width: 150px;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
const CircleFour = styled.div`
grid-area: 4 / 1 / 5 / 2;
background-color: #4c6096;
height: 150px;
width: 150px;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
const CircleFive = styled.div`
grid-area: 5 / 2 / 6 / 3;
background-color: #4c6096;
height: 50px;
width: 50px;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
`;



export default function WelcomeBand() {
  return (
    <>
      <AboutSection>
        <Left>
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
            &nbsp;About Me
          </h1>
          <p style={{ lineHeight: "1.1" }}>
            I am a{" "}
            <span style={{ color: "#4c6096" }}>
              self thaught front-end developer
            </span>{" "}
            from Paris. <br />
            <br />
            With diplomas in international sales and marketing, I've spent the
            last few years in pharmaceutical sales. A global pandemic and a
            lockdown later, I've came to realise that a career change was needed
            in my life. <br />
            <br />
            Falling in love with web development, I've dived head first in that
            new adventure. The rigour of my past experiences, my artistic eye,
            my attention to detail and my ability to adapt/learn quickly will
            allow me to be able to help you with every aspects of your projects.
          </p>
        </Left>
        <Right>
          <CircleOne></CircleOne>
          <CircleTwo>Web integration</CircleTwo>
          <CircleThree>Frontend development</CircleThree>
          <CircleFour>UX/UI design</CircleFour>
          <CircleFive></CircleFive>
        </Right>
      </AboutSection>
    </>
  );
}
