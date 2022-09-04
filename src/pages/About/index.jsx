import React from "react";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

export default function WelcomeBand() {
  return (
    <>
      <section>
        <left>
          <h1><span style={{color: ""}}>&#x2022;</span>&nbsp;About Me</h1>
          <p>
            I am a self thaught front-end developer from Paris. With diplomas in
            international sales and marketing, I've spent the last few years in
            pharmaceutical sales. A global pandemic and a lockdown later, I've
            came to realise that a career change was needed in my life. Falling
            in love with web development, I've dived head first in that new
            adventure. The rigour of my past experiences, my artistic eye, my
            attention to detail and my ability to adapt/learn quickly will allow
            me to be able to help you with every aspects of your projects.
          </p>
        </left>
        <right></right>
      </section>
    </>
  );
}
