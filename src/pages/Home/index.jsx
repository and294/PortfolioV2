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

const NameSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  
  @media ${device.mobileS} {
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  } ;
`;

const Name = styled.h1`
font-size: 126px;
  font-family: "SaintMonica";
  z-index: 10;
`;

const Frontend = styled.h2`
font-size: 34px;
font-family: "GT america";
z-index: 10;
`;

const Line = styled.span`
width: "180px",
              height: "2px",
              backgroundColor: "rgb(76, 96, 150)",
              margin: "10px",
`;

const Paris = styled.p`

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
  font-family: GT america;
  border-left: solid #4c6096;
  display: flex;
  align-items: center;
`;

export default function Home() {
  return (
    <>
      <Landing>
        <Navbar />
        <NameSection>
          <Name
            className="title"
          >
            ANDREA FERRARO
          </Name>
          <Frontend
            style={{ fontSize: "34px", fontFamily: "GT america", zIndex: "10" }}
          >
            Frontend Developer
          </Frontend>
          <span
            style={{
              width: "180px",
              height: "2px",
              backgroundColor: "rgb(76, 96, 150)",
              margin: "10px",
            }}
          ></span>
          <p
            style={{ fontSize: "14px", zIndex: "10", fontFamily: "GT america" }}
          >
            Paris, France
          </p>
          <Circle></Circle>
        </NameSection>
        <Resume>Resume</Resume>
        <Scroll>Scroll</Scroll>
      </Landing>
    </>
  );
}
