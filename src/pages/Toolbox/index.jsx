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

const TopRow = styled.div`
margin-top: 100px;
display: flex;
align-items: center;
justify-content: space-between;
`;

const BottomRow = styled.div`
margin-top: 30px;
display: flex;
align-items: center;
justify-content: space-between;
`;


const HtmlCssJs = styled.img`
width: 20%;
`;

const ReactImg = styled.img`
width: 25%;
`;

const Jquery = styled.img`
width: 28%;
`;

const Mongo = styled.img`
width: 30%;
`;

const Figma = styled.img`
width: 8%;
`;

const AI = styled.img`
width: 12%;
`;


export default function Toolbox() {
  return (
    <>
      <ToolboxSection>
        <TopRow>
          <HtmlCssJs src={"https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Group%2050html%20no%20text.svg?v=1662543210519"}/>
          <HtmlCssJs src={"https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Group%2051css%20no%20text.svg?v=1662543211648"}/>
          <HtmlCssJs src={"https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/js.svg?v=1662541864104"}/>
          <ReactImg src={"https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Group%2052react%20no%20bg.svg?v=1662543368819"}/>
        </TopRow>
        <BottomRow>
          <Jquery src={"https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/jquery.svg?v=1662541861993"}/>
          <Mongo src={"https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/mongo%20(1).svg?v=1662541866003"}/>
          <Figma src={"https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/figma.svg?v=1662541854665"}/>
          <AI src={"https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/illustrator.svg?v=1662541859278"}/>
        </BottomRow>
      </ToolboxSection>
    </>
  );
}
