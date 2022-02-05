import React, { Fragment } from "react";
import GlobalStyles from "./theme/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Home from "./components/views/home/Home";
import About from "./components/views/about/About";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Fragment>
  );
}

export default App;
