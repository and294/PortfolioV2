import React from "react";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

export const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "428px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const device = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

const ContactSection = styled.section`
  background: #1c1c1c;
  color: white;
  width: 100vw;
  display: flex;
  padding: 70px;
  padding-top: 125px;
  font-family: "GT america";
  @media ${device.mobileS} {
    flex-direction: column;
    align-items: center;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  
  }
  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  } ;
`;

const Left = styled.div`
  @media ${device.mobileS} {
  margin-bottom: 50px; 
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  
  }
  @media ${device.laptop} {
    margin-bottom: 0;
  } ;
`;

const Title = styled.h1`
  font-size: 3.5em;
  margin-bottom: 100px;
`;

const Mail = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Phone = styled.p`
  display: flex;
  align-items: center;
`;

const MailImg = styled.img`
  max-width: 5%;
  margin-right: 20px;
  
`;

const PhoneImg = styled.img`
  max-width: 5%;
  margin-right: 20px;
  
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.mobileS} {
    align-items: center;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  } ;
`;

const Name = styled.input`
  font-size: 1.5em;
  color: white;
  background-color: #1c1c1c;
  margin-bottom: 50px;
  border: none;
  border-bottom: solid 2px white;
  &:focus {
    outline: none;
  }
  @media ${device.mobileS} {
    width: 100%;
  }
  @media ${device.mobileM} {
    
  }
  @media ${device.tablet} {
    
  }
  @media ${device.laptop} {
    width: 500px;
  } ;
`;

const MailInput = styled.input`
  width: 1000px;
  font-size: 1.5em;
  color: white;
  background-color: #1c1c1c;
  margin-bottom: 50px;
  border: none;
  border-bottom: solid 2px white;
  &:focus {
    outline: none;
  }
  @media ${device.mobileS} {
    width: 100%;
  }
  @media ${device.mobileM} {
    
  }
  @media ${device.tablet} {
    
  }
  @media ${device.laptop} {
    width: 500px;
  } ;
`;

const Message = styled.textarea`
  width: 1000px;
  font-size: 1.5em;
  tex-align: top;
  color: white;
  background-color: #1c1c1c;
  border: none;
  border-bottom: solid 2px white;
  &:focus {
    outline: none;
  }
  @media ${device.mobileS} {
    width: 100%;
    height: 150px;
  }
  @media ${device.mobileM} {
    
  }
  @media ${device.tablet} {
    
  }
  @media ${device.laptop} {
    width: 500px;
    height: 300px;
  } ;
`;

const Submit = styled.button`
  width: 200px;
  height: 50px;
  color: white;
  font-family: GT america;
  background-color: #4c6096;
  border: none;
  border-radius: 25px;
  margin: 50px;
  align-self: flex-end;
  box-shadow: inset 0px 0px 0px hsl(224deg 35% 18% / 0.85),
    inset 0px 0px 0px -1.3px hsl(224deg 35% 18% / 0.7),
    inset 0px -0.1px 0.1px -2.6px hsl(224deg 35% 18% / 0.55),
    inset 0.2px 9.4px 8.6px -3.9px hsl(224deg 35% 18% / 0.39);
  cursor: pointer;
  transition: .25s;
  &:active {
    scale: 0.98;
    background-color: #445687;
  }
`;

export default function Contact() {
  return (
    <>
      <ContactSection id="contact">
        <Left>
          <Title>Contact</Title>
          <Mail>
            <MailImg
              src={
                "https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/kindpng_2535701.png?v=1662908392215"
              }
            />
            and29ferraro@gmail.com
          </Mail>
          <Phone>
            <PhoneImg
              src={
                "https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/toppng.com-phone-white-transparent-icon-426x425.png?v=1662908395777"
              }
            />
            +33 6 87 80 22 06
          </Phone>
        </Left>
        <Right>
          <Name type="text" placeholder="Full Name"></Name>
          <MailInput type="text" placeholder="Email"></MailInput>
          <Message type="text" placeholder="Message"></Message>
          <Submit>Submit</Submit>
        </Right>
      </ContactSection>
    </>
  );
}
