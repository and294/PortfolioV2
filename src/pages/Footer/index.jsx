import React from "react";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

const FooterSection = styled.section`
  background: #181818;
  color: white;
  width: 100vw;
  display: flex;
  padding: 70px;
  padding-top: 125px;
  
`;

const Left = styled.div`

`;

const Right = styled.div`

`;



export default function Footer() {
  return (
    <>
      <FooterSection>
        <Left>
          
        </Left>
        <Right>
          
        </Right>
      </FooterSection>
    </>
  );
}