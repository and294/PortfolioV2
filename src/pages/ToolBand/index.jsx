import React from "react";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

const ToolStrip = styled.section`
  background: #181818;
  color: #eee;
  font-family: "SaintMonica";
  font-size: 2.5em;
  padding: 32px 0;
  position: relative;
  width: 100vw;
  overflow: hidden;
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
