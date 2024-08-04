import React, { useState } from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Projects from "./Projects";
import MySkills from "./MySkills";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Projects />
      <MySkills />
      <Footer />
    </>
  );
}

export default App;
