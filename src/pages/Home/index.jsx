import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import styled from "styled-components";
import Navbar from "/src/pages/Navbar";

const Landing = styled.section`
background: url('https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Topo%20landing%20background%201Landing%20background.png?v=1662027272290');
height: 100vh;
width: 100vw;
color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
`;

const Name = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

export default function Home() {
 

  return (
    <>
      <Landing>
       <Navbar />  
        <Name>
       <h1 className="title" style={{fontSize: '126px', fontFamily: "SaintMonica"}}>ANDREA FERRARO</h1>
      <h2 style={{fontSize: '34px', fontFamily: "GT america"}}>Frontend Developer</h2>
          <span style={{width}}></span>
      <p style={{fontSize: '14px'}}>
        Paris, France
      </p> 
        </Name>
      </Landing>
      
    </>
  );
}