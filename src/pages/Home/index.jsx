import React from "react";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import Navbar from "/src/pages/Navbar";

gsap.registerPlugin(ScrollTrigger);

const Landing = styled.section`
  background: url("https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Topo%20landing%20background%201Landing%20background.png?v=1662027272290");
  height: 100vh;
  width: 100vw;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Circle = styled.span`
  position: absolute;
  width: 500px;
  height: 500px;
  border: solid #4c6096 10px;
  border-radius: 100%;
  z-index: 0;
  -webkit-box-shadow: 0px 0px 21px 10px #4c6096;
  box-shadow: 0px 0px 21px 10px #4c6096;
`;

const Resume = styled.button`
  width: 100px;
  height: 50px;
  color: white;
  font-family: GT america;
  background-color: #4c6096;
  border: none;
  border-radius: 25px;
  margin: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Scroll = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 50px;
  padding: 10px;
  height: 80px;
  border-left: solid #4c6096;
  display: flex;
  align-items: center;
`;

const WelcomeStrip = styled.section`
  background: #4c6096;
  color: #eee;
  font-family: "SaintMonica";
  font-size: 2.5em;
  padding: 32px 0;

  position: relative;
  overflow: hidden;
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

export default function Home() {
  const welcomeText = useRef();
  const welcomeInner = useRef();

  useEffect(() => {
    gsap.to(welcomeInner.current, {
      x: -500,
      duration: 1,
      scrollTrigger: {
        trigger: welcomeInner.current,
        markers: true,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  return (
    <>
      <Landing>
        <Navbar />
        <Name>
          <h1
            className="title"
            style={{
              fontSize: "126px",
              fontFamily: "SaintMonica",
              zIndex: "10",
            }}
          >
            ANDREA FERRARO
          </h1>
          <h2
            style={{ fontSize: "34px", fontFamily: "GT america", zIndex: "10" }}
          >
            Frontend Developer
          </h2>
          <span
            style={{
              width: "180px",
              height: "2px",
              backgroundColor: "rgb(76, 96, 150)",
              margin: "10px",
            }}
          ></span>
          <p style={{ fontSize: "14px", zIndex: "10" }}>Paris, France</p>
          <Circle></Circle>
        </Name>
        <Resume>Resume</Resume>
        <Scroll>Scroll</Scroll>
      </Landing>
      <WelcomeStrip>
        <WelcomeInner ref={welcomeInner}>
          <div ref={welcomeText} style={{opacity: "0.5"}}>&#x2022;&nbsp;WELCOME</div>
          <div ref={welcomeText} style={{opacity: "0.5"}}>&nbsp;&#x2022;&nbsp;WELCOME</div>
          <div ref={welcomeText} style={{opacity: "0.5"}}>&nbsp;&#x2022;&nbsp;WELCOME</div>
          <div ref={welcomeText} style={{opacity: "0.5"}}>&nbsp;&#x2022;&nbsp;WELCOME</div>
          <div ref={welcomeText} style={{opacity: "0.5"}}>&nbsp;&#x2022;&nbsp;WELCOME</div>
          <div ref={welcomeText} style={{opacity: "0.5"}}>&nbsp;&#x2022;&nbsp;WELCOME</div>
          <div ref={welcomeText} style={{opacity: "0.5"}}>&nbsp;&#x2022;&nbsp;WELCOME</div>
          <div ref={welcomeText} style={{opacity: "0.5"}}>&nbsp;&#x2022;&nbsp;WELCOME</div>
          <div ref={welcomeText} style={{opacity: "0.5"}}>&nbsp;&#x2022;&nbsp;WELCOME</div>
        </WelcomeInner>
      </WelcomeStrip>
      <div style={{height: "100000px"}}></div>
    </>
  );
}
