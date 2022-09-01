import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import styled from "styled-components";

const Landing = styled.section`
background: url('https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Topo%20landing%20background%201Landing%20background.png?v=1662027272290');

`;

export default function Home() {
 

  return (
    <>
      <Landing>
      <h1 className="title">Andrea Ferraro</h1>
      <h2>Frontend Developer</h2>
      <p>
        Paris, France
      </p>
      </Landing>
      
    </>
  );
}