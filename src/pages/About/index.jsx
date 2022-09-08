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
  background: #181818;
  color: white;
  width: 100vw;
  display: flex;
  padding: 70px;
  
  @media ${device.mobileS} {
    flex-direction: column;
    padding-top: 100px
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
    flex-direction: row;
  }
  @media ${device.laptop} {
  padding-top: 125px;
  } ;
`;

const Left = styled.div`
  font-family: Plantin;

  @media ${device.mobileS} {
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    width: 50%;
    margin-right: 250px;
    font-size: 28px;
  } ;
`;

const Right = styled.div`
  font-family: "GT america";
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media ${device.mobileS} {
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  } ;
`;

const CircleOne = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  background-color: #4c6096;
  
  border-radius: 100%;
  -webkit-box-shadow: 0px 0px 21px 10px #4c6096;
  box-shadow: 0px 0px 21px 10px #4c6096;
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
  -webkit-box-shadow: 0px 0px 21px 10px #4c6096;
  box-shadow: 0px 0px 21px 10px #4c6096;
  @media ${device.mobileS} {
  height: 100px;
  width: 100px;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  height: 170px;
  width: 170px;
  } ;
`;
const CircleThree = styled.div`
  grid-area: 3 / 2 / 5 / 3;
  background-color: #4c6096;
  height: 170px;
  width: 170px;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 0px 21px 10px #4c6096;
  box-shadow: 0px 0px 21px 10px #4c6096;
  @media ${device.mobileS} {
  height: 100px;
  width: 100px;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  height: 170px;
  width: 150px;
  } ;
`;
const CircleFour = styled.div`
  grid-area: 4 / 1 / 6 / 2;
  background-color: #4c6096;
  height: 170px;
  width: 170px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 0px 21px 10px #4c6096;
  box-shadow: 0px 0px 21px 10px #4c6096;
  @media ${device.mobileS} {
  height: 100px;
  width: 100px;
  }
  @media ${device.mobileM} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  height: 150px;
  width: 150px;
  } ;
`;
const CircleFive = styled.div`
  grid-area: 5 / 2 / 7 / 3;
  background-color: #4c6096;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  margin-left: 25px;
  -webkit-box-shadow: 0px 0px 21px 10px #4c6096;
  box-shadow: 0px 0px 21px 10px #4c6096;
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
          <h1
            style={{
              fontSize: "18px",
              fontFamily: "GT america",
              marginBottom: "25px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ color: "#4c6096", fontSize: "35px" }}>&#x2022;</span>
            &nbsp;ABOUT ME
          </h1>
          <p style={{ lineHeight: "1.1" }}>
            I am a{" "}
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
