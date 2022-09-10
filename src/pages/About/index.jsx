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

const AboutSection = styled.section`
  background: #1C1C1C;
  color: white;
  width: 100vw;
  display: flex;

  @media ${device.mobileS} {
    flex-direction: column;
    padding-top: 100px;
    padding-right: 70px;
    padding-left: 10px;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
    flex-direction: row;
  }
  @media ${device.laptop} {
    padding-top: 125px;
    padding: 70px;
  } ;
`;

const Left = styled.div`
  font-family: Plantin;

  @media ${device.mobileS} {
  font-size: 28px;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    width: 50%;
    margin-right: 250px;
    font-size: 32px;
  } ;
`;

const AboutMe = styled.h1`
font-size: 18px;
  font-family: "GT america";
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  
`;

const Right = styled.div`
  font-family: "GT america";
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media ${device.mobileS} {
    grid-column-gap: 5px;
    grid-row-gap: 10px;
    margin-right: 0;
    margin-left: auto;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  } ;
`;

const CircleOne = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  background-color: #4c6096;
  border-radius: 100%;
  -webkit-box-shadow: 0px 0px 21px 10px #4c6096;
  box-shadow: 0px 0px 21px 7px #4c6096;
  @media ${device.mobileS} {
    height: 25px;
    width: 25px;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    height: 50px;
    width: 50px;
  } ;
`;
const CircleTwo = styled.div`
  grid-area: 2 / 1 / 4 / 2;
  background-color: #4c6096;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 0px 21px 7px #4c6096;
  box-shadow: 0px 0px 21px 7px #4c6096;
  @media ${device.mobileS} {
    height: 100px;
    width: 100px;
    font-size: 0.75em;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    height: 170px;
    width: 170px;
    font-size: 1em;
  } ;
`;
const CircleThree = styled.div`
  grid-area: 3 / 2 / 5 / 3;
  background-color: #4c6096;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 0px 21px 7px #4c6096;
  box-shadow: 0px 0px 21px 7px #4c6096;
  @media ${device.mobileS} {
    height: 100px;
    width: 100px;
    font-size: 0.75em;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    height: 170px;
    width: 170px;
    font-size: 1em;
  } ;
`;
const CircleFour = styled.div`
  grid-area: 4 / 1 / 6 / 2;
  background-color: #4c6096;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 0px 21px 7px #4c6096;
  box-shadow: 0px 0px 21px 7px #4c6096;
  @media ${device.mobileS} {
    height: 100px;
    width: 100px;
    font-size: 0.75em;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    height: 170px;
    width: 170px;
    font-size: 1em;
  } ;
`;
const CircleFive = styled.div`
  grid-area: 5 / 2 / 7 / 3;
  background-color: #4c6096;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  margin-left: 25px;
  -webkit-box-shadow: 0px 0px 21px 7px #4c6096;
  box-shadow: 0px 0px 21px 7px #4c6096;
  @media ${device.mobileS} {
    height: 25px;
    width: 25px;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    height: 50px;
    width: 50px;
  } ;
`;

export default function WelcomeBand() {
  return (
    <>
      <AboutSection>
        <Left>
          <AboutMe>
            <span style={{ color: "#4c6096", fontSize: "35px" }}>&#x2022;</span>
            &nbsp;ABOUT ME
          </AboutMe>
          <p style={{ lineHeight: "1.1" }}>
            Hi, I'm a{" "}
            <span style={{ color: "#4c6096" }}>
              self thaught front-end developer
            </span>{" "}
            from Paris. <br />
            <br />
            With diplomas in international sales and marketing, I've spent the
            last few years in pharmaceutical sales. A global pandemic and a
            lockdown later, I've came to realise that a career change was needed
            in my life. <br />
            <br />
            Falling in love with web development, I've dived head first in that
            new adventure. The rigour of my past experiences, my artistic eye,
            my attention to detail and my ability to adapt/learn quickly will
            allow me to be able to help you with every aspects of your projects.
          </p>
        </Left>
        <Right>
          <CircleOne></CircleOne>
          <CircleTwo style={{ textAlign: "center" }}>
            Web
            <br /> integration
          </CircleTwo>
          <CircleThree style={{ textAlign: "center" }}>
            Frontend development
          </CircleThree>
          <CircleFour>
            UX/UI
            <br /> design
          </CircleFour>
          <CircleFive></CircleFive>
        </Right>
      </AboutSection>
    </>
  );
}
