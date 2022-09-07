import React from "react";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import { keyframes } from "styled-components";

const ToolboxSection = styled.section`
  background: #181818;
  color: white;
  font-family: "GT america";
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopRow = styled.div``;

const BottomRow = styled.div``;

const Tool = styled.img`
width: 20%;
`;

export default function Toolbox() {
  return (
    <>
      <ToolboxSection>
        <TopRow>
          <Tool src={"https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/html.svg?v=1662541856745"}/>
          <Tool src={"https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/css.svg?v=1662541852437"}/>
          <Tool src={"https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/js.svg?v=1662541864104"}/>
          <Tool src={"https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/react.svg?v=1662541867672"}/>
        </TopRow>
        <BottomRow>
          <Tool src={"https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/jquery.svg?v=1662541861993"}/>
          <Tool src={"https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/mongo%20(1).svg?v=1662541866003"}/>
          <Tool src={"https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/figma.svg?v=1662541854665"}/>
          <Tool src={"https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/illustrator.svg?v=1662541859278"}/>
        </BottomRow>
      </ToolboxSection>
    </>
  );
}
