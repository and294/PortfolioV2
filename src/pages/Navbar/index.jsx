import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const Nav = styled.nav`
display: flex;
justify-content: flex-end;
padding: 40px;
position: absolute;
top: 0;
right: 0;
`;

const NavLink = styled(Link)`

`;

export default function Navbar() {
  return (
    <Nav>
      <a style={{fontSize: '32px'}}>About</a>
      <a style={{fontSize: '32px'}}>Work</a>
      <a style={{fontSize: '32px'}}>Contact</a>
    </Nav>
  );
}
