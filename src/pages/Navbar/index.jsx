import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const Nav = styled.nav`
display: flex;
justify-content: flex-end;
padding: 40px;
`;

const NavLink = styled(Link)`

`;

export default function Navbar() {
  return (
    <Nav>
      <a>About</a>
      <a>Work</a>
      <a>Contact</a>
    </Nav>
  );
}
