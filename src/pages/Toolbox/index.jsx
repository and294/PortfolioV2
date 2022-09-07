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
  padding: 70px;
  padding-top: 125px;
`;

const TopRow = styled.div``;

const BottomRow = styled.div``;

const Tool

export default function Toolbox() {
  return (
    <>
      <ToolboxSection>
        <TopRow>
          
          <Tool></Tool>
          <Tool></Tool>
          <Tool></Tool>
          <Tool></Tool>
        </TopRow>
        <BottomRow>
        ool>
          <Tool></Tool>
          <Tool></Tool>
          <Tool></Tool>
        </BottomRow>
      </ToolboxSection>
    </>
  );
}
