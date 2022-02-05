import React, { Fragment } from "react";
import GlobalStyles from "./theme/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Home from "./components/views/home/Home";
import About from "./components/views/about/About";
import Nav from "./components/elements/nav/Nav";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/nav" element={<Nav />} />
      </Routes>
    </Fragment>
  );
}

export default App;
