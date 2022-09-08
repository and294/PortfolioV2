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
  font-size: 34px;
  font-family: "GT america";
  z-index: 10;
`;

const Line = styled.span`
  width: 180px;
  height: 2px;
  background-color: rgb(76, 96, 150);
  margin: 10px;
`;

const Paris = styled.p`
  font-size: 14px;
  z-index: 10;
  font-family: "GT america";
`;

const Circle = styled.span`
  width: 500px;
  height: 500px;
  border: solid #4c6096 10px;
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
  font-size: 1em;
  margin: 50px;
  width: 100px;
  height: 50px;
  border-radius: 25px;
  color: white;
  font-family: GT america;
  background-color: #4c6096;
  border: none;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Scroll = styled.p`
  font-size: 1em;
  margin: 50px;
  padding: 10px;
  height: 80px;
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
