import React from "react";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import { keyframes } from "styled-components";

export const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "428px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const device = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

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
  padding-bottom: 125px;
  @media ${device.mobileS} {
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  } ;
`;

const Title = styled.h1`
  font-size: 18px;
  font-family: "GT america";
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  @media ${device.mobileS} {
    font-size: 12px;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    font-size: 18px;
  } ;
`;

const Dot = styled.span`
  color: #4c6096;
  font-size: 35px;
`;

const ProjectRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media ${device.mobileS} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    flex-direction: row;
  } ;
`;

const ProjectLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media ${device.mobileS} {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    flex-direction: row;
  } ;
`;

const StyledImg = styled.img` 
  border-radius: 5px;
  @media ${device.mobileS} {
  width: 90%
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  width: 55%;
  } ;
`;

const ProjectTitle = styled;

const DescriptionRight = styled.div`
  @media ${device.mobileS} {
  text-align: center;
  margin-top: 30px;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  margin-left: 150px;
  } ;
`;

const DescriptionLeft = styled.div`
  @media ${device.mobileS} {
  text-align: center;
  margin-top: 30px;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  margin-right: 150px;
  } ;
`;

const AppGrid = styled.div`
  display: grid;
  
  
  @media ${device.mobileS} {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin-top: 120px;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  margin-top: 120px;
  } ;
`;

const zoom = keyframes`
0% {transform: scale(1);}
50% {transform: scale(1.15);}
100% {transform: scale(1);}
`;

const App = styled.div`
  background-color: #474d5f;
  display: flex;
  justify-content: center;
  align-items: center;
  
  border-radius: 15px;
  border: solid 6px #474d5f;
  position: relative;
  transition: 0.75s;
  @media ${device.mobileS} {
  width: 140px;
  height: 160px;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  width: 350px;
  height: 400px;
  } ;
`;

const AppImg = styled.img`
  width: 70%;
  z-index: 1;
  ${App}:hover & {
    animation: ${zoom} 0.45s ease-Out;
  }
  @media ${device.mobileS} {
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  
  } ;
`;

const AppName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 15px;
  position: absolute;
  bottom: 0;
  margin-bottom: 10px;
  background-color: #474d5f;
  @media ${device.mobileS} {
  width: 60px;
  height: 20px;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  width: 150px;
  height: 50px;
  } ;
`;

const Bg = styled.span`
  position: absolute;
  width: 240px;
  height: 240px;
  border-radius: 15px;
  background-color: #181818;
  transition: 0.2s ease-in;
  
  @media ${device.mobileS} {
  width: 96px;
  height: 96px;
  ${App}:hover & {
    width: 136px;
    height: 156px;
  } ;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  width: 240px;
  height: 240px;
  ${App}:hover & {
    width: 340px;
    height: 390px;
  } ;
  } ;
`;

export default function Work() {
  return (
    <>
      <WorkSection>
        <Title>
          <Dot>&#x2022;</Dot>
          &nbsp;WORK&nbsp;
          <Dot>&#x2022;</Dot>
        </Title>

        <ProjectRight>
          <StyledImg
            src={
              "https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Screenshot%202022-05-05%20at%2011-48-47%20Sweet%20and%20Sour.png?v=1662368676833"
            }
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
          <App>
            <AppImg
              src={
                "https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Group%2032Translotor.svg?v=1662373208389"
              }
            />
            <Bg></Bg>
            <AppName>Translator</AppName>
          </App>
          <App>
            <AppImg
              src={
                "https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Group%2033Calculator.svg?v=1662459179532"
              }
            />
            <Bg></Bg>
            <AppName>Calculator</AppName>
          </App>
          <App>
            <AppImg
              src={
                "https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Group%2034To%20do%20list.svg?v=1662459181187"
              }
            />
            <Bg></Bg>
            <AppName>To Do</AppName>
          </App>
          <App>
            <AppImg
              src={
                "https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Group%2035Drum%20machine.svg?v=1662459182865"
              }
            />
            <Bg></Bg>
            <AppName>Drum Machine</AppName>
          </App>
          <App>
            <AppImg
              src={
                "https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Group%2041Clock.svg?v=1662459438222"
              }
            />
            <Bg></Bg>
            <AppName>Clock</AppName>
          </App>
          <App>
            <AppImg
              src={
                "https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Group%2037Wiki%20viewer.svg?v=1662459187558"
              }
            />
            <Bg></Bg>
            <AppName>Wiki Viewer</AppName>
          </App>
          <App>
            <AppImg
              src={
                "https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Group%2038Radom%20quote.svg?v=1662459189656"
              }
            />
            <Bg></Bg>
            <AppName>Random Quote Generator</AppName>
          </App>
          <App>
            <AppImg
              src={
                "https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Group%2039Weather%20app.svg?v=1662459191651"
              }
            />
            <Bg></Bg>
            <AppName>Weather</AppName>
          </App>
          <App>
            <AppImg
              src={
                "https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Group%2040Timer.svg?v=1662461125896"
              }
            />
            <Bg></Bg>
            <AppName>Interval Timer</AppName>
          </App>
        </AppGrid>
      </WorkSection>
    </>
  );
}
