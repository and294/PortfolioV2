import React from "react";


import Home from "./pages/Home";
import WelcomeBand from "/src/pages/WelcomeBand";
import About from "/src/pages/About";
import Work from "/src/pages/Work";

import "./styles/styles.css";

export default function App() {
  return (
    <>
     <Home />
      <WelcomeBand />
      <About />
      <Work />
    </>
  );
}
