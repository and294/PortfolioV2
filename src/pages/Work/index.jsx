import React from "react";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {styled, keyframes} from "styled-components";

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

const ProjectTitle = styled;

const DescriptionRight = styled.div`
  margin-left: 150px;
`;

const DescriptionLeft = styled.div`
  margin-right: 150px;
`;

const AppGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  margin-top: 120px;
  
`;

const App = styled.div`
background-color: #373737;
display: flex;
justify-content: center;
align-items: center;
width: 350px;
height: 350px;
border-radius: 5px;
border: solid 3px #373737;
transition: 0.3s;
&:hover{
background-color: #181818;
}
`;

const zoom = keyframes`

`;

const AppImg = styled.img`
width: 70%;
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
          <StyledImg
            src={
              "https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Screenshot%202022-05-05%20at%2011-48-47%20Sweet%20and%20Sour.png?v=1662368676833"
            }
            width="50%"
          />
          <DescriptionRight>
            <h3>Concept restaurant</h3>
            <p
              style={{
                width: "300px",
                borderTop: "solid 1px white",
                borderBottom: "solid 1px white",
                margin: "20px 0px 20px 0px",
                padding: "20px 0px 20px 0px",
              }}
            >
              Personnal project
            </p>
            <p>
              HTML CSS
              <br />
              Javascript Gsap
            </p>
          </DescriptionRight>
        </ProjectRight>

        <ProjectLeft style={{ marginTop: "100px" }}>
          <DescriptionLeft>
            <h3>Freelance agency</h3>
            <p
              style={{
                width: "300px",
                borderTop: "solid 1px white",
                borderBottom: "solid 1px white",
                margin: "20px 0px 20px 0px",
                padding: "20px 0px 20px 0px",
              }}
            >
              Personnal project
            </p>
            <p>
              HTML CSS
              <br />
              ReactJS Gsap
            </p>
          </DescriptionLeft>
          <StyledImg
            src={
              "https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Miniature%20Shiny%20portfolio.png?v=1662370737822"
            }
            width="50%"
          />
        </ProjectLeft>

        <ProjectRight style={{ marginTop: "100px" }}>
          <StyledImg
            src={
              "https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Group%201BB58%20landing.png?v=1662371147279"
            }
            width="50%"
          />
          <DescriptionRight>
            <h3>Tudor BlackBay 58 redesign</h3>
            <p
              style={{
                width: "300px",
                borderTop: "solid 1px white",
                borderBottom: "solid 1px white",
                margin: "20px 0px 20px 0px",
                padding: "20px 0px 20px 0px",
              }}
            >
              Personnal project
            </p>
            <p>Figma</p>
          </DescriptionRight>
        </ProjectRight>

        <AppGrid>
          <App><AppImg src={"https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Group%2032Translotor.svg?v=1662373208389"}/></App>
          <App></App>
          <App></App>
          <App></App>
          <App></App>
          <App></App>
          <App></App>
          <App></App>
          <App></App>
        </AppGrid>
      </WorkSection>
    </>
  );
}
