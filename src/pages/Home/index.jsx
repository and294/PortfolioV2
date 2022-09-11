import React from "react";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";
import styled from "styled-components";
import "/src/styles/styles.css";
import Navbar from "/src/pages/Navbar";

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

gsap.registerPlugin(ScrollTrigger);

const Landing = styled.section`
  background: url("https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Topo%20landing%20background%201Landing%20background.jpg?v=1662889799038");
  height: 100vh;
  width: 100vw;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const NameSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media ${device.mobileS} {
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  } ;
`;

const Name = styled.h1`
  font-size: 126px;
  font-family: "SaintMonica";
  z-index: 10;
  text-align: center;
  @media ${device.mobileS} {
    font-size: 36px;
  }
  @media ${device.mobileM} {
    font-size: 40px;
  }
  @media ${device.tablet} {
    font-size: 90px;
  }
  @media ${device.laptop} {
    font-size: 126px;
  } ;
`;

const Frontend = styled.h2`
  font-family: "GT america";
  z-index: 10;
  @media ${device.mobileS} {
    font-size: 14px;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
  @media ${device.laptop} {
    font-size: 34px;
  } ;
`;

const Line = styled.span`
  height: 2px;
  background-color: rgb(76, 96, 150);
  margin: 10px;
  @media ${device.mobileS} {
    width: 130px;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
    width: 150px;
  }
  @media ${device.laptop} {
    width: 180px;
  } ;
`;

const Paris = styled.p`
  z-index: 10;
  font-family: Plantin;
  @media ${device.mobileS} {
    font-size: 10px;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
    font-size: 12px;
  }
  @media ${device.laptop} {
    font-size: 14px;
  } ;
`;

const Circle = styled.span`
  position: absolute;
  width: 500px;
  height: 500px;
  border: solid #4c6096 10px;
  border-radius: 100%;
  z-index: 0;
  -webkit-box-shadow: 0px 0px 21px 10px #4c6096;
  box-shadow: 0px 0px 21px 10px #4c6096;
  @media ${device.mobileS} {
    width: 300px;
    height: 300px;
    border: solid #4c6096 5px;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
    width: 400px;
    height: 400px;
    border: solid #4c6096 7px;
  }
  @media ${device.laptop} {
    width: 500px;
    height: 500px;
    border: solid #4c6096 10px;
  } ;
`;

const Resume = styled.button`
  color: white;
  font-family: GT america;
  background-color: #4c6096;
  border: none;
  position: absolute;
  bottom: 0;
  left: 0;
  box-shadow: inset 0px 0px 0px hsl(224deg 35% 18% / 0.85),
    inset 0px 0px 0px -1.3px hsl(224deg 35% 18% / 0.7),
    inset 0px -0.1px 0.1px -2.6px hsl(224deg 35% 18% / 0.55),
    inset 0.2px 9.4px 8.6px -3.9px hsl(224deg 35% 18% / 0.39);
  @media ${device.mobileS} {
    font-size: 0.75em;
    margin: 20px;
    width: 75px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    font-size: 1em;
    margin: 50px;
    width: 100px;
    height: 50px;
    border-radius: 25px;
  } ;
`;

const Scroll = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;

  font-family: GT america;
  border-left: solid #4c6096;
  display: flex;
  align-items: center;
  @media ${device.mobileS} {
    font-size: 0.75em;
    margin: 20px;
    padding: 10px;
    height: 50px;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    font-size: 1em;
    margin: 50px;
    padding: 10px;
    height: 80px;
  } ;
`;

export default function Home() {
  
      const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Andrea%20Ferraro%20D%C3%A9veloppeur%20Frontend%20(2).pdf?v=1662819466820').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'https://cdn.glitch.global/7812f7dc-b12e-4d13-ad62-9680c2811117/Andrea%20Ferraro%20D%C3%A9veloppeur%20Frontend%20(2).pdf?v=1662819466820';
                alink.click();
            })
        })
    }
  
  return (
    <>
      <Landing>
        <Navbar />
        <NameSection>
          <Name>ANDREA FERRARO</Name>
          <Frontend>Frontend Developer</Frontend>
          <Line></Line>
          <Paris><i>Paris, France</i></Paris>
          <Tilt id="circle"></Tilt>
        </NameSection>
        <Resume onClick={onButtonClick}>Resume</Resume>
        <Scroll>Scroll</Scroll>
      </Landing>
    </>
  );
}
