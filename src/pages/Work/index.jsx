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
  font-family: "GT america";
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px;
  padding-top: 125px;
`;

const ProjectRight = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
`;

const ProjectLeft = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
`;

const StyledImg = styled.img`
width: 55%;
border-radius: 5px;
`;

const DescriptionRight = styled.div`
margin-left: 150px;
`;

const DescriptionLeft = styled.div`
margin-right: 150px;
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
        
        <ProjectRight>
        <StyledImg src={'https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Screenshot%202022-05-05%20at%2011-48-47%20Sweet%20and%20Sour.png?v=1662368676833'}
          width= '50%'
          />
          <DescriptionRight>
          <p>Concept  restaurant</p>
          <p style={{ width: "300px",borderTop: "solid 1px white", borderBottom: "solid 1px white", margin: "20px 0px 20px 0px", padding: "20px 0px 20px 0px"}}>Personnal project</p>
          <p>HTML CSS<br/>Javascript Gsap</p>
          </DescriptionRight>         
        </ProjectRight>
        
        <ProjectLeft style={{marginTop: "100px"}}>     
          <DescriptionLeft>
          <p>Freelance agency</p>
          <p style={{ width: "300px",borderTop: "solid 1px white", borderBottom: "solid 1px white", margin: "20px 0px 20px 0px", padding: "20px 0px 20px 0px"}}>Personnal project</p>
          <p>HTML CSS<br/>ReactJS Gsap</p>
          </DescriptionLeft>
          <StyledImg src={'https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Miniature%20Shiny%20portfolio.png?v=1662370737822'}
          width= '50%'
          />
        </ProjectLeft>
        
        <ProjectRight style={{marginTop: "100px"}}>
        <StyledImg src={'https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Group%201BB58%20landing.png?v=1662370725354'}
          width= '50%'
          />
          <DescriptionRight>
          <p>Concept  restaurant</p>
          <p style={{ width: "300px",borderTop: "solid 1px white", borderBottom: "solid 1px white", margin: "20px 0px 20px 0px", padding: "20px 0px 20px 0px"}}>Personnal project</p>
          <p>HTML CSS<br/>Javascript Gsap</p>
          </DescriptionRight>         
        </ProjectRight>
      </WorkSection>
    </>
  );
}
