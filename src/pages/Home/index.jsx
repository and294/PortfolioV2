import React from "react";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import Navbar from "/src/pages/Navbar";
import sizes from "/src/styles/Devices";

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

const NameSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

 
`;

const Name = styled.h1`
  font-size: 126px;
  font-family: "SaintMonica";
  z-index: 10;
  text-align: center;
  
`;

const Frontend = styled.h2`
  font-family: "GT america";
  z-index: 10;
  
`;

const Line = styled.span`
  height: 2px;
  background-color: rgb(76, 96, 150);
  margin: 10px;
  
`;

const Paris = styled.p`
  z-index: 10;
  font-family: "GT america";
  
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
  color: white;
  font-family: GT america;
  background-color: #4c6096;
  border: none;
  position: absolute;
  bottom: 0;
  left: 0;
  
`;

const Scroll = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;

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
          <Name className="title">ANDREA FERRARO</Name>
          <Frontend>Frontend Developer</Frontend>
          <Line></Line>
          <Paris>Paris, France</Paris>
          <Circle></Circle>
        </NameSection>
        <Resume>Resume</Resume>
        <Scroll>Scroll</Scroll>
      </Landing>
    </>
  );
}
