import React from "react";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

const ContactSection = styled.section`
  background: #181818;
  color: white;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 70px;
  padding-top: 125px;
  font-family: "GT america";
`;

const Left = styled.div`

`;

const Title = styled.h1`
font-size: 3.5em;
margin-bottom: 100px;
`;

const Mail = styled.p`
display: flex;
align-items: center;
`;

const Phone = styled.p`
display: flex;
align-items: center;
`;

const MailImg = styled.img`
width: 25%;
margin-right: 20px;
`;

const PhoneImg = styled.img`
width: 23%;
margin-right: 15px;
`;

const Right = styled.div`
display: flex;
flex-direction: column;
`;

const Name = styled.input`
width: 1000px;
font-size: 1.5em;
color: white;
background-color: #181818;
border: none;
border-bottom: solid 2px white;
`;

const MailInput = styled.input`
width: 1000px;
font-size: 1.5em;
color: white;
background-color: #181818;
border: none;
border-bottom: solid 2px white;
`;

const Message = styled.input`
width: 1000px;
font-size: 1.5em;
height: 300px;
color: white;
background-color: #181818;
border: none;
border-bottom: solid 2px white;
`;


export default function Contact() {
  return (
    <>
      <ContactSection>
        <Left>
          <Title>Contact Me</Title>
          <Mail><MailImg src={"https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/mail.svg?v=1662546414864"}/>and29ferraro@gmail.com</Mail>
          <Phone><PhoneImg src={"https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/phone%20bg.svg?v=1662546558035"}/>+33 6 87 80 22 06</Phone>
        </Left>
        <Right>
         <Name type="text" placeholder="Full Name"></Name>
          <MailInput type="text" placeholder="Email"></MailInput>
          <Message type="text" placeholder="Message"></Message>
        </Right>
      </ContactSection>
    </>
  );
}
