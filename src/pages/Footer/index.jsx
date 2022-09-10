import React from "react";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

const FooterSection = styled.section`
  background: #1c1c1c;
  color: white;
  width: 100vw;
  display: flex;
  padding: 30px;
  padding-top: 70px;
  display: flex;
  justify-content: flex-end;
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
          <p>&copy; 2022. Andrea Ferraro</p>
        </Right>
      </FooterSection>
    </>
  );
}