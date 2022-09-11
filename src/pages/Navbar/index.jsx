import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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
  
  let tl = new gsap.timeline();
  
   useEffect(() => {

    tl.from(['#aboutNav', line, city, resume, scroll], 2, {
      opacity: 0,
      y: '10',
      stagger: {
        amount: .1
      },
      ease: ease
    })
    
  })
  
  return (
    <Nav>
      <a href="#about" style={{fontSize: '14px', fontFamily: "GT america", marginRight: "15px", cursor: "pointer"}} id='aboutNav'>About</a>
      <a href="#work" style={{fontSize: '14px', fontFamily: "GT america", marginRight: "15px", cursor: "pointer"}} id='aboutNav'>Work</a>
      <a href="#contact" style={{fontSize: '14px', fontFamily: "GT america", marginRight: "15px", cursor: "pointer"}} id='aboutNav'>Contact</a>
    </Nav>
  );
}
