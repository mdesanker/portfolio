import React, { Fragment } from "react";
import GlobalStyles from "./theme/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Home from "./components/views/home/Home";
import Nav from "./components/elements/nav/Nav";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Nav />
      <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
    </Fragment>
  );
}

export default App;
