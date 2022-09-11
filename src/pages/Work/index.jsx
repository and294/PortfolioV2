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
  background: #1c1c1c;
  color: white;
  font-family: "GT america";
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px;
  padding-top: 125px;
  padding-bottom: 125px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-family: "GT america";
  margin-bottom: 100px;
  display: flex;
  align-items: center;
`;

const Dot = styled.span`
  color: #4c6096;
  font-size: 35px;
`;

const Project = styled.div`
  color: #4c6096;
  position: relative;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
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
  } ;
`;

const StyledImg = styled.img`
  box-shadow: 0px 0.5px 0.8px hsl(0deg 0% 1% / 0),
    0px 2.2px 3.3px hsl(0deg 0% 1% / 0.18), 0px 4px 6px hsl(0deg 0% 1% / 0.35),
    0px 6.8px 10.2px hsl(0deg 0% 1% / 0.52),
    -0.1px 11.7px 17.6px hsl(0deg 0% 1% / 0.7);
  border-radius: 5px;
  cursor: pointer;
  @media ${device.mobileS} {
    width: 90%;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    width: 75%;
  } ;
`;

const ProjectTitle = styled.h3`
  color: #344268;
  @media ${device.mobileS} {
    font-size: 1em;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
    font-size: 1.25em;
  }
  @media ${device.laptop} {
  } ;
`;

const Description = styled.div`
  color: white;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: -110px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.7px);
  -webkit-backdrop-filter: blur(6.7px);
  border: 1px solid rgba(255, 255, 255, 0.09);
  @media ${device.mobileS} {
    text-align: center;
    margin-top: 30px;
    width: 200px;
    font-size: 0.75em;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    width: 300px;
    font-size: 0.85em;
  } ;
`;

const AppGrid = styled.div`
  display: grid;
  @media ${device.mobileS} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin-top: 200px;
    font-size: 0.6em;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    margin-top: 210px;
  }
  @media ${device.laptopL} {
    grid-column-gap: 40px;
    grid-row-gap: 40px;
  } ;
`;

const zoom = keyframes`
0% {transform: scale(1);}
50% {transform: scale(1.15);}
100% {transform: scale(1);}
`;

const App = styled.div`
  background: rgba(71, 77, 95, 0.61);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1), 0px 0.5px 0.8px hsl(0deg 0% 1% / 0),
    0px 2.2px 3.3px hsl(0deg 0% 1% / 0.18), 0px 4px 6px hsl(0deg 0% 1% / 0.35),
    0px 6.8px 10.2px hsl(0deg 0% 1% / 0.52),
    -0.1px 11.7px 17.6px hsl(0deg 0% 1% / 0.7);
  backdrop-filter: blur(6.7px);
  -webkit-backdrop-filter: blur(6.7px);
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 15px;
  border: blur(6.7px) 6px #474d5f;
  position: relative;
  transition: 0.75s;
  @media ${device.mobileS} {
    width: 140px;
    height: 160px;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
    width: 233px;
    height: 266px;
  }
  @media ${device.laptopL} {
    width: 350px;
    height: 400px;
  } ;
`;

const AppImg = styled.img`
  width: 70%;
  z-index: 1;
  cursor: pointer;
  ${App}:hover & {
    animation: ${zoom} 0.45s ease-Out;
  }
`;

const AppName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 15px;
  position: absolute;
  bottom: 0;
  }
  @media ${device.mobileM} {
  margin-bottom: 5px;
  }
  @media ${device.tablet} {
  margin-bottom: 10px;
  }
  @media ${device.laptopL} {
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
    }
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
    width: 160px;
    height: 160px;
    ${App}:hover & {
      width: 226px;
      height: 260px;
    }
  }
  @media ${device.laptop} {
  }
  @media ${device.laptopL} {
    width: 240px;
    height: 240px;
    ${App}:hover & {
      width: 340px;
      height: 390px;
    }
  } ;
`;

export default function Work() {
  useEffect(() => {
    gsap.from("#worktitle", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#worktitle",
        markers: false,
        start: "top 90%",
      },
    });
    gsap.from("#project1", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#project1",
        markers: false,
        start: "top 90%",
      },
    });
    gsap.to("#img1", {
      y: -170,
      duration: .1,
      scrollTrigger: {
        trigger: "#img1".current,
        markers: false,
        start: "top center",
        end: "bottom top",
        scrub: true,}
    });
    gsap.from("#description1", {
      y: -170,
      duration: .1,
      scrollTrigger: {
        trigger: "#description1".current,
        markers: false,
        start: "top center",
        end: "bottom top",
        scrub: true,}
    });
    gsap.to("#img2", {
      y: -30,
      duration: .1,
      scrollTrigger: {
        trigger: "#img2",
        markers: false,
        start: "top center",
        end: "bottom top",
        scrub: true,}
    });
    gsap.to("#img3", {
      y: -30,
      duration: .1,
      scrollTrigger: {
        trigger: "#img3",
        markers: false,
        start: "top center",
        end: "bottom top",
        scrub: true,}
    });
  

    gsap.from("#line1", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#line1",
        markers: false,
        start: "top 90%",
      },
    });
    gsap.from("#line2", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#line2",
        markers: false,
        start: "top 90%",
      },
    });
    gsap.from("#line3", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#line3",
        markers: false,
        start: "top 90%",
      },
    });
  }, []);

  return (
    <>
      <WorkSection id="work">
        <Title id="worktitle">
          <Dot>&#x2022;</Dot>
          &nbsp;WORK&nbsp;
          <Dot>&#x2022;</Dot>
        </Title>

        <a
          href="https://sweet-and-sour-restaurant.glitch.me/index.html"
          target="_blank"
        >
          <Project id="project1">
            <StyledImg id='img1'
              src={
                "https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Screenshot%202022-05-05%20at%2011-48-47%20Sweet%20and%20Sour.png?v=1662368676833"
              }
            />
            <Description id='description1'>
              <ProjectTitle>Concept restaurant</ProjectTitle>
              <p
                style={{
                  fontSize: "0.85em",
                  width: "200px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.79)",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.79)",
                  margin: "20px 0px 10px 0px",
                  padding: "15px 0px 15px 0px",
                }}
              >
                Personnal project
              </p>
              <p style={{ fontSize: "0.85em" }}>
                HTML CSS
                <br />
                Javascript Gsap
              </p>
            </Description>
          </Project>
        </a>

        <a href="https://shiny-agency-and29.glitch.me/" target="_blank">
          <Project id="project2" style={{ marginTop: "200px" }}>
            <StyledImg
              id='img2'
              src={
                "https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Miniature%20Shiny%20portfolio.png?v=1662370737822"
              }
              width="50%"
            />
            <Description id='description2'>
              <ProjectTitle>Freelance agency</ProjectTitle>
              <p
                style={{
                  width: "200px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.79)",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.79)",
                  margin: "20px 0px 10px 0px",
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
            </Description>
          </Project>
        </a>

        <Project id="project3" style={{ marginTop: "200px" }}>
          <StyledImg
            id='img3'
            src={
              "https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Group%201BB58%20landing.png?v=1662371147279"
            }
            width="50%"
          />
          <Description id='description3'>
            <ProjectTitle>Tudor BlackBay 58 redesign</ProjectTitle>
            <p
              style={{
                fontSize: "0.85em",
                width: "200px",
                borderTop: "1px solid rgba(255, 255, 255, 0.79)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.79)",
                margin: "20px 0px 10px 0px",
                padding: "20px 0px 20px 0px",
              }}
            >
              Personnal project
            </p>
            <p>Figma</p>
          </Description>
        </Project>

        <AppGrid>
          <a href="https://translator-react.glitch.me/" target="_blank">
            <App id="line1">
              <AppImg
                href="https://translator-react.glitch.me/"
                src={
                  "https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Group%2032Translotor.svg?v=1662373208389"
                }
              />
              <Bg></Bg>
              <AppName>Translator</AppName>
            </App>
          </a>

          <a href="https://react-calculator-and29.glitch.me/" target="_blank">
            <App id="line1">
              <AppImg
                src={
                  "https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Group%2033Calculator.svg?v=1662459179532"
                }
              />
              <Bg></Bg>
              <AppName>Calculator</AppName>
            </App>
          </a>

          <a href="https://js-grocery-list.glitch.me/" target="_blank">
            <App id="line1">
              <AppImg
                src={
                  "https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Group%2034To%20do%20list.svg?v=1662459181187"
                }
              />
              <Bg></Bg>
              <AppName>To Do</AppName>
            </App>
          </a>

          <a href="https://drum-machine-and29.glitch.me/" target="_blank">
            <App id="line2">
              <AppImg
                src={
                  "https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Group%2035Drum%20machine.svg?v=1662459182865"
                }
              />
              <Bg></Bg>
              <AppName>Drum Machine</AppName>
            </App>
          </a>

          <a href="https://js-clock-and29.glitch.me/" target="_blank">
            <App id="line2">
              <AppImg
                src={
                  "https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Group%2041Clock.svg?v=1662459438222"
                }
              />
              <Bg></Bg>
              <AppName>Clock</AppName>
            </App>
          </a>

          <a href="https://wiki-viewer-and29.glitch.me/" target="_blank">
            <App id="line2">
              <AppImg
                src={
                  "https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Group%2037Wiki%20viewer.svg?v=1662459187558"
                }
              />
              <Bg></Bg>
              <AppName>Wiki Viewer</AppName>
            </App>
          </a>

          <a href="https://random-futurama-quotes.glitch.me/" target="_blank">
            <App id="line3">
              <AppImg
                src={
                  "https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Group%2038Radom%20quote.svg?v=1662459189656"
                }
              />
              <Bg></Bg>
              <AppName>Random Quote Generator</AppName>
            </App>
          </a>

          <a href="https://weather-app-and29.glitch.me/" target="_blank">
            <App id="line3">
              <AppImg
                src={
                  "https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Group%2039Weather%20app.svg?v=1662459191651"
                }
              />
              <Bg></Bg>
              <AppName>Weather</AppName>
            </App>
          </a>

          <a href="https://countdown-session-timer.glitch.me/" target="_blank">
            <App id="line3">
              <AppImg
                src={
                  "https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Group%2040Timer.svg?v=1662461125896"
                }
              />
              <Bg></Bg>
              <AppName>Interval Timer</AppName>
            </App>
          </a>
        </AppGrid>
      </WorkSection>
    </>
  );
}
