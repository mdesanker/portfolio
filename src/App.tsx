import React, { Fragment } from "react";
import GlobalStyles from "./theme/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Home from "./components/views/home/Home";
import About from "./components/views/about/About";
import Contact from "./components/views/contact/Contact";
import Projects from "./components/views/projects/Projects";
import ScrollToTop from "./components/elements/ScrollToTop";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ScrollToTop>
    </Fragment>
  );
}

export default App;
