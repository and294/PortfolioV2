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

const ToolStrip = styled.section`
  background: #181818;
  color: #eee;
  font-family: "SaintMonica";
  font-size: 2.5em;
  padding: 32px 0;
  position: relative;
  width: 100vw;
  overflow: hidden;
  @media ${device.mobileS} {
  font-size: 1.5em;
  padding: 20px 0;
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

const ToolInner = styled.div`
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

export default function ToolBand() {
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
    <ToolStrip>
      <ToolInner ref={welcomeInner}>
        <div ref={welcomeText} style={{ opacity: "0.5" }}>
          &#x2022;&nbsp;TOOlBOX
        </div>
        <div ref={welcomeText} style={{ opacity: "0.5" }}>
          &nbsp;&#x2022;&nbsp;TOOlBOX
        </div>
        <div ref={welcomeText} style={{ opacity: "0.5" }}>
          &nbsp;&#x2022;&nbsp;TOOlBOX
        </div>
        <div ref={welcomeText} style={{ opacity: "0.5" }}>
          &nbsp;&#x2022;&nbsp;TOOlBOX
        </div>
        <div ref={welcomeText} style={{ opacity: "0.5" }}>
          &nbsp;&#x2022;&nbsp;TOOlBOX
        </div>
        <div ref={welcomeText} style={{ opacity: "0.5" }}>
          &nbsp;&#x2022;&nbsp;TOOlBOX
        </div>
        <div ref={welcomeText} style={{ opacity: "0.5" }}>
          &nbsp;&#x2022;&nbsp;TOOlBOX
        </div>
        <div ref={welcomeText} style={{ opacity: "0.5" }}>
          &nbsp;&#x2022;&nbsp;TOOlBOX
        </div>
        <div ref={welcomeText} style={{ opacity: "0.5" }}>
          &nbsp;&#x2022;&nbsp;TOOlBOX
        </div>
        <div ref={welcomeText} style={{ opacity: "0.5" }}>
          &nbsp;&#x2022;&nbsp;TOOlBOX
        </div>
        <div ref={welcomeText} style={{ opacity: "0.5" }}>
          &nbsp;&#x2022;&nbsp;TOOlBOX
        </div>
        <div ref={welcomeText} style={{ opacity: "0.5" }}>
          &nbsp;&#x2022;&nbsp;TOOlBOX
        </div>
        <div ref={welcomeText} style={{ opacity: "0.5" }}>
          &nbsp;&#x2022;&nbsp;TOOlBOX
        </div>
      </ToolInner>
    </ToolStrip>
  );
}
