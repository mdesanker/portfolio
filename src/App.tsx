import React, { Fragment } from "react";
import GlobalStyles from "./theme/GlobalStyles";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <h1>Hello, world!</h1>
      <Routes>
        <Route path="/" element={<div />} />
      </Routes>
    </Fragment>
  );
}

export default App;
