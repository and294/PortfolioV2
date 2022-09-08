import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import sizes from "/src/styles/Devices";
import device from "/src/styles/Devices";


const Nav = styled.nav`
display: flex;
justify-content: flex-end;

position: absolute;
top: 0;
right: 0;
 @media ${device.mobileS} {
 padding: 20px;
  }
  @media ${device.laptop} {
  padding: 40px;
  } ;
`;

const NavLink = styled(Link)`

`;

export default function Navbar() {
  return (
    <Nav>
      <a style={{fontSize: '14px', fontFamily: "GT america", marginRight: "15px"}}>About</a>
      <a style={{fontSize: '14px', fontFamily: "GT america", marginRight: "15px"}}>Work</a>
      <a style={{fontSize: '14px', fontFamily: "GT america", marginRight: "15px"}}>Contact</a>
    </Nav>
  );
}
