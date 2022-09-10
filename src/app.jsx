import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import WelcomeBand from "/src/pages/WelcomeBand";
import About from "/src/pages/About";
import Work from "/src/pages/Work";
import ToolBand from "/src/pages/ToolBand";
import Toolbox from "/src/pages/Toolbox";
import Contact from "/src/pages/Contact";
import Footer from "/src/pages/Footer";

import "./styles/styles.css";

export default function App() {
  return (
    <>
      <Home />
      <WelcomeBand />
      <About />
      <Work />
      <ToolBand />
      <Toolbox />
      <Contact />
      <Footer />
    </>
  );
}
