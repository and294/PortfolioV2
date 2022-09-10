import React from "react";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

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


const WelcomeStrip = styled.section`
  background: #4c6096;
  color: #eee;
  font-family: "SaintMonica"; 
  position: relative;
  width: 100vw;
  overflow: hidden;
  @media ${device.mobileS} {
  font-size: 1.5em;
  padding: 20px 0;
  box-shadow: inset 0px 0.5px 0.5px hsl(224deg 35% 18% / 0.85),
    inset -0.1px 1.3px 1.2px hsl(224deg 35% 18% / 0.7),
    inset -0.2px 4.4px 4px -2.6px hsl(224deg 35% 18% / 0.55),
    inset -0.6px 12.1px 11.1px -3.9px hsl(224deg 35% 18% / 0.39),
    inset 0px -0.5px 0.5px hsl(224deg 35% 18% / 0.85),
    inset 0px -1.3px 1.2px -1.3px hsl(224deg 35% 18% / 0.7),
    inset 0px -4.3px 3.9px -2.6px hsl(224deg 35% 18% / 0.55),
    inset 0.1px -11.9px 10.9px -3.9px hsl(224deg 35% 18% / 0.39);
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  font-size: 2.5em;
  padding: 32px 0;
  } ;
`;

const WelcomeInner = styled.div`
  -webkit-font-smoothing: antialiased;
  width: fit-content;
  display: flex;
  flex: auto;
  flex-direction: row;
  
`;

const Welcome = styled.div`
  display: flex;
  flex: auto;
  flex-direction: row;
  opacity: 0.5;
`;

export default function WelcomeBand() {
  const welcomeText = useRef();
  const welcomeInner = useRef();

  useEffect(() => {
    gsap.to(welcomeInner.current, {
      x: -500,
      duration: 1,
      scrollTrigger: {
        trigger: welcomeInner.current,
        markers: false,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <WelcomeStrip>
      <WelcomeInner ref={welcomeInner}>
        <div ref={welcomeText} style={{ opacity: "0.5" }}>
          &#x2022;&nbsp;WELCOME
        </div>
        <div ref={welcomeText} style={{ opacity: "0.5" }}>
          &nbsp;&#x2022;&nbsp;WELCOME
        </div>
        <div ref={welcomeText} style={{ opacity: "0.5" }}>
          &nbsp;&#x2022;&nbsp;WELCOME
        </div>
        <div ref={welcomeText} style={{ opacity: "0.5" }}>
          &nbsp;&#x2022;&nbsp;WELCOME
        </div>
        <div ref={welcomeText} style={{ opacity: "0.5" }}>
          &nbsp;&#x2022;&nbsp;WELCOME
        </div>
        <div ref={welcomeText} style={{ opacity: "0.5" }}>
          &nbsp;&#x2022;&nbsp;WELCOME
        </div>
        <div ref={welcomeText} style={{ opacity: "0.5" }}>
          &nbsp;&#x2022;&nbsp;WELCOME
        </div>
        <div ref={welcomeText} style={{ opacity: "0.5" }}>
          &nbsp;&#x2022;&nbsp;WELCOME
        </div>
        <div ref={welcomeText} style={{ opacity: "0.5" }}>
          &nbsp;&#x2022;&nbsp;WELCOME
        </div>
        <div ref={welcomeText} style={{ opacity: "0.5" }}>
          &nbsp;&#x2022;&nbsp;WELCOME
        </div>
        <div ref={welcomeText} style={{ opacity: "0.5" }}>
          &nbsp;&#x2022;&nbsp;WELCOME
        </div>
        <div ref={welcomeText} style={{ opacity: "0.5" }}>
          &nbsp;&#x2022;&nbsp;WELCOME
        </div>
        <div ref={welcomeText} style={{ opacity: "0.5" }}>
          &nbsp;&#x2022;&nbsp;WELCOME
        </div>
      </WelcomeInner>
    </WelcomeStrip>
  );
}
